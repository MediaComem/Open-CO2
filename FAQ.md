# FAQ

Frequently asked questions about this open Data Database and API for CO₂ Equivalent Values.

## API

**1. How to setup an API instance?**
To test the API locally, you can use docker. Please follow the directions in [README.md](./README.md#first-time-setup)

**2. How can I integrate the API?**
To integrate the API you can use either GraphQL API or REST API. You can check client examples in the [client examples folder](./client-examples/README.md)
You can also check the _Test the API_ section in the [README](./README.md#test-the-api)

**3. Is there a cloud version of the API?**
Currently there is no cloud version of the API but you can deploy your own version.

**4. What kind of information can I get using the API?**
The API provide CO2 equivalent version for different categories. The main use case is companies in Switzerland and the categories cover for instance energy, transportation, accomodation, IT equipment and food.
In case no specific value is available for a category, the API will return the average value of the subcategories. For instance the _tablet_ category will return the average GWP of tablets of size 9 to 13 inch.

## Data

**1. What kind of data is available?**
The main use case is companies in Switzerland and the categories cover for instance energy, transportation, accomodation, IT equipment and food.

**2. Where are the data coming from?**
Please check the [method](./method/README.md) for more information.

**3. Is the data accurate?**
The data is as accurate as possible and has been reviewed by the University of Applied Science Western Switzerland [HEIG-VD](https://www.heig-vd.ch). Please bear in mind that the data is specifically targeting Switzerland (e.g. electricity category collects information from Swiss suppliers).
In case you see any inconsistencies, you can [open an issue](https://github.com/MediaComem/open-co2/issues) or [create a PR](https://github.com/MediaComem/open-co2/pulls) to fix the issue.

**4. How can I report an error?**
In case you see any inconsistencies, you can [open an issue](https://github.com/MediaComem/open-co2/issues) or [create a PR](https://github.com/MediaComem/open-co2/pulls) to fix the issue.

**5. How can I contribute to the data?**
If you want to contribute to the data, you can update the [CO2 input file](./server/seeder/data/input/Open%20CO2.xlsx). Please check the [README](./README.md#co2-data) to test data locally.
Make sure that the data is compatible with the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/).

## License

**1. Under which license is the data distributed ?**
The Data(base) is licensed under the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/)
Source code is licensed under the MIT License.
