const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb+srv://anis:huspa123@cluster0.glzpa13.mongodb.net';
const dbName = 'department_db';

// Create a new department
const createDepartment = async (department) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);
    const departmentCollection = db.collection('departments');

    const result = await departmentCollection.insertOne(department);
    console.log('Department created successfully:', result.insertedId);
  } catch (error) {
    console.error('Failed to create Department:', error);
  } finally {
    client.close();
  }
};

// Usage example
const department = {
  department_id: 'D001',
  unit_no: '101',
};

createDepartment(department);
