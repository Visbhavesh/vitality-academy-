import React, { useState } from "react";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Input,
  Button,
  Typography,
  Snackbar,
} from "@material-tailwind/react";

const defaultTheme = createTheme();

// export function SignUp(){
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     username: "",
//     password: "",
//     phone: "",
//   });

//   const [notification, setNotification] = useState({
//     open: false,
//     message: "",
//     success: false,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/user/register', formData);
//       if (response.status === 200) {
//         setNotification({ open: true, message: "Sign up successful", success: true });
//         // Redirect after successful registration
//         navigate('/signin');
//       }
//     } catch (error) {
//       setNotification({ open: true, message: "Sign up failed", success: false });
//       console.log(error);
//     }
//   };

//   const navigate = useNavigate();

//   const handleCloseNotification = () => {
//     setNotification({ ...notification, open: false });
//   };

//   return (
//     <>
//       <Card color="transparent" className=" mt-4 text-align place-items-center justify-center" shadow={false}>
//         <Typography variant="h4" color="blue-gray">
//           Sign Up
//         </Typography>
//         <Typography color="gray" className="mt-1 font-normal">
//           Enter your details to Sign Up.
//         </Typography>
//         <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
//           <div className="mb-1 flex flex-col gap-6">
//             {/* Form fields here */}
//           </div>
//           <Button className="mt-6" fullWidth type="submit">
//             Sign Up
//           </Button>
//           <div className="flex items-center justify-between mt-4">
//             <Typography color="gray" className="mt-4 text-center font-normal">
//               Already have an account?{" "}
//               <Link href="/signin" className="font-medium text-gray-900">
//                 Sign In
//               </Link>
//             </Typography>
//           </div>
//         </form>
//       </Card>

//       <Snackbar
//         open={notification.open}
//         autoHideDuration={6000}
//         onClose={handleCloseNotification}
//         message={notification.message}
//         action={
//           <Button color="blue-gray" size="small" onClick={handleCloseNotification}>
//             CLOSE
//           </Button>
//         }
//         color={notification.success ? "success" : "danger"}
//       />
//     </>
//   );
// }
export function SignUp() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    phone: "",
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
      const response = await axios.post("http://localhost:8000/signup", formData);
      if (response.status === 200) {
        setNotification({
          open: true,
          message: "Sign up successful",
          success: true,
        });
        // Redirect after successful registration
        navigate("/login");
      }
    } catch (error) {
      setNotification({
        open: true,
        message: "Sign up failed",
        success: false,
      });
      console.log(error);
    }
  };


  return (
    <>
      <Card
        color="transparent"
        className=" mt-4 text-align place-items-center justify-center"
        shadow={false}
      >
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Sign Up.
        </Typography>
        <div
          className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              First Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your first name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Last Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your last name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
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
            <Typography variant="h6" color="blue-gray" className="-mb-5">
              Phone Number
            </Typography>
            <Input
              size="lg"
              placeholder="Enter your phone number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit"  onClick={handleSubmit}>
            Sign Up
          </Button>
          <div className="flex items-center justify-between mt-4">
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-gray-900">
                Sign In
              </Link>
            </Typography>
          </div>
        </div>
      </Card>

      {notification.open && (
        <div onClick={() => setNotification({ ...notification, open: false })} className={`fixed bottom-5 right-5 bg-${notification.success ? 'green' : 'red'}-500 text-white px-4 py-2 rounded-md shadow-lg cursor-pointer`}>
          {notification.message}
          {/* <button className="ml-2" >Close</button> */}
        </div>
      )}
    </>
  );
}
