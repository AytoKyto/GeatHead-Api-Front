import axios from "./config";

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

export { getSingleProject };
