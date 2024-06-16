import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate, Link } from 'react-router-dom';
export function Admin() {
  const navigate = useNavigate();
  return (
     <Card color="transparent"  className=" mt-4 text-align place-items-center justify-center" shadow={false}>
      <Typography variant="h4" color="blue-gray">
     Admin Sign Up   
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
       Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name xyz"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mm"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
             Save For Later
             
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth onClick={()=>{
           navigate('/');
        }}>
          Sign up
        </Button>
        <div className="flex items-center justify-between mt-4">
        <Typography color="gray" className="mt-4 text-center font-normal">
          <a href="/forgetpassword" className="font-medium text-gray-900">
          ForgetPassword
          </a>
        </Typography>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
        </div>
      </form>
    </Card>
  );
}