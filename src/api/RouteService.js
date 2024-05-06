import axios from "./config";
import { toast } from "sonner";

const getRouteList = async (projectIdUrl) => {
  try {
    const response = await axios.get("routes/get-route/" + projectIdUrl);

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const updateRoute = async (id, data) => {
  try {
    const response = await axios.put("/routes/update-route/" + id, data);
    if (response.data.status) {
      toast.success("Mise à jour effectué !");
    } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data.data;
  } catch (error) {
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const deleteRoute = async (id) => {
  try {
    const response = await axios.delete("/routes/delete-route/" + id);
    if (response.data.status) {
      toast.success("Supprimer avec effectué !");
    } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data.data;
  } catch (error) {
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const createRoute = async (data) => {
  try {
    const response = await axios.post("/routes//create-route/", data);
    if (response.data.status) {
      toast.success("Création effectuer !");
     } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data.data;
  } catch (error) {
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

export { getRouteList, updateRoute, createRoute, deleteRoute };
