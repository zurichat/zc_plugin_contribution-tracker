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

  async getSideBarInfo(req, res) {
    try {
      const { user, org } = req.query;

      const { PLUGIN_ID } = DATABASE;
      const payload = {
        name: "Contribution Tracker",
        description: "Track peoples contribution to open source projects",
        plugin_id: PLUGIN_ID,
        organisation_id: org,
        user_id: user,
        group_name: "",
        show_group: true,
        public_rooms: [
          {
            room_name: "Contribution Room",
            room_image: "https://www.svgrepo.com/show/12072/chess-board.svg",
            room_url: "/ct",
          },
        ],
      };

      // Just return the payload
      return res.status(200).json(payload);
    } catch (error) {
      throw new CustomError(
        `Could not fetch sidebar information: ${error}`,
        "500"
      );
    }
  }
}

// Export Module
module.exports = new InformationController();
