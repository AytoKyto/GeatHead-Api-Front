import { useState, useEffect } from "react";
import axios from "axios";

// Configure l'url de base pour toutes les requêtes axios.
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

/**
 * Hook personnalisé permettant d'utiliser axios avec des valeurs par défaut.
 * @param {object} options - Options pour la requête.
 * @param {string} options.url - URL pour la requête.
 * @param {string} options.method - Méthode HTTP pour la requête (get, post, etc.).
 * @param {string} [options.body] - Corps de la requête pour les requêtes POST.
 * @returns {{response: object|null, error: string, loading: boolean}} - Les données de la requête.
 */

/**
 * Exemple d'utilisation:
 * 
 * const { response, error, loading } = useAxios({
 *  url: "http://localhost:3001/projects",
 * method: "get",
 * });
 * 
 */

const useAxios = ({ url, method, body, token }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [tokenAuth] = useState(localStorage.getItem("token"));

  // Configure le header pour envoyer le token d'authentification avec toutes les requêtes.
  let config = null;
  if (token) {
    config = {
      headers: { Authorization: `Bearer ${tokenAuth}` },
    };
  }

  const fetchData = async () => {
    try {
      // Envoie la requête axios avec les paramètres fournis.
      axios
        .request({
          url,
          method,
          headers: { 'Content-Type': 'application/json' },
          data: body,
          ...config,
        })
        .then((res) => {
          setResponse(res);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      setError(err);
    }
  };

  // Effectue la requête lorsque les valeurs dans les dépendances changent.
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url]);

  return { response, error, loading };
};

export default useAxios;
