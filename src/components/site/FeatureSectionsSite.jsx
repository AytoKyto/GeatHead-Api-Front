import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Api auto hébergé.",
    description:
      "Facilitez la création de votre API grâce à notre solution d'API auto-hébergée, simplifiant le processus et vous offrant une infrastructure solide et sécurisée.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Facilité de création.",
    description:
      "Notre interface utilisateur simple et efficace va droit au but pour une expérience utilisateur optimale.",
    icon: ArrowPathIcon,
  },
  {
    name: "Qualité de type de données.",
    description:
      "Notre large gamme de types de données vous permet de créer facilement n'importe quelle API selon vos besoins.",
    icon: ServerIcon,
  },
];

export default function FeatureSectionSite() {
  return (
    <div className="bg-slate-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-full sm:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-400">
            GetHead Api Générateur
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quelle sont les fonctionnalités ?
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Notre service d'API de test avec Faker.js vous permet de créer facilement des API de test réalistes et personnalisées avec des données fictives. Simplifiez vos tests de développement, améliorez la qualité de votre code et accélérez votre processus de mise sur le marché grâce à notre générateur d'API intuitif et performant.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-slate-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-slate-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute top-1 left-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
