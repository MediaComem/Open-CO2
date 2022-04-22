export const categories = [
  {
    name: "Energy",
    description: "Category of CO2 equivalents for the energy sector.",
    categories: ["Electricity", "Heat"],
    co2eqs: []
  },
  {
    name: "Electricity",
    description: "Energy field related to electricity",
    categories: ["Grid", "On site"],
    co2eqs: []
  },
  {
    name: "Grid",
    description: "Grid electricity",
    categories: ["Renewable", "Non-renewable", "Electricity mix CH"],
    co2eqs: []
  },
  {
    name: "On site",
    description: "Electricity produced on site",
    categories: [],
    co2eqs: []
  },
  {
    name: "Renewable",
    description: "Renewable source of energy",
    categories: ["Wind", "Hydraulic", "Solar"],
    co2eqs: []
  },
  {
    name: "Non-renewable",
    description: "Non-renewable source of energy",
    categories: ["Nuclear"],
    co2eqs: []
  },
  {
    name: "Electricity mix CH",
    description: "Electricity mix from main CH providers (g CO2/kWh))",
    categories: [],
    co2eqs: []
  },
  {
    name: "Wind",
    description: "Wind energy source",
    categories: [],
    co2eqs: ["Wind energy"]
  },
  {
    name: "Hydraulic",
    description: "Hydraulic energy source",
    categories: [],
    co2eqs: ["Hydraulic energy"]
  },
  {
    name: "Nuclear",
    description: "",
    categories: [],
    co2eqs: ["Nuclear power plant"]
  },
  {
    name: "Solar",
    description: "Solar energy source",
    categories: [],
    co2eqs: [
      "Photovoltaic (average)",
      "Photovoltaic sloped roof",
      "Photovoltaic flat roof",
      "Photovoltaic facade"
    ]
  },
  {
    name: "Heat",
    description: "Energy field related to heat",
    categories: [
      "District",
      "Non-renewable useful",
      "Renewable useful on site"
    ],
    co2eqs: []
  },
  {
    name: "District",
    description: "District heating",
    categories: [],
    co2eqs: []
  },
  {
    name: "Non-renewable useful",
    description: "Non-renewable useful heat",
    categories: [],
    co2eqs: []
  },
  {
    name: "Renewable useful on site",
    description: "Renewable useful heat produced on site",
    categories: [],
    co2eqs: []
  },
  {
    name: "Transports",
    description: "Category of transport-related CO2 equivalent",
    categories: ["Goods", "People"],
    co2eqs: []
  },
  {
    name: "Goods",
    description: "Goods transport",
    categories: [],
    co2eqs: []
  },
  {
    name: "People",
    description: "People transports",
    categories: ["Personal transportation", "Helicopter"],
    co2eqs: []
  },
  {
    name: "Personal transportation",
    description: "Personal transportation vehicles",
    categories: [],
    co2eqs: []
  },
  {
    name: "Helicopter",
    description: "Helicopter transportation (in H)",
    categories: [],
    co2eqs: []
  }
];
