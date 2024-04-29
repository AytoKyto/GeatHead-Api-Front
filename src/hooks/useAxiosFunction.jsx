import { useState, useEffect } from "react";

/**
 * Hook personnalisé pour effectuer des appels à une API avec Axios dans une application React.
 *
 * @returns {Object} - Objet contenant la réponse de la requête, les erreurs éventuelles, l'état de chargement et une fonction pour effectuer la requête
 */

const useAxiosFunction = () => {
  // Utilisation de useState pour gérer l'état de la réponse de la requête
  const [response, setResponse] = useState(null);
  // Utilisation de useState pour gérer l'état des éventuelles erreurs de la requête
  const [error, setError] = useState("");
  // Utilisation de useState pour gérer l'état de chargement de la requête
  const [loading, setLoading] = useState(false);
  // Utilisation de useState pour stocker le contrôleur d'annulation de la requête
  const [controller, setController] = useState(null);

  // Définition de la fonction pour effectuer la requête
  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      // Création d'un nouveau contrôleur d'annulation pour chaque nouvelle requête
      const ctrl = new AbortController();
      setController(ctrl);
      // Utilisation de l'instance d'Axios pour effectuer la requête
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        // Utilisation du signal du contrôleur d'annulation
        signal: ctrl.signal,
      });
      console.info("res", res);
      setResponse(res.data);
    } catch (err) {
      console.error("err", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Utilisation de useEffect pour annuler la requête en cas de changement d'état
  useEffect(() => {
    console.info(controller);

    // useEffect cleanup function pour annuler la requête en cas de changement d'état
    return () => controller && controller.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller]);

  return { response, error, loading, axiosFetch };
};

export default useAxiosFunction;

/**
 * import React, { useEffect } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import axios from "../apis/testApi";

export default function Devarea() {
  const { response, error, loading, axiosFetch } = useAxiosFunction();

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "GET",
      url: "/posts/1",
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: "POST",
      url: "/posts",
      requestConfig: {
        data: {
          id: 101,
          title: "foo",
          body: "bar",
          userId: 1,
        },
      },
    });
  };

  return (
    <div>
      <h1>Devarea</h1>
      <p>response: {JSON.stringify(response)}</p>
      <p>error: {error}</p>
      <p>loading: {loading.toString()}</p>

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={getData}>Refetch</button>
    </div>
  );
}

 */
