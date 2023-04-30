import React from "react";

const Contact = () => {
  return (
    <div className="mt-5 md:mt-10 px-5">
      <h1 className="text-2xl font-bold underline mb-8">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Salman Emon"
                  className="input w-full mt-2 focus:outline-none"
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
              ></textarea>
            </div>
            <div className="mt-1">
              <input className="btn" type="button" value="Send" />
            </div>
          </form>
        </div>
        <div className="flex flex-wrap justify-between md:block mt-3 md:mt-0 md:col-span-5 justify-self-center">
          <div className="flex items-center">
            <div className="bg-purple-500 rounded-full h-20 w-20 flex justify-center items-center">
              <i class="fas fa-phone-volume text-white text-5xl"></i>
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-bold">Call Me</h3>
              <p className="text-lg">01929645146</p>
            </div>
          </div>
          <div className="flex items-center my-3">
            <div className="bg-purple-500 rounded-full h-20 w-20 flex justify-center items-center">
              <i class="fas fa-at text-white text-5xl"></i>
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-bold">Email Me</h3>
              <p className="text-lg">munimrh@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-purple-500 rounded-full h-20 w-20 flex justify-center items-center">
              <i class="fas fa-map-marker-alt text-white text-5xl"></i>
            </div>
            <div className="ms-5">
              <h3 className="text-xl font-bold">Address</h3>
              <p className="text-lg">Barishal, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
