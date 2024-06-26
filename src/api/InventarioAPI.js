import api from "@/lib/axios";

export default {
  findAllProducto() {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.get("/productos", {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
  createProducto(data) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.post("/productos", data, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
  updateProducto(id, data) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.put("/productos/" + id, data, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
  deleteProducto(id) {
    const token = localStorage.getItem("AUTH_TOKEN");
    return api.delete("/productos/" + id, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  },
};
