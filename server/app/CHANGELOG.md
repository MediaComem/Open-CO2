# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.0](https://github.com/MediaComem/open-co2/compare/v0.0.2...v0.5.0) (2022-08-18)


### ⚠ BREAKING CHANGES

* add limit / offset to categories API
* switch to node-config for configuration
* **model:** Fixing mongoose schema issue which caused a problem for the return of Co2eq values/Sources
* **seeder:** Calculation details are given in co2eq.calculationDetails
* **seeder:** Co2eq is no longer an array with different units. If children categories have different units, the mean calculation is ignored.

### Features

* Add drink category to seeder ([ea8e6a5](https://github.com/MediaComem/open-co2/commit/ea8e6a53ee9a0e28dc4d17bd3a55b62d2f6cd076))
* add limit / offset to categories API ([80bda78](https://github.com/MediaComem/open-co2/commit/80bda788aa69de1747816d67226e4fda6c9a352d))
* Add new category (drink) for tests ([05d74a1](https://github.com/MediaComem/open-co2/commit/05d74a1073cfdcd87db30a3f0f173ea63648f427))
* Add shebang to specified python interpreter version ([45f73f9](https://github.com/MediaComem/open-co2/commit/45f73f942f68d94dba9397e72a52e14a2fe8f84e))
* **api:** Add query to get a unit by type ([03486a9](https://github.com/MediaComem/open-co2/commit/03486a991b9c9f1d04daf858f4bc4ce0f5aad067))
* **api:** Update swagger documentation with version from package.json ([b275de5](https://github.com/MediaComem/open-co2/commit/b275de5090d2166273878dbb139f432b94407a70))
* **data:** Update data source with food and drink categories ([1472b13](https://github.com/MediaComem/open-co2/commit/1472b13f9fe186b57f6095d6da26ee74d9d76b49))
* Manage formatString() input error ([0b89186](https://github.com/MediaComem/open-co2/commit/0b891866f691c375951b99923c86237cda243975))
* **model:** Update model to match data structure of co2eq.calculationDetails ([ce0d7cd](https://github.com/MediaComem/open-co2/commit/ce0d7cd92136b88698fcea3c053efa90a070ae18))
* rootCategories API ([f0cb05e](https://github.com/MediaComem/open-co2/commit/f0cb05e5a35ab8ecf154a0804e830ead6dd59bc3))
* **schema:** Update types to match latest updates from seeder/data model ([3f1184e](https://github.com/MediaComem/open-co2/commit/3f1184e5fb1a8fb1d84b4c1ecf3746c22104f994))
* **seeder:** Calculation details are given in co2eq.calculationDetails ([39d7709](https://github.com/MediaComem/open-co2/commit/39d77097b83ed7def284dce90b5f1fbb38f93eb3))
* **seeder:** Co2eq is now an object ([e4c3e5f](https://github.com/MediaComem/open-co2/commit/e4c3e5f4e8fd70bb8ec587e45e9563d0a5e97196))
* **server:** Activate debug on Apollo server if not in production ([83119b4](https://github.com/MediaComem/open-co2/commit/83119b4a39c7e119df49ea37641f6bd7c475f8bb))
* **server:** Add links to GraphQL/REST documentation on server landing page ([9763835](https://github.com/MediaComem/open-co2/commit/97638351195522c7b75475fc1c693cef1d1fa576))
* switch to node-config for configuration ([078df0c](https://github.com/MediaComem/open-co2/commit/078df0c67b3a76cb243195f79b7fc6ecfaae0791))
* Update python client to consume categories endpoint ([7bc5926](https://github.com/MediaComem/open-co2/commit/7bc5926a816fc7758360818ef442017eeddb04b1))


### Bug Fixes

* Add missing unit type ([c3e9433](https://github.com/MediaComem/open-co2/commit/c3e94333e8ce9e43011cf243539d3e9281b34c74))
* **config:** Update nodemon config to ignore generated JS ([e29d390](https://github.com/MediaComem/open-co2/commit/e29d390c291cba02be0a1a7cc94b3b3ae008e191))
* **data:** Typo ([550fb23](https://github.com/MediaComem/open-co2/commit/550fb23f61e64796283509d14e5713f11ddf07dd))
* **data:** Typo ([4051df7](https://github.com/MediaComem/open-co2/commit/4051df739129095b27c9ee1621a2e6e85eee4282))
* Doesn't expose DB by default ([c418868](https://github.com/MediaComem/open-co2/commit/c418868b5d01e5b6e0be01e44748ced822884f01))
* Fix invalid inline doc ([477badc](https://github.com/MediaComem/open-co2/commit/477badc0d68c5824b65d0cc3c9a9b2745a53cab6))
* Missing link to license in footer ([edc20e5](https://github.com/MediaComem/open-co2/commit/edc20e5e49de558afc4321a14a0258acfae5f3fe))
* **model:** Fixing mongoose schema issue which caused a problem for the return of Co2eq values/Sources ([12ee4ec](https://github.com/MediaComem/open-co2/commit/12ee4ec23e22601f400705091957103c83b1ee7a))
* Playground default port exposed ([62ad857](https://github.com/MediaComem/open-co2/commit/62ad85715483a36f41a5af7c67bc88940d683f2a))
* Rm legacy links option ([0e457be](https://github.com/MediaComem/open-co2/commit/0e457bed4eb36c930087b7d62fb75815445f746b))
* Rm unused exposed port for Playground image ([d9202f2](https://github.com/MediaComem/open-co2/commit/d9202f204cfbd05ef50c5fc84af04ea49817755a))
* **seeder:** Fix error when generate categoryIDs ([9dd763d](https://github.com/MediaComem/open-co2/commit/9dd763d3473310d6165fa448279d7e05de8e8b70))
* **seeder:** Fix issue with row title ([156d917](https://github.com/MediaComem/open-co2/commit/156d917bb94637b36c3942a29b126b0fddc38e42))
* Typo ([7d45236](https://github.com/MediaComem/open-co2/commit/7d45236dde0013a07f39d4103f36ecfb9404d47a))
* Typo ([b08324c](https://github.com/MediaComem/open-co2/commit/b08324ce4c922bb0a9ce3041aac246fefcc41a1e))
* Update deadlink to Aramis DB ([9f868cc](https://github.com/MediaComem/open-co2/commit/9f868cc3867f75e9f82892a7e37168e97d8d03bf))
* Update hoppscotch collection with last API documentation ([6b27202](https://github.com/MediaComem/open-co2/commit/6b27202a3dd5e7b739f80a697c8e5a00b0b9ffe0))
* Use base image to avoid redundancy in stages ([1eceb56](https://github.com/MediaComem/open-co2/commit/1eceb56015791f6ac25b0578be09d28071cb46dd))
* Use base image to avoid redundancy in stages ([8433b60](https://github.com/MediaComem/open-co2/commit/8433b608ecc1c3b89f3a43740f6cbfda68832e41))

## [0.4.0](https://github.com/MediaComem/open-co2/compare/v0.3.0...v0.4.0) (2022-08-02)


### ⚠ BREAKING CHANGES

* add limit / offset to categories API
* switch to node-config for configuration

### Features

* add limit / offset to categories API ([80bda78](https://github.com/MediaComem/open-co2/commit/80bda788aa69de1747816d67226e4fda6c9a352d))
* Add shebang to specified python interpreter version ([45f73f9](https://github.com/MediaComem/open-co2/commit/45f73f942f68d94dba9397e72a52e14a2fe8f84e))
* Manage formatString() input error ([0b89186](https://github.com/MediaComem/open-co2/commit/0b891866f691c375951b99923c86237cda243975))
* rootCategories API ([f0cb05e](https://github.com/MediaComem/open-co2/commit/f0cb05e5a35ab8ecf154a0804e830ead6dd59bc3))
* switch to node-config for configuration ([078df0c](https://github.com/MediaComem/open-co2/commit/078df0c67b3a76cb243195f79b7fc6ecfaae0791))


### Bug Fixes

* Doesn't expose DB by default ([c418868](https://github.com/MediaComem/open-co2/commit/c418868b5d01e5b6e0be01e44748ced822884f01))
* Missing link to license in footer ([edc20e5](https://github.com/MediaComem/open-co2/commit/edc20e5e49de558afc4321a14a0258acfae5f3fe))
* Playground default port exposed ([62ad857](https://github.com/MediaComem/open-co2/commit/62ad85715483a36f41a5af7c67bc88940d683f2a))
* Rm legacy links option ([0e457be](https://github.com/MediaComem/open-co2/commit/0e457bed4eb36c930087b7d62fb75815445f746b))
* Rm unused exposed port for Playground image ([d9202f2](https://github.com/MediaComem/open-co2/commit/d9202f204cfbd05ef50c5fc84af04ea49817755a))
* Typo ([7d45236](https://github.com/MediaComem/open-co2/commit/7d45236dde0013a07f39d4103f36ecfb9404d47a))
* Update deadlink to Aramis DB ([9f868cc](https://github.com/MediaComem/open-co2/commit/9f868cc3867f75e9f82892a7e37168e97d8d03bf))
* Use base image to avoid redundancy in stages ([1eceb56](https://github.com/MediaComem/open-co2/commit/1eceb56015791f6ac25b0578be09d28071cb46dd))
* Use base image to avoid redundancy in stages ([8433b60](https://github.com/MediaComem/open-co2/commit/8433b608ecc1c3b89f3a43740f6cbfda68832e41))

## [0.3.0](https://github.com/MediaComem/open-co2/compare/v0.0.2...v0.3.0) (2022-07-18)


### ⚠ BREAKING CHANGES

* **model:** Fixing mongoose schema issue which caused a problem for the return of Co2eq values/Sources
* **seeder:** Calculation details are given in co2eq.calculationDetails
* **seeder:** Co2eq is no longer an array with different units. If children categories have different units, the mean calculation is ignored.

### Features

* **api:** Add query to get a unit by type ([03486a9](https://github.com/MediaComem/open-co2/commit/03486a991b9c9f1d04daf858f4bc4ce0f5aad067))
* **api:** Update swagger documentation with version from package.json ([b275de5](https://github.com/MediaComem/open-co2/commit/b275de5090d2166273878dbb139f432b94407a70))
* **model:** Update model to match data structure of co2eq.calculationDetails ([ce0d7cd](https://github.com/MediaComem/open-co2/commit/ce0d7cd92136b88698fcea3c053efa90a070ae18))
* **schema:** Update types to match latest updates from seeder/data model ([3f1184e](https://github.com/MediaComem/open-co2/commit/3f1184e5fb1a8fb1d84b4c1ecf3746c22104f994))
* **seeder:** Calculation details are given in co2eq.calculationDetails ([39d7709](https://github.com/MediaComem/open-co2/commit/39d77097b83ed7def284dce90b5f1fbb38f93eb3))
* **seeder:** Co2eq is now an object ([e4c3e5f](https://github.com/MediaComem/open-co2/commit/e4c3e5f4e8fd70bb8ec587e45e9563d0a5e97196))
* **server:** Activate debug on Apollo server if not in production ([83119b4](https://github.com/MediaComem/open-co2/commit/83119b4a39c7e119df49ea37641f6bd7c475f8bb))
* **server:** Add links to GraphQL/REST documentation on server landing page ([9763835](https://github.com/MediaComem/open-co2/commit/97638351195522c7b75475fc1c693cef1d1fa576))
* Update python client to consume categories endpoint ([7bc5926](https://github.com/MediaComem/open-co2/commit/7bc5926a816fc7758360818ef442017eeddb04b1))


### Bug Fixes

* **config:** Update nodemon config to ignore generated JS ([e29d390](https://github.com/MediaComem/open-co2/commit/e29d390c291cba02be0a1a7cc94b3b3ae008e191))
* Fix invalid inline doc ([477badc](https://github.com/MediaComem/open-co2/commit/477badc0d68c5824b65d0cc3c9a9b2745a53cab6))
* **model:** Fixing mongoose schema issue which caused a problem for the return of Co2eq values/Sources ([12ee4ec](https://github.com/MediaComem/open-co2/commit/12ee4ec23e22601f400705091957103c83b1ee7a))
* **seeder:** Fix error when generate categoryIDs ([9dd763d](https://github.com/MediaComem/open-co2/commit/9dd763d3473310d6165fa448279d7e05de8e8b70))
* Typo ([b08324c](https://github.com/MediaComem/open-co2/commit/b08324ce4c922bb0a9ce3041aac246fefcc41a1e))
* Update hoppscotch collection with last API documentation ([6b27202](https://github.com/MediaComem/open-co2/commit/6b27202a3dd5e7b739f80a697c8e5a00b0b9ffe0))

## [0.2.0](https://github.com/MediaComem/open-co2/compare/v0.1.0...v0.2.0) (2022-05-10)


### ⚠ BREAKING CHANGES

* **rest-api:** Use env var to define tree depth rendered by the rest api
* **resolver:** use categories() and units() queries to get full list of categories and units

### Features

* **graphql:** Use graphql tools to generate executable schema ([aa9eed4](https://github.com/MediaComem/open-co2/commit/aa9eed409958e8b1f7f010e78f336a46b8e825a9))
* **REST API:** Add swagger-ui package to serve REST API doc ([f3547af](https://github.com/MediaComem/open-co2/commit/f3547af2c92e56e009beab0c8fd1ca4d67a212f9))
* **REST API:** Use Sofa/OpenAPI to generate REST doc + server with swagger UI ([c618fe8](https://github.com/MediaComem/open-co2/commit/c618fe85e551b073f8cd15969cae6ac65ac2d030))
* **rest-api:** Use env var to define tree depth rendered by the rest api ([9ef38aa](https://github.com/MediaComem/open-co2/commit/9ef38aa473609a42f149e1adbe6ea87037c4ac5b))
* **server:** Use Sofa and Express router to create REST API ([04bc8cc](https://github.com/MediaComem/open-co2/commit/04bc8cc67ad30234f79bfc5ca9a7fac27721d37d))


### Bug Fixes

* Add default NODE_ENV value ([8f94b1e](https://github.com/MediaComem/open-co2/commit/8f94b1ed36b1172be209bf0aae9d63a6b96a1f54))
* **ci:** Change to npm i ([8897488](https://github.com/MediaComem/open-co2/commit/88974887d2dd239d437dd0d7706e4cced06d99ac))
* **ci:** Remove change directory ([df8ec85](https://github.com/MediaComem/open-co2/commit/df8ec8506a9d809ce350a073a0ff6488668f5130))
* **ci:** Update working directory ([1cf4356](https://github.com/MediaComem/open-co2/commit/1cf43563bee71239ca74f3f7ac8d6e3ee6274745))
* Remove special characters and keep only letters/numbers to formatString ([cae93d7](https://github.com/MediaComem/open-co2/commit/cae93d7bb9d06d731656e89b28329666f0c89ed0))
* **seeder:** Fix typo with row details property name ([b2a1ef5](https://github.com/MediaComem/open-co2/commit/b2a1ef5d2b475792ae37ac4045fbc6767641c8e7))
* **seeder:** Use getMeanFromArray() in deviation calculation ([fb823a3](https://github.com/MediaComem/open-co2/commit/fb823a34a3c34cddaadbba24a8b0696913ee2ccb))
* Update default link to rest endpoint to /infos ([167185a](https://github.com/MediaComem/open-co2/commit/167185a5bce55726c8e0333fbbabacfea60b32fe))
* Update links on server landing page ([6eb264d](https://github.com/MediaComem/open-co2/commit/6eb264dd12eec5c131d7bb54371c79e4d65abb97))
* Update resolver queries name according to Schema ([c971696](https://github.com/MediaComem/open-co2/commit/c971696e47fad05b78b245bff715f60beaa0cd47))


* **resolver:** Update queries name for categories/units ([c16659b](https://github.com/MediaComem/open-co2/commit/c16659b048b64d5c914e21566a0daf5e3d950896))

## [0.1.0](https://github.com/MediaComem/open-co2/compare/v0.0.1...v0.1.0) (2022-05-05)


### ⚠ BREAKING CHANGES

* **seeder:** fileComposer manage categories OR units sheets
* Review types

### Features

* Add function to generate hash from string ([43f7974](https://github.com/MediaComem/open-co2/commit/43f7974cde59bc18e8e6732440f870d6c9ff2310))
* Add getDeviationFromArray function ([0e2ee9f](https://github.com/MediaComem/open-co2/commit/0e2ee9f9ca7e279ace63fe87a46675a1172846f1))
* Add landing page to access server endpoints ([e592c87](https://github.com/MediaComem/open-co2/commit/e592c87a8312415de0b665c27cfd0818128440ee))
* Add mongoose models ([f5e5a75](https://github.com/MediaComem/open-co2/commit/f5e5a75390faae3ccda97f1385d510afb92eb1ff))
* Add temporary content for base express route ([3adaf8a](https://github.com/MediaComem/open-co2/commit/3adaf8a1e5c14314677c165dfc2dfb027e44aa79))
* Add winston logger ([4b9eb51](https://github.com/MediaComem/open-co2/commit/4b9eb51a30d5a244632a39bb27050fe1dab1cad8))
* Connect to DB when starting server ([31bab9d](https://github.com/MediaComem/open-co2/commit/31bab9d0b31a280c00d6e9b23da5dd6a27cbdf18))
* **seeder:** Add init db script to populate categories ([96ebcdc](https://github.com/MediaComem/open-co2/commit/96ebcdca7b1f179e716f391bc785eba1ed4c98b7))


### Bug Fixes

* Add default values for port and endpoint ([135dded](https://github.com/MediaComem/open-co2/commit/135ddedc1e4dd10376f8bfba1c450f8e3cf70ae4))
* Add default values for port and endpoint ([e33308e](https://github.com/MediaComem/open-co2/commit/e33308ed4da85a805d8c704e98f882a31182fc0e))
* Add G_CO2_KWH enum unit type to match sheet ([b286805](https://github.com/MediaComem/open-co2/commit/b286805b792d70999276b34d2658af400bd9c3fd))
* Check string in formatString util function ([b4685b3](https://github.com/MediaComem/open-co2/commit/b4685b3447e07e0656a2ee7100260b0e6aaf1520))
* **data:** Review unit types and descriptions ([664cb5f](https://github.com/MediaComem/open-co2/commit/664cb5f0e3bb096bb8a340bdb9b30f655aeb2809))
* Ignore generated JS file from seeder ([65358dd](https://github.com/MediaComem/open-co2/commit/65358dd781b921ab87f20c467205f23363f1d4fe))
* Remove comma in format string function ([9c772b4](https://github.com/MediaComem/open-co2/commit/9c772b407c2a106b04c21c58b24f6fbb30e01f12))
* **seeder:** Update js file path ([cb7880c](https://github.com/MediaComem/open-co2/commit/cb7880c3f46debcae95596724654352b2c51d242))
* Unit type can be nullable ([44976cd](https://github.com/MediaComem/open-co2/commit/44976cd307d685c74baab17e356d4fab5b261051))
* Update link to tabular data ([406674e](https://github.com/MediaComem/open-co2/commit/406674ed46b6b6d1cb3e3ddc241c209abb09dac2))
* Update mock generator with faker ([b241b4a](https://github.com/MediaComem/open-co2/commit/b241b4ab39073034d2d3f497c21e4f8bff0eafa6))
* Update resolver to match new type definition and mocks ([7e784d8](https://github.com/MediaComem/open-co2/commit/7e784d819250a2a153eea09c1171c3b103cdb60b))
* Update unit model ([39b145e](https://github.com/MediaComem/open-co2/commit/39b145e3395eb3c094424473d22a631a65cf2808))


* Review types ([714b3ff](https://github.com/MediaComem/open-co2/commit/714b3ff194a9258a1c39c49400e5cbc143372c7d))
* **seeder:** Process methods are public ([d708fd7](https://github.com/MediaComem/open-co2/commit/d708fd7cfb60440212d3d027ec1b95b4345fbb95))

### 0.0.1 (2022-04-11)


### Features

* Add dateOfLatestUpdate property to equivalent type ([a59bbb1](https://github.com/MediaComem/open-co2/commit/a59bbb1c9e7501300c7d323d3c39a5eb7e0bc058))
* Add mock to fake missing data ([b9fc229](https://github.com/MediaComem/open-co2/commit/b9fc2290514fe0daaf38092dbcf65e182aaca3ba))
* Add mocks to resolve main types queries ([46a7ee6](https://github.com/MediaComem/open-co2/commit/46a7ee67397193c8e6c6cbe4ae0e93f545c09007))
* Add queries to get type collections by ID ([56e4a8e](https://github.com/MediaComem/open-co2/commit/56e4a8ea44ebeb6ba33108306929a99d4df78b6d))
* Add resolver with date custom scalar ([1240bca](https://github.com/MediaComem/open-co2/commit/1240bca1a33c57679e3d606896aa4b3d6750fa80))
* Add temp internal ID custom scalar ([80ab2f6](https://github.com/MediaComem/open-co2/commit/80ab2f625bdca28864d4dd9a2f087719f9ca991b))
* Define GraphQL types ([e0c32f6](https://github.com/MediaComem/open-co2/commit/e0c32f663ef5e4227e3b3a99c3ed5c9dbab6cffc))
* Resolver type arrays that contains IDs ([872b765](https://github.com/MediaComem/open-co2/commit/872b765dbb57d4662cbe72d3357dbd33d191bbec))
