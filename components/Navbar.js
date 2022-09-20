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
import { config } from "../redux/slices/configSlice";
import MegaMenu from "./MegaMenu";
import $ from "jquery";

const Navbar = () => {
  const [langData, setLangData] = useState(null);
  const [showTopBar, setShowTopBar] = useState(true);
  const [navActive, setNavActive] = useState(false);
  const [countries, setCountries] = useState(null);
  const conf = useSelector((store) => store.configReducer.config);
  const dispatch = useDispatch();
  const router = useRouter();
  const [lang, setLang] = useState(null);
  // const dropdownOptions2 = ["DE 19% VAT.", "DE 22% VAT."];

  const etoken = getCookie("_SYS_ADMIN_AUTH"); //encoded token
  const token = typeof window !== "undefined" && etoken && window.atob(etoken); //decoded token

  // Offer text block definition-
  const { res: offerText, executeFetch: executeOffer } = useFetch(
    "get",
    `/api/${conf?.code}` + apis?.offer_text_block,
    { Authorization: `Bearer ${token}` },
    false
  );

  // Store currency definition
  const {
    res: currencies,
    executeFetch: executeCurrencies,
    error: currenciesError,
  } = useFetch("get", "/api/" + conf?.code + apis?.store_currencies, "", false);

  // Fetch stores, currencies, offer text, set language
  useEffect(() => {
    conf?.code && !currencies && executeCurrencies();
    conf?.code && !offerText && executeOffer();
    conf?.language && !lang && setLang(conf?.language);
  }, [token, conf]); // eslint-disable-line react-hooks/exhaustive-deps

  //Fetching language file
  useEffect(() => {
    lang &&
      import(`../locales/${conf?.language}/all.js`).then((data) => {
        setLangData(data?.lang);
      });
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  //Fetching customer token
  const cookie = getCookie("_SYS_USER_AUTH");

  //Login
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
      let nameLower = element.name.toLowerCase();
      let splittedStr = nameLower.split(" ");
      let flag = 0;

      splittedStr.map((str) => {
        if (str.startsWith(e.target.value)) {
          flag = 1;
        } else {
          setNoResults(true);
        }
      });
      if (flag) {
        return element.name;
      }
    });

    if (e.target.value.length > 0) {
      setFilter(finds);
      setShowResults(true);
    } else {
      setFilter([]);
      setNoResults(false);
      setShowResults(false);
    }
  };

  const handleClick = (link) => {
    router.push(`/product/${link}`);
    setShowResults(false);
    setFilter([]);
  };

  const [megaMenu, setMegaMenu] = useState(false);

  const toggleMegaMenu = () => {
    if (window.innerWidth <= 768) {
      setMegaMenu(!megaMenu);
    }
  };

  return (
    <>
      <div>
        {showTopBar && offerText?.data.active === true && (
          <div className="bg-themeBlue flex justify-center items-center h-32 relative">
            <div className="text-white uppercase text-10 font-medium">
              {$(offerText?.data?.content).text()}
            </div>
            <span
              onClick={() => setShowTopBar(!showTopBar)}
              className="text-gray text-10 absolute right-15 cursor-pointer"
            >
              <span>✖</span>
            </span>
          </div>
        )}

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
                  src="/common/xlogo.svg"
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
                className={`border-none outline-none shadow-none bg-navInput text-14 caret-5 pl-16 pr-26 py-10 w-full placeholder:text-gray text-white ${
                  noResults ? "rounded-t-md" : "rounded-md"
                }`}
                placeholder={langData?.search_your_products}
                onChange={search}
              />
              <div className="absolute right-10 top-[50%] transform translate-y-[-50%]">
                <i className="fa-solid fa-search"></i>
              </div>

              {showResults && (
                <div
                  className={`absolute top-full z-10 w-full lg:w-full shadow-md bg-navInput rounded-b-md ${
                    noResults ? "border-t border-darkgray2" : ""
                  }`}
                >
                  {filter.map((data) => {
                    return (
                      <div
                        key={data.link}
                        className="group flex gap-30 justify-between w-full px-10 py-10 items-center flex-1 hover:bg-themeBlue transition-all duration-400 cursor-pointer"
                        onClick={() => handleClick(data.link)}
                      >
                        <Image
                          src={data.imageUrl}
                          alt=""
                          className="flex-none bg-white"
                          height="30px"
                          width="30px"
                        />
                        <div className="flex-auto truncate flex flex-col justify-between">
                          <a className="ml-3 text-12 font-bold mb-10 text-white">
                            {data.name}
                          </a>
                          <p className="text-white text-12">{`Article Number: ${data.articleNumber}`}</p>
                        </div>
                        <div className="flex flex-col justify-between">
                          <p className=" group-hover:text-white text-red text-12 mb-10 font-bold">{`Price: ${data.price}`}</p>
                          <p className="group-hover:text-white text-12">{`Delivery Time: ${data.deliveryTime}`}</p>
                        </div>
                      </div>
                    );
                  })}
                  {filter.length === 0 && noResults && (
                    <div className="h-[50vh] flex flex-col justify-center items-center">
                      <p className="mt-4 font-semibold text-25">
                        No results found!
                      </p>
                      <p className="mt-2 text-gray-500">
                        No itmes found for this search term. Please try again.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="md:ml-20 md:mb-0 mb-20 text-12">
              <FlagDropdown />
            </div>
            <div className="md:ml-20 md:mb-0 mb-20 text-12">
              {currencies && (
                <Dropdown
                  options={currencies?.data.available_currency_codes}
                  defaultSelected={currencies?.data.base_currency_code}
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
                src="/common/navCart.svg"
                alt="Cart"
              ></Image>
              <div className="flex justify-center items-center text-white absolute top-[-5px] right-[-5px] w-15 h-15 text-12 rounded-[20px] leading-3 select-none bg-themeBlue">
                <span>0</span>
              </div>
            </div>
            <div className="flex justify-center items-center cursor-pointer md:ml-20 md:mb-0 mb-20">
              <Image
                src="/common/navUser.svg"
                width="20px"
                height="20px"
                alt="User"
                onClick={login}
              />
            </div>
          </div>
        </nav>

        <div className="block md:hidden relative flex-1 w-[100%] mb-0 md:mb-0">
          <input
            type="text"
            className="border-none outline-none shadow-none bg-navInput text-12 pl-16 pr-26 py-15 md:py-10 w-full placeholder:text-gray text-white"
            placeholder="Search your products"
            onChange={search}
          />
          <i className="fa-solid fa-magnifying-glass absolute right-10 top-[50%] transform translate-y-[-50%] text-12 text-gray"></i>
          {showResults && (
            <div
              className={`absolute top-full z-20 w-full bg-navInput shadow-md ${
                noResults ? "border-t border-darkgray2" : ""
              }`}
            >
              {filter.map((data) => {
                return (
                  <div
                    key={data.imageUrl}
                    className="flex gap-30 justify-between w-full px-15 py-3 items-center my-6 bg-navInput flex-1 hover:bg-themeBlue divide-1"
                  >
                    <Image
                      src={data.imageUrl}
                      alt=""
                      className="flex-none bg-white"
                      width="50px"
                      height="50px"
                    />
                    <div className="flex-auto truncate flex flex-col justify-between">
                      <p className="ml-3 text-white text-12 font-bold mb-10">
                        {data.name}
                      </p>
                      <p className=" text-white text-12">{`Article Number: ${data.articleNumber}`}</p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="text-red text-12 mb-10 font-bold">{`Price: ${data.price}`}</p>
                      <p className=" text-white text-12">{`Delivery Time: ${data.deliveryTime}`}</p>
                    </div>
                  </div>
                );
              })}
              {filter.length === 0 && noResults && (
                <div className="h-[50vh] flex flex-col items-center text-white px-25 text-center">
                  <p className="mt-4 font-semibold text-25">
                    No results found!
                  </p>
                  <p className="mt-2">
                    No components found for this search term. Please try again.
                  </p>
                </div>
              )}
            </div>
          )}
          {/* {noResults && (
            <p className="text-red absolute top-full bg-white w-full p-5 shadow-md">
              No result found!
            </p>
          )} */}
        </div>
        <div className="relative commonContainer justify-between bg-white flex flex-col md:flex-row md:gap-30 md:items-strech">
          <div
            className="uppercase text-12 font-bold text-themeBlue flex items-center cursor-pointer"
            onMouseOver={() => setMegaMenu(true)}
            onMouseOut={() => setMegaMenu(false)}
          >
            {/* {dropdownOptions3 && (
              <Dropdown
                options={dropdownOptions3}
                defaultSelected={dropdownOptions3[0]}
              />
            )} */}

            <p
              type="button"
              className="relative whitespace-nowrap"
              onClick={toggleMegaMenu}
            >
              {langData?.all_categories}
              <span>
                <i className="pl-5 fa-solid fa-angle-down"></i>
              </span>
            </p>

            {/* MegaMenu */}
            {megaMenu && <MegaMenu />}

            {/* MegaMenu ends */}
          </div>

          <div className="hidden md:block h-full w-2 text-lightgray self-center">
            |
          </div>

          <div className="grid grid-cols-2 md:flex md:justify-between w-full">
            <Link href={"/categories/brands"}>
              <a className="uppercase text-12 font-bold text-black py-5 md:py-20">
                {langData?.brands}
              </a>
            </Link>
            <Link href={"/categories/bathroom"}>
              <a className="uppercase text-12 font-bold text-black py-5 md:py-20">
                {langData?.bathroom}
              </a>
            </Link>
            <Link href={"/categories/kitchen"}>
              <a className="uppercase text-12 font-bold text-black py-5 md:py-20">
                {langData?.kitchen}
              </a>
            </Link>
            <Link href={"/categories/sales"}>
              <a className="uppercase text-12 font-bold text-black py-5 md:py-20">
                {langData?.sales}
              </a>
            </Link>
            <Link href={"/categories/duravit"}>
              <a className="uppercase text-12 font-bold text-black py-5 md:py-20">
                {langData?.duravit}
              </a>
            </Link>
            <Link href={"/categories/villeroy-and-boch"}>
              <a className="uppercase text-12 font-bold text-black py-5 md:py-20">
                {langData?.villeroy_and_boch}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
