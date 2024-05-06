import axios from "./config";
import { toast } from "sonner";

const getDataUser = async (user_id) => {
  try {
    const response = await axios.get("/users/" + user_id);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    return null;
  }
};

const updateDataUser = async (user_id, data) => {
  try {
    const response = await axios.put("/users/" + user_id, data);
    console.log(response);
    if (response.status) {
      toast.success("Mise à jour effectué !");
    } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    return null;
  }
};

export { getDataUser, updateDataUser };
