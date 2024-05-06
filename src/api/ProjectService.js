import axios from "./config";
import { toast } from "sonner";

const getSingleProject = async (projectIdUrl) => {
  try {
    const response = await axios.get(
      "/projects/get-one-project/" + projectIdUrl
    );

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const getProject = async (userId) => {
  try {
    const response = await axios.get("/projects/get-projects/" + userId);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const createProject = async (data) => {
  try {
    const response = await axios.post("/projects/create-project", data);
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

export { getSingleProject, createProject, getProject };
