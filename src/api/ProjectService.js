import axios from "./config";
import { toast } from "sonner";

const getSingleProject = async (projectIdUrl) => {
  try {
    const response = await axios.get(
      "/projects/get-one-project/" + projectIdUrl
    );

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    toast.error(error.response.data.message);
    return null;
  }
};

const getProject = async (userId) => {
  try {
    const response = await axios.get("/projects/get-projects/" + userId);
    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    toast.error(error.response.data.message);
    return null;
  }
};

const deleteProject = async (projectId) => {
  try {
    const response = await axios.delete("/projects/delete-project/" + projectId);
    if (response.status) {
      toast.success("Supprimer avec effectué !");
    } else {
      toast.error("Une érreur est survenue, veilleur réessayer ultérieurement");
    }
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    toast.error(error.response.data.message);
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
    console.error("Erreur lors de la récupération des projets:", error);
    toast.error(error.response.data.message);
    return null;
  }
};

export { getSingleProject, createProject, getProject, deleteProject };
