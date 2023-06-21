const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://anis:huspa123@cluster0.glzpa13.mongodb.net';
const dbName = 'security_db';

// Create a new security
const createSecurity = async (security) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const securityCollection = db.collection('securities');

    const result = await securityCollection.insertOne(security);
    console.log('Security created successfully:', result.insertedId);
  } catch (error) {
    console.error('Failed to create Security:', error);
  } finally {
    client.close();
  }
};

// Usage example
const security = {
  security_name: 'John Doe',
  security_id: 'S001',
  workshift: 'Day Shift',
};

createSecurity(security);
