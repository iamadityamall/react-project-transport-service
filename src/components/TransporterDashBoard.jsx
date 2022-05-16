import React from "react";
import SingleTransporterForm from "./SingleTransporterForm";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import ClientDataService from "../services/client.services";

const Dashboard = () => {
  const { person } = useGlobalContext();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    document.title = `weclome ${person.username}`;
  }, [person.username]);

  const getClients = async () => {
    const data = await ClientDataService.getAllClients();
    const rawData = data.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setClients(rawData);
  };

  useEffect(() => {
    getClients();
  }, []);

  const deleteHandler = async (id) => {
    console.log("deleterd", id);
    await ClientDataService.deleteClient(id);
    getClients();
  };

  return (
    <section className="flex justify-center h-screen">
      <form className="p-4 flex flex-col space-y-8 w-[80vw] md:w-[90vw] xl:w-[60vw] mt-20">
        <article className="flex flex-col space-y-5">
          <h1 className="font-mono font-bold">
            Client List: {clients.length <= 0 && "list is empty no new consignment."}
          </h1>
          {clients.map((item) => {
            return (
              <SingleTransporterForm
                key={item.id}
                {...item}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </article>
      </form>
    </section>
  );
};

export default Dashboard;
