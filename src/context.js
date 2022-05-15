import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [person, setPerson] = useState({
    username: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPerson((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
    if (!person.username && !person.password) {
      showAlert(true, "empty field", "danger");
    } else if (person.username === person.password) {
      setAlert(true, 'successfully logged in', 'success')
      navigate("/dashboard");
    } else {
      showAlert(true, "incorrect password or username", "danger");
    }
  };

  const showAlert = (status = true, message = "", type = "") => {
    setAlert({ status, message, type });
  };

  return (
    <AppContext.Provider
      value={{
        person,
        setPerson,
        alert,
        setAlert,
        handleChange,
        handleSubmit,
        showAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
