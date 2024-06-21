import React, { useEffect, useState } from "react";
import axios from "../../api";
import Layout from "../../components/layout/Layout";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";

const User = () => {
    const [users, setUsers] = useState(null);
    const userData = JSON.parse(localStorage.getItem("user-data"));
    let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/users/search", { params: { limit: 100 } })
      .then((res) => {
        setUsers(res.data.data.users);
      })
      .catch((err) => {
        console.error("Error fetching users", err);
      });
  }, []);

  const deleteUserId = (id) => {
    axios
      .delete(`users/${id}`)
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((err) => {
        console.error("Error deleting user", err);
      });
  };

  if (!users) {
    return <Loading/>;
  }
  
  
  return (
      <div className="user-container">
     <div className="">
     <button className="userbtn" type="button" onClick={() => navigate(-1)}>
          Go back
        </button>
     </div>
      {users.length === 0 ? (
        <div>No users found</div>
      ) : (
        users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.FirstName}</h3>
            <h4>{user.LastName}</h4>
            <p>+{user.phones}</p>
            {userData?.role === "owner" && (
              <button onClick={() => deleteUserId(user.id)}>Delete</button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default User;
