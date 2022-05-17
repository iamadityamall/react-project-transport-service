import React from "react";

const SingleClientForm = ({
  id,
  clientName,
  quantity,
  type,
  weight,
  url,
  deleteHandler,
}) => {
  return (
    <section className="flex flex-col space-y-5 capitalize font-mono font-bold p-4 bg-gray-100 rounded-lg">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:flex space-y-2 md:space-y-0 md:space-x-2">
          <label htmlFor="name">name : </label>
          <input
            id="name"
            type="text"
            placeholder=" full name"
            name="name"
            value={clientName}
            readOnly
          />
        </div>
        <button
          type="button"
          className="text-sm mt-5 md:mt-0 bg-gray-700 text-white p-2 rounded-lg"
          name="fileName"
          value="download"
          onClick={() => console.log(url)}
        >
          <a href={url} target="_blank" rel="noreferrer">
            download attachment
          </a>
        </button>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-5 md:justify-between">
        <div className="flex flex-col space-y-2 md:space-y-2">
          <label htmlFor="quantity">quantity:</label>
          <input
            type="text"
            placeholder=" quantity"
            id="quantity"
            name="quantity"
            value={quantity}
            className="p-1"
            readOnly
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-2">
          <label htmlFor="type">type:</label>
          <input
            type="text"
            placeholder=" type"
            id="type"
            name="type"
            value={type}
            className="p-1"
            readOnly
          />
        </div>
        <div className="flex flex-col space-y-2 md:space-y-2">
          <label htmlFor="weight">weight:</label>
          <input
            type="text"
            placeholder=" weight"
            id="weight"
            name="weight"
            value={weight}
            className="p-1"
            readOnly
          />
        </div>
      </div>
      <div className="flex space-x-5">
        <button
          type="button"
          className="bg-green-300 p-4 rounded-lg"
          onClick={() =>
            alert("feature not yet added. this is at proof of concept stage.")
          }
        >
          accept
        </button>
        <button
          type="button"
          className="bg-red-300 p-4 rounded-lg"
          onClick={() => deleteHandler(id)}
        >
          decline
        </button>
      </div>
    </section>
  );
};

export default SingleClientForm;
