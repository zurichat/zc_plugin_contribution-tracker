import axios from 'axios';
import CustomError from "../utils/custom-error";
import env from '../config/enviroment';
import ZuriDb from '../zuricore/db';
import ZuriOrganization from "../zuricore/organization"

const { getBaseUrl } = env
const { base_url } = getBaseUrl()

const Organization = new ZuriOrganization();
const Voter = new ZuriDb("ct_voters");
const getUserUrl = `${base_url}/auth/verify-token`;

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
    member.ct_voter = savedVoters.find(voter => voter.user_name == member.user_name) || false;

    console.log({ member });
    req.user = member;

    return next();

  } catch (error) {
    if (!error.name) error.statusCode = 401 // Sets all defined errors to 401

    return next(error)
  }
}

export default isAuthenticated
