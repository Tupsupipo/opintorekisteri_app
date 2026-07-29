const express = require('express');
const router = express.Router();
const opintojakso = require('../models/opintojaksoModel.js');

//Haetaan KAIKKI opintojaksot
router.get('/',
    function (request, response) {
        opintojakso.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json(dbResult);
            }
        })
    });

    // Haetaan IDllä
router.get('/:id',
    function (request, response) {
        opintojakso.getOne(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });

//Lisätään
router.post('/', 
function(request, response) {
  opintojakso.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Poistetaan
router.delete('/:id', 
function(request, response) {
  opintojakso.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

//Päivitetään
router.put('/:id', 
function(request, response) {
  opintojakso.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;