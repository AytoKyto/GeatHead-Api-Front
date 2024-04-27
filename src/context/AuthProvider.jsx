import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";

// Créer le contexte d'authentification
export const AuthContext = createContext();

// Créer le fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Récupérer le token JWT stocké localement s'il existe
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        // Vérifier que le token est toujours valide
        const expirationDate = new Date(decodedToken.exp * 1000);
        if (expirationDate > new Date()) {
          setUserData({
            id: decodedToken.id
          });
        } else {
          localStorage.removeItem("token");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // Connecter l'utilisateur et stocker le token localement
  const login = (token) => {
    try {
      localStorage.setItem("token", token);
      const decodedToken = jwtDecode(token);
      setUserData({
        id: decodedToken.id
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Déconnecter l'utilisateur et supprimer le token stocké localement
  const logout = () => {
    localStorage.removeItem("token");
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};