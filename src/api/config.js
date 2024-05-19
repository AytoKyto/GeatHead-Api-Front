import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    "Content-language": "fr",
  },
});

// Ajoutez un intercepteur pour mettre à jour le token avant chaque requête
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Vérification pour le statut 401 et tentative de rechargement de la page si c'est la première fois
    if (error.response.status === 401 && !originalRequest._retry) {
      if (
        error.request.responseURL !==
        process.env.REACT_APP_CLIENT_URL + "/"
      ) {
        window.location.reload();
        originalRequest._retry = true;
      }
      return Promise.reject(error);
    }

    // Gérer ici d'autres erreurs de statut spécifiques, comme le 400
    if (error.response.status === 400) {
      // Vous pouvez ajuster cette logique en fonction des besoins spécifiques de votre application
      console.error("Erreur 400 traitée :", error.response);
    }

    // Rejeter explicitement toutes les autres erreurs pour s'assurer qu'elles atteignent le bloc `catch` des fonctions appelantes
    return Promise.reject(error);
  }
);

export default apiClient;
