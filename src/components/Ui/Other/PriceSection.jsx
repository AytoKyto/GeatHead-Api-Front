import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
    { value: 'mensuel', label: 'Mensuel', priceSuffix: '/mois' },
    { value: 'annuel', label: 'Annuel', priceSuffix: '/an' },
]
const tiers = [
    {
        name: 'Starter',
        id: 'tier-freelancer',
        href: '#',
        price: { mensuel: 'Gratuit', annuel: 'Gratuit' },
        description: 'Notre formule gratuite est idéale pour commencer à découvrir notre solution et à explorer ses fonctionnalités de base.',
        features: ['1 projet', '500 requêtes par mois', '5 routes par projet' ],
        mostPopular: false,
    },
    {
        name: 'Classic',
        id: 'tier-startup',
        href: '#',
        price: { mensuel: '3 €', annuel: '30 €' },
        description: 'Notre formule Classic est idéale pour les développeurs qui souhaitent créer des API de test sur mesure pour quelques euros par mois ou par an.',
        features: [
            '10 projets',
            '10 000 requêtes par mois',
            '10 routes par projet',
        ],
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { mensuel: '10 €', annuel: '100 €' },
        description: 'Notre formule Enterprise est idéale pour les développeurs qui souhaitent créer des API de test sur mesure sans contraintes.',
        features: [
            'Projects Illimités',
            'Requêtes Illimitées',
            'Routes Illimitées',
        ],
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function PriceSection() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-full text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Tarification de GetHead</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Nos plans de prix flexibles pour répondre à tous vos besoins
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    Choisissez la formule qui correspond le mieux à vos besoins, avec des options flexibles pour s'adapter à l'évolution de vos projets.
                </p>
                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
                    >
                        <RadioGroup.Label className="sr-only">Féquence de paiement</RadioGroup.Label>
                        {frequencies.map((option) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full py-1 px-2.5')
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-indigo-500 py-1 px-2.5 text-xs font-semibold leading-5 text-white">
                                        Le plus populaire
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                )}
                            >
                                Commencer
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
