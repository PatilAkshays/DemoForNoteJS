///*
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app , database){
var db = database.db("College1");

app.post('/staff1', (req, res) => {
    const staffData = { name: req.body.name, rank: req.body.rank , mobileNo:req.body.mobileNo };
    db.collection('staff1').insert(staffData, (err, results) => {
        if(err){
            res.send({'error': 'An error has occurred'});
        }else{
            res.send(results.ops[0]);
        }
    })
    });

app.get('/staff1', (req , res) => {
    db.collection('staff1').find({}).toArray(function(err,results) {
        if(err){
            res.send({'error':'An error has occurred.'})
        }else{
            res.send(results);
            // res.send({'error':'kkvfkv.'})

        }
    })
})
};
// */
/*
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, database) {
  var db = database.db("College1");

  //GET :- GET ONLY ONE OBJECT
  app.get('/staff1/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('staff1').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });


  //GET :- GET All OBJECT
  app.get('/staff1', (req, res) => {
    db.collection('staff1').find({}).toArray(function(err, result) {
        if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(result);
          } 
    })
  });

  //POST :- INSERT OBJECT
  app.post('/staff1', (req, res) => {
    const staffData = { name: req.body.name, rank: req.body.rank , mobileNo:eq.body.mobileNo };
    db.collection('staff1').insert(staffData, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  //DELETE :- DELETE OBJECT
  app.delete('/staff1/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('staff1').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });

    //PUT :- UPDATE OBJECT
  app.put('/staff1/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const staffData = { name: req.body.name, rank: req.body.rank , mobileNo:eq.body.mobileNo };
    db.collection('staff1').update(details, staffData, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });
};
*/