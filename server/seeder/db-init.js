print("");
print("========================================================");
print("🗃️ db-init.js start");
print("========================================================");
print("");

print("Connect to DB");
db = connect("localhost:27017/open-co2");

print("Clean DB");
db.dropDatabase();

print("Load and insert categories");
load("/docker-entrypoint-initdb.d/input/categories.js");
db.categories.insert(categoriesData);

print("Load and insert units");
load("/docker-entrypoint-initdb.d/input/units.js");
db.units.insert(unitsData);

print("");
print("========================================================");
print("🏁 db-init.js end");
print("========================================================");
print("");
