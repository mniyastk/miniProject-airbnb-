import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";


const TestTwo = () => {
    
  const { property } = useSelector((data) => data.data);
  console.log(property);
  const file = property.images
  const [datas,setDatas]= useState({property:{
    property
  }})
const formData= new FormData()


formData.append("property",JSON.stringify(datas.property))

for (let i = 0; i < file.length; i++) {
  formData.append('image', file[i]);
}
console.log(formData)
  const sendData = async () => {
    await axios
      .post("http://localhost:4000/api/imageUpload",formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((data) => console.log(data))
      .catch((e) => console.log(e));

  };

  return (
    <div>
      <button onClick={sendData}> sendData</button>
    </div>
  );
};

export default TestTwo;
