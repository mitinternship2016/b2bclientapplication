var express = require('express');
var pdf = require('html-pdf');
var fs = require('fs');
var mongoose = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/logout', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var mongoose = require('mongoose');

var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('clientdb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'clientdb' database");
        db.collection('clients', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'clients' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('industry', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'industry' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('geography', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'geography' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('region', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'region' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('edi', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'edi' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('backend', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'backend' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
        db.collection('thirdparty', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'thirdparty' collection doesn't exist. Creating it with sample data...");
                //populateDB();
            }
        });
    }
});
var collection = db.collection('clients');

var collectionIndustry = db.collection('industry');
var collectionGeography = db.collection('geography');
var collectionRegion = db.collection('region');
var collectionEdi = db.collection('edi');
var collectionBackend = db.collection('backend');
var collectionThirdparty = db.collection('thirdparty');

router.get( '/content', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON( callback ) {
  collection.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.get( '/industry', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON2( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON2( callback ) {
  collectionIndustry.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.get( '/geography', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON3( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON3( callback ) {
  collectionGeography.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.get( '/region', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON4( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON4( callback ) {
  collectionRegion.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.get( '/edi', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON5( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON5( callback ) {
  collectionEdi.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.get( '/backend', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON6( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON6( callback ) {
  collectionBackend.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.get( '/thirdparty', function ( require, response ) {
    response.setHeader('Content-Type', 'application/json');
    readJSON7( function ( err, json ) {
            if ( err ) {
                throw err;
            }
            //console.log( json );
            response.json(json);
        } );
} );

function readJSON7( callback ) {
  collectionThirdparty.find({}).toArray(function (err, data) {
      if ( err ) {
            callback( err );
            return;
        }
        try {
            callback( null, data);
        } catch ( exception ) {
            callback( exception );
        }
  });
}

router.addClient = function(req, res) {
    var client = req.body;
    var name = req.body.name;
    var status;
    check(name,function(s){
      status = s;
      console.log("Check callback:", status);
      if(status)
      {
        res.send('Client already exists!');
        // res.render('adminstart');
      }
      else
      {
        console.log('Adding client: ' + JSON.stringify(client));
        db.collection('clients', function(err, collection) {
            collection.insert(client, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + JSON.stringify(client));
                    res.render('adminstart');
                }
            });
        });
    }
  });
}

function check(clname, callback)
{
collection.find({name : clname}).toArray(function (err, result) {
          if (err) {
            console.log(err);
          } else if (result.length) {
            //console.log("true");
            callback(true);
          } else {
            //console.log("false");
            callback(false);
          }
        });
}


router.updateClient = function(req, res) {
    var client = req.body;
    console.log('Updating client: ' + req.body.name);
    db.collection('clients', function(err, collection) {
        collection.update({name : req.body.name}, client, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(client));
                res.render('adminstart');
            }
        });
    });
}

router.searchClient = function(req, res) {
   var s = {};
  if (req.body.name !== "")
  {
    var str = req.body.name;
    s['name'] = str;
  }
  if (req.body.Active == "active" || req.body.Active == "inactive")
  {
    var str = req.body.Active;
    s['active'] = str;
  }
  if (req.body.hostingtype == "onpremise" || req.body.hostingtype == "saas")
  {
    var str = req.body.hostingtype;
    s['hostingtype'] = str;
  }
  if (req.body.industry !== "")
  {
    var str = req.body.industry;
    s['industry'] = str;
  }
  if (req.body.geography !== "")
  {
    var str = req.body.geography;
    s['geography'] = str;
  }
  if (req.body.region !== "")
  {
    var str = req.body.region;
    s['region'] = str;
  }
  if (req.body.location !== "")
  {
    var str = req.body.location;
    s['location'] = str;
  }
  if (req.body.edi !== "")
  {
    var str = req.body.edi;
    s['edi'] = str;
  }
  if (req.body.lifecycle == "implementation" || req.body.lifecycle == "migration" || req.body.lifecycle == "product enhancement/support")
  {
    var str = req.body.lifecycle;
    s['lifecycle'] = str;
  }
  if (req.body.fromdate !== "")
  {
    var str = req.body.fromdate;
    s['fromdate'] = str;
  }
  if (req.body.todate !== "")
  {
    var str = req.body.todate;
    s['todate'] = str;
  }
  if (req.body.icn !== "")
  {
    var str = req.body.icn;
    s['icn'] = str;
  }
  console.log(s);
  //var resjson = JSON.parse(s);
  collection.find(s).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        topdf(req,result);
        //res.json(result);
         //var options = {format: "Letter", orientation: "landscape"};
        var options = {"height": "8in", "width": "12in" , orientation: "landscape"};
        
        function topdf(rq, rs) {
          //console.log("inside;");
         var info = rs;
        res.render('template', {
            info: info,
        }, function (err, HTML) {
          console.log(info);
            pdf.create(HTML, options).toFile('./downloads/employee.pdf', function(err, result) {
            if(err){
              return res.status(400).send({
              message: errorHandler.getErrorMessage(err)
            });
            }
            fs.readFile('./downloads/employee.pdf', function(err, data) {
            res.contentType("application/pdf");
            res.send(data);
            });
          });
 });
      } 
    }   else {
        console.log('No document(s) found with defined "find" criteria!');
        res.render('failsearch')
      }
  });
};

router.searchClientAdmin = function(req, res) {
   var s = {};
  if (req.body.name !== "")
  {
    var str = req.body.name;
    s['name'] = str;
  }
  if (req.body.Active == "active" || req.body.Active == "inactive")
  {
    var str = req.body.Active;
    s['active'] = str;
  }
  if (req.body.hostingtype == "onpremise" || req.body.hostingtype == "saas")
  {
    var str = req.body.hostingtype;
    s['hostingtype'] = str;
  }
  if (req.body.industry !== "")
  {
    var str = req.body.industry;
    s['industry'] = str;
  }
  if (req.body.geography !== "")
  {
    var str = req.body.geography;
    s['geography'] = str;
  }
  if (req.body.region !== "")
  {
    var str = req.body.region;
    s['region'] = str;
  }
  if (req.body.location !== "")
  {
    var str = req.body.location;
    s['location'] = str;
  }
  if (req.body.edi !== "")
  {
    var str = req.body.edi;
    s['edi'] = str;
  }
  if (req.body.lifecycle == "implementation" || req.body.lifecycle == "migration" || req.body.lifecycle == "product enhancement/support")
  {
    var str = req.body.lifecycle;
    s['lifecycle'] = str;
  }
  if (req.body.fromdate !== "")
  {
    var str = req.body.fromdate;
    s['fromdate'] = str;
  }
  if (req.body.todate !== "")
  {
    var str = req.body.todate;
    s['todate'] = str;
  }
  if (req.body.icn !== "")
  {
    var str = req.body.icn;
    s['icn'] = str;
  }
  console.log(s);
  //var resjson = JSON.parse(s);
   collection.find(s).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        topdf(req,result);
        //res.json(result);
         var options = {"format": "A4", "orientation": "landscape", "border": "2in"};
        function topdf(rq, rs) {
          //console.log("inside;");
         var info = rs;
        res.render('template', {
            info: info,
        }, function (err, HTML) {
          console.log(info);
            pdf.create(HTML, options).toFile('./downloads/employee.pdf', function(err, result) {
            if(err){
              return res.status(400).send({
              message: errorHandler.getErrorMessage(err)
            });
            }
            fs.readFile('./downloads/employee.pdf', function(err, data) {
            res.contentType("application/pdf");
            res.send(data);
            });
          });
 });
      } 
    }   else {
        console.log('No document(s) found with defined "find" criteria!');
        res.render('failsearchadmin')
      }
  });
};

router.editMaster = function(req, res) {
    var submit = req.body.submit;
    if(submit=="Add Geography")
    {
      var geo = req.body.newgeography;
      db.collection('geography', function(err,collection) {
        collectionGeography.insert({name : geo}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + geo);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Add EDI")
    {
      db.collection('edi', function(err,collection) {
        collectionEdi.insert({name:req.body.newedi}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.newedi);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Add Industry")
    {
      db.collection('industry', function(err,collection) {
        collectionIndustry.insert({name:req.body.newindustry}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.newindustry);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Add Region")
    {
      db.collection('region', function(err,collection) {
        collectionRegion.insert({name:req.body.newregion}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.newregion);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Add Backend")
    {
      db.collection('backend', function(err,collection) {
        collectionBackend.insert({name:req.body.newbackend}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.newbackend);
                    res.render('master_data');
                }
            });
      })
    }
     if(submit=="Add Third Party")
    {
      db.collection('thirdparty', function(err,collection) {
        collectionThirdparty.insert({name:req.body.newthirdparty}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.newthirdparty);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Delete Geography")
    {
      db.collection('geography', function(err,collection) {
        collectionGeography.remove({name:req.body.geography}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.geography);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Delete Industry")
    {
      db.collection('industry', function(err,collection) {
        collectionIndustry.remove({name:req.body.industry}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.industry);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Delete EDI")
    {
      db.collection('edi', function(err,collection) {
        collectionEdi.remove({name:req.body.edi}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.edi);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Delete Backend")
    {
      db.collection('backend', function(err,collection) {
        collectionBackend.remove({name:req.body.backend}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.backend);
                    res.render('master_data');
                }
            });
      })
    }
    if(submit=="Delete Region")
    {
      db.collection('region', function(err,collection) {
        collectionRegion.remove({name:req.body.region}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.region);
                    res.render('master_data');
                }
            });
      })
    }
     if(submit=="Delete Third Party")
    {
      db.collection('thirdparty', function(err,collection) {
        collectionThirdparty.remove({name:req.body.thirdparty}, {safe:true}, function(err, result) {
                if (err) {
                    res.send({'error':'An error has occurred'});
                } else {
                    console.log('Success: ' + req.body.thirdparty);
                    res.render('master_data');
                }
            });
      })
    }
}

router.get('/user', function(req, res, next) {
  res.render('user');
});



module.exports = router;


/*var populateDB = function() {

    var clients = [
    {
        name: "Sample",
        active : "active",
        hostingtype:"hostingtype",
        industry:"industry",
        backend:"backend",
        geography:"geography",
        region:"region",
        edi:"edi",
        location:"location",
        solution:"solution",
        rtc:"rtc",
        lifecyle:"lifecyle",
        fromdate:"from",
        todate:"todate",
        thirdparty:"thirdparty",
        icn:"icn"
    }];

    db.collection('clients', function(err, collection) {
        collection.insert(clients, {safe:true}, function(err, result) {});
    });

};*/
