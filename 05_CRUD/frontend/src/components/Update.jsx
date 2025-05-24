import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Update = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setAge('');
  }


  //getting user details
  const { id } = useParams();
  const getUser = async () => {
    try {
      const response = await axios.get(`https://crud-pqyi.onrender.com/${id}`);
      const result = response.data;

      console.log(result);

      setName(result.name);
      setEmail(result.email);
      setAge(result.age);

    } catch (error) {
      console.log(error);
    }
  }

 useEffect(() => {
  getUser();
 }, [])
 

  //handling edited values
  const handleUpdate = async (e) => {
   e.preventDefault();

    const updateUser = { name, email, age: Number(age) };

    try {
        const response = await axios.patch(`https://crud-pqyi.onrender.com/${id}`, updateUser, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log("Data updated:", response.data);

        setName('');
        setEmail('');
        setAge(0);

        navigate('/read');
        
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        setError(error.response.data);
    }

  }

  return (
    <form className='w-screen flex flex-col gap-8 justify-center items-center mt-20 p-4' onSubmit={handleUpdate}>
      <h1 className='text-[30px] font-bold'>Edit your data</h1>

      <div className='max-w-[800px] w-[100%] border-[1px] border-slate-400 p-10 bg-[#000] rounded-[20px] xs:p-5'>

        <div className='flex flex-col gap-y-5 bg-[#000]'>
          <div className='flex flex-row justify-between items-center bg-[#000]'>
            <label className='bg-[#000]'>Name: </label>
            <input type="text" placeholder='Enter name....' className='w-[85%] outline-none border-[1px] border-slate-500 bg-[#000] py-1 px-3 rounded-[5px] xs:w-[83%]' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='flex flex-row justify-between items-center bg-[#000]'>
            <label className='bg-[#000]'>Email: </label>
            <input type="text" placeholder='Enter email....' className='w-[85%] outline-none border-[1px] border-slate-500 bg-[#000] py-1 px-3 rounded-[5px] xs:w-[83%]' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-row justify-between items-center bg-[#000]'>
            <label className='bg-[#000]'>Age: </label>
            <input type="number" placeholder='Enter age....' className='w-[85%] outline-none border-[1px]  border-slate-500 bg-[#000] py-1 px-3 rounded-[5px] xs:w-[83%]' value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>

        <div className='flex flex-row mt-8 bg-[#000] justify-between items-center '>
          <button className='bg-green-600 font-semibold uppercase py-[10px] px-[20px] rounded-[7px] outline-none border-none xs:text-[17px] hover:bg-green-700 transition-all 200ms ease-in-out hover:scale-95 ' type='submit' >submit</button>
          <button className='bg-blue-600 font-semibold uppercase py-[10px] px-[20px] rounded-[7px] outline-none border-none xs:text-[17px] hover:bg-blue-700 transition-all 200ms ease-in-out hover:scale-95 ' onClick={handleClear}>clear</button>
        </div>
      </div>
    </form>
  )
}

export default Update
