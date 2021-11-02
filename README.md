# Contribution Tracker (Zuri chat plugin)
A plugin that allows you to track people's contribution to open source projects, and highlight the most pressing issues.

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
[![GitHub issues](https://img.shields.io/github/issues/zurichat/zc_plugin_contribution-tracker)](https://github.com/zurichat/zc_plugin_contribution-tracker/issues)
[![GitHub forks](https://img.shields.io/github/forks/zurichat/zc_plugin_contribution-tracker)](https://github.com/zurichat/zc_plugin_contribution-tracker/network)
[![GitHub stars](https://img.shields.io/github/stars/zurichat/zc_plugin_contribution-tracker)](https://github.com/zurichat/zc_plugin_contribution-tracker/stargazers)
[![GitHub license](https://img.shields.io/github/license/zurichat/zc_plugin_contribution-tracker)](https://github.com/zurichat/zc_plugin_contribution-tracker)<br><br>

# Table of content
- [Contribution Tracker (Zuri chat plugin)](#contribution-tracker-zuri-chat-plugin)
- [Table of content](#table-of-content)
- [Built with](#built-with)
- [Getting started](#getting-started)
  - [Project setup](#project-setup)
  - [Run the frontend](#run-the-frontend)
  - [Run the backend](#run-the-backend)
- [Endpoint documentation](#endpoint-documentation)
- [Folder structure](#folder-structure)
- [Contribution](#contribution)
- [Credits and Acknowledgement](#credits-and-acknowledgement)
- [Licensing](#licensing)
# Built with
- Vuejs (Frontend)
- Express (Backend)<br><br>
# Getting started
## Project setup

Fork the repository and clone your fork
```bash
git clone https://github.com/your_username_/zc_plugin_contribution-tracker.git
```

Change the working directory
```bash
cd zc_plugin_contribution-tracker
```
## Run the frontend
1. Install the packages
```bash
cd frontend
yarn install
```
2. Run the development server
```
yarn serve:standalone
```
3. App running at http://localhost:8080/ 

## Run the backend
1. Install the packages
```bash
cd ct-backend
yarn install
```
2. Run the server
```
yarn start:backend
```
3. Backend endpoints running at http://localhost:4400/api/v1 <br><br>

# Endpoint documentation
The API endpoints documentation can be found [here](https://github.com/zurichat/Documentation/tree/main/docs/Plugins/comtribution-tracker.md)<br><br>

# Folder structure
```
├── ct-backend                        # Backend folder
│   ├── docs                          # API documentation in docs.md
│   ├── src                           # The actual source files
│   │   ├── bin                       # Contains an executable to run the server
│   │   ├── config
│   │   │   └── enviroment            # All the environment variables in index.js
│   │   ├── controllers               # All the controllers files
│   │   ├── middlewares               # All the middlewares files
│   │   ├── models                    # All the schema models
│   │   ├── routes                    # All the routes files
│   │   ├── utils                     # Contains helper and wrapper classes/functions
│   │   └── zuricore                  # Contains functions to make requests to Zc_core API endpoints
│   └── test                          # All the tests files
└── frontend                          # Frontend folder
    ├── public                        # Main folder for assets files
    │   ├── img                       # Images files
    │   └── js                        # Js files
    └── src
        ├── assets                    # Assets files(images)
        ├── components                # The Vue components
        ├── router                    # Routes in index.js
        ├── services                  # Services with http-client package
        ├── store                     # Vuex store
        └── views                     # Main views(UI)
```
# Contribution

Pull requests are warmly welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to read the [Contributing Guide](https://github.com/zurichat/zc_plugin_contribution-tracker/CONTRIBUTING.md) before making a pull request and make sure to update tests as appropriate..<br><br>


# Credits and Acknowledgement
Thank you to all the people who already contributed to Contribution Tracker!<br>

<a href="https://github.com/zurichat/zc_plugin_contribution-tracker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zurichat/zc_plugin_contribution-tracker" />
</a><br><br>


# Licensing

Copyright (c) 2021-present, Zuri Chat