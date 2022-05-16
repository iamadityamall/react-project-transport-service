import React from "react";

const SingleClientForm = ({ handleChange, details, handleFile }) => {
  return (
    <section className="flex flex-col space-y-5 capitalize font-mono font-bold p-4 bg-gray-100 rounded-lg md:p-10 md:space-y-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="space-y-2 md:space-y-0 md:flex md:space-x-2">
          <label htmlFor="name">name : </label>
          <input
            id="name"
            type="text"
            placeholder=" full name"
            name="clientName"
            value={details.clientName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="file"
          className="text-sm mt-5 md:mt-0"
          name="fileName"
          onChange={(e) => handleFile(e)}
        />
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-5 md:justify-between">
        <div className="flex flex-col space-y-2 md:space-y-2">
          <label htmlFor="quantity">quantity:</label>
          <input
            type="text"
            placeholder=" quantity"
            id="quantity"
            name="quantity"
            value={details.quantity}
            onChange={(e) => handleChange(e)}
            className="p-1"
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-2">
          <label htmlFor="type">type:</label>
          <input
            type="text"
            placeholder=" type"
            id="type"
            name="type"
            value={details.type}
            onChange={(e) => handleChange(e)}
            className="p-1"
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-2">
          <label htmlFor="weight">weight:</label>
          <input
            type="text"
            placeholder=" weight"
            id="weight"
            name="weight"
            value={details.weight}
            onChange={(e) => handleChange(e)}
            className="p-1"
          />
        </div>
      </div>
    </section>
  );
};

export default SingleClientForm;
