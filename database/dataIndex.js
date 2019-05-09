const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/UserInfo');
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let chechOutSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipCode: Number,
  creditCardNumber: Number,
  expiryDate: String,
  cvc: Number,
  billingZipCode: Number
});

let CheckOut = mongoose.model('CheckOut', chechOutSchema);

let save = (data) => {
  for (let i = 0; i < data.length; i++) {
    let xCheckOut = new CheckOut({id: data[i].id,
      name: data[i].name,
      email: data[i].email,
      password: data[i].password,
      line1: data[i].line1,
      line2: data[i].line2,
      city: data[i].city,
      state: data[i].state,
      zipCode: data[i].zipCode,
      creditCardNumber: data[i].creditCardNumber,
      expiryDate: data[i].expiryDate,
      cvc: data[i].cvc,
      billingZipCode: data[i].billingZipCode
    })
    xCheckOut.save((err) => {
      if (err) return console.error(err);
    })
  }  
}

module.exports.save = save;
module.exports.Repo = Repo;