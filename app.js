var MongoClient = require("mongodb").MongoClient;

//Connect to the database, "statsdb" after the slash is the database name
var url = "mongodb://localhost:27017/statsdb";
//Connect to the db
MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, db) {
    // 1. create database

    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("Database created!");
    //     db.close(); //close the database
    //   }

    //2. create collection

    var dbo = db.db("nodemongo");

    // dbo.createCollection("uscensus", function (err, res) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("Collection created!");
    //     db.close(); //close the database
    //   }
    // });

    // 3. ADD GIVEN DATA
    // var stats = [
    //   {
    //     city: "San Juan",
    //     zip: "00926",
    //     state: "PR",
    //     income: "34781",
    //     age: "44",
    //   },
    //   {
    //     city: "Corona",
    //     zip: "11368",
    //     state: "NY",
    //     income: "50797",
    //     age: "32",
    //   },
    //   {
    //     city: "Chicago",
    //     zip: "60629",
    //     state: "IL",
    //     income: "42019",
    //     age: "31",
    //   },
    //   {
    //     city: "El Paso",
    //     zip: "79936",
    //     state: "TX",
    //     income: "54692",
    //     age: "31",
    //   },
    //   {
    //     city: "Los Angeles",
    //     zip: "90011",
    //     state: "CA",
    //     income: "36954",
    //     age: "28",
    //   },
    //   {
    //     city: "Norwalk",
    //     zip: "90650",
    //     state: "CA",
    //     income: "66453",
    //     age: "35",
    //   },
    // ];
    // dbo.collection("uscensus").insertMany(stats, function (err, res) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close(); //close the database
    //   }
    // });

    // 4. ADD TWO RECORDS
    // var newrecords = [
    //   {
    //     city: "Pacoima",
    //     zip: "91331",
    //     state: "CA",
    //     income: "60360",
    //     age: "33",
    //   },
    //   {
    //     city: "kETCHIKAN",
    //     zip: "99950",
    //     state: "AK",
    //     income: "00000",
    //     age: "00",
    //   },
    // ];
    // dbo.collection("uscensus").insertMany(newrecords, function (err, res) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     console.log("Number of documents inserted: " + res.insertedCount);
    //     db.close(); //close the database
    //   }
    // });

    //5. FIND OUT ZIP CODE for Corona, NY
    // var query= { city : "Corona" };
    // dbo.collection("uscensus").find(query).toArray(function (err, result) {
    //     if (err) {
    //     throw err;
    //   } else {
    //     console.log(result);
    //     db.close(); //close the database
    //   }
    // })

    //6. FIND OUT THE INCOME FOR ALL CITIES
    // var query1 = { state: "CA" };
    // dbo
    //   .collection("uscensus")
    //   .find(query1)
    //   .toArray(function (err, result) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       console.log(result);
    //       db.close(); //close the database
    //     }
    //   });

    //7. UPDATE INCOME AND AGE FOR ALASKA
    // var query2 = { state: "AK" };
    // var newvalues = { $set: { zip: "38910", age: "46" } };
    // dbo
    //   .collection("uscensus")
    //   .updateOne(query2, newvalues, function (err, res) {
    //     if (err) {
    //       throw err;
    //     } else {
    //       console.log("documents with Alaska updated");
    //       db.close(); //close the database
    //     }
    //   });

    //8 SORT RECORDS BY STATE

    var mysort = { state: 1 };
    dbo
      .collection("uscensus")
      .find()
      .sort(mysort)
      .toArray(function (err, result) {
        if (err) {
          throw err;
        } else {
          console.log(result);
          db.close(); //close the database
        }
      });
  }
);
