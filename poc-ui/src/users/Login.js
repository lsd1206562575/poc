import axios from "axios";
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userName: "",
        userPassword: "",
    });

    const {userName, userPassword} = user;

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const OnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/login", user);

            // 从响应中获取令牌
            const token = response.data;
            console.log(response)
            if (token) {
                // 如果令牌不为空，将其存储在本地存储中（注意：在实际应用中，可能需要更安全的存储方式）
                localStorage.setItem("token", token);

                // 登录成功后，重定向到主页或其他需要的页面
                navigate("/");
            } else {
                // 如果令牌为空，可以执行其他操作，例如显示错误消息
                console.error("Empty token received");
                // 这里可以添加显示错误消息的逻辑
            }
        } catch (error) {
            console.error("Login failed:", error);
            // 处理登录失败，可以显示错误消息或执行其他操作
        }
    };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">Login</h2>

                        <form onSubmit={(e) => OnSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your username.."
                                    name="userName"
                                    value={userName}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your password.."
                                    name="userPassword"
                                    value={userPassword}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
