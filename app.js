const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pls check your data you are going to enter?"]
    },
    rating: Number,
    review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

async function saveFruit() {
    const existingFruit = await Fruit.findOne({ name: "Apple" });

    if (!existingFruit) {
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
        }
    } else {
        console.log('Fruit already exists in the database.');
    }
    const kiwi = new Fruit({
        name: "Kiwi", // Add the name field for the kiwi fruit
        rating: 7,
        review: "Pretty solid as a fruit."
    });
    await kiwi.save();

    const Peach = new Fruit({
        name: 'Peach', // Add the name field for the Peach fruit
        rating: 1,
    });
    const Pineapple = new Fruit({
        name: 'Pineapple',
        rating: 9,
        review: 'Great tropical fruit.'
    });
    await Pineapple.save();

}
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema,
});


const Person = mongoose.model("Person", personSchema);

async function savePerson() {
    const Pineapple = new Fruit({
        name: 'Pineapple',
        rating: 9,
        review: 'Great tropical fruit.'
    });
    const existingPerson = await Person.findOne({ name: "Jeff" });
    const kiwi = new Fruit({
        name: "Kiwi", // Add the name field for the kiwi fruit
        rating: 7,
        review: "Pretty solid as a fruit."
    });
    // if (!existingPerson) {
    const person = new Person({
        name: "Jeff",
        age: 34,
        favoriteFruit: kiwi,
    });

    try {
        await person.save();
        console.log('Person saved successfully!');
    } catch (error) {
        console.error(error);
    }
    // } else {
    // console.log('Person already exists in the database.');

    const AmyPerson = await Person.findOne({ name: "Amy" });

    if (!AmyPerson) {
        const person = new Person({
            name: "Amy",
            age: 24,
            favoriteFruit: Pineapple,
        });

        try {
            await person.save();
            console.log('Amy saved successfully!');
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('Amy already exists in the database.');
    }

}

async function run() {
    await saveFruit();
    await savePerson();
}

run();





