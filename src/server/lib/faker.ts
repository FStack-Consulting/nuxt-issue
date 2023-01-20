import {faker} from "@faker-js/faker";
import mongoose from "mongoose";
import User from "~/server/dbModels/user";

export const seedDatabase = async () => {
    await mongoose.connection.db.dropDatabase();
    const users = [];

    // const qty = 5;
    // for (let i = 0; i < qty; i++) {
    //     const user = new User({
    //         username: faker.internet.userName(),
    //         password: faker.internet.password()
    //     });
    //     users.push(user);
    // }

    users.push(new User({
        username: "admin",
        password: "admin"
    }));

    await User.insertMany(users);
}
