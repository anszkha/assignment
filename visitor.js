const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://anis:huspa123@cluster0.glzpa13.mongodb.net/';
const dbName = 'visitor_db';

// Create a new visitor
const createVisitor = async (visitor) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const visitorsCollection = db.collection('visitors');

    const result = await visitorsCollection.insertOne(visitor);
    console.log('Visitor created successfully:', result.insertedId);
  } catch (error) {
    console.error('Failed to create visitor:', error);
  } finally {
    client.close();
  }
};

// Usage example
const visitor = {
  gender: 'Male',
  ethnicity: 'Some Ethnicity',
  citizenship: 'Some Citizenship',
  visitor_address: 'Some Visitor Address',
  phone_no: '1234567890',
  vehicle_no: 'AB123CD',
};

createVisitor(visitor);
