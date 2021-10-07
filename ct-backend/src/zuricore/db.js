// Package Modules
import axios from "axios"

// Custom Modules
import catchAsync from "../utils/catchAsync"
import CustomError from "../utils/custom-error"
import env from "../config/enviroment/index"

const { getBaseUrl } = env
const { base_url, read_url, write_url, delete_url, plugin_id } = getBaseUrl()
// eslint-disable no-underscore-dangle
// eslint-disable class-methods-use-this

/** *
 * create
 * findAll
 * findById
 * findByParameter
 * updateById
 * delete
 */

export default class ZuriDb {
  constructor(entity) {
    this.entity = entity
  }

  create = catchAsync(async (payload, org_id) => {
    try {
      const res = await axios({
        url: write_url,
        method: 'post',
        data: {
          plugin_id: plugin_id,
          organization_id: org_id,
          collection_name: this.entity,
          bulk_write: Array.isArray(payload), // returns true if data is an array
          payload,
        },
      })
      // Response
      return res.data.data
    } catch (error) {
      throw new CustomError(
        `Unable to Connect to Zuri Core DB [CREATE]: ${error}`,
        "500"
      )
    }
  })

  findAll = catchAsync(async (org_id) => {
    const url = `${read_url}/${plugin_id}/${this.entity}/${org_id}`
    try {
      const res = await axios({
        url,
        method: 'get',
      })
      return res.data.data;
    } catch (err) {
      err.response.data
    }
  })

  findById = catchAsync(async (object_id, org_id) => {
    const url = `${read_url}/${plugin_id}/${this.entity}/${org_id}?_id=${object_id}`
    try {
      const res = await axios({
        url,
        method: 'get',
      })
      return res.data.data ? res.data.data : null
    } catch (error) {
      throw new Error(
        'Server Internal error, we will figure it out, try again later'
      )
    }
  })

  findByParameter = catchAsync(async (object, org_id) => {
    const queryString = new URLSearchParams(object).toString()
    const url = `${read_url}/${plugin_id}/${this.entity}/${org_id}?${queryString}`
    try {
      const res = await axios({
        url,
        method: 'get',
      })
      return res.data.data
    } catch (error) {
      throw new CustomError(
        `Unable to Connect to Zuri Core DB [READ ONE BY PARAMETER]`,
        "500",
        error.response.data
      );
    }
  })

  update = catchAsync(async (object_id, payload, org_id) => {
    try {
      const res = await axios({
        method: 'put',
        url: write_url,
        data: {
          plugin_id,
          organization_id: org_id,
          collection_name: this.entity,
          object_id,
          payload,
        },
      })
      console.log(res);
      return res.data.data
    } catch (error) {
      throw new CustomError(
        `Unable to Connect to Zuri Core DB [UPDATE]`,
        "500",
        error
      );
    }
  })

  // delete = catchAsync(async (filter, org_id) => {
  //   try {
  //     // Make the request
  //     const res = await axios({
  //       method: 'delete',
  //       url: delete_url,
  //       data: {
  //         plugin_id,
  //         organization_id: org_id,
  //         collection_name: this.entity,
  //         bulk_delete: true,
  //         filter,
  //       },
  //     });

  //     //Return the response
  //     return res.data.data
  //   } catch (error) {
  //     throw new CustomError(
  //       `Unable to Connect to Zuri Core DB [DELETE]: ${error}`,
  //       "500",
  //       error
  //     );
  //   }
  // })
}
