import axios from "./config";
import { toast } from "sonner";

const getDataUser = async (user_id) => {
  try {
    const response = await axios.get("/users/" + user_id);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
    return null;
  }
};

const updateDataUser = async (user_id, data) => {
  try {
    const response = await axios.put("/users/" + user_id, data);
    toast.success("Mise à jour effectuée !");
    return response;
  } catch (error) {
    toast.error(error.response.data.message);
    return null;
  }
};

const updatePasswordUser = async (data) => {
  try {
    const response = await axios.post("/users/reset-password", data);
    if (response.status === 200) {
      toast.success("Mise à jour effectuée !");
    }
    return response;
  } catch (error) {
    toast.error(error.response.data.message);
    return null;
  }
};

const createUser = async (data) => {
  try {
    const response = await axios.post("/auth/register", data);
    toast.success(response.data.message);
    return response;
  } catch (error) {
    toast.error(error.response.data.message);
    return null;
  }
};

export { getDataUser, updateDataUser, updatePasswordUser, createUser };
