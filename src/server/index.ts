import { seedDatabase } from "./lib/faker";
import mongoose from "mongoose";

export default async () => {
  try {
    const config = useRuntimeConfig();
    await mongoose.connect(config.mongoUrl);
    console.log("DB connection established.");
    await seedDatabase();
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};
