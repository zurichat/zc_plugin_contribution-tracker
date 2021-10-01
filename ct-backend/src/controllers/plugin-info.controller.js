// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");

class PluginInformationController {

  async getPluginInfo(req, res) {
    try {
      return res
        .status(200)
        .send(response("plugin information retrieved successfully", { 
          name: "contribution tracker plugin",
          stack: "VueJs, Tailwind & NodeJs",
          team: "CT-Team@HNGi8",
        }, true)
      );
    } catch (error) {
      throw new CustomError(
        `Could not fetch plugin information: ${error}`,
        "500"
      );
    }
  }
}

// Export Module
module.exports = new PluginInformationController();
