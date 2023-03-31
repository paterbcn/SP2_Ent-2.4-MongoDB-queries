db.restaurants.find({})
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1})
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0})
db.restaurants.find({},{restaurant_id:1,name:1,borough:1,"address.zipcode":1,_id:0})
db.restaurants.find({borough:"Bronx"})
db.restaurants.find({borough:"Bronx"}).limit(5)
db.restaurants.find({borough:"Bronx"}).skip(5).limit(5)
db.restaurants.find({"grades.score":{"$gt":90}})
db.restaurants.find({$and:[{"grades.score":{$gt:80}},{"grades.score":{$lt:100}}]})
db.restaurants.find({"address.coord.0":{$lt:-95.754168}})
db.restaurants.find({$and:[{cuisine:{$ne:"American"}},{"address.coord.0":{$lt: -65.754168}}]})
db.restaurants.find({cuisine:{$ne:"American"},"grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}})
db.restaurants.find({cuisine:{$ne:"American "} ,"grades.grade": "A" ,borough:{$ne:"Brooklyn"}}).sort({cuisine:1})
db.restaurants.find({name:{$regex:/^Wil/}},{name:1,borough:1,cuisine:1})
db.restaurants.find({name:{$regex:/ces$/}},{name:1,borough:1,cuisine:1})
db.restaurants.find({name:{$regex:/reg/i}},{name:1,borough:1,cuisine:1})
db.restaurants.find({$and:[{borough:"Bronx"},{$or:[{cuisine:"American "},{cuisine:"Chinese"}]}]})
db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}})
db.restaurants.find({borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{name:1,borough:1,cuisine:1})
db.restaurants.find({"grades.score":{$lt:10}},{name:1,borough:1,cuisine:1})
db.restaurants.find({$and:[{"grades.grade":"A"},{"grades.score":11},{"grades.date":ISODate("2014-08-11T00:00:00.000Z")}]},{name:1,borough:1,cuisine:1})
db.restaurants.find({}).sort({name:1})
db.restaurants.find({}).sort({name:-1})
db.restaurants.find({}).sort({cuisine:1,borough:-1})
db.restaurants.find({"address.street":{$exists:true}})
db.restaurants.find({$and:[{"address.coord.0":{$type:"double"}},{"address.coord.1":{$type:"double"}}]})
db.restaurants.find({"grades.score":{$mod:[7,0]}},{name:1,grades:1})
db.restaurants.find({name:{$regex:/mod/i}},{name:1,borough:1,"address.coord.0":1,"address.coord.1":1})
db.restaurants.find({name:{$regex:/^mad/i}},{name:1,borough:1,"address.coord.0":1,"address.coord.1":1})












