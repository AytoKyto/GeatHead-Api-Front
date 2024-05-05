const updateDataValueSubValue = (targetId, newValue, currentData) => {
  if (!Array.isArray(currentData)) {
    return currentData; // Retourne immédiatement si ce n'est pas un tableau
  }

  return currentData.map((item) => {
    if (item.id === targetId) {
      // Trouvé l'élément cible, mettre à jour la valeur
      return { ...item, subValue: newValue };
    } else if (item.value && Array.isArray(item.value)) {
      // Si l'item contient une propriété value qui est un tableau, continue la recherche récursivement
      return {
        ...item,
        value: updateDataValueSubValue(targetId, newValue, item.value),
      };
    }
    return item;
  });
};

export { updateDataValueSubValue };
