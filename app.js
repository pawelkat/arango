(function() {
    "use strict";
	var db = require("org/arangodb").db;
    var Foxx = require("org/arangodb/foxx"),
        controller = new Foxx.Controller(applicationContext)

    controller.get("/api/v1/vegetables", function(req, res) {        
		res.json(db.vegetables.toArray()); 
    });
	controller.post('/api/v1/vegetables', function (req, res) {
		var content = JSON.parse(req.requestBody);
		db.vegetables.save(content);
		res.json(content);
	});
	

}());