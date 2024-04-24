import logo from "../assets/logo1.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () => {
  AOS.init();
  return (
    <section className="bg-[#F7F7F7]">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 px-6 pt-6"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div data-aos="zoom-out-right"
    data-aos-easing="linear"
    data-aos-duration="1500" className="space-y-2 col-span-full lg:col-span-2">
            <aside className="flex items-center gap-4">
              <img src={logo} alt="" className="size-10" />
              <h1 className="text-2xl font-rancho">Espresso</h1>
            </aside>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <nav className="space-y-3">
              <h6 className="footer-title">Social</h6>
              <div className="flex items-center gap-4 *:text-2xl">
                <div>
                  <FaFacebookSquare />
                </div>
                <div>
                  <FaTwitterSquare />
                </div>
                <div>
                  <FaInstagramSquare />
                </div>
                <div>
                  <FaLinkedin />
                </div>
              </div>
              <div className="space-y-2">
                <h1>Get In Touch</h1>
                <div className="*:flex *:items-center *:gap-2 space-y-3">
                  <div>
                    <h1>
                      <IoIosCall />
                    </h1>
                    <p>+88 01533 333 333</p>
                  </div>
                  <div>
                    <h1>
                      <IoMdMail />
                    </h1>
                    <p>info@gmail.com</p>
                  </div>
                  <div>
                    <h1>
                      <IoLocationSharp />
                    </h1>
                    <p>72, Wall street, King Road, Dhaka</p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div data-aos="zoom-out-left"
    data-aos-easing="linear"
    data-aos-duration="1500" className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2">
            <h1 className="text-4xl font-rancho col-span-full font-bold">
              Connect with Us
            </h1>
            <div className="col-span-full">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-md py-2 px-1 "
              />
            </div>
            <div className="col-span-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md py-2 px-1"
              />
            </div>
            <div className="col-span-full">
              <textarea
                name="message"
                id=""
                cols="10"
                rows="5"
                placeholder="Message"
                className="w-full rounded-md py-2 px-1"
              ></textarea>
            </div>
            <div className="col-span-full">
              <a
                href="#_"
                className="relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Send Message
                </span>
              </a>
            </div>
          </div>
        </fieldset>
      </form>
      <div className="bg-[url('/bannerFooter.png')] w-full">
        <p className="text-white text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </section>
  );
};
