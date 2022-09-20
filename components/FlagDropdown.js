import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import _ from "lodash";
import useFetch from "../hooks/useFetch";
import { apis } from "../config/apis";
import { getCookie } from "cookies-next";
import { getCountries } from "../config/configMethods";
import { flags } from "../config/store.config";
import { useRouter } from "next/router";

const FlagDropdown = () => {
  const router = useRouter();
  const conf = useSelector((store) => store.configReducer.config);
  const [selected, setSelected] = useState(null);
  const [countries, setCountries] = useState(null);
  const [filter, setFilter] = useState(null);
  const etoken = getCookie("_SYS_ADMIN_AUTH"); //encoded token
  const token = typeof window !== "undefined" && etoken && window.atob(etoken); //decoded token

  // All stores definition
  const {
    res: stores,
    executeFetch: executeStores,
    error: storesError,
  } = useFetch(
    "get",
    apis?.get_all_stores_info,
    { Authorization: `Bearer ${token}` },
    false
  );

  //Fetching all stores
  useEffect(() => {
    token && !stores && executeStores();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  //Stores -> Countries
  useEffect(() => {
    stores && setCountries(getCountries(stores));
  }, [stores]);

  //set filters
  useEffect(() => {
    countries && setFilter(countries);
  }, [countries]);

  //set selected flag based on domain
  useEffect(() => {
    conf && setSelected(flags[conf?.domain]);
  }, [conf]);

  const [noResults, setNoResults] = useState(false);

  const search = (e) => {
    const finds = _.uniq(countries).filter((element) => {
      if (element.toLowerCase().startsWith(e.target.value.toLowerCase())) {
        return element;
      } else {
        setNoResults(true);
      }
    });

    if (e.target.value.length > 0) {
      setFilter(finds);
    } else {
      setFilter(finds);
      setNoResults(false);
    }
  };

  const changeCountry = (code) => {
    switch (code) {
      case "international":
        router.push("http://xtwostore-dev.com:3000");
        break;
      case "uk":
        router.push("http://xtwostore-dev.co.uk:3000");
        break;
      case "za":
        router.push("http://xtwostore-dev.co.za:3000");
        break;
      default:
        router.push(`http://xtwostore-dev.${code}:3000`);
        break;
    }
  };

  return (
    <>
      <div className="dropdown py-5 group cursor-pointer relative">
        <div className="dropdownHeading flex items-center">
          {selected && (
            <Image
              src={`/flags/${selected}.png`}
              alt={selected}
              width="40px"
              height="20px"
            />
          )}
          <span>
            <i className="pl-5 fa-solid fa-angle-down"></i>
          </span>
        </div>
        <div className="group-hover:block hidden absolute top-[100%] right-0 md:right-0 bg-white text-black text-12 min-w-[200px] w-auto shadow-xl border border-gray z-[2] rounded-[5px]">
          <div className="relative m-10">
            <input
              type="text"
              className={`border-none outline-none shadow-none h-30 bg-navInput text-13 caret-5 pl-16 pr-26 py-10 w-full placeholder:text-gray text-white rounded-[5px]
              }`}
              placeholder="Search the country"
              onChange={search}
            />
            <div className="absolute right-10 top-[50%] transform translate-y-[-50%]">
              <i className="fa-solid fa-search text-white"></i>
            </div>
          </div>
          <div className="max-h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-darkgray mb-10">
            {filter &&
              filter.map((country) => (
                <div
                  key={country}
                  onClick={() => changeCountry(country)}
                  className={`relative p-10 border-b-gray after:h-1 after:w-[90%] after:absolute after:top-[100%] after:bg-gray after:left-[50%] after:transform after:translate-x-[-50%] after:last:hidden hover:bg-gray transition-all duration-400 ${
                    country === selected
                      ? "font-bold dropdownTick"
                      : "font-medium"
                  } flex gap-10`}
                >
                  <Image
                    width="30px"
                    height="15px"
                    src={`/flags/${country}.png`}
                    alt={country}
                    className=""
                  ></Image>
                  <p className="uppercase">{country}</p>
                </div>
              ))}
            {filter && filter.length === 0 && noResults && (
              <div className="h-[50vh] flex flex-col justify-center items-center">
                <p className="mt-4 font-semibold text-15">No results found!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default FlagDropdown;
