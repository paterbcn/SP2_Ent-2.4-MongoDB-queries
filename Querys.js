//Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find({})
//Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1})
//*Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloent el camp //_id per tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})
//Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloent el camp _id //per tots els documents en la col·lecció Restaurants.
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1,_id:0})
//Escriu una consulta per mostrar tots els restaurants que estan en el Bronx.
db.restaurants.find({borough:"Bronx"})
//Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx.
db.restaurants.find({borough:"Bronx"}).limit(5)
//Escriu una consulta per mostrar els 5 restaurants després de saltar els primers 5 que siguin del //Bronx.
db.restaurants.find({borough:"Bronx"}).skip(5).limit(5)
//Escriu una consulta per trobar els restaurants que tenen algun score més gran de 90.
db.restaurants.find({"grades.score":{"$gt":90}})
//Escriu una consulta per trobar els restaurants que tenen un score més gran que 80 però menys que //100.
db.restaurants.find({$and:[{"grades.score":{$gt:80}},{"grades.score":{$lt:100}}]})
//Escriu una consulta per trobar els restaurants que estan situats en una longitud inferior a -//-95.754168.
db.restaurants.find({"address.coord.0":{$lt:-95.754168}})
//Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen menjar 'American ' i //tenen algun score superior a 70 i longitud inferior a -65.754168.
db.restaurants.find({$and:[{cuisine:{$ne:"American"}},{"address.coord.0":{$lt: -65.754168}}]})




