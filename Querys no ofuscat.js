//Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find({});
//Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
//*Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloent el camp //_id per tots els documents en la col·lecció Restaurants.
db.restaurants.find(
  {},
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 }
);
//Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloent el camp _id //per tots els documents en la col·lecció Restaurants.
db.restaurants.find(
  {},
  { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 }
);
//Escriu una consulta per mostrar tots els restaurants que estan en el Bronx.
db.restaurants.find({ borough: "Bronx" });
//Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx.
db.restaurants.find({ borough: "Bronx" }).limit(5);
//Escriu una consulta per mostrar els 5 restaurants després de saltar els primers 5 que siguin del //Bronx.
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5);
//Escriu una consulta per trobar els restaurants que tenen algun score més gran de 90.
db.restaurants.find({ "grades.score": { $gt: 90 } });
//Escriu una consulta per trobar els restaurants que tenen un score més gran que 80 però menys que //100.
db.restaurants.find({
  $and: [{ "grades.score": { $gt: 80 } }, { "grades.score": { $lt: 100 } }],
});
//Escriu una consulta per trobar els restaurants que estan situats en una longitud inferior a -//-95.754168.
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } });
//Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen menjar 'American ' i //tenen algun score superior a 70 i longitud inferior a -65.754168.
db.restaurants.find({
  $and: [
    { cuisine: { $ne: "American" } },
    { "address.coord.0": { $lt: -65.754168 } },
  ],
});
//Escriu una consulta per trobar els restaurants que no preparen menjar 'American' i tenen algun score superior a 70 i que, a més,
// es localitzen en longituds inferiors a -65.754168. Nota: Fes aquesta consulta sense utilitzar operador $and.
db.restaurants.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 },
});
//Escriu una consulta per trobar els restaurants que no preparen menjar 'American ', tenen alguna nota
// 'A' i no pertanyen a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent.
db.restaurants
  .find({
    cuisine: { $ne: "American " },
    "grades.grade": "A",
    borough: { $ne: "Brooklyn" },
  })
  .sort({ cuisine: 1 });
// Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen
// 'Wil' en les tres primeres lletres en el seu nom.
db.getCollection("restaurants").find(
  { name: { $regex: /^Wil/ } },
  { name: 1, borough: 1, cuisine: 1 }
);
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants
//que contenen 'ces' en les últimes tres lletres en el seu nom.
db.restaurants.find(
  { name: { $regex: /ces$/ } },
  { name: 1, borough: 1, cuisine: 1 }
);
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants
//que contenen 'Reg' en qualsevol lloc del seu nom.
db.restaurants.find(
  { name: { $regex: /reg/i } },
  { name: 1, borough: 1, cuisine: 1 }
);
// Escriu una consulta per trobar els restaurants que pertanyen al Bronx i preparen plats Americans o xinesos.
db.restaurants.find({
  $and: [
    { borough: "Bronx" },
    { $or: [{ cuisine: "American " }, { cuisine: "Chinese" }] },
  ],
});
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que
//pertanyen a Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find({
  borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] },
});
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells
//restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find(
  { borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } },
  { name: 1, borough: 1, cuisine: 1 }
);
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells
//restaurants que aconsegueixin una nota menor que 10.
db.restaurants.find(
  { "grades.score": { $lt: 10 } },
  { name: 1, borough: 1, cuisine: 1 }
);
//Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que
//preparen marisc ('seafood') excepte si són 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'.

//Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un
// grade de "A" i un score d'11 amb un ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    $and: [
      { "grades.grade": "A" },
      { "grades.score": 11 },
      { "grades.date": ISODate("2014-08-11T00:00:00.000Z") },
    ],
  },
  { name: 1, borough: 1, cuisine: 1 }
);
//Escriu una consulta per organitzar els restaurants per nom en ordre ascendent.
db.restaurants.find({}).sort({ name: 1 });
//Escriu una consulta per organitzar els restaurants per nom en ordre descendent.
db.restaurants.find({}).sort({ name: -1 });
//Escriu una consulta per organitzar els restaurants pel nom de la cuisine en ordre ascendent i pel barri en ordre descendent.
db.restaurants.find({}).sort({ cuisine: 1, borough: -1 });
//Escriu una consulta per saber si les direccions contenen el carrer.
db.restaurants.find({ "address.street": { $exists: true } });
//Escriu una consulta que seleccioni tots els documents en la col·lecció de restaurants on
//els valors del camp coord és de tipus Double.
db.restaurants.find({
  $and: [
    { "address.coord.0": { $type: "double" } },
    { "address.coord.1": { $type: "double" } },
  ],
});
//Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que
//retornen 0 com a residu després de dividir algun dels seus score per 7.
db.getCollection("restaurants").find(
  { "grades.score": { $mod: [7, 0] } },
  { name: 1, grades: 1 }
);
//Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i
//cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name.
db.restaurants.find(
  { name: { $regex: /mod/i } },
  { name: 1, borough: 1, "address.coord.0": 1, "address.coord.1": 1 }
);
//Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells
// restaurants que contenen 'Mad' com a primeres tres lletres del seu name.
db.restaurants.find(
  { name: { $regex: /^mad/i } },
  { name: 1, borough: 1, "address.coord.0": 1, "address.coord.1": 1 }
);
