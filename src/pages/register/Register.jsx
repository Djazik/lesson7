import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { PatternFormat } from "react-number-format";
import Modal from "../../components/model/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: "",
};

const Register = () => {
  const { formData, handleChange } = useGetInputValue(initialState);

  const handleCreateUser = (e) => {
    e.preventDefault();
    formData.phones = [formData.phones];
    axios
    .post("/auth/user/sign-up", formData);
    toast.success("Succses")
    .catch((error) => {
        toast.error("Malumotni toldiring");
        console.error("Error logging in:", error);
      });
  };

  const handlePhoneChange = (values) => {
    const { value } = values;
    handleChange({
      target: {
        name: "phones",
        value,
      },
    });
  };
  let navigate = useNavigate();

  return (
    <Modal>
      <form onSubmit={handleCreateUser}>
        <h2>Register</h2>
        <input
          value={formData.UserName}
          onChange={handleChange}
          name="UserName"
          type="text"
          placeholder="Username"
        />
        <input
          value={formData.password}
          onChange={handleChange}
          name="password"
          type="text"
          placeholder="Password"
        />
        <input
          value={formData.FirstName}
          onChange={handleChange}
          name="FirstName"
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.LastName}
          onChange={handleChange}
          name="LastName"
          type="text"
          placeholder="Last Name"
        />
        <PatternFormat
          format="+(###) ##-###-##-##"
          value={formData.phones}
          onValueChange={handlePhoneChange}
          valueIsNumericString={true}
          placeholder="Phone Number"
        />
        <button onClick={() => navigate(-1)}>Create</button>
      </form>
    </Modal>
  );
};

export default Register;
