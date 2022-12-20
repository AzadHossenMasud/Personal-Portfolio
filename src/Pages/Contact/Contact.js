import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import { toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qash59l",
      "template_j553lak",
      form.current,
      "wJzWhGScoP_TiENQ-"
    ).then(
      (result) => {
        console.log(result.text);
        toast.success('Your message sent successfully')
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div id="contact" className="mt-10">
      <h1 className=" font-bold text-2xl lg:text-4xl text-[#42446E] text-center ">
        {" "}
        Contact
      </h1>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className=" flex flex-col gap-6 justify-around mt-5">
              <div>
                <p className="text-[#42446E] font-bold"> Phone Number :</p>
                <p className="text-[#42446E]">+88 01825732533</p>
              </div>
              <div>
                <p className="text-[#42446E] font-bold"> Email:</p>
                <p className="text-[#42446E]">azadhossenh6677@gmail.com</p>
              </div>
              <div>
                <p className="text-[#42446E] font-bold"> Location:</p>
                <p className="text-[#42446E]">Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    name="user_name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="email"
                    name="user_email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="input input-bordered" name="message" />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    <input type="submit" value="Send" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
