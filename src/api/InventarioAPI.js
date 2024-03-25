import api from "@/lib/axios";

export default {
  findAllProducto() {
    return api.get("/productos");
  },
  createProducto(data) {
    return api.post("/productos", data);
  },
  updateProducto(id, data) {
    return api.put("/productos/" + id, data);
  },
  deleteProducto(id) {
    return api.delete("/productos/" + id);
  },
};
