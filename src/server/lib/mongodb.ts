import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;
try {
  const config = useRuntimeConfig();
  client = new MongoClient(config.mongoUrl, {
    monitorCommands: true,
  });
  clientPromise = client.connect();
} catch (e) {
  console.error(e);
}

export default clientPromise;
