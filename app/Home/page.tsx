"use client";
import { useEffect, useRef } from "react";
import React from "react";
import Image from "next/image";
import pf from "~/app/avatar.jpeg";
import Typed from "typed.js";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

function HomeScreen() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Developer.tsx💻",
        " Photographer.raw📸",
        " Dreamer.sleep(0)💤",
      ],
      startDelay: 250,
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="flex flex-col mt-10">
        <div id="avatar" className="flex flex-row font-mono ">
          <Image
            src={pf}
            height={100}
            width={100}
            alt="NOOB"
            quality={100}
            className="rounded-full"
          />
          <div className="flex flex-col ms-4 mt-3">
            <div id="txt" className="text-2xl">
              Hey there!👋, am uditya, a{" "}
              <span ref={el} className="text-orange-600" />{" "}
            </div>
            
              <div id="social" className="flex flex-row gap-5 ml-0 text-xs pt-4 ">
                <Link href={"https://instagram.com/am_uditya?utm_source=qr&igshid=OGIxMTE0OTdkZA=="} target="_blank" className="hover:text-pink-800">
                  <FaInstagram color="red-800" size={20} /> Instagram
                </Link>
                <Link href={"https://www.linkedin.com/in/uditya-kumar-mandal/"} target="_blank" className="hover:text-sky-500">
                  <FaLinkedin size={20} /> Linkedin
                </Link>
                <Link href={"https://github.com/Uditya69"} target="_blank" className="hover:text-gray-500">
                  <FaGithub size={20} /> Github
                </Link>
            </div>
          </div>
        </div>

<div id="about" className="mt-20">


🚀 19-year-old self-taught front-end developer exploring the realms of back-end. Creating visually appealing websites is my forte. 🌐<br/><br/>

📸 Photography is my visual diary, and gaming is my digital escape🎮. Finding harmony between code and creativity.<br/><br/>

Let's bring ideas to life! 💻✨

</div>


      </div>
    </>
  );
}

export default HomeScreen;
