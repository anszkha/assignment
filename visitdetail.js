const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://anis:huspa123@cluster0.glzpa13.mongodb.net/';
const dbName = 'visitdetail_db';

// Create a new visit detail
const createVisitDetail = async (visitDetail) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const visitDetailCollection = db.collection('visitdetails');

    const result = await visitDetailCollection.insertOne(visitDetail);
    console.log('Visit Detail created successfully:', result.insertedId);
  } catch (error) {
    console.error('Failed to create Visit Detail:', error);
  } finally {
    client.close();
  }
};

// Usage example
const visitDetail = {
  no_of_visitor: 5,
  purpose: 'Business',
  visit_time_in: new Date(),
  visit_time_out: null,
};

createVisitDetail(visitDetail);
