import { get } from "axios";
import CustomError from "../utils/custom-error";
import env from "../config/enviroment";

const { getBaseUrl } = env

const { user_url } = getBaseUrl()

// GET req to zc_core to validate and fetch user details with the provided token
export async function userAuth(req, res, next) {
  try {
    const { org, userId } = req.query;
    const token = req.query.token.split(" ")[1];

    const response = await get(`${user_url}${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // destrucures registered organisation of the user from the response
    const { Organizations } = response.data.data;

    // confirm if user belongs to an organizations from the response, the validator returns true
    if (Organizations.indexOf(org) > -1) {
      return next();
    }
    throw new CustomError("Can't verify user from db: ", 403);
  } catch (error) {
    throw new CustomError(`Can't verify user from db: ${error}`, 502);
  }
}


// to be attached to all endpoints later on