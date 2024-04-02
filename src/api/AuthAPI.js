import api from "@/lib/axios";

export default {
  login(data) {
    // return console.log(data);
    return api.post("/auth/login", data);
  },
  auth() {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.get("/auth/user", {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
};
