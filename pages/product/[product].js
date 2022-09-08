import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";
import Breadcrumb from "../../components/Breadcrumb";
import ProductCard from "../../components/ProductCard";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { overlay } from "../../redux/slices/overlaysSlice";

const PrevArrow = ({ onClick }) => {
  return (
    <button className="absolute top-[50%] left-[-50px] text-themeBlue text-14 cursor-pointer translate-y-[-50%] px-15 py-10">
      <i className="fa-solid fa-arrow-left-long" onClick={onClick}></i>
    </button>
  );
};
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute top-[50%] right-[-50px] text-themeBlue text-14 cursor-pointer translate-y-[-50%] px-15 py-10">
      <i className="fa-solid fa-arrow-right-long" onClick={onClick}></i>
    </div>
  );
};

const PrevArrow2 = ({ onClick }) => {
  return (
    <div className="absolute top-[105%] left-[50%] text-14 bg-lightgray2 cursor-pointer translate-x-[-100%] px-15 py-10">
      <i className="fa-solid fa-arrow-left" onClick={onClick}></i>
    </div>
  );
};
const NextArrow2 = ({ onClick }) => {
  return (
    <div className="absolute top-[105%] left-[50%] text-14 bg-lightgray2 cursor-pointer translate-x-[0] px-15 py-10">
      <i className="fa-solid fa-arrow-right" onClick={onClick}></i>
    </div>
  );
};

const PrevArrow3 = ({ onClick }) => {
  return (
    <div className="absolute top-[105%] left-[50%] text-14 cursor-pointer translate-x-[-200%]">
      <i className="fa-solid fa-arrow-left" onClick={onClick}></i>
    </div>
  );
};
const NextArrow3 = ({ onClick }) => {
  return (
    <div className="absolute top-[105%] left-[50%] text-14 cursor-pointer translate-x-[150%]">
      <i className="fa-solid fa-arrow-right" onClick={onClick}></i>
    </div>
  );
};

