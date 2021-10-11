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
    getAllFeatures(){
        return http.get("/feature/all_features")
    }
    addFeature(){
        return http.post(`your endpoint`)
    }
}

export default new ContributionServices();