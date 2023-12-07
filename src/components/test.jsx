// FileUpload.js

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../redux/slices';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate =useNavigate()
  const {property}= useSelector(data=>data.data)
  console.log(property)
  const dispatch  = useDispatch();

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = async () => {
    try {
     


     dispatch(addProperty({property:"images",data:selectedFiles}))
      // const response = await axios.post('http://localhost:4000/api/imageUpload', formData);
      navigate('/test2')
      // console.log(response.data)
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">Select multiple images:</label>
      <input type="file" id="fileInput" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Test;
