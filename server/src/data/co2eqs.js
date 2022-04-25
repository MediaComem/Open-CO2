export const co2eqs = [
  {
    name: "Nuclear power plant",
    description: "Nuclear power plant",
    value: 0.0239,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Hydraulic energy",
    description: "Hydraulic energy",
    value: 0.0124,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Wind energy",
    description: "Wind energy",
    value: 0.0284,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic (average)",
    description: "Photovoltaic (average)",
    value: 0.0476,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic sloped roof",
    description: "Photovoltaic sloped roof",
    value: 0.055,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic flat roof",
    description: "Photovoltaic flat roof",
    value: 0.0529,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic facade",
    description: "Photovoltaic facade",
    value: 0.072,
    unit: "KWH",
    isCalculated: false
  }
  /*
  {
    name: "District heating from waste incineration, CH system average",
    description: "District heating from waste incineration, CH system average",
    value: 0.0668,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Chaudière, mazout EL",
    description: "Chaudière, mazout EL",
    value: 0.343,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Chaudière, gaz naturel",
    description: "Chaudière, gaz naturel",
    value: 0.234,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Chaudière, bûches de bois",
    description: "Chaudière, bûches de bois",
    value: 0.0334,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Chaudière, plaquettes de bois",
    description: "Chaudière, plaquettes de bois",
    value: 0.0212,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Chaudière, granules (pellets)",
    description: "Chaudière, granules (pellets)",
    value: 0.0378,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Chaudière, biogaz",
    description: "Chaudière, biogaz",
    value: 0.127,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Pompe à chaleur électrique air-eau",
    description: "Pompe à chaleur électrique air-eau",
    value: 0.0579,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Pompe à chaleur électrique sondes géothermiques",
    description: "Pompe à chaleur électrique sondes géothermiques",
    value: 0.0541,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Pompe à chaleur électrique eaux souterraines",
    description: "Pompe à chaleur électrique eaux souterraines",
    value: 0.0474,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Collecteurs solaires plan, eau chaude maison individuelle",
    description: "Collecteurs solaires plan, eau chaude maison individuelle",
    value: 0.042,
    unit: "KWH",
    isCalculated: false
  },
  {
    name:
    description:
      "Collecteurs solaires plan, chaleur et eau chaude maison individuelle",
    value: 0.0378,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Collecteurs solaires plan, eau chaude immeuble locatif",
    description: "Collecteurs solaires plan, eau chaude immeuble locatif",
    value: 0.0153,
    unit: "KWH",
    isCalculated: false
  },
  {
    name:
    description:
      "Collecteurs solaires à tubes, chaleur et eau chaude maison individuelle",
    value: 0.0346,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "CH consumer mix",
    description: "CH consumer mix",
    value: 0.125,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Nuclear power plant",
    description: "Nuclear power plant",
    value: 0.0239,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Hydraulic energy",
    description: "Hydraulic energy",
    value: 0.0124,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Wind energy",
    description: "Wind energy",
    value: 0.0284,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic (average)",
    description: "Photovoltaic (average)",
    value: 0.0476,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic sloped roof",
    description: "Photovoltaic sloped roof",
    value: 0.055,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic flat roof",
    description: "Photovoltaic flat roof",
    value: 0.0529,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaic facade",
    description: "Photovoltaic facade",
    value: 0.072,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaïque (moyen)",
    description: "Photovoltaïque (moyen)",
    value: 0.0368,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaïque toiture inclinée",
    description: "Photovoltaïque toiture inclinée",
    value: 0.0435,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaïque toiture plate",
    description: "Photovoltaïque toiture plate",
    value: 0.0416,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Photovoltaïque façade",
    description: "Photovoltaïque façade",
    value: 0.0587,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Energie éolienne",
    description: "Energie éolienne",
    value: 0.0193,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "SIG 100% Vitale bleu",
    description: "SIG 100% Vitale bleu",
    value: 12.4,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Romande énergie Terre Suisse",
    description: "Romande énergie Terre Suisse",
    value: 12.4,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Groupe-E STAR",
    description: "Groupe-E STAR",
    value: 25.6,
    unit: "KWH",
    isCalculated: false
  },
  {
    name: "Cargo de marchandise, navigation intérieure",
    description: "Cargo de marchandise, navigation intérieure",
    value: 0.04,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Transport aérien, moyenne",
    description: "Transport aérien, moyenne",
    value: 1.67,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Train de marchandises",
    description: "Train de marchandises",
    value: 0.0123,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Hélicoptère",
    description: "Hélicoptère",
    value: 759,
    unit: "H",
    isCalculated: false
  },
  {
    name: "Navire de haute mer",
    description: "Navire de haute mer",
    value: 0.00739,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Pétrolier de haute mer",
    description: "Pétrolier de haute mer",
    value: 0.0064,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Véhicule de transport, jusqu'à 3.5 t",
    description: "Véhicule de transport, jusqu'à 3.5 t",
    value: 1.77,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Camion (moyenne CH)",
    description: "Camion (moyenne CH)",
    value: 0.144,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Camion 3.5-7.5 t",
    description: "Camion 3.5-7.5 t",
    value: 0.553,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Camion 7.5-16 t",
    description: "Camion 7.5-16 t",
    value: 0.232,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Camion 16-32 t",
    description: "Camion 16-32 t",
    value: 0.183,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Camion 32-40 t",
    description: "Camion 32-40 t",
    value: 0.118,
    unit: "TKM",
    isCalculated: false
  },
  {
    name: "Autobus",
    description: "Autobus",
    value: 0.156,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Train de grand parcours Suisse",
    description: "Train de grand parcours Suisse",
    value: 0.00739,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Train de grand parcours Allemagne, ICE",
    description: "Train de grand parcours Allemagne, ICE",
    value: 0.0343,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Avion passagers, moyenne",
    description: "Avion passagers, moyenne",
    value: 0.283,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Hélicoptère, monomoteur",
    description: "Hélicoptère, monomoteur",
    value: 968,
    unit: "H",
    isCalculated: false
  },
  {
    name: "Hélicoptère, bi-moteur",
    description: "Hélicoptère, bi-moteur",
    value: 1410,
    unit: "H",
    isCalculated: false
  },
  {
    name: "Voiture, moyenne CH",
    description: "Voiture, moyenne CH",
    value: 0.212,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Voiture, essence",
    description: "Voiture, essence",
    value: 0.225,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Voiture, biogaz",
    description: "Voiture, biogaz",
    value: 0.103,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Voiture, gasoil",
    description: "Voiture, gasoil",
    value: 0.192,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Voiture, électricité",
    description: "Voiture, électricité",
    value: 0.0928,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Voiture, gaz naturel",
    description: "Voiture, gaz naturel",
    value: 0.168,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Train régional",
    description: "Train régional",
    value: 0.0091,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Autocar",
    description: "Autocar",
    value: 0.0612,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Scooter, essence",
    description: "Scooter, essence",
    value: 0.127,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Tram",
    description: "Tram",
    value: 0.0432,
    unit: "PKM",
    isCalculated: false
  },
  {
    name: "Trolleybus",
    description: "Trolleybus",
    value: 0.0302,
    unit: "PKM",
    isCalculated: false
  }
  */
];
