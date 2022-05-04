print("");
print("========================================================");
print("POPULATE DB");
print("========================================================");
print("");

db = connect("localhost:27017/open-co2");
print("Connect to DB");

load("/docker-entrypoint-initdb.d/input/categories.js");
print(categoriesData);

db.categories.insert(categoriesData);
