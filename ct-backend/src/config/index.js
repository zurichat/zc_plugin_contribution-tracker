module.exports = {
  // Port to run the server on
  PORT: process.env.PORT || 5050,

  // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "",
  // process.env.SOCKER_TOKEN || "12a0bbf4-d29b-441d-8e31-bd4634dc8919",
  SOCKET_URL: process.env.SOCKET_URL || "https://realtime.zuri.chat/api",
  // SOCKET_URL: process.env.SOCKET_URL || "http://localhost:8000/api",

  // Database Credentials
  DATABASE: {
    // Get Our PluginID from ENV or use the test_id
    PLUGIN_ID: process.env.PLUGIN_ID || "6156c5e6d56dd3c4d8a962b5",
    // Get Our PluginID from ENV or use the test_id
    ORGANISATION_ID: process.env.ORGANISATION_ID || "6145c2d0285e4a18402073f6",
    // Endpoint for the database write operations
    ZC_CORE_DB_WRITE: "https://api.zuri.chat/data/write",
    // Endpoint for the database read operations
    ZC_CORE_DB_READ: "https://api.zuri.chat/data/read",
    // endpoint for deleting data
    DELETE_URL: "https://api.zuri.chat/data/delete",
  },

  // Fetch user zc_core endpoint
  USER_URL: "https://api.zuri.chat/users/",
};