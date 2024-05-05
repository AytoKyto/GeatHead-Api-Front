import axios from "./config";

const postCreateDataRoute = async (data) => {
  try {
    console.log(data);
    const response = await axios.post("/datas/create-data", data);

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const uodatereateDataRoute = async (id, data) => {
  try {
    const response = await axios.put("/datas/update-data/" + id, data);

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

const getDataRoute = async (route_id) => {
  try {
    const response = await axios.get("/datas/get-data/" + route_id);

    return response.data.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des routes:", error);
    return null;
  }
};

export { postCreateDataRoute, getDataRoute, uodatereateDataRoute };
