/**
    Copyright 2021, Zuri plugin reminder.
    All rights reserved.
    Written By: Bajomo Kehinde, 1st October 2021
* */
import CustomError from "../utils/custom-error"
import { PLUGIN_ID } from "../config"

const sidebarController = {
  async getSideBarInfo(req, res) {
    try {
      const { user, org_id } = req.query;

      const payload = {
        name: "Contribution Tracker",
        description: "Track peoples contribution to open source projects",
        plugin_id: PLUGIN_ID,
        organisation_id: org_id,
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
  },
}

export default sidebarController;
