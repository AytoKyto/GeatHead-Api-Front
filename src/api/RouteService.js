import axios from "./config";

const getRouteList = async (projectIdUrl) => {
  try {
    const response = await axios.get("routes/get-route/" + projectIdUrl);

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

export { getRouteList };
