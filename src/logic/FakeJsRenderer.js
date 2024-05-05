import { faker } from "@faker-js/faker";
import { getFakerFunctionByString } from "./FakeDataValue";

// Fonction pour créer des données fictives
const fakeJsRenderer = (data) => {
  const dataFakeJs = {};

  data.forEach((item) => {
    switch (item.typeId) {
      case 1:
        try {
          if (item.value.includes("faker")) {
            const result = getFakerFunctionByString(item.value);
            dataFakeJs[item.name] = result();
          } else {
            try {
              if (item.value === "Number") {
                dataFakeJs[item.name] = Number(item.subValue);
              } else if (item.value === "Array" || item.value === "Object") {
                dataFakeJs[item.name] = JSON.parse(item.subValue);
              } else {
                dataFakeJs[item.name] = item.subValue;
              }
            } catch (innerError) {
              console.error(
                `Erreur lors du traitement de l'élément ${item.name}:`,
                innerError
              );
              // Définir une valeur par défaut ou autre traitement en cas d'erreur
              dataFakeJs[item.name] = null;
            }
          }
        } catch (outerError) {
          console.error(
            "Erreur lors de l'utilisation de 'Function':",
            outerError
          );
          throw outerError;
        }
        break;
      case 2:
        try {
          const nestedData = item.value.map((subItem) =>
            fakeJsRenderer([subItem])
          );
          dataFakeJs[item.name] = nestedData;
        } catch (e) {
          console.error("Erreur lors de l'utilisation de 'Function':", e);
          throw e;
        }
        break;
      case 3:
        try {
          const nestedData = {};
          item.value.forEach((subItem, index) => {
            nestedData[subItem.name] = fakeJsRenderer([subItem]);
          });
          dataFakeJs[item.name] = nestedData;
        } catch (e) {
          console.error("Erreur lors de l'utilisation de 'Function':", e);
          throw e;
        }
        break;

      default:
        console.error("typeId inconnu:", item.typeId);
    }
  });

  return dataFakeJs;
};

// Exporter la fonction
export { fakeJsRenderer };
