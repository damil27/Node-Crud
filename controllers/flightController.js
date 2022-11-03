
const {Flights} = require("../models/Flight")
const {v4: uuid} = require("uuid")

// get all flight 
exports.getAllFlights = async (req, res) => {
   try {
    const flights = await Flights;
    res.status(200).json({
        message: "All flights",
        flights
    })
   } catch (error) {
    res.status(500).json({message:error})
   }
}
// get a single flight 
exports.getSingleFlight = async (req, res) =>{
    try {
        let id = req.params.id;
        const flight = Flights.find(flight => flight.id === id)
        res.status(200).json({
            message: "flight found.",
            flight
        })
        return flight;
    } catch (error) {
        res.status(500).json({message : error})
    }
}
// create or add new flight 
exports.addFLight = async (req,res) =>{
    try {
        // const flight = await req.body;
        const {title, time, price, date } = await req.body;
        const flight = {
            id: uuid(),
            title,
            price,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }
        Flights.push(flight)
        res.status(201).json({
            message: " New flight successfully added.",
            flight
        })
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
//update / edit flight details
exports.editFlightDetaials = async (req, res) =>{
    try {
        let id = req.params.id;
        const flight = Flights.find(flight => flight.id === id)
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "Flight successfully updated.",
            flight
        }) 
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}
// Delete flight details
exports.deleteFlight = (req, res) =>{
    try {
        let id = req.params.id;
        const flight = Flights.find(flight => flight.id === id);
        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight successfully removed",
            flight
    })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


