
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

| Method 	|  	| Endpoint 	| Body 	| Content Type 	|Description|
|---	|---	|---	|---	|---	|
| `GET` 	|  	| `api/v1/admin/voters` 	| `null` 	| `application/json` 	||
| `GET` 	|  	| `api/admin/` 	|  	|  `application/json`	||
| `POST` 	|  	|  `api/v1/admin/voters`	|  `{"email": String, "firstname": String, "lastname: String" "voting_weight": Number, }`|  `application/json`	|`All the fields in the body are required`|
| `PATCH` 	|  	| `api/v1/admin/voters` 	|`{"email": String, "firstname": String}, "lastname": String, "voting_weight": Number}`  	| `application/json` 	|`Updates the voter with the id`|
| `DELETE` 	|  	| `api/v1/admin/voters/` 	|  `null`	| `application/json` 	|||
