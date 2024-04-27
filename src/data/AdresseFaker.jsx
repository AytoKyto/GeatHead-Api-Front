import React from "react";

const adresse = [
    "buildingNumber",
    "cardinalDirection",
    "city",
    "cityName",
    "cityPrefix",
    "citySuffix",
    "country",
    "countryCode",
    "county",
    "direction",
    "latitude",
    "longitude",
    "nearbyGPSCoordinate",
    "ordinalDirection",
    "secondaryAddress",
    "state",
    "stateAbbr",
    "streetAddress",
    "streetName",
    "streetPrefix",
    "streetSuffix",
    "timeZone",
    "zipCode",
    "zipCodeByState"
];

export default function AdresseFaker() {
    return (
        <>
            {adresse.map((type) => (
                <div
                    className="flex flex-1 justify-center items-center w-full p-5 bg-slate-600 rounded-lg cursor-pointer hover:bg-slate-500 transition-all"
                    key={type}
                >
                    <p className="text-slate-100">{type}</p>
                </div>
            ))}
        </>
    );
}