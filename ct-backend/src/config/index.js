module.exports = {

  // Database Credentials
  DATABASE_CONFIG: {
    // Endpoint for the database write operations
    WRITE_URL: "https://api.zuri.chat/data/write",
    // Endpoint for the database read operations
    READ_URL: "https://api.zuri.chat/data/read",
    // endpoint for deleting data
    DELETE_URL: "https://api.zuri.chat/data/delete",
  },

  // Get Our PluginID from ENV or use the test_id
  PLUGIN_ID: process.env.PLUGIN_ID || "6156a9f75552d612abe12459",
    // Get Our PluginID from ENV or use the test_id
  ORGANISATION_ID: process.env.ORGANISATION_ID || "614679ee1a5607b13c00bcb7",

  // Fetch user zc_core endpoint
  USER_URL: "https://api.zuri.chat/users/",

   // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "",
  // process.env.SOCKER_TOKEN || "12a0bbf4-d29b-441d-8e31-bd4634dc8919",
  SOCKET_URL: process.env.SOCKET_URL || "https://realtime.zuri.chat/api",
  // SOCKET_URL: process.env.SOCKET_URL || "http://localhost:8000/api",

  // Fetch user zc_core endpoint
  USER_URL: "https://api.zuri.chat/users/",

};