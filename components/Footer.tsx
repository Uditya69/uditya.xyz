import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (

<div className="w-full fixed bottom-0 ">

    
      <div className="flex flex-row max-w-3xl pb-5 justify-between text-gray-400">
        <div className={"flex hover:text-blue-300"}>
          <Link href={"/home"}>© Uditya</Link>
        </div>

        <div className="flex gap-3">
          <Link
            href={
              "https://instagram.com/am_uditya?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
            }
            target="_blank"
            className="hover:text-pink-800"
          >
            <FaInstagram color="red-800" size={20} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/uditya-kumar-mandal/"}
            target="_blank"
            className="hover:text-sky-500"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href={"https://github.com/Uditya69"}
            target="_blank"
            className="hover:text-gray-500"
          >
            <FaGithub size={20} />
          </Link>
          <Link href={""} className=" border-zinc-400">
            <AiOutlineMail size={22} className={"hover:text-rose-600"} />
          </Link>
        </div>
      </div>
    
    </div>);
}

export default Footer;
