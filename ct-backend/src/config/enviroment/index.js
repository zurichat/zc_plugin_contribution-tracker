import dotenv from 'dotenv'

dotenv.config()

const env = {
  PORT: process.env.PORT || '4400',
  API_URL: '',
  BASE_URL: '',
  READ_URL: '',
  WRITE_URL: '',
  DELETE_URL: '',
  USER_URL: '',
  ENVIRONMENT: {
    development: process.env.NODE_ENV === 'development',
    test: process.env.NODE_ENV === 'test',
    production: process.env.NODE_ENV === 'production',
  },
  PLUGIN_ID: '',
  ORG_ID: '',
  SOCKET_URL: '',
  SOCKER_KEY: '',
  getBaseUrl() {
    const self = env
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test'
    ) {
      self.API_URL = `http://localhost:${self.PORT}/api/v1`
      self.BASE_URL = 'https://api.zuri.chat'
      self.PLUGIN_ID = '6156c5e6d56dd3c4d8a962b5'
      self.ORG_ID = '61581aa887540d8d01ffc3e6"'
    } else {
      self.API_URL = `https://ct.zuri.chat/`
      self.BASE_URL = 'https://api.zuri.chat'
      self.READ_URL = 'https://api.zuri.chat/data/read'
      self.WRITE_URL = 'https://api.zuri.chat/data/write'
      self.DELETE_URL = 'https://api.zuri.chat/data/delete'
      self.USER_URL = 'https://api.zuri.chat/users'
      self.PLUGIN_ID = '6156c5e6d56dd3c4d8a962b5'
    }
    return {
      api_url: self.API_URL,
      base_url: self.BASE_URL,
      read_url: self.READ_URL,
      write_url: self.WRITE_URL,
      delete_url: self.DELETE_URL,
      user_url: self.USER_URL,
      plugin_id: self.PLUGIN_ID,
    }
  },
}

export default env
    // WRITE_URL
    // READ_URL
    // DELETE_URL
    // USER_URL
    //PluginID 

    // Cetrifugo Credentials
    // process.env.SOCKER_TOKEN || "12a0bbf4-d29b-441d-8e31-bd4634dc8919",