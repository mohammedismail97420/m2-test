import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const MegaMenu = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div className="absolute top-[98%] left-[7vw] right-[7vw] mt-1 bg-white border-none shadow-lg border-y z-50 p-10 md:p-30 rounded-b-md">
        <div className="grid md:py-15 px-4 mx-auto max-w-screen-xl text-sm text-black dark:text-darkgray2 md:grid-cols-3 gap-20 md:gap-40 md:px-15">
          <div className="space-y-15">
            <Accordion open={open === 1} className="h-auto hover:bg-gray p-10">
              <button
                className="relative w-full text-left text-13"
                onClick={() => handleOpen(1)}
              >
                Category 1
                {open !== 1 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x203A;
                  </span>
                )}
                {open === 1 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x2039;
                  </span>
                )}
              </button>
              <AccordionBody className="h-auto font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium et impedit officia, ipsum esse iure. Ut eligendi
                facere sit explicabo.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} className="h-auto hover:bg-gray p-10">
              <button
                className="relative w-full text-left text-13"
                onClick={() => handleOpen(2)}
              >
                Category 2
                {open !== 2 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x203A;
                  </span>
                )}
                {open === 2 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x2039;
                  </span>
                )}
              </button>
              <AccordionBody className="h-auto font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium et impedit officia, ipsum esse iure. Ut eligendi
                facere sit explicabo.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} className="h-auto hover:bg-gray p-10">
              <button
                className="relative w-full text-left text-13"
                onClick={() => handleOpen(3)}
              >
                Category 3
                {open !== 3 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x203A;
                  </span>
                )}
                {open === 3 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x2039;
                  </span>
                )}
              </button>
              <AccordionBody className="h-auto font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium et impedit officia, ipsum esse iure. Ut eligendi
                facere sit explicabo.
              </AccordionBody>
            </Accordion>
          </div>

          <div className="space-y-15">
            <Accordion open={open === 4} className="h-auto hover:bg-gray p-10">
              <button
                className="relative w-full text-left text-13"
                onClick={() => handleOpen(4)}
              >
                Category 4
                {open !== 4 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x203A;
                  </span>
                )}
                {open === 4 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x2039;
                  </span>
                )}
              </button>
              <AccordionBody className="h-auto font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium et impedit officia, ipsum esse iure. Ut eligendi
                facere sit explicabo.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} className="h-auto hover:bg-gray p-10">
              <button
                className="relative w-full text-left text-13"
                onClick={() => handleOpen(5)}
              >
                Category 5
                {open !== 5 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x203A;
                  </span>
                )}
                {open === 5 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x2039;
                  </span>
                )}
              </button>
              <AccordionBody className="h-auto font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium et impedit officia, ipsum esse iure. Ut eligendi
                facere sit explicabo.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} className="h-auto hover:bg-gray p-10">
              <button
                className="relative w-full text-left text-13"
                onClick={() => handleOpen(6)}
              >
                Category 6
                {open !== 6 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x203A;
                  </span>
                )}
                {open === 6 && (
                  <span className="absolute right-50 text-20 -top-7 rotate-90">
                    &#x2039;
                  </span>
                )}
              </button>
              <AccordionBody className="h-auto font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium et impedit officia, ipsum esse iure. Ut eligendi
                facere sit explicabo.
              </AccordionBody>
            </Accordion>
          </div>
          <a
            href="#"
            className="p-10 text-left bg-local bg-darkgray2 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken bg-[url('/common/bathroom-banner.jpg')] flex flex-col justify-between min-h-[100px]"
          >
            <p className="mb-5 max-w-xl font-extrabold tracking-tight leading-tight text-white">
              Preview the new Flowbite dashboard navigation.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-5 py-4 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-darkgray2 focus:ring-4 focus:outline-none focus:ring-darkgray2 "
            >
              Get started
              <svg
                className="ml-1 -mr-1 w-14 h-14"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default MegaMenu;
