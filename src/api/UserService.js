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
    if (response.status === 200) {
      toast.success("Mise à jour effectuée !");
    } else {
      toast.error("Une erreur est survenue, veuillez réessayer ultérieurement");
    }
    toast.success("Mise à jour effectué !");
    return response;
  } catch (error) {
    toast.error("Cette adresse email est déjà utilisée pour un autre compte");
    console.error("Erreur lors de la mise à jour du mot de passe:", error);
    return null;
  }
};

const updatePasswordUser = async (data) => {
  try {
    const response = await axios.post("/users/reset-password", data);
    if (response.status === 200) {
      toast.success("Mise à jour effectuée !");
    } else {
      toast.error("Une erreur est survenue, veuillez réessayer ultérieurement");
    }
    return response;
  } catch (error) {
    // Gérer les erreurs spécifiques HTTP 400 ici
    if (error.response && error.response.status === 400) {
      toast.error(
        "Requête incorrecte. Veuillez vérifier les données fournies."
      );
    } else {
      toast.error("Une erreur est survenue, veuillez réessayer ultérieurement");
    }
    console.error("Erreur lors de la mise à jour du mot de passe:", error);
    return null;
  }
};

export { getDataUser, updateDataUser, updatePasswordUser };
