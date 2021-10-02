
# Contribution Tracker Plugin API Documentation

## Description

```bash
Title : Contribution Tracker Plugin API
Description : This list all the apis for Contribution Tracker plugin.
version: 0.0.1
```

## Base URL

```bash
Url: "https://ct.zuri.chat/api/v1"
```
## Authorization

Take note, all api endpoints in this plugin required you authenticated.

<!-- Sidebar Endpoint start from here -->
## Sidebar Endpoint

> ### Description
&nbsp; This endpoint return all the sidebar data for a paticular organization.

"https://ct.zuri.chat/api/v1/sideBar",


> ### Parameters
| Method | Endpoint   | Body | Parameter | Query | Content Type       | Description |
| ------ | ---------- | ---- | --------- | ----- | ------------------ | ----------- |
| `GET`  | `api/v1/sideBar` | null | null      | org   | `application/json` |             |



## EndPoints
>Admin Endpoints



| Method | Endpoint   | Body | Parameter | Query | Content Type       | Description |
| ------ | ---------- | ---- | --------- | ----- | ------------------ | ----------- |
| `GET`  | `api/v1/admin/voters` | null | null      | `org_id`   | `application/json` | `Get all voters in an organization`        |
| `POST`  | `api/v1/admin/voters` | `{"email": String, "firstname": String, "lastname: String" "voting_weight": Number, }` | null      | null   | `application/json` | `All the fields in the body are required`          |
| `PATCH`  | `api/v1/admin/voters` | `{"email": String, "firstname": String}, "lastname": String, "voting_weight": Number}` | null      | `voter_id`   | `application/json` |`Updates the voter with the id`            |
| `Delete`  | `api/v1/admin/voters` | null | null      | `org_id` `voter_id`   | `application/json` |             |


