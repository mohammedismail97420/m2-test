import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { overlay } from "../redux/slices/overlaysSlice";
import Image from "next/image";
import FlagDropdown from "./FlagDropdown";
import { getCookie } from "cookies-next";
import useFetch from "../hooks/useFetch";
import { apis } from "../config/apis";
import "react-loading-skeleton/dist/skeleton.css";

const Navbar = () => {
  const [langData, setLangData] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [navActive, setNavActive] = useState(false);
  const conf = useSelector((store) => store.configReducer.config);
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = conf?.language;
  // const dropdownOptions2 = ["DE 19% VAT.", "DE 22% VAT."];
  const currencies = {
    available_currency_codes: ["($) USD", "(€) EUR"],
    base_currency_code: "(€) EUR",
  };
  const dropdownOptions3 = ["all categories", "($) USD"];
  const langFlags = [
    {
      src: "/common/flag.webp",
      title: "De",
    },
    {
      src: "/common/china-flag.png",
      title: "Ch",
    },
    {
      src: "/common/sigapore.png",
      title: "En",
    },
  ];

  // Offer text block definition
  const {
    res: offerText,
    error,
    loading,
    executeFetch,
  } = useFetch("get", apis?.offer_text_block, "token", false);

  useEffect(() => {
    executeFetch();
  }, []);

  useEffect(() => {
    lang &&
      import(`../locales/${conf?.language}.json`).then((data) => {
        setLangData(data);
      });
  }, [lang]);

  const cookie = getCookie("_SYS_USER_AUTH");

  const login = () => {
    setNavActive(false);
    cookie ? router.push("/account") : dispatch(overlay("signIn"));
  };

  const people = [
    {
      id: 1,
      name: "LGROHE Euphoria",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 2,
      name: "GROHE Euphoria",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 3,
      name: "GROHE Euphoria",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 4,
      name: "Cat Ben",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 5,
      name: "James Tim",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 6,
      name: "GROHE Euphoria",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 7,
      name: "Mohd Gausi",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 8,
      name: "James Due",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
    {
      id: 9,
      name: "James Cameron",
      imageUrl: "https://xtwostore-ae01a.web.app/images/cat-1.svg",
      price: "$198",
      deliveryTime: "1432",
      articleNumber: "263",
      link: "LGROHE-Euphoria",
    },
  ];

  const [filter, setFilter] = useState([]);

  const [noResults, setNoResults] = useState(false);

  const [showResults, setShowResults] = useState(true);

  const search = (e) => {
    const finds = people.filter((element) => {
      return element.name.toLowerCase().includes(e.target.value);
    });

    if (e.target.value.length > 0) {
      setFilter(finds);
      setShowResults(true);
    } else {
      setFilter([]);
      setNoResults(true);
      setShowResults(false);
    }
  };

  const handleBlur = () => {
    setNoResults(false);
  };

  const handleClick = (link) => {
    router.push(`/product/${link}`);
    setShowResults(false);
    setFilter([]);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <div>
        {showTopBar && offerText && (
          <div className="bg-themeBlue flex justify-center items-center h-32 relative">
            <div
              className="text-white uppercase text-10 font-medium"
              dangerouslySetInnerHTML={{ __html: offerText?.data?.content }}
            ></div>
            <span
              onClick={() => setShowTopBar(!showTopBar)}
              className="text-gray text-10 absolute right-15 cursor-pointer"
            >
              <span>✖</span>
            </span>
          </div>
        )}
        <div className="colony"></div>
        <nav className="commonContainer bg-navBackground h-70 flex items-center text-white relative select-none">
          <div className="flex justify-between items-center w-[100%] md:w-auto">
            <Link href="/">
              <div
                onClick={() => setNavActive(false)}
                className="w-[120px] mr-20 select-none cursor-pointer"
              >
                <Image
                  height="50px"
                  width="150px"
                  src="../common/xlogo.svg"
                  alt="xTWOstore Logo"
                />
              </div>
            </Link>
            <div
              className="block cursor-pointer md:hidden text-right"
              onClick={() => setNavActive(!navActive)}
            >
              {navActive && <i className="fa-solid fa-xmark"></i>}
              {!navActive && <i className="fa fa-bars"></i>}
            </div>
          </div>
          <div
            className={`${
              navActive
                ? "flex justify-between items-start md:items-center flex-1 bg-navBackground absolute left-0 top-[100%] flex-col w-[100%] p-20 md:static md:flex-row md:bg-[transparent] md:p-0 z-[3]"
                : "hidden md:flex md:justify-between items-center flex-1"
            }`}
          >
            <div className="hidden md:block relative flex-1 w-[100%] mb-20 md:mb-0">
              <input
                type="text"
                className="border-none outline-none shadow-none bg-navInput text-12 pl-16 pr-26 py-10 w-[100%] placeholder:text-gray text-white"
                placeholder="Search your products"
                onChange={search}
              />
              <div className="absolute right-10 top-[50%] transform translate-y-[-50%]">
                <i className="fa-solid fa-search"></i>
              </div>

              {filter.length !== 0 && showResults && (
                <div className="absolute top-full z-10 w-[50vw] shadow-md bg-gray">
                  {filter.map((data) => {
                    return (
                      <div
                        key={data.link}
                        className="group flex gap-30 justify-between w-full px-15 py-3 items-center odd:bg-white flex-1 hover:bg-themeBlue transition-all duration-400 cursor-pointer"
                        onClick={() => handleClick(data.link)}
                      >
                        <img
                          src={data.imageUrl}
                          alt=""
                          className="flex-none h-55"
                        />
                        <div className="flex-auto truncate flex flex-col justify-between">
                          <a className="ml-3 text-black text-12 font-bold mb-10 group-hover:text-white">
                            {data.name}
                          </a>

                          <p className="group-hover:text-white text-black text-12">{`Article Number: ${data.articleNumber}`}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                          <p className=" group-hover:text-white text-red text-12 mb-10 font-bold">{`Price: ${data.price}`}</p>
                          <p className="group-hover:text-white text-black text-12">{`Delivery Time: ${data.deliveryTime}`}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {noResults && (
                <p className="text-red absolute top-full bg-white">
                  No result found!
                </p>
              )}
            </div>
            <div className="md:ml-20 md:mb-0 mb-20 text-12">
              <FlagDropdown
                flagsSrc={langFlags}
                defaultSelected={langFlags[0]}
              />
            </div>
            <div className="md:ml-20 md:mb-0 mb-20 text-12">
              {currencies && (
                <Dropdown
                  options={currencies.available_currency_codes}
                  defaultSelected={currencies.base_currency_code}
                />
              )}
            </div>
            <div className="md:ml-20 md:mb-0 mb-20 text-12">
              {/* <Dropdown
                options={dropdownOptions2}
                defaultSelected="DE 19% VAT."
                modifier="Country: "
              /> */}
            </div>
            <div
              className="relative flex justify-center items-center md:ml-20 md:mb-0 mb-20 cursor-pointer"
              onClick={() => {
                setNavActive(false);
                dispatch(overlay("cart"));
              }}
            >
              <Image
                width="20px"
                height="20px"
                src="../common/navCart.svg"
                alt="Cart"
              ></Image>
              <div className="flex justify-center items-center text-white absolute top-[-5px] right-[-5px] w-15 h-15 text-12 rounded-[20px] leading-3 select-none bg-themeBlue">
                <span>0</span>
              </div>
            </div>
            <div className="flex justify-center items-center cursor-pointer md:ml-20 md:mb-0 mb-20">
              <Image
                src="../common/navUser.svg"
                width="20px"
                height="20px"
                alt="User"
                onClick={login}
              />
            </div>
          </div>
        </nav>

        <div className="commonContainer justify-between bg-white hidden md:flex">
          <div className="uppercase text-12 font-bold text-themeBlue py-15">
            <Dropdown
              options={dropdownOptions3}
              defaultSelected="all categories"
            />
          </div>
          <div className="w-1 bg-darkgray my-20"></div>
          <Link href={"#"}>
            <a className="uppercase text-12 font-bold text-black py-20">
              {langData?.brands}
            </a>
          </Link>
          <Link href={"#"}>
            <a className="uppercase text-12 font-bold text-black py-20">
              {langData?.bathroom}
            </a>
          </Link>
          <Link href={"#"}>
            <a className="uppercase text-12 font-bold text-black py-20">
              {langData?.kitchen}
            </a>
          </Link>
          <Link href={"#"}>
            <a className="uppercase text-12 font-bold text-black py-20">
              {langData?.sales}
            </a>
          </Link>
          <Link href={"#"}>
            <a className="uppercase text-12 font-bold text-black py-20">
              {langData?.duravit}
            </a>
          </Link>
          <Link href={"#"}>
            <a className="uppercase text-12 font-bold text-black py-20">
              {langData?.villeroy_and_boch}
            </a>
          </Link>
        </div>
        <div className="block md:hidden  relative flex-1 w-[100%] mb-0 md:mb-0">
          <input
            type="text"
            className="border-none outline-none shadow-none bg-navInput text-12 pl-16 pr-26 py-15 md:py-10 w-[100%] placeholder:text-gray text-white"
            placeholder="Search your products"
            onChange={search}
          />
          <i className="fa-solid fa-magnifying-glass absolute right-10 top-[50%] transform translate-y-[-50%] text-12 text-gray"></i>
          {filter.length !== 0 && showResults && (
            <div className="absolute top-full z-20 w-full bg-white shadow-md">
              {filter.map((data) => {
                return (
                  <div
                    key={data.imageUrl}
                    className="flex gap-30 justify-between w-full px-15 py-3 items-center my-6 bg-white flex-1 hover:bg-themeBlue divide-1"
                  >
                    <img
                      src={data.imageUrl}
                      alt=""
                      className="flex-none h-55"
                    />
                    <div className="flex-auto truncate flex flex-col justify-between">
                      <p className="ml-3 text-black text-12 font-bold mb-10">
                        {data.name}
                      </p>
                      <p className=" text-black text-12">{`Article Number: ${data.articleNumber}`}</p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="text-red text-12 mb-10 font-bold">{`Price: ${data.price}`}</p>
                      <p className=" text-black text-12">{`Delivery Time: ${data.deliveryTime}`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
