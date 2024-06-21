import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import Modal from "../../components/model/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  UserName: "john32",
  password: "12345678",
};

const Login = () => {
  let navigate = useNavigate();
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/auth/sign-in", formData)
    .then((res) => {
        toast.success("Welcome");
      localStorage.setItem("x-auth-token", res.data.data.token);
      localStorage.setItem("user-data", JSON.stringify(res.data.data.user));
    })
    .catch((error) => {
        toast.error("username or password is incorrect");
        console.error("Error logging in:", error);
      });
    
    // setFormData(initialState);
  };
  return (
    <Modal>
      <form onSubmit={handleSubmit} action="">
        <h2>Login</h2>
        <input
          value={formData.UserName}
          onChange={handleChange}
          name="UserName"
          type="text"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <button>Login</button>
        <button type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </form>
    </Modal>
  );
};

export default Login;
