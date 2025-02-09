"use client";

import {useState} from "react";
import Plane from "@/public/icons/Plane";
import Image from "next/image";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return <form className="flex flex-col h-full">
    <div className="flex gap-6 pb-6">
      <div className="flex-1">
        <p className="font-bold pb-2">Your Name</p>
        <input required className="text w-full" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="flex-1">
        <p className="font-bold pb-2">Your Email</p>
        <input required className="text w-full" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      </div>
    </div>
    <p className="font-bold pb-2">Your Message</p>
    <textarea required className="w-full flex-grow h-full mb-6 md:min-h-0 min-h-[200px]" placeholder="Message" onChange={(e) => setMessage(e.target.value)}/>
    <div className="flex justify-between">
      <div>
        <button className="blue">
          <p>Send Message</p>
          <Plane/>
        </button>
      </div>
      <Image src="/images/mail.svg" className="pr-16 pt-16" alt="" width={150} height={150}/>
    </div>
  </form>;
}
