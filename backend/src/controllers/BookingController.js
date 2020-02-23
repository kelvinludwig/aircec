const User = require('../models/User');
const Spot = require('../models/Spot');
const Booking = require('../models/Booking');

module.exports = {
    async store(req, res){
        const { date } = req.body;
        const { user_id } = req.headers;
        const { spot_id } = req.params;

        const user = await User.findById(user_id);

        if(!user){
            return res.status(400).json({ error: "User does not exist"});
        }
        const spot = await Spot.findById(spot_id);

        if(!spot){
            return res.status(400).json({ error: "Spot does not exist"});
        }

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });
        //Put the datas about Spot and User in obect Booking the return of the Store
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);


    }
}