const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');
// mongoose.connect('mongodb://127.0.0.1:27017/personDB');

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

async function saveFruit() {
    const fruit = new Fruit({
        name: "Apple",
        rating: 7,
        review: "Pretty solid as a fruit."
    });
    try {
        await fruit.save();
        console.log('Fruit saved successfully!');
    } catch (error) {
        console.error(error);
    } finally {
        // mongoose.disconnect(); // Close the database connection
    }
}
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,

});
const Person = mongoose.model("Person", personSchema);

async function savePerson() {
    const person = new Person({
        name: "John",
        age: 34,
    });

    try {
        await person.save();
        console.log('Person saved successfully!');
    } catch (error) {
        console.error(error);
    } finally {
        // mongoose.disconnect(); // Close the database connection
    }
}

const kiwi = new Fruit(
    {
        name: "Kiwi",
        rating: 10,
        review: "Pretty solid as a fruit."
    });

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "nider fruit"
});
// Fruit.insertMany([kiwi, banana])
//     .then(() => {
//         console.log("successfully saved");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
});


saveFruit();
savePerson();






