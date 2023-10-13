import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';

function App() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Image uploaded successfully');
    } catch (error) {
      alert('Image upload failed');
    }
  };

  return (
    <div>
      <Container>
        <h2>Image Upload</h2>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <Button onClick={handleUpload}>Upload</Button>
      </Container>
    </div>
  );
}

export default App;
