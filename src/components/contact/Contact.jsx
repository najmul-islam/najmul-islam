"use client";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { Alert } from "../ui/alert";
import Heading from "../ui/heading";
import Section from "../ui/section";

const Contact = () => {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  // alert state
  const [isSuccess, setIsSeccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "") {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY,
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setIsSeccess(true);
            }
          },
          (error) => {
            setIsError(true);
            setError("Email not send, please try again");
          },
        );
    } else {
      setIsError(true);
      setError("Please fill all required field");
    }
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setTimeout(() => {
        setIsSeccess(false);
        setIsError(false);
      }, 5000);
    }
  }, [isSuccess, isError]);

  return (
    <Section id="contact">
      <Heading lightText="Get" boldText="in Touch" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h4 className="py-4 text-xl font-light text-white md:text-2xl">
            Get In Touch
          </h4>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name (required)"
              name="name"
              className="rounded bg-[#333333] px-[16px] py-[10px] text-white shadow-lg outline-none placeholder:text-[#ffffff66] focus:bg-[#404040] active:bg-[#404040]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Your Email (required)"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded bg-[#333333] px-[16px] py-[10px] text-white shadow-lg outline-none placeholder:text-[#ffffff66] focus:bg-[#404040] active:bg-[#404040]"
            />

            <input
              type="tel"
              inputMode="tel"
              pattern="[\d\s+]*"
              placeholder="Your Phone"
              name="number"
              value={number}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[+\d\s]*$/.test(value)) {
                  setNumber(value);
                }
              }}
              className="rounded bg-[#333333] px-[16px] py-[10px] text-white shadow-lg outline-none placeholder:text-[#ffffff66] focus:bg-[#404040] active:bg-[#404040]"
            />

            <textarea
              rows={8}
              placeholder="Write a message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded bg-[#333333] px-[16px] py-[10px] text-white shadow-lg outline-none placeholder:text-[#ffffff66] focus:bg-[#404040] active:bg-[#404040]"
            />

            <button
              className="w-36 rounded-full bg-[#bac964] px-4 py-2 text-[14px] font-normal tracking-wide text-white hover:bg-[#b2c251]"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
          {isSuccess && (
            <Alert className="mt-4">Message send successesfully</Alert>
          )}
          {isError && (
            <Alert variant="destructive" className="mt-4">
              {error}
            </Alert>
          )}
        </div>

        <div>
          <h4 className="py-4 text-xl font-light text-white md:text-2xl">
            My Contact Details
          </h4>
          <div className="md:py-4">
            <h6 className="uppercase tracking-widest text-[#2c3e50]">Email</h6>
            <p className="mb-4 text-[#ffffff66]">najmulislam519@gmail.com</p>

            <h6 className="uppercase text-[#2c3e50]">Phone</h6>
            <p className="mb-4 text-[#ffffff66]">+88 01826 512120</p>

            <h6 className="uppercase text-[#2c3e50]">Current Address</h6>
            <p className="mb-4 text-[#ffffff66]">Feni, Bangladesh.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Contact;
