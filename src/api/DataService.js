import axios from "./config";
import { toast } from "sonner";

const postCreateDataRoute = async (data) => {
  try {
    const response = await axios.post("/datas/create-data", data);
    if (response.data.status) {
      toast.success("Mise à jour effectué !");
    } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    return null;
  }
};

const uodatereateDataRoute = async (id, data) => {
  try {
    const response = await axios.put("/datas/update-data/" + id, data);
    if (response.data.status) {
      toast.success("Mise à jour effectué !");
    } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    return null;
  }
};

const getDataRoute = async (route_id) => {
  try {
    const response = await axios.get("/datas/get-data/" + route_id);

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    return null;
  }
};

const deleteDataRoute = async (id) => {
  try {
    const response = await axios.delete("/datas/delete-data/" + id);
   
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    return null;
  }
};

export {
  postCreateDataRoute,
  getDataRoute,
  uodatereateDataRoute,
  deleteDataRoute,
};
