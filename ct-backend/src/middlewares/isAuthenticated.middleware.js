import axios from 'axios';
import CustomError from "../utils/custom-error";
import { DATABASE_CONFIG } from "../config/index";
import ZuriDatabase from "../zuricore/db"
import ZuriOrganization from "../zuricore/organization"


const Organization = new ZuriOrganization();
const Voter = new ZuriDatabase("ct_voters");
const getUserUrl = `${DATABASE_CONFIG.BASE_URL}/auth/verify-token`;

const isAuthenticated = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new CustomError(`No Authorization or session expired.`, 401);

    const [_, token] = authorization.split(' ');
    if (!token) throw new CustomError(`No Authorization or session expired.`, 401);

    const response = await axios.get(`${getUserUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let member_id = response.data.data.user.id;
    const { org_id } = req.query;

    let member = await Organization.getMember(org_id, member_id, token);
    const savedVoters = await Voter.fetchAll(org_id);

    member.ct_admin = member.role === "owner" || member.role === "admin";
    member.ct_voter = savedVoters.find(voter=> voter.user_name == member.user_name) || false;
    
console.log({member});
    req.user = member;

    return next();

  } catch (error) {
    if (!error.name) error.statusCode = 401 // Sets all defined errors to 401

    return next(error)
  }
}

export default isAuthenticated
