// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const { DATABASE } = require("../config/index");


class InformationController {
  async getPluginInfo(req, res) {
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
      res.status(200).send(response("Plugin Information Retrieved", result));
    } catch (error) {
      throw new CustomError(
        `Could not fetch plugin information: ${error}`,
        "500"
      );
    }
  }

}

// Export Module
module.exports = new InformationController();
