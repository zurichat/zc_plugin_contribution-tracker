module.exports = {

  // Database Credentials
  DATABASE_CONFIG: {
    BASE_URL: 'https://api.zuri.chat',
    // Endpoint for the database write operations
    WRITE_URL: "https://api.zuri.chat/data/write",
    // Endpoint for the database read operations
    READ_URL: "https://api.zuri.chat/data/read",
    // endpoint for deleting data
    DELETE_URL: "https://api.zuri.chat/data/delete",
  },

  // Get Our PluginID from ENV or use the test_id
  PLUGIN_ID: process.env.PLUGIN_ID || "6156c5e6d56dd3c4d8a962b5",
  // Get Our PluginID from ENV or use the test_id
  ORGANISATION_ID: "61581aa887540d8d01ffc3e6",

  // Fetch user zc_core endpoint
  USER_URL: "https://api.zuri.chat/users/",

  // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "",
  // process.env.SOCKER_TOKEN || "12a0bbf4-d29b-441d-8e31-bd4634dc8919",
  SOCKET_URL: process.env.SOCKET_URL || "https://realtime.zuri.chat/api",
  // SOCKET_URL: process.env.SOCKET_URL || "http://localhost:8000/api",

};