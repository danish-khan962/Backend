import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState();

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("https://crud-pqyi.onrender.com");

      const result = response.data;

      console.log(result);
      setData(result);

    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setError(error.response.data);
    }
  }

  useEffect(() => {
    getData();
  }, [])


  //deleting user
  const handleDelete = async(id) => {
    try {
      const response = await axios.delete(`https://crud-pqyi.onrender.com/${id}`);
      const result = response.data;

     setData(prevData => prevData.filter(item => item._id !== id));


    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      setError(error.response.data);
    }
  }

  //routing to edit page
const handleEdit = (id) => {
  navigate(`/${id}`);
};
  

  return (
    <div className='w-screen p-6 flex flex-row flex-wrap justify-evenly gap-5'>
      
      {data?.map((element)=>(
        <div className='border-none p-6 max-w-[320px] w-[100%] text-center bg-[#000] flex flex-col gap-y-2 rounded-[15px] hover:scale-105 transition-all duration-300 ease-out cursor-pointer hover:shadow-[0_1px_16px_#FFD700]' key={element._id}>
        <h2 className='text-[18px] capitalize font-medium  bg-black'>{element.name}</h2>
        <p className='italic text-blue-500 bg-black'>{element.email}</p>
        <p className='bg-black text-yellow-500'>{element.age}</p>
        <div className='bg-black flex flex-row justify-between items-center'>
          <button className='uppercase semibold outline-none border-none bg-sky-700 py-1 px-3 rounded-[3px] hover:bg-sky-800 transition-all 200ms ease-in-out hover:scale-105' onClick={() => handleEdit(element._id)}>edit</button>
          <button className='uppercase semibold outline-none border-none bg-pink-700 py-1 px-3 rounded-[3px] hover:bg-pink-800 transition-all 200ms ease-in-out hover:scale-105' onClick={()=> handleDelete(element._id)}>delete</button>
        </div>
      </div>
      ))}

    </div>
  )
}

export default Read
