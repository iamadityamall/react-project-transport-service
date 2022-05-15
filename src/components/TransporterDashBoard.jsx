import React from "react";
import SingleTransporterForm from "./SingleTransporterForm";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const details = [
    {
      clientID: 0,
      clientName: "",
      name: "",
      quantity: "",
      type: "",
      weight: "",
    },

    // {
    //   clientID: 1,
    //   clientName: "Harsh Mall",
    //   name: "Harsh Mall",
    //   quantity: "less",
    //   type: "light",
    //   weight: "2000kg",
    // },
    // {
    //   clientID: 2,
    //   clientName: "Somil Mehta",
    //   name: "Somil Mehta",
    //   quantity: "plenty",
    //   type: "Heavy",
    //   weight: "1000kg",
    // },
    // {
    //   clientID: 1,
    //   clientName: "Harsh Mall",
    //   name: "Harsh Mall",
    //   quantity: "less",
    //   type: "light",
    //   weight: "2000kg",
    // },
    // {
    //   clientID: 2,
    //   clientName: "Somil Mehta",
    //   name: "Somil Mehta",
    //   quantity: "plenty",
    //   type: "Heavy",
    //   weight: "1000kg",
    // },
  ];
  const { person } = useGlobalContext();

  useEffect(() => {
    document.title = `weclome ${person.username}`;
  }, [person.username]);

  return (
    <section className="flex justify-center h-screen">
      <form className="p-4 flex flex-col space-y-8 w-[80vw] md:w-[90vw] xl:w-[60vw] mt-20">
        <article className="flex flex-col space-y-5">
          <h1 className="font-mono font-bold">Client List: </h1>
          {details.map((item) => {
            return <SingleTransporterForm key={item.id} {...item} />;
          })}
        </article>

        {/* client two */}
        {/* <article className="flex flex-col">
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
        </article> */}

        {/* <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className={
            "bg-blue-200 font-mono font-semibold p-2 rounded-lg md:w-20"
          }
        >
          submit
        </button> */}
      </form>
    </section>
  );
};

export default Dashboard;
