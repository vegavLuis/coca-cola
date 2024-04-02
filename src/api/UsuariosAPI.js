import api from "@/lib/axios";

export default {
  findAllUsuarios() {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.get("/usuarios", {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
  createUsuarios(data) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.post("/usuarios", data, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
  updateUsuarios(id, data) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.put("/usuarios/" + id, data, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
  deleteUsuarios(id) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.delete("/usuarios/" + id, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
};
