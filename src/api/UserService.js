import axios from "./config";
import { toast } from "sonner";
import { sendWelcomeEmail, sendResetPasswordEmail } from "../logic/sendEmail";

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

    // Envoyer l'email de bienvenue
    sendWelcomeEmail(data.email);

    toast.success(response.data.message);
    return response;
  } catch (error) {
    console.error(error);
    toast.error(
      error.response?.data?.message ||
        "Une erreur est survenue, veuillez réessayer ultérieurement"
    );
    return null;
  }
};

const forgotPassword = async (data) => {
  try {
    const response = await axios.post("/auth/forgot-password", data);

    // Envoyer l'email de bienvenue
    sendResetPasswordEmail(data.email, data.newPassword);

    toast.success(response.data.message);
    return response;
  } catch (error) {
    console.error(error);
    toast.error(
      error.response?.data?.message ||
        "Une erreur est survenue, veuillez réessayer ultérieurement"
    );
    return null;
  }
};

export {
  getDataUser,
  updateDataUser,
  updatePasswordUser,
  createUser,
  forgotPassword,
};
