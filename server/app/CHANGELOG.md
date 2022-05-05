# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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