import Alert from "./Alert";
import { useGlobalContext } from "../context";

const LoginPage = () => {
  const { handleSubmit, handleChange, person, showAlert, alert } =
    useGlobalContext();

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="p-4 flex flex-col space-y-5 capitalize w-[80vw] bg-gray-100 rounded-lg md:w-[60vw] lg:w-[40vw] xl:w-[25vw]">
        <h2 className="text-center font-bold text-xl">login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {alert && <Alert {...alert} showAlert={showAlert} />}
          <div className="flex flex-col">
            <label htmlFor="username" className="font-mono p-2">
              username
            </label>
            <input
              type="text"
              placeholder="username"
              name="username"
              id="username"
              value={person.username}
              onChange={(e) => handleChange(e)}
              className="p-2 border-gray-300 border-2"
            />
            <label htmlFor="password" className="font-mono p-2">
              password
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              id="password"
              value={person.password}
              className="p-2 border-gray-300 border-2"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            type="submit"
            className="font-mono p-4 rounded-lg bg-blue-400 text-white mt-10"
          >
            login
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
