import axios from "axios";

const getRouteList = async (projectIdUrl) => {
  try {
    const response = await axios.request({
      method: "GET",
      url: "http://localhost:3001/routes/get-route/" + projectIdUrl,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

export { getRouteList };
