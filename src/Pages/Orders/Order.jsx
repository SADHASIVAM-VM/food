
import './Order.css'
import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    setFormData({
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
    })
  };

  return (
   <div className="cont flex flex-col-reverse md:flex-row justify-between ">
     <form onSubmit={handleSubmit} className=" md:w-[700px] mt-8 px-20 md:pl-20">
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine1" className="block text-gray-700">Address Line 1</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="addressLine2" className="block text-gray-700">Address Line 2</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zipCode" className="block text-gray-700">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Submit
      </button>
    </form>
    <div className="imgs flex items-center justify-center">
      <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-commerce-42/100/Place_Order-512.png" alt="" />
    </div>
   </div>
  );
};

export default Order;
