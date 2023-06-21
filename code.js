// Import the required modules
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/visitor_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Failed to connect to MongoDB', error));

// Define the schema for Visitor
const visitorSchema = new mongoose.Schema({
  id_no: { type: String, required: true },
  visitor_name: { type: String, required: true },
  gender: String,
  ethnicity: String,
  citizenship: String,
  visitor_address: String,
  phone_no: String,
  vehicle_no: String,
});

// Define the model
const Visitor = mongoose.model('Visitor', visitorSchema);

// Create a new visitor
const createVisitor = async (id_no, visitor_name, gender, ethnicity, citizenship, visitor_address, phone_no, vehicle_no) => {
  const visitor = new Visitor({ id_no, visitor_name, gender, ethnicity, citizenship, visitor_address, phone_no, vehicle_no });
  await visitor.save();
  console.log('Visitor created successfully');
};

// Retrieve all visitors
const getAllVisitors = async () => {
  const visitors = await Visitor.find();
  console.log('All Visitors:', visitors);
};

// Update a visitor
const updateVisitor = async (id, updateData) => {
  const visitor = await Visitor.findByIdAndUpdate(id, updateData, { new: true });
  if (!visitor) {
    console.log('Visitor not found');
    return;
  }
  console.log('Visitor updated successfully');
};

// Delete a visitor
const deleteVisitor = async (id) => {
  const visitor = await Visitor.findByIdAndDelete(id);
  if (!visitor) {
    console.log('Visitor not found');
    return;
  }
  console.log('Visitor deleted successfully');
};

// Usage examples
createVisitor('1234567890', 'Bazli', 'Male', 'Ethnicity', 'Citizenship', 'Visitor Address', 'Phone Number', 'Vehicle Number');
getAllVisitors();
updateVisitor('visitorId', { visitor_name: 'Afnan', phone_no: 'New Phone Number' });
deleteVisitor('visitorId');