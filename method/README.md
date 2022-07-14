![Open Database and API for CO₂ equivalencies](../cover.png)

# Method and informations

The data are based on Life Cycle Assessment.

## Scope

The expected use case of the data from this repository is for SMEs to estimate a simplified company carbon footprint based on easy accessible data. The most relevant categories identified are:

* energy consumption (electricity/heating)
* travels (commuting, business travel)
* IT equipment
* basic office furniture
* meals

Due to the expected use case, the CO2 equivalent data in the database corresponds to a **cradle to gate** evaluation (ie: impact of resource extraction + manufacturing). The use phase corresponds mostly to energy use and is thus included in the company energy consumption.

The end-of-life analysis is considered insignificant for most of the assessed products. In case it has a significant impact, it has been added to the value returned by the API. See [End of life relative contribution Analysis](raw%20data/EndOfLifeAnalysis.pdf).

## Data source

You can check the details of the sources used for a specific data by checking the *source* field of the data returned by the API. The number of sources have been limited to keep consistency between data sources. As a basic rule, only one source is used for a specific field.

The main external sources used are:

* [KBOB](https://www.kbob.admin.ch/kbob/de/home/themen-leistungen/nachhaltiges-bauen/oekobilanzdaten_baubereich.html): Swiss confederation data for construction eco analysis
* [Ademe](https://www.ademe.fr): The French Agency for Ecological Transition
* [EPFL](https://www.epfl.ch/campus/restaurants-shops-hotels/fr/nos-promesses/sain/nutrimenu/#):  ecoMenu sustainability project from Ecole Polytechnique Fédérale de Lausanne

The consolidation, analysis and verification of data for the version 1.0 was conducted by the [IGT](https://heig-vd.ch/rad/instituts/igt) from the Swiss Universities of Applied Science Wester Switzerland.

More information on original data and hypothesis are available in the *Raw Data* folder.
