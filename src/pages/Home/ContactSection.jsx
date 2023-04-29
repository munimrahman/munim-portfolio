import React from "react";
import contact from "../../assets/image/contact.png";

const ContactSection = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:place-items-center pt-10 px-5 md:px-0">
      <figure className="hidden md:block">
        <img src={contact} alt="" />
      </figure>
      <div>
        <h2 className="text-2xl font-bold mb-3 text-center">
          I’m ready to talk...
        </h2>
        <form action="">
          <div>
            <label htmlFor="name">Name</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Khalid Ibn Al-Walid"
              className="input w-full md:w-96 focus:outline-none mt-1"
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
            />
          </div>
          <div>
            <label htmlFor="message">Message</label> <br />
            <textarea
              id="message"
              name="message"
              className="textarea w-full h-32 focus:outline-none mt-1"
              placeholder="Your Message Here . . ."
            ></textarea>
          </div>
          <div className="mt-1">
            <input className="btn" type="button" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
