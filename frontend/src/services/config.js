import http from "../http-client";

class ContributionServices {
    getUser(id) {
        return http.get(`/voter/${id}`)
    }
    getUsers() {
        return http.get("/voters")
    }
    getAllUsers() {
        return http.get("/users") // This simply serves as an example.
    }
    addUser(data) {
        return http.post("/voters", data)
    }

    // Request feature endpoint not yet available

    // addFeature(data) {
    //     return http.post("/", data)
    // }

    // getAllFeatures() {
    //     return http.get("/")
    // }
}

export default new ContributionServices();