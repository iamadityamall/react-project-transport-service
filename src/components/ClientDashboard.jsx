import React from "react";
import SingleClientForm from "./SingleClientForm";
import { useState } from "react";
import Alert from "./Alert";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
import ClientDataService from "../services/client.services";
import { storage } from "../components/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Dashboard = () => {
  const [clientOne, setClientOne] = useState(false);
  const [clientTwo, setClientTwo] = useState(false);
  const [details, setDetails] = useState({
    transporterName: "",
    clientName: "",
    quantity: "",
    type: "",
    weight: "",
  });
  const [newClient, setNewClient] = useState({});
  const [file, setFile] = useState(null);
  useEffect(() => {
    document.title = `welcome ${person.username}`;
  });

  const [newUrl, setNewUrl] = useState();

  const { alert, showAlert, person } = useGlobalContext();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newDetail = { ...details, [name]: value, url: newUrl };
    setDetails(newDetail);
  };

  const fileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const uploadDoc = (e) => {
    // firebase storage and url
    e.preventDefault();

    const storageRef = ref(storage, `images/${v4() + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        try {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setNewUrl(url);
            console.log(details);
            console.log(url);
            console.log(typeof url);
            return console.log(url);
          });
        } catch (error) {
          console.log(error);
        }
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUrl);

    setNewClient({
      ...details,
      url: newUrl,
    });

    try {
      await ClientDataService.addClient(newClient);
    } catch (error) {
      console.log(error);
    }

    setDetails({
      ...details,
      transporterName: "",
      clientName: "",
      quantity: "",
      type: "",
      weight: "",
    });
    setClientOne(false);
    setClientTwo(false);
    showAlert(
      true,
      `submitted successfully : ${details.clientName}`,
      "success"
    );
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="p-4 flex flex-col space-y-8 w-[80vw] md:w-[90vw] xl:w-[60vw]">
        {/* client 0ne */}
        <article className="flex flex-col">
          <div className="flex justify-between p-4 capitalize items-center mb-5">
            <h1 className="font-bold text-sm font-mono">transporter 1</h1>
            <button
              name="transporterName"
              value="transporter-1"
              className={`${
                clientOne ? "bg-green-400 text-white" : "bg-gray-300"
              } px-3 py-1 rounded-md text-sm`}
              onClick={(e) => {
                handleChange(e);
                setClientTwo(false);
                setClientOne(!clientOne);
                setDetails({
                  ...details,
                  transporterName: e.target.value,
                  clientName: "",
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
              fileChange={fileChange}
              uploadDoc={uploadDoc}
            />
          )}
        </article>

        {/* client two */}
        <article className="flex flex-col">
          <div className="flex justify-between p-4 capitalize items-center mb-5">
            <h1 className="font-bold text-sm font-mono">transporter 2</h1>
            <button
              name="transporterName"
              value="transporter-2"
              className={`${
                clientTwo ? "bg-green-400 text-white" : "bg-gray-300"
              } px-3 py-1 rounded-md text-sm`}
              onClick={(e) => {
                handleChange(e);
                setClientOne(false);
                setClientTwo(!clientTwo);
                setDetails({
                  ...details,
                  transporterName: e.target.value,
                  clientName: "",
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
              fileChange={fileChange}
              uploadDoc={uploadDoc}
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
      <p>{newUrl}</p>
    </section>
  );
};

export default Dashboard;
