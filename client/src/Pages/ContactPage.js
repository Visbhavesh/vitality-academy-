import React ,{ useState } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export default function ContactPage() {

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const url =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.536041571149!2d83.48399873677933!3d26.08219627879471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918f21be2f6493%3A0xaea8841c949985d0!2sVitality%20Academy!5e0!3m2!1sen!2sin!4v1715530428438!5m2!1sen!2sin";




  return (
    <section className="px-8 my-20   mt-20  ">
      <div className="cont   ainer mb-4  mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4  text-center lg:!text-4xl">
          Contact Us
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl">
          We&apos;re Here to Help You
        </Typography>
        <Typography className="mb-8 font-normal !text-lg  mx-auto max-w-3xl !text-gray-800">
          Whether it&apos;s a question about our Education , a request for
          teacher, or suggestions for improvement, our team is redy to help you.
        </Typography>
        <div className="grid grid-cols-1 justify-between gap-x-20 lg:grid-cols-2 ">
          <iframe
            src={url}
            loading="lazy"
            height="500"
            width="100%"
            className="sm:h-64 sm:pl-4 md:h-96  lg:h-110 mb-10 xl:h-160 w-full"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <form action="#" className="flex flex-col gap-4 px-auto sm:pl-20 justify-center lg:max-w-sm">
            
              <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900">
                Your Name
              </Typography>
              <Input
                color="black"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900">
                Your Email
              </Typography>
              <Input
                color="black"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900">
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "",
                }}
              />
            </div>
            <Button onClick={openPopup} className="w-full" color="blue">
            <a href="mailto:infovacademy.edu@gmail.com">Send message</a>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}