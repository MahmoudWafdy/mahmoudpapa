// import { Link, NavLink } from "react-router-dom";

// const Contact = () => {
//   return (
//     <div className=" flex flex-col py-12 gap-12 md:py-24 ">
//       <div className="text-sm font-normal">
//         <NavLink to={"/"} className={isActive ? "border-b-2" : "text-gray-500"}>
//           Home /
//         </NavLink>
//         <NavLink to={"/Contact"} className="underline border-b-2 ">
//           Contact
//         </NavLink>
//       </div>
//     </div>
//   );
// };
// export default Contact;
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col py-12 gap-5 md:py-24 md:gap-12">
      <div className="text-sm font-normal">
        <NavLink to="/" className="text-gray-500">
          Home /
        </NavLink>
        <NavLink to="/contact" className="">
          Contact
        </NavLink>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex gap-2 text-xs md:text-[16px] md:flex-col ">
          <div className="flex flex-col gap-3 py-6 border-b-2">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[16px] font-medium">Call To Us</span>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="flex flex-col gap-3 py-6">
            <div className="flex items-center justify-start gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#DB4444" />
                <path
                  d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-[16px] font-medium">Write To US</span>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <form className="grid gap-2 md:grid-cols-3 md:auto-rows-min md:gap-4 overflow-hidden">
          <input
            type="text"
            placeholder="Your Name*"
            className="bg-gray-200 p-2 outline-none rounded md:h-10"
          ></input>
          <input
            type="email"
            placeholder="Your Email*"
            className="bg-gray-200 p-2 outline-none rounded md:h-10"
          ></input>
          <input
            type="text"
            placeholder="Your Phone*"
            className="bg-gray-200 px-2 outline-none rounded md:h-10"
          ></input>

          <textarea
            placeholder="Your Message"
            className="bg-gray-200 p-2 h-30 outline-none rounded md:col-span-3 md:h-60"
          />
          <div className="md:col-span-3 text-right">
            <button className="bg-secondary p-3 w-full rounded md:w-52  ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
