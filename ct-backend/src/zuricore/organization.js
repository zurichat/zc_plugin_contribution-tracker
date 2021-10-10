// Package Modules
import axios from "axios"

// Custom Modules
import env from "../config/enviroment";
const CustomError = require("../utils/custom-error");

const { getBaseUrl } = env
const { user_url } = getBaseUrl()
export default class ZuriOrganization {
  constructor() {

    this.BASE_API_ENDPOINT = 'https://api.zuri.chat/organizations'
  }

  // Get 
  async getAllMembers(organization_id) {
    try {
      // Make the request
      const response = await axios.get(
        `${this.BASE_API_ENDPOINT}/${organization_id}/members`);

      // Return the response
      return response.data.data;
    } catch (error) {
      throw new CustomError(
        `Unable to Connect to Zuri: ${error}`,
        error.response.status,
        error
      );
    }
  }

  // Get 
  async getMember(organization_id, member_id, token) {
    try {
      // Make the request
      const response = await axios.get(
        `${this.BASE_API_ENDPOINT}/${organization_id}/members/${member_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )

      // Return the response
      return response.data.data;
    } catch (error) {
      throw new CustomError(
        `Unable to Connect to Zuri: ${error}`,
        error.response.status,
        error
      );
    }
  }


}

