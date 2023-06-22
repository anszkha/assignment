const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Connection URL and database name
const url = 'mongodb+srv://anis:huspa123@cluster0.glzpa13.mongodb.net';
const dbName = 'visitor_db, visitdetail_db, host_db, department_db, host_db, security_db';

// Create a new visitor
const createVisitor = async (visitor) => {
  // ... The rest of your createVisitor function code remains the same
};

// Create a new visit detail
const createVisitDetail = async (visitDetail) => {
  // ... The rest of your createVisitDetail function code remains the same
};

// Create a new host
const createHost = async (host) => {
  // ... The rest of your createHost function code remains the same
};

// Create a new department
const createDepartment = async (department) => {
  // ... The rest of your createDepartment function code remains the same
};

// Create a new security
const createSecurity = async (security) => {
  // ... The rest of your createSecurity function code remains the same
};

// Usage examples
// ... The rest of your usage examples remain the same

// Define routes for each entity
app.post('/visitors', (req, res) => {
  createVisitor(req.body);
  res.send('Visitor created successfully');
});

app.post('/visitdetails', (req, res) => {
  createVisitDetail(req.body);
  res.send('Visit Detail created successfully');
});

app.post('/hosts', (req, res) => {
  createHost(req.body);
  res.send('Host created successfully');
});

app.post('/departments', (req, res) => {
  createDepartment(req.body);
  res.send('Department created successfully');
});

app.post('/securities', (req, res) => {
  createSecurity(req.body);
  res.send('Security created successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
