const Flight = require('../models/flight')


module.exports = {
    new: newPage,
    create,
    index,
    delete: deleteFlight,
    show
  }


 function show(res, req) {
     res.render('flights/show')
 }


function newPage(req, res) {
    res.render('flights/new');
  }

  function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}

function index (req, res) {
    Flight.find({}, function (err, flights){
        res.render('flights/index', {
            flights
        })

    })
}

function deleteFlight (req, res){
    Flight.findByIdAndDelete(req.params.id, function (err, flight){
        res.redirect('/flights');
    })      
}
