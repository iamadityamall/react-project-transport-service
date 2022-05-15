import React from "react";

const SingleClientForm = ({ name, quantity, type, weight }) => {
  return (
    <section className="flex flex-col space-y-5 capitalize font-mono font-bold p-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:flex md:space-x-2">
          <label htmlFor="name">name : </label>
          <input
            id="name"
            type="text"
            placeholder=" full name"
            name="name"
            value={name}
          />
        </div>
        <button
          type="button"
          className="text-sm mt-5 md:mt-0 bg-gray-700 text-white p-2 rounded-lg"
          name="fileName"
          value="download"
          onClick={() => alert('attachment downloaded')}
        >download attachment</button>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-5 md:justify-between">
        <div className="flex flex-col md:space-y-2">
          <label htmlFor="quantity">quantity:</label>
          <input
            type="text"
            placeholder=" quantity"
            id="quantity"
            name="quantity"
            value={quantity}
          />
        </div>
        <div className="flex flex-col md:space-y-2">
          <label htmlFor="type">type:</label>
          <input
            type="text"
            placeholder=" type"
            id="type"
            name="type"
            value={type}
          />
        </div>
        <div className="flex flex-col md:space-y-2">
          <label htmlFor="weight">weight:</label>
          <input
            type="text"
            placeholder=" weight"
            id="weight"
            name="weight"
            value={weight}
          />
        </div>
      </div>
      <div className="flex space-x-5">
        <button className="bg-green-300 p-4 rounded-lg">accept</button>
        <button className="bg-red-300 p-4 rounded-lg">decline</button>
      </div>
    </section>
  );
};

export default SingleClientForm;