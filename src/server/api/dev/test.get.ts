import mongoose from "mongoose";
import { createReadStream } from "fs";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig().public;
  let testDir = ".";
  let client = await mongoose.createConnection(config.mongoUrl);
  let db = client.useDb("test").db;
  let bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "testbucket",
  });

  let stream = bucket.openDownloadStreamByName("");

  let st = new mongoose.mongo.GridFSBucketReadStream();

  return {};
});
