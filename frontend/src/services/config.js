import http from "../http-client";

class ContributionServices {
    getUser(id) {
        return http.get(`/voter/${id}`)
    }
    getUsers() {
        return http.get("/voters")
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
    addFeature(data) {
        console.log(data)
        return http.post("/feature", data)
    }
    getFeatures() {
        return http.get("/feature")
    }
    
}

export default new ContributionServices();