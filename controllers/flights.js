const Flights = require('../models/flight')


module.exports = {
    new: newPage,
    create,
    index
  }




function newPage(req, res) {
    res.render('flights/new');
  }

  function create(req, res) {
    const flight = new Flights(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}

function index (req, res) {
    Flights.find({}, function (err, flights){
        res.render('flights/index', {
            flights
        })

    })
}