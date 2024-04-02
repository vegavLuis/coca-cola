// import { ref } from "vue";
import { defineStore } from "pinia";
import AuthAPI from "@/api/AuthAPI.js";
import { useRouter } from "vue-router";
// import { useAuthUserStore } from "./authUser";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  // const r = useAuthUserStore();
  const handleSubmit = async (item) => {
    try {
      const {
        data: { token },
      } = await AuthAPI.login(item);
      localStorage.setItem("AUTH_TOKEN", token);
      // r.traerData();
      router.push({ name: "home" });
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return {
    handleSubmit,
  };
});
