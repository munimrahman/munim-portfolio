import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHuman, setIsHuman] = useState(false);
  const captchaRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        {
          from_name: name,
          to_name: "Munim Hridoy",
          reply_to: email,
          message: message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          Swal.fire(
            "Email Sent Successfully!",
            "Thank you for your email! I will respond to you immediately.",
            "success"
          );
        }
      });
  };

  return (
    <div className="mt-5 md:mt-10 px-5">
      <h1 className="text-4xl font-hand underline mb-8">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="md:col-span-7"
        >
          <form onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Salman Emon"
                  className="input w-full mt-2 focus:outline-none"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="salman@gmail.com"
                  className="input w-full mt-2 focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="message">Message</label> <br />
              <textarea
                id="message"
                name="message"
                className="textarea w-full h-36 focus:outline-none mt-2"
                placeholder="Your Message Here . . ."
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <ReCAPTCHA
              sitekey="6LcEec4lAAAAAI0sm8iuDt2I5zAPWlQsfZWHLura"
              ref={captchaRef}
              onChange={(e) => setIsHuman(e.target.value)}
            />
            <p className="text-xs">
              Verify you are not a Robot! If captcha not loading please reload.
            </p>
            <div className="mt-1">
              <input
                className="btn"
                type="submit"
                value="Send"
                // disabled={!isHuman}
              />
            </div>
          </form>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-wrap justify-between md:block mt-3 md:mt-0 md:col-span-5 justify-self-center"
        >
          <div className="flex items-center">
            <div className="bg-purple-500 rounded-full h-20 w-20 flex justify-center items-center">
              <i className="fas fa-phone-volume text-white text-5xl"></i>
            </div>
            <div className="ms-5">
              <h3 className="text-xl">Call Me</h3>
              <p className="text-lg font-light">01929645146</p>
            </div>
          </div>
          <div className="flex items-center my-3">
            <div className="bg-purple-500 rounded-full h-20 w-20 flex justify-center items-center">
              <i className="fas fa-at text-white text-5xl"></i>
            </div>
            <div className="ms-5">
              <h3 className="text-xl">Email Me</h3>
              <p className="text-lg font-light">munimrh@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-purple-500 rounded-full h-20 w-20 flex justify-center items-center">
              <i className="fas fa-map-marker-alt text-white text-5xl"></i>
            </div>
            <div className="ms-5">
              <h3 className="text-xl">Address</h3>
              <p className="text-lg font-light">Barishal, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
