// Custom Modules
import Response from '../utils/response'
import CustomError from "../utils/custom-error"
import { DATABASE } from "../config/index"


const pluginInfoController = {
  getPluginInfo: async (req, res) => {
    try {
      let result = {
        plugin_id: "6156c5e6d56dd3c4d8a962b5",
        name: "Contribution Tracker",
        description:
          "A plugin that allows you track peoples contribution to open source projects, and highlight most pressing issues.",
        category: "Productivity",
        icon_url:
          "https://www.svgrepo.com/show/291854/add.svg",
        scaffold_structure: "Single SPA",
        version: "v1.0",
        developer_name: "CT-Team@HNGi8",
        developer_email: "hello@zuri.com",
        sidebar_url: "https://ct.zuri.chat/api/v1/sideBar",
        ping_url: "https://ct.zuri.chat/api/v1/ping",
        homepage_url: "https://ct.zuri.chat/",
        install_url: "https://ct.zuri.chat/",
      };
      return Response.send(
        res,
        200,
        result,
        "Plugin Information Retrieved"
      )
    } catch (error) {
      throw new CustomError(
        `Could not fetch plugin information: ${error}`,
        "500"
      );
    }
  }
}


export default pluginInfoController;