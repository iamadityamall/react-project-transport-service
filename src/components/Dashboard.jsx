import React from "react";
import SingleClientForm from "./SingleClientForm";
import { useState, useEffect } from "react";
import Alert from "./Alert";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const [clientOne, setClientOne] = useState(false);
  const [clientTwo, setClientTwo] = useState(false);
  const [details, setDetails] = useState({
    clientName: "",
    name: "",
    quantity: "",
    type: "",
    weight: "",
  });
  const [file, setFile] = useState();

  const { alert, showAlert } = useGlobalContext();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newDetail = { ...details, [name]: value, file };
    setDetails(newDetail);
  };

  const handleFile = (e) => {
    let file = e.target.files;
    console.log(file);
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails({
      ...details,
      clientName: "",
      name: "",
      quantity: "",
      type: "",
      weight: "",
    });
    setClientOne(false);
    setClientTwo(false);
    showAlert(true, `submitted successfully : ${details.clientName}`, "success");
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="p-4 flex flex-col space-y-8 w-[80vw] md:w-[90vw] xl:w-[60vw]">
        {/* client 0ne */}
        <article className="flex flex-col">
          <div className="flex justify-between p-4 capitalize items-center mb-5">
            <h1 className="font-bold text-sm font-mono">transporter 1</h1>
            <button
              name="clientName"
              value="client-1"
              className={`${
                clientOne ? "bg-green-400 text-white" : "bg-gray-300"
              } px-3 py-1 rounded-md text-sm`}
              onClick={(e) => {
                handleChange(e);
                setClientTwo(false);
                setClientOne(!clientOne);
                setDetails({
                  ...details,
                  clientName: "",
                  name: "",
                  quantity: "",
                  type: "",
                  weight: "",
                });
              }}
              type="button"
            >
              {clientOne ? "selected" : "choose"}
            </button>
          </div>

          {clientOne && (
            <SingleClientForm
              handleChange={handleChange}
              details={details}
              handleFile={handleFile}
            />
          )}
        </article>

        {/* client two */}
        <article className="flex flex-col">
          <div className="flex justify-between p-4 capitalize items-center mb-5">
            <h1 className="font-bold text-sm font-mono">transporter 2</h1>
            <button
              name="clientName"
              value="client-2"
              className={`${
                clientTwo ? "bg-green-400 text-white" : "bg-gray-300"
              } px-3 py-1 rounded-md text-sm`}
              onClick={(e) => {
                handleChange(e);
                setClientOne(false);
                setClientTwo(!clientTwo);
                setDetails({
                  ...details,
                  clientName: "",
                  name: "",
                  quantity: "",
                  type: "",
                  weight: "",
                });
              }}
              type="button"
            >
              {clientTwo ? "selected" : "choose"}
            </button>
          </div>
          {clientTwo && (
            <SingleClientForm
              handleChange={handleChange}
              details={details}
              handleFile={handleFile}
            />
          )}
          <div>{alert && <Alert />}</div>
        </article>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={
            "bg-blue-200 font-mono font-semibold p-2 rounded-lg md:w-20"
          }
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Dashboard;
