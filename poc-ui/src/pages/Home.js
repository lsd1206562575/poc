import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom"; // 导入 useNavigate

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // 使用 useNavigate

  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // 使用 useNavigate 进行导航
      return;
    }

    loadUsers();
  }, [navigate]);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/findAll");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loadUsers();
  };

  const handleLogout = () => {
    // 在这里执行注销操作，例如清除本地存储中的令牌
    localStorage.removeItem("token");
    // 导航到登录页面
    navigate("/login");
  };

  return (
      <div className="container">
        <div className="py-4">
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Log Out
          </button>
          <table className="table border shadow">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userPassword}</td>
                  <td>{user.userMail}</td>
                  <td>
                    <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}
