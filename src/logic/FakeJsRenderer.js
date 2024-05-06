import { useMemo, useCallback } from "react";

import { faker } from "@faker-js/faker";
import { getFakerFunctionByString } from "./FakeDataValue";

// Fonction pour créer des données fictives
const useFakeJsRenderer = (data) => {
  const fakeJsRenderer = useCallback((data) => {
    const dataFakeJs = {};

    data.forEach((item) => {
      try {
        switch (item.typeId) {
          case 1:
            if (item.value.includes("faker")) {
              const result = getFakerFunctionByString(item.value);
              dataFakeJs[item.name] = result();
            } else {
              if (item.value === "Number") {
                dataFakeJs[item.name] = Number(item.subValue);
              } else if (item.value === "Array" || item.value === "Object") {
                dataFakeJs[item.name] = JSON.parse(item.subValue);
              } else {
                dataFakeJs[item.name] = item.subValue;
              }
            }
            break;
          case 2:
            if (Array.isArray(item.value)) {
              const nestedData = item.value.map((subItem) =>
                fakeJsRenderer([subItem])
              );
              dataFakeJs[item.name] = nestedData;
            } else {
              throw new Error(
                `Expected an array for item typeId 2, got ${typeof item.value}`
              );
            }
            break;
          case 3:
            if (Array.isArray(item.value)) {
              const nestedData = {};
              item.value.forEach((subItem) => {
                nestedData[subItem.name] = fakeJsRenderer([subItem]);
              });
              dataFakeJs[item.name] = nestedData;
            } else {
              throw new Error(
                `Expected an array for item typeId 3, got ${typeof item.value}`
              );
            }
            break;
          default:
            console.error("typeId inconnu:", item.typeId);
        }
      } catch (error) {
        console.error(
          `Erreur lors du traitement de l'élément ${item.name}:`,
          error
        );
        dataFakeJs[item.name] = null;
      }
    });

    return dataFakeJs;
  }, []);

  // Exporter la fonction
  return useMemo(() => fakeJsRenderer(data), [data, fakeJsRenderer]);
};

export { useFakeJsRenderer };
