const updateDataValueType = (targetId, newType, currentData) => {
  if (!Array.isArray(currentData)) {
    return currentData; // Retourne immédiatement si ce n'est pas un tableau
  }

  return currentData.map((item) => {
    if (item.id === targetId) {
      // Trouvé l'élément cible, mettre à jour la valeur
      return {
        ...item,
        type: newType.name,
        typeId: newType.id,
        value:
          newType.id === 2 ? [] : newType === 3 ? [] : "faker.company.name",
      };
    } else if (item.value && Array.isArray(item.value)) {
      // Si l'item contient une propriété value qui est un tableau, continue la recherche récursivement
      return {
        ...item,
        value: updateDataValueType(targetId, newType, item.value),
      };
    }
    return item;
  });
};

export { updateDataValueType };
