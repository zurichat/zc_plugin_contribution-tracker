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
    getTicket() {
        return http.get("/ticket")
    }
    addTicket(data) {
        console.log(data)
        return http.post("/ticket", data)
    }
    getAllFeatures(){
        return http.get("/feature/all_features")
    }
    addFeature(){
        return http.post(`your endpoint`)
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