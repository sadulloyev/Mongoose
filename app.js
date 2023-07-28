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
        rating: 7,
        review: "Pretty solid as a fruit."
    });
    await kiwi.save();

    const Peach = new Fruit({
        name: 'Peach',
        rating: 1,
    });
    await Peach.save();
}

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

async function savePerson() {
    const existingPerson = await Person.findOne({ name: "John" });

    if (!existingPerson) {
        const person = new Person({
            name: "John",
            age: 34,
        });

        try {
            await person.save();
            console.log('Person saved successfully!');
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('Person already exists in the database.');
    }
}

async function run() {
    await saveFruit();
    await savePerson();
}

run();
async function deleteManyFruit() {
    try {
        // Delete the first fruit with the name 'Peach'
        const result = await Fruit.deleteMany({ name: 'Peach' });
        console.log('Deleted count:', result.deletedCount);
    } catch (error) {
        console.error('Error deleting fruit:', error);
    } finally {
        // mongoose.disconnect();
    }
}

deleteManyFruit();
async function deleteSingleFruit() {
    try {
        // Delete the first fruit with the name 'Apple'
        const result = await Fruit.deleteMany({ name: 'Apple' });
        console.log('Deleted count:', result.deletedCount);
    } catch (error) {
        console.error('Error deleting fruit:', error);
    } finally {
        // mongoose.disconnect();
    }
}
deleteSingleFruit();


// Assuming you have already connected using mongoose.connect(...)
deleteManyPerson()
    .then(() => {
        mongoose.disconnect();
    })
    .catch((error) => console.error('Error:', error));





