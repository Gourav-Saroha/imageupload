const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const app = express();


const cors = require('cors');
app.use(cors());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mern_loadimage_up', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // Save image information to MongoDB here

  res.status(200).json({ message: 'Image uploaded successfully' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
