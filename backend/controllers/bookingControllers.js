const Booking = require("../models/booking.model")
const UserBookings = require("../models/userBooking.model")
const mongoose = require("mongoose");
const Users = require("../models/user.model");

exports.getAllSchedules = (req, res) => {
    
  Booking.find().sort({ date: -1 }).then(response => {
    res.status(200).json(response) 
  }).catch(error => console.log(error))
};


exports.getUserBookings = (req, res) => {
  UserBookings.find({ userId: mongoose.Types.ObjectId(req.user.id)}).populate('bookingId').then(response => {
    if (response && response.length) {
      response = response.map(element => element.bookingId)
    }
    res.status(200).json(response) 
  }).catch(error => console.log(error))
};



exports.createUserBooking = async (req, res) => {
  try {

    const {passesBought, passesUsed} = await Users.findOne({ _id: mongoose.Types.ObjectId(req.user.id)});
    if(passesBought - passesUsed < 1) throw new Error('error')
    await Users.updateOne({ _id: mongoose.Types.ObjectId(req.user.id) }, { $inc: { passesUsed: 1 } })

    const myBooking = new UserBookings({
      userId: mongoose.Types.ObjectId(req.user.id),
      bookingId: mongoose.Types.ObjectId(req.body.bookingId)
    })
    await myBooking.save()
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  } 
};



// const knex = require("knex")(require("../knexfile"));

// exports.deleteInventoryItem = (req, res) => {
//   knex("inventories")
//     .where("id", req.params.inventory_id)
//     .delete()
//     .then(() => {
//       res
//         .status(200)
//         .json({
//           'message':`Inventory with id ${req.params.inventory_id} has been deleted successfully`,
//         });
//     })
//     .catch((err) => {
//       res
//         .status(500)
//         .json({
//           'message':`There was an error deleting inventory ${req.params.inventory_id}`,
//           'error': err
//         });
//     });
// };

// exports.getAllInventory = (req, res) => {
//   knex("inventories")
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) =>
//       res.status(400)
//       .json({'message':`There was an error getting inventory`,
//       'error': err})
// )};

// exports.getSingleInventory = (req, res) => {
//   knex("inventories")
//     .where({ id: req.params.inventory_id })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch((err) => {
//       res
//         .status(500)
//         .json({'message':`There was an error getting inventory ${req.params.inventory_id}`,
//         'error': err})
//     });
// };

// exports.addInventoryItem = (req, res) => {
//   if (
//     !req.body.id ||
//     !req.body.warehouse_id ||
//     !req.body.item_name ||
//     !req.body.description ||
//     !req.body.category ||
//     !req.body.status ||
//     !req.body.quantity
//   ) {
//     res.status(400).json({
//       message: `Error: Invalid/Incomplete Request`,
//     });
//   } else {
//     knex("inventories")
//       .insert(req.body)
//       .then((newInventoryId) => {
//         res.status(201).json(newInventoryId[0]);
//       })
//       .catch(() => {
//         res.status(400).json({
//           message: `Error adding Inventory Item `,
//         });
//       });
//   }
// };

// exports.editInventoryItem = (req, res) => {
//   knex("inventories")
//     .where({ id: req.params.inventory_id })
//     .update(req.body)
//     .then((data) => {
//       res.sendStatus(200);
//     })
//     .catch(() => {
//       res.status(400).json({
//         message: `Error Editing Inventory Item`,
//       });
//     });
// };
