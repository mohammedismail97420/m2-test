import Link from "next/link";
import { useState } from "react";

const ProductsSidebar = () => {
  // const accTitle = [
  //   {
  //     id: "1",
  //     title: "Explore by Category",
  //     links: [
  //       {
  //         id: "1",
  //         title: "Bathroom",
  //       },
  //       {
  //         id: "2",
  //         title: "Toilet & Bidgets",
  //       },
  //       {
  //         id: "3",
  //         title: "Bathtubs",
  //       },
  //       {
  //         id: "4",
  //         title: "Wall Installation System",
  //       },
  //       {
  //         id: "5",
  //         title: "Bathroom Furniture",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     title: "Manufacturer",
  //     links: [
  //       {
  //         id: "1",
  //         title: "Axor",
  //       },
  //       {
  //         id: "2",
  //         title: "Hansgroghe",
  //       },
  //       {
  //         id: "3",
  //         title: "Duravit",
  //       },
  //       {
  //         id: "4",
  //         title: "Villery Bosh",
  //       },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     title: "Price",
  //     links: [
  //       {
  //         id: "1",
  //         title: "In Stock",
  //       },
  //       {
  //         id: "2",
  //         title: "Approx. 1-2 days",
  //       },
  //       {
  //         id: "3",
  //         title: "Approx. 1-3 days",
  //       },
  //       {
  //         id: "4",
  //         title: "Approx. 3-4 days",
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     title: "Delivery time",
  //     links: [
  //       {
  //         id: "1",
  //         title: "In Stock",
  //       },
  //       {
  //         id: "2",
  //         title: "Approx. 1-2 days",
  //       },
  //       {
  //         id: "3",
  //         title: "Approx. 1-3 days",
  //       },
  //       {
  //         id: "4",
  //         title: "Approx. 3-4 days",
  //       },
  //     ],
  //   },
  // ];
  const category = [
    "Bathroom",
    "Toilet & Bidgets",
    "Bathtubs",
    "Wall Installation System",
    "Bathroom Furniture",
  ];
  const manufacturer = ["Axor", "Hansgrohe", "Duravit", "Villeroy Bosh"];
  const deliveryTime = [
    "In Stock",
    "Approx. 1-2 days",
    "Approx. 1-3 days",
    "Approx. 3-4 days",
  ];

  const [catActive, setCatActive] = useState(true);
  const [manActive, setManActive] = useState(true);
  const [priceActive, setPriceActive] = useState(true);
  const [deliveryTimeActive, setDeliveryTimeActive] = useState(true);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 pb-10">
        <button className="bg-cardBg px-5 xl:px-20 py-10 border border-darkgray text-12 flex-1">
          <i className="fa-solid fa-sliders pr-10"></i>
          <span>Hide Filters</span>
        </button>
        <button className="bg-themeBlue px-5 py-10 text-white text-12 flex-1">
          <i className="fa-solid fa-xmark pr-10"></i>
          <span>Clear Filters</span>
        </button>
      </div>
      <div>
        <div className="py-10">
          <button
            onClick={() => setCatActive(!catActive)}
            className="font-bold flex justify-between w-[100%] pb-10"
          >
            <span>Explore by Category</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                catActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  catActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`${catActive ? "block" : "hidden"}`}>
            {category.map((item) => {
              return (
                <div
                  key={item}
                  className="flex justify-between border-b-[1px] border-darkgray py-10"
                >
                  <span className="text-14 font-semibold text-darkgray2">
                    {item}
                  </span>
                  <span>
                    <i className="fa fa-angle-right text-14 text-darkgray"></i>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-10">
          <button
            onClick={() => setManActive(!manActive)}
            className="font-bold flex justify-between w-[100%] pb-10"
          >
            <span>Manufacturer</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                manActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  manActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`${manActive ? "block" : "hidden"}`}>
            <div>
              {manufacturer.map((item) => {
                return (
                  <div
                    key={item}
                    className="flex justify-between border-b-[1px] border-darkgray py-10"
                  >
                    <label
                      htmlFor={item}
                      className="text-14 font-semibold text-darkgray2 select-none cursor-pointer flex-1"
                    >
                      {item}
                    </label>
                    <span>
                      <input
                        className="bg-darkgray"
                        type="checkbox"
                        id={item}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-themeBlue font-medium text-14">
              <Link href="">
                <a>See all</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10">
          <button
            onClick={() => setPriceActive(!priceActive)}
            className="font-bold flex justify-between w-[100%] pb-10"
          >
            <span>Price</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                priceActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  priceActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`${priceActive ? "block" : "hidden"}`}>
            <div className="flex">
              <div>
                <label className="font-medium" htmlFor="">
                  S$
                </label>
                <input
                  className="w-[100%] p-10 border-none outline-none shadow-none font-medium"
                  type="text"
                />
              </div>
              <div className="self-end p-10 font-medium">to</div>
              <div>
                <label className="font-medium" htmlFor="">
                  S$
                </label>
                <input
                  className="w-[100%] p-10 border-none outline-none shadow-none font-medium"
                  type="text"
                />
              </div>
            </div>
            <button className="btn w-[100%] mt-20">Go</button>
          </div>
        </div>
        <div className="py-10">
          <button
            onClick={() => setDeliveryTimeActive(!deliveryTimeActive)}
            className="font-bold flex justify-between w-[100%] pb-10"
          >
            <span>Delivery Time</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                deliveryTimeActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  deliveryTimeActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`${deliveryTimeActive ? "block" : "hidden"}`}>
            <div>
              {deliveryTime.map((item) => {
                return (
                  <div
                    key={item}
                    className="flex justify-between border-b-[1px] border-darkgray py-10"
                  >
                    <label
                      htmlFor={item}
                      className="text-14 font-semibold text-darkgray2 select-none cursor-pointer flex-1"
                    >
                      {item}
                    </label>
                    <span>
                      <input
                        className="bg-darkgray"
                        type="checkbox"
                        id={item}
                      />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-themeBlue font-medium text-14">
              <Link href="">
                <a>See all</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsSidebar;
