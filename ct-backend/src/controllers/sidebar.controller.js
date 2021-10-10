import CustomError from "../utils/custom-error"
import catchAsync from "../utils/catchAsync";
import env from "../config/enviroment";

const { getBaseUrl } = env

const { plugin_id } = getBaseUrl()

const sidebarController = {
  getSideBarInfo: catchAsync(async (req, res) => {
    try {
      const { user_id, org_id } = req.query;

      const payload = {
        name: "Contribution Tracker",
        description: "Track people's contributions to open source projects on Zuri Chat",
        plugin_id,
        organisation_id: org_id,
        user_id,
        group_name: "",
        show_group: true,
        public_rooms: [
          {
            room_name: "Contribution Room",
            room_image: "https://www.svgrepo.com/show/12072/image.svg",
            room_url: `/${user_id}/${org_id}`,
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
  }),
}

export default sidebarController;
