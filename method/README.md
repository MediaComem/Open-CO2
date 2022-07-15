![Open Database and API for CO₂ equivalencies](../cover.png)

# Method and information

The data are based on Life Cycle Assessment (LCA).

## Scope

The expected use case of the data from this repository is for SMEs to estimate a simplified company's carbon footprint based on easy accessible data.  
Here are the most relevant categories identified:

- Energy consumption (electricity / heating)
- Travels (commuting, business travel)
- IT equipment
- Basic office furniture
- Meals

Due to the expected use case, the CO2 equivalent data in the database corresponds to a **cradle to gate** evaluation (i.e. Impact of resource extraction + Manufacturing). The use phase corresponds mostly to energy use and is thus included in the company energy consumption.

The end of life (EoL) analysis is considered insignificant for most of the assessed products. In case it has a significant impact, it has been added to the value returned by the API. See [End of life relative contribution analysis](raw%20data/EndOfLifeAnalysis.pdf) document.

Although most of the data are independent of the location, the database is targeted to be used for use cases in **Switzerland**. In particular energy information are based on Swiss electricity providers and Swiss energy mix, public transports on Swiss public transport providers.

## Data source

You can check the details of the sources used for a specific data by checking the `source` field of the data returned by the API.  
The number of sources has been limited to keep consistency between data sources. As a basic rule, only one source is used for a specific field.

Here are the main external sources used:

- [KBOB](https://www.kbob.admin.ch/kbob/de/home/themen-leistungen/nachhaltiges-bauen/oekobilanzdaten_baubereich.html): Swiss confederation data for construction eco analysis
- [Ademe](https://www.ademe.fr): French Agency for Ecological Transition
- [EPFL](https://www.epfl.ch/campus/restaurants-shops-hotels/fr/nos-promesses/sain/nutrimenu/#): ecoMenu sustainability project from École Polytechnique Fédérale de Lausanne

The consolidation, analysis and verification of data for the version 1.0 was conducted by the [IGT](https://heig-vd.ch/rad/instituts/igt) from the Swiss Universities of Applied Science Wester Switzerland.

More information on original data and hypotheses are available in the [raw data](raw%20data/) folder.
