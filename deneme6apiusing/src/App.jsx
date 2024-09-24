import { useEffect } from "react";
import "./App.css";
import axios from "axios";
const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };
  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL + "/users", newUser);
    console.log(response);
  };
  const updateUser = async (userid, upUser) => {
    const response = await axios.put(BASE_URL + "/users/" + userid, upUser);
    console.log(response);
  };
  const deleteUser = async (userId) => {
    const response = await axios.delete(BASE_URL + "/users/" + userId);
    console.log(response);
  };
  useEffect(() => {
    // getAllUsers();
    // getUserById(2);
    //  createUser({"username":"naber","password":"xx"})
    // updateUser("a0d9",{"username":"umit44","password":"1xx"})
    //deleteUser("a0d9")
  }, []);
  return <div></div>;
}

export default App;
