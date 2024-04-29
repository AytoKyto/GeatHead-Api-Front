import { faker } from "@faker-js/faker";
import { getFakerFunctionByString } from "./FakeDataValue";

// Fonction pour créer des données fictives
const fakeJsRenderer = (data) => {
  const dataFakeJs = {};

  data.forEach((item) => {
    switch (item.typeId) {
      case 1:
        try {
          const result = getFakerFunctionByString(item.value);
          dataFakeJs[item.name] = result();
        } catch (e) {
          console.error("Erreur lors de l'utilisation de 'Function':", e);
          throw e;
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
      default:
        console.error("typeId inconnu:", item.typeId);
    }
  });

  return dataFakeJs;
};

// Exporter la fonction
export { fakeJsRenderer };
