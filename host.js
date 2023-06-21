const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://anis:huspa123@cluster0.glzpa13.mongodb.net';
const dbName = 'host_db';

// Create a new host
const createHost = async (host) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const hostCollection = db.collection('hosts');

    const result = await hostCollection.insertOne(host);
    console.log('Host created successfully:', result.insertedId);
  } catch (error) {
    console.error('Failed to create Host:', error);
  } finally {
    client.close();
  }
};

// Usage example
const host = {
  host_name: 'Bazli',
  phone_no: '012345678',
  room_no: 'A101',
};

createHost(host);
