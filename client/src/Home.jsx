import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./features/userSlice";

function Home() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    if (user.isLogin) {
      dispatch(deleteUser());
    }

    navigate("/login");
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      {user.isLogin ? (
        <div className="bg-white p-3 rounded w-25">
          <h2>Information</h2>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              readOnly={true}
              placeholder="Enter Name"
              autoComplete="off"
              name="email"
              value={user.data.name}
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              readOnly={true}
              value={user.data.email}
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Amount</strong>
            </label>
            <input
              type="email"
              name="email"
              readOnly={true}
              value={user.data.amount}
              placeholder="Enter Email"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={logout} className="btn btn-success w-100 rounded-0">
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white p-3 rounded w-25">
          <h2>You are not logging in </h2>

          <p>You have to login to use this feature</p>
          <button onClick={logout} className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p>Don't have an account?</p>

          <Link
            to={"/register"}
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
