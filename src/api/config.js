import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    "Content-language": "fr",
    // Bearer token
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

// Intercepteur pour mettre à jour le token après chaque requête réussie
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      // refresh DOM
      if (
        error.request.responseURL !==
        process.env.REACT_APP_CLIENT_URL + "/"
      ) {
        window.location.reload();
        originalRequest._retry = true;
      }
      return Promise.reject(error);
    }
  }
);

export default apiClient;
