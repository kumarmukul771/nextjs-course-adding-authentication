import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://mukul2:mukul@mukul.lcc65.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}