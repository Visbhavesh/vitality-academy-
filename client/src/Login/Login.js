import React, { useState } from "react";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,Input,Button,
  Typography,Snackbar,
} from "@material-tailwind/react";

const defaultTheme = createTheme();

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        formData
      );
      if (response.status === 200) {
        // Save access token in local storage
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("username", formData.username);
        setNotification({
          open: true,
          message: "Login successful",
          success: true,
        });
        // Redirect after successful login
        navigate("/");
      }
    } catch (error) {
      setNotification({
        open: true,
        message: "Login failed",
        success: false,
      });
      console.log(error);
    }
  };

  return (
    <>
      <Card
        color="transparent"
        className=" mt-20 text-align place-items-center justify-center"
        shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <div className="mt-12 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Username
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your username"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Enter your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button
            className="mt-16"
            fullWidth
            type="submit"
            onClick={handleSubmit}>
            Login
          </Button>
          <div className="flex items-center justify-between mt-4">
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link href="/signup" className="font-medium text-gray-900">
                Sign Up
              </Link>
            </Typography>
          </div>
        </div>
      </Card>

      {notification.open && (
        <div
          onClick={() => setNotification({ ...notification, open: false })}
          className={`fixed bottom-5 right-5 bg-${
            notification.success ? "green" : "red"
          }-500 text-white px-4 py-2 rounded-md shadow-lg cursor-pointer`}>
          {notification.message}
        </div>
      )}
    </>
  );
}
