import React, { useRef, useState } from "react";
import contact from "../../assets/image/contact.png";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isHuman, setIsHuman] = useState("");
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
    <div className="md:grid md:grid-cols-2 md:place-items-center pt-10 px-5 md:px-0">
      <figure
        className="hidden md:block"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <img src={contact} alt="" />
      </figure>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h2 className="text-2xl text-primary font-bold mb-3 text-center">
          I’m ready to talk...
        </h2>
        <form onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Khalid Ibn Al-Walid"
              className="input w-full md:w-96 focus:outline-none mt-1"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>{" "}
          <div className="my-2">
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="example@gmail.com "
              className="input w-full md:w-96 focus:outline-none mt-1"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label> <br />
            <textarea
              id="message"
              name="message"
              className="textarea w-full h-32 focus:outline-none mt-1"
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
    </div>
  );
};

export default ContactSection;
