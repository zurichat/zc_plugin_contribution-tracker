// Custom Modules
import Response from '../utils/response'
import CustomError from "../utils/custom-error"
import env from '../config/enviroment';

const { getBaseUrl } = env
const { plugin_id } = getBaseUrl()
const pluginInfoController = {
  getPluginInfo: async (req, res) => {
    try {
      let result = {
        plugin_id,
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
        sidebar_url: "https://ct.zuri.chat/api/v1/sidebar",
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