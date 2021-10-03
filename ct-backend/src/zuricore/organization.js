// Package Modules
import axios from "axios"

// Custom Modules
import { DATABASE_CONFIG, PLUGIN_ID, ORGANISATION_ID } from "../config"
const CustomError = require("../utils/custom-error");

export default class ZuriOrganization {
  constructor(collection_name) {

    this.BASE_API_ENDPOINT = 'https://api.zuri.chat/organizations';    
  }

  // Create
  async getAllMembers(organization_id) {
    try {
      // Make the request
      const response = await axios.get(
        `${this.BASE_API_ENDPOINT}/${organization_id}/members` );

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

  // Fetch a single object from the DB
  async getMember(object_id, organization_id) {
    try {

      this.DB_DEFAULTS_CONFIG.ORGANISATION_ID = organization_id || ORGANISATION_ID
      // Make the request
      const response = await axios.get(
        `${this.DB_READ_URL}/${this.DB_DEFAULTS_CONFIG.plugin_id}/${this.DB_DEFAULTS_CONFIG.collection_name}/${this.DB_DEFAULTS_CONFIG.ORGANISATION_ID}?_id=${object_id}`
      );

      // Return the response
      return response.data;
    } catch (error) {
      throw new CustomError(
        `Unable to Connect to Zuri Core DB [READ ONE]: ${error}`,
        "500",
        error.response.data
      );
    }
  }

}

