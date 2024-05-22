export default function InfoSiteAuth() {
  return (
    <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            GetHead
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
            Créez votre compte
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Créez facilement des API de test personnalisées avec des données
            fictives en quelques clics, grâce à notre générateur d'API alimenté
            par Faker.js. Simplifiez votre processus de développement et
            améliorez la qualité de vos tests avec nos solutions sur mesure.
          </p>
        </div>
      </div>

      <div
        className="p-4 rounded-xl shadow-lg backdrop-blur-lg overflow-hidden"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "1px solid",
          borderImageSlice: 1,
          borderRadius: "0.75rem",
          borderImageSource:
            "linear-gradient(to right, rgba(128, 128, 128, 0.2), rgba(64, 64, 64, 0.2))",
        }}
      >
        <h2 className="text-center text-white">Contenu Flou</h2>
        <p className="text-white">
          Ce contenu a un arrière-plan flou avec une bordure en dégradé de gris.
        </p>
      </div>
    </div>
  );
}