const Product = () => {
  const router = useRouter();
  const { product } = router.query;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [prod, setProd] = useState(true);

  const [charActive, setCharActive] = useState(false);
  const [mesActive, setMesActive] = useState(false);
  const [headActive, setHeadActive] = useState(false);
  const [therActive, setTherActive] = useState(false);

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav1,
    autoPlay: false,
    arrows: false,
    dots: false,
  };

  const settings2 = {
    asNavFor: nav2,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoPlay: false,
    dots: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow2 />,
    nextArrow: <NextArrow2 />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const settings4 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,

    prevArrow: <PrevArrow3 />,
    nextArrow: <NextArrow3 />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const links = [
    {
      link: "/",
      title: "home",
    },
    {
      link: "/products",
      title: "products",
    },
  ];

  return (
    <div className="commonContainerWithBg relative">
      <Breadcrumb links={links} active={product} />
      <div className="grid grid-cols-1 gap-50 sm:grid-cols-2">
        <div>
          <Slider {...settings} ref={(slider2) => setNav2(slider2)}>
            <div>
              <Image
                width="800px"
                height="800px"
                src="https://picsum.photos/800?random=1"
                alt="Product"
                priority
              />
            </div>
            <div>
              <Image
                width="800px"
                height="800px"
                src="https://picsum.photos/800?random=2"
                alt="Product"
              />
            </div>
            <div>
              <Image
                width="800px"
                height="800px"
                src="https://picsum.photos/800?random=3"
                alt="Product"
              />
            </div>
            <div>
              <Image
                width="800px"
                height="800px"
                src="https://picsum.photos/800?random=4"
                alt="Product"
              />
            </div>
            <div>
              <Image
                width="800px"
                height="800px"
                src="https://picsum.photos/800?random=5"
                alt="Product"
              />
            </div>
          </Slider>
          <div className="mx-50 mt-10 productSlider">
            <Slider {...settings2} ref={(slider1) => setNav1(slider1)}>
              <div className="px-10">
                <Image
                  width="800px"
                  height="800px"
                  src="https://picsum.photos/800?random=1"
                  alt="Product"
                />
              </div>
              <div className="px-10">
                <Image
                  width="800px"
                  height="800px"
                  src="https://picsum.photos/800?random=2"
                  alt="Product"
                />
              </div>
              <div className="px-10">
                <Image
                  width="800px"
                  height="800px"
                  src="https://picsum.photos/800?random=3"
                  alt="Product"
                />
              </div>
              <div className="px-10">
                <Image
                  width="800px"
                  height="800px"
                  src="https://picsum.photos/800?random=4"
                  alt="Product"
                />
              </div>
              <div className="px-10">
                <Image
                  width="800px"
                  height="800px"
                  src="https://picsum.photos/800?random=5"
                  alt="Product"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <h1 className="text-20 font-bold mb-10">
            GROHE Euphoria - Shower System Euphoria 260 with Thermostatic Mixer
            chrome
          </h1>
          <p className="text-14 mb-10">
            Bring a fresh look and superior safety features to any bathroom with
            the updated GROHE Euphoria range of shower systems.
          </p>
          <div className="mb-10">
            <i className="fa-solid fa-star text-rating mr-5"></i>
            <i className="fa-solid fa-star text-rating mr-5"></i>
            <i className="fa-solid fa-star text-rating mr-5"></i>
            <i className="fa-solid fa-star text-rating mr-5"></i>
            <i className="fa-solid fa-star-half text-lightgray2"></i>
            <span>4.6</span>
          </div>
          <table className="text-14">
            <tbody>
              <tr>
                <td className="py-6">
                  <b>Brand:</b>
                </td>
                <td className="py-6 font-semibold text-black2">Grohe</td>
              </tr>
              <tr>
                <td className="py-6">
                  <b>Series:</b>
                </td>
                <td className="py-6 font-semibold text-black2">Euphoria</td>
              </tr>
              <tr>
                <td className="py-6">
                  <b>Finish:</b>
                </td>
                <td className="py-6 font-semibold text-black2">White/Chrome</td>
              </tr>
              <tr>
                <td className="py-6">
                  <b>Delivery time:</b>&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
                <td className="py-6 font-semibold text-green">
                  Approx 1-2 weeks
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <span className="text-themeBlue font-bold mr-5">€</span>
            <span className="text-themeBlue font-bold text-30 font-sans mr-10">
              359.01
            </span>
            <span className="text-red2 font-bold font-sans line-through">
              €923.44*
            </span>
            <span className="text-red2 font-bold font-sans">(-10%)</span>
          </div>
          <span className="text-12">All prices include 19% VAT</span>
          <Link href="">
            <a className="text-themeBlue text-12">
              &nbsp;excl. Shipping & Handling
            </a>
          </Link>
          <div className="grid grid-cols-2 gap-x-30 gap-y-20 mt-20 text-14">
            <div>
              <label className="w-[100%] font-semibold" htmlFor="">
                Variant / Model
              </label>
              <select
                className="w-[100%] mt-10 p-10 bg-cardBg border border-darkgray"
                name=""
                id=""
              >
                <option value="">Select</option>
              </select>
            </div>
            <div>
              <label className="w-[100%] font-semibold" htmlFor="">
                Size head shower
              </label>
              <select
                className="w-[100%] mt-10 p-10 bg-cardBg border border-darkgray"
                name=""
                id=""
              >
                <option value="">Select</option>
              </select>
            </div>
            <div>
              <label className="w-[100%] font-semibold" htmlFor="">
                Article No.
              </label>
              <select
                className="w-[100%] mt-10 p-10 bg-cardBg border border-darkgray"
                name=""
                id=""
              >
                <option value="">Select</option>
              </select>
            </div>
            <div className="self-end">
              <input
                type="number"
                placeholder="Quantity"
                className="p-9 w-[100%] bg-cardBg border border-darkgray placeholder:text-black placeholder:font-semibold shadow-none outline-none"
              />
            </div>
            <button
              onClick={() => dispatch(overlay("cart"))}
              className="bg-themeBlue text-white text-12 font-bold px-20 py-10 flex justify-between items-center col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1"
            >
              <span>
                <i className="fa-solid fa-shopping-cart mr-10"></i>
                <span>Add To Cart</span>
              </span>
              <span className="text-darkgray">|</span>
              <span className="font-sans">€359.01</span>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-50">
        <div className="text-center">
          <button
            onClick={() => setProd(true)}
            className={`relative uppercase font-bold text-14 mr-20 ${
              prod &&
              "after:absolute after:bottom-[-17px] after:left-0 after:h-1 after:w-[100%] after:bg-themeBlue"
            }`}
          >
            product details
          </button>
          <button
            onClick={() => setProd(false)}
            className={`relative uppercase font-bold text-14 ml-20 ${
              !prod &&
              "after:absolute after:bottom-[-17px] after:left-0 after:h-1 after:w-[100%] after:bg-themeBlue"
            }`}
          >
            product overview
          </button>
          <hr className="text-lightgray2 mt-15" />
        </div>
      </div>
      {prod && (
        <div>
          <button
            className="flex justify-between w-[100%] py-30 text-14 font-bold"
            onClick={() => setCharActive(!charActive)}
          >
            <span>Characteristics</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                charActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  charActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`pb-30 ${charActive ? "block" : "hidden"}`}>
            Listed Characteristics
          </div>
          <hr className="text-lightgray" />
          <button
            className="flex justify-between w-[100%] py-30 text-14 font-bold"
            onClick={() => setMesActive(!mesActive)}
          >
            <span>Measurements</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                mesActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  mesActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`pb-30 ${mesActive ? "block" : "hidden"}`}>
            Listed Characteristics
          </div>
          <hr className="text-lightgray" />
          <button
            className="flex justify-between w-[100%] py-30 text-14 font-bold"
            onClick={() => setHeadActive(!headActive)}
          >
            <span>Characteristics Head Shower</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                headActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  headActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`pb-30 ${headActive ? "block" : "hidden"}`}>
            Listed Characteristics
          </div>
          <hr className="text-lightgray" />
          <button
            className="flex justify-between w-[100%] py-30 text-14 font-bold"
            onClick={() => setTherActive(!therActive)}
          >
            <span>Characteristics Thermostat</span>
            <span
              className={`w-25 h-25 rounded-full grid place-items-center ${
                therActive
                  ? "bg-themeBlueLight  text-themeBlue"
                  : "bg-themeBlue text-themeBlueLight"
              }`}
            >
              <i
                className={`text-12 fa-solid ${
                  therActive ? "fa-minus" : "fa-plus"
                }`}
              ></i>
            </span>
          </button>
          <div className={`pb-30 ${therActive ? "block" : "hidden"}`}>
            Listed Characteristics
          </div>
          <hr className="text-lightgray" />
        </div>
      )}
      {!prod && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-40 gap-30">
            <div>
              <Image
                width="450px"
                height="300px"
                src="https://picsum.photos/450/300"
                alt="Product"
              />
            </div>
            <div>
              <h2 className="text-20 font-bold mb-10">
                Euphoria Shower Systems
              </h2>
              <h5 className="text-14 font-semibold uppercase mb-10">
                update your shower with the new euphoria 260 & euphoria 310
                systems
              </h5>
              <p className="text-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                iste officia velit fugiat ex autem accusantium cum tempora
                possimus laboriosam minus id itaque eos laborum, repudiandae
                inventore dolorem, dignissimos laudantium.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20 mt-70 place-items-center">
            <div className="text-center">
              <Image
                width="300px"
                height="400px"
                src="https://picsum.photos/300/400"
                alt="Product"
              />
              <h6 className="mt-25 font-semibold text-darkgray2">Zone One</h6>
              <p className="mt-5 font-semibold text-12">Jet Spray</p>
            </div>
            <div className="text-center">
              <Image
                width="300px"
                height="400px"
                src="https://picsum.photos/300/400"
                alt="Product"
              />
              <h6 className="mt-25 font-semibold text-darkgray2">Zone One</h6>
              <p className="mt-5 font-semibold text-12">Jet Spray</p>
            </div>
            <div className="text-center">
              <Image
                width="300px"
                height="400px"
                src="https://picsum.photos/300/400"
                alt="Product"
              />
              <h6 className="mt-25 font-semibold text-darkgray2">Zone One</h6>
              <p className="mt-5 font-semibold text-12">Jet Spray</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-40 gap-30 mt-50">
            <div className="order-last md:order-first">
              <h2 className="text-20 font-bold mb-10">Euphoria 260</h2>
              <h5 className="text-14 font-semibold uppercase mb-10">
                update your shower with the new euphoria 260 & euphoria 310
                systems
              </h5>
              <p className="text-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                iste officia velit fugiat ex autem accusantium cum tempora
                possimus laboriosam minus id itaque eos laborum, repudiandae
                inventore dolorem, dignissimos laudantium.
              </p>
            </div>
            <div>
              <Image
                width="500px"
                height="300px"
                src="https://picsum.photos/500/300"
                alt="Product"
              />
            </div>
          </div>
        </div>
      )}
      <div className="py-50">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-24">Featured Products</h1>
          <Link href="/products">
            <a className="float-right text-themeBlue uppercase font-bold text-14 d-flex items-center">
              <span>see all products</span>
              <i className="ml-10 fas text-18 fa-arrow-right-long"></i>
            </a>
          </Link>
        </div>
        <div className="mt-50">
          <Slider {...settings3}>
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="4.2"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="3.4"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="3.8"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="2.2"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="4.9"
              tagType="red"
            />
          </Slider>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-40">
        <div className="grid grid-cols-1 xs:grid-cols-2 bg-bannerBackground p-30 relative">
          <div>
            <p className="uppercase text-darkgray text-12">trending sale</p>
            <h3 className="text-white font-semibold text-24 my-10">
              40% Flat on Bathtubs.
            </h3>
            <Link href="">
              <a className="font-semibold text-14 text-white uppercase">
                <span>shop now</span>
                <i className="ml-10 fa fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
          <div>
            <div className="relative xs:absolute right-0 -bottom-10 xs:right-30 xs:max-h-[150px]">
              <Image
                width="200px"
                height="150px"
                src="https://xtwostore-ae01a.web.app/images/trending-banner-1.svg"
                alt="Banner"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 bg-bannerBackground p-30 relative">
          <div>
            <p className="uppercase text-darkgray text-12">trending sale</p>
            <h3 className="text-white font-semibold text-24 my-10">
              40% Flat on Bath fittings.
            </h3>
            <Link href="">
              <a className="font-semibold text-14 text-white uppercase">
                <span>shop now</span>
                <i className="ml-10 fa fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
          <div>
            <div className="relative xs:absolute right-0 -bottom-10 xs:right-30 xs:max-h-[150px]">
              <Image
                width="200px"
                height="150px"
                src="https://xtwostore-ae01a.web.app/images/trending-banner-2.svg"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-50">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-24">Top Trending Products</h1>
          <Link href="/products">
            <a className="float-right text-themeBlue uppercase font-bold text-14 d-flex items-center">
              <span>see all products</span>
              <i className="ml-10 fas text-18 fa-arrow-right-long"></i>
            </a>
          </Link>
        </div>
        <div className="mt-50">
          <Slider {...settings4}>
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="3.6"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="4.1"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="4.8"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="3.6"
              tagType="red"
            />
            <ProductCard
              img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
              title="Wall mounted bidet Standard"
              subtitle="Delivery time: approx. 4-3 weeks"
              price="€679.18"
              dashedPrice="€923.44*"
              discount="(-10%)"
              rating="4.2"
              tagType="red"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Product;
