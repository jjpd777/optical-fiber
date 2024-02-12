import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import opticalfiber from "../assets/opticalfiber.png";
import StarsCanvas from "./canvas/stars";
function EndSection() {
  return (
    <div
      id="contactus"
      className="relative flex md:mt-20 flex-col items-center text-white px-5 bg-black">
      <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text md:text-[40px] text-[35px] text-center font-bold z-50 md:pb-4  py-5 text-green-300  hover:text-indigo-200">
        UNLIMITED RELIABILITY AT YOUR FINGERTIPS
      </div>
      <div className="md:text-lg text-sm text-indigo-200 px-4 text-center z-30">
        The perfect network for capacity. It starts today
      </div>
      <Card
        color="transparent"
        className="opacity-90 md:p-8 p-5 z-30 bg-blue-700 bg-opacity-10 ">
        <Typography variant="h5" color="white">
          <p>Get In Touch</p>
        </Typography>

        <form className="mt-8 mb-2 w-80">
          <div className="mb-1 flex flex-col gap-4">
            <Typography color="white" className="-mb-4">
              <p className="text-indigo-200">Name</p>
            </Typography>
            <Input
              placeholder="your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography color="white" className="-mb-4">
              <p className="text-indigo-200">Email</p>
            </Typography>
            <Input
              placeholder="your mail"
              className=" !border-t-blue-gray-200 focus:border-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography color="white" className="-mb-4">
              <p className="text-indigo-200">Comment </p>
            </Typography>
            <Input
              placeholder="your comments"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button
            className="mt-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-indigo-900 text-sm tracking-wider"
            color="indigo"
            fullWidth>
            <p>Submit</p>
          </Button>
        </form>
      </Card>
      <div className="absolute top-[150px] left-0 md:w-[30%] w-[40%] opacity-60">
        <img src={opticalfiber} alt="bg" />
      </div>
      <div className="absolute right-0 md:w-[20%] w-[30%] top-[50%] transform rotate-180 opacity-70">
        <img src={opticalfiber} alt="bg" />
      </div>

      <StarsCanvas />
    </div>
  );
}

export default EndSection;
