const addDataToNestedStructure = (newData, currentData, data) => {
  if (!Array.isArray(currentData)) {
    return currentData;
  }

  return currentData.map((item) => {
    if (
      item.id === data.id &&
      (item.type === "array" || item.type === "object")
    ) {
      // Found the target parent, insert new data
      return { ...item, value: [...item.value, newData] };
    } else if (item.value && Array.isArray(item.value)) {
      // Recursively update children
      return {
        ...item,
        value: addDataToNestedStructure(newData, item.value),
      };
    }
    return item;
  });
};

export { addDataToNestedStructure };
