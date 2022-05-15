import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Alert = () => {
  const { showAlert,alert } = useGlobalContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);
  return (
    <p
      className={`text-center text-sm text-white rounded-sm mb-2 font-mono ${
        alert.type === "success" ? "bg-green-300" : "bg-red-400"
      }`}
    >
      {alert.message}
    </p>
  );
};

export default Alert;
