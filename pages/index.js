import Image from "next/image";
import Link from "next/link";
import CategoryCard from "../components/CategoryCard";
import Slider from "react-slick";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute top-[105%] left-[50%] text-14 cursor-pointer translate-x-[-200%]">
      <i className="fa-solid fa-arrow-left" onClick={onClick}></i>
    </div>
  );
};
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute top-[105%] left-[50%] text-14 cursor-pointer translate-x-[150%]">
      <i className="fa-solid fa-arrow-right" onClick={onClick}></i>
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

const Index = () => {
  const conf = useSelector((store) => store.configReducer.config);
  const lang = conf && conf.language;
  const [langData, setLangData] = useState(null);

  useEffect(() => {
    lang &&
      import(`../locales/${conf?.language}/all.js`).then((data) => {
        setLangData(data?.lang);
      });
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
  const settings2 = {
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
  const settings3 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <section className="commonContainerWithBg">
        {/* Landing Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-70 sm:gap-y-20 sm:grid-cols-3">
          <div className="homeCarousel col-span-2 row-span-2">
            <Slider {...settings3}>
              <div>
                <Image
                  width="1500px"
                  height="900px"
                  src="https://dummyimage.com/1500x900/878787/ffffff&text=Clickable+1500x900"
                  alt="Carousel Image"
                  priority
                />
              </div>
              <div>
                <Image
                  width="1500px"
                  height="900px"
                  src="https://dummyimage.com/1500x900/878787/ffffff&text=Clickable+1500x900"
                  alt="Carousel Image"
                />
              </div>
              <div>
                <Image
                  width="1500px"
                  height="900px"
                  src="https://dummyimage.com/1500x900/878787/ffffff&text=Clickable+1500x900"
                  alt="Carousel Image"
                />
              </div>
            </Slider>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Image
              width="940px"
              height="540px"
              src="https://dummyimage.com/940x540/878787/ffffff&text=Clickable+940x540"
              alt="Offer"
            />
          </div>
          <div className=" col-span-2 sm:col-span-1">
            <Image
              width="940px"
              height="540px"
              src="https://dummyimage.com/940x540/878787/ffffff&text=Clickable+940x540"
              alt="Offer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-50 pb-50 pt-80 sm:grid-cols-3">
          <div className="grid grid-cols-5 gap-10">
            <div>
              <Image
                width="50px"
                height="50px"
                src="https://dummyimage.com/50x50/878787/ffffff&text=No-clickable+50x50"
                alt="Offer"
              />
            </div>
            <div className="col-span-4">
              <h3 className="text-20 font-semibold">
                Download the app
                <br /> get 5% off!
              </h3>
              <p className="text-12 font-medium my-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, eligendi!
              </p>
              <Link href="">
                <a className="uppercase text-themeBlue text-14 font-bold">
                  learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10">
            <div>
              <Image
                width="50px"
                height="50px"
                src="https://dummyimage.com/50x50/878787/ffffff&text=No-clickable+50x50"
                alt="Offer"
              />
            </div>
            <div className="col-span-4">
              <h3 className="text-20 font-semibold">
                Refurbish your
                <br /> bathroom
              </h3>
              <p className="text-12 font-medium my-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, eligendi!
              </p>
              <Link href="">
                <a className="uppercase text-themeBlue text-14 font-bold">
                  learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10">
            <div>
              <Image
                width="50px"
                height="50px"
                src="https://dummyimage.com/50x50/878787/ffffff&text=No-clickable+50x50"
                alt="Offer"
              />
            </div>
            <div className="col-span-4">
              <h3 className="text-20 font-semibold">
                Free shipping over
                <br /> $600.00
              </h3>
              <p className="text-12 font-medium my-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio, eligendi!
              </p>
              <Link href="#">
                <a className="uppercase text-themeBlue text-14 font-bold">
                  learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
        <hr className="text-darkgray" />
        <div className="mt-30">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-20 md:text-24">
              {langData?.shop_by_category}
            </h1>
            <Link href="/products">
              <a className="float-right whitespace-nowrap text-themeBlue uppercase font-bold text-14 d-flex items-center">
                <span>{langData?.see_all_products}</span>
                <i className="ml-10 fas text-18 fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 text-center py-50 gap-25 gap-y-60 lg:gap-y-25 place-items-center">
            <Image
              width="550px"
              height="550px"
              src="https://dummyimage.com/550x550/878787/ffffff.png&text=Clickable+550x550"
              alt="Offer"
            />
            <Image
              width="550px"
              height="550px"
              src="https://dummyimage.com/550x550/878787/ffffff.png&text=Clickable+550x550"
              alt="Offer"
            />
            <Image
              width="550px"
              height="550px"
              src="https://dummyimage.com/550x550/878787/ffffff.png&text=Clickable+550x550"
              alt="Offer"
            />
            <Image
              width="550px"
              height="550px"
              src="https://dummyimage.com/550x550/878787/ffffff.png&text=Clickable+550x550"
              alt="Offer"
            />
          </div>
        </div>
        <div className="py-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <Image
              width="1200px"
              height="450px"
              src="https://dummyimage.com/1200x450/878787/ffffff.png&text=Clickable+1200x450"
              alt="Offer"
            />
            <Image
              width="1200px"
              height="450px"
              src="https://dummyimage.com/1200x450/878787/ffffff.png&text=Clickable+1200x450"
              alt="Offer"
            />
          </div>
        </div>
        <div className="mt-50">
          <Image
            width="1700px"
            height="420px"
            src="https://dummyimage.com/1700x420/878787/ffffff.png&text=Clickable+1700x420"
            alt="Banner"
          />
        </div>
        <div className="py-50">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-20 md:text-24">
              {langData?.top_trending_products}
            </h1>
            <Link href="/products">
              <a className="float-right whitespace-nowrap text-themeBlue uppercase font-bold text-14 d-flex items-center">
                <span>{langData?.see_all_products}</span>
                <i className="ml-10 fas text-18 fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
          <div className="mt-50">
            <Slider {...settings}>
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.3"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.8"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.2"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.0"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="3.6"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.6"
                tagType="red"
              />
            </Slider>
          </div>
        </div>
      </section>
      <section className="commonContainer bg-backgroundgray py-30">
        <div className="w-[100%] h-auto mb-30">
          <Image
            width="1198px"
            height="85px"
            src="https://xtwostore-ae01a.web.app/images/brands-logo.jpg"
            alt="Brands"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <Image
            width="1200px"
            height="450px"
            src="https://dummyimage.com/1200x450/878787/ffffff.png&text=Clickable+1200x450"
            alt="Banner"
          />
          <Image
            width="1200px"
            height="450px"
            src="https://dummyimage.com/1200x450/878787/ffffff.png&text=Clickable+1200x450"
            alt="Banner"
          />
        </div>
        <div className="pt-50 pb-70">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-20 md:text-24">
              {langData?.featured_products}
            </h1>
            <Link href="/products">
              <a className="float-right whitespace-nowrap text-themeBlue uppercase font-bold text-14 d-flex items-center">
                <span>{langData?.see_all_products}</span>
                <i className="ml-10 fas text-18 fa-arrow-right-long"></i>
              </a>
            </Link>
          </div>
          <div className="mt-50">
            <Slider {...settings2}>
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.6"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.6"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.6"
                tagType="red"
              />
              <ProductCard
                img="https://dummyimage.com/700x700/878787/ffffff&text=No-clickable+700x700"
                title="Wall mounted bidet Standard"
                subtitle="Delivery time: approx. 4-3 weeks"
                price="€679.18"
                dashedPrice="€923.44*"
                discount="(-10%)"
                rating="4.6"
                tagType="red"
              />
            </Slider>
          </div>
        </div>
      </section>
      <section className="commonContainer py-50 bg-white2">
        <div className="flex justify-between items-center mb-30">
          <h1 className="font-bold text-20 md:text-24 capitalize">
            {langData?.more_about_xtwo_store}
          </h1>
          <Link href="">
            <a className="float-right whitespace-nowrap text-themeBlue uppercase font-bold text-14 d-flex items-center">
              <span>{langData?.see_more}</span>
              <i className="ml-10 fas text-18 fa-arrow-right-long"></i>
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-4 gap-20">
          <div className="col-span-1 xs:col-span-2">
            <Image
              width="780px"
              height="420px"
              src="https://dummyimage.com/780x420/878787/ffffff&text=No-clickable+780x420"
              alt="Banner"
            />
            <p className="text-14 font-semibold mt-20">
              {
                langData?.as_a_business_customer_you_benefit_from_special_conditions
              }
            </p>
          </div>
          <div className="">
            <Image
              width="378px"
              height="420px"
              src="https://dummyimage.com/378x420/878787/ffffff&text=No-clickable+378x420"
              alt="Banner"
              className="w-[100%] sm:w-auto"
            />
            <p className="text-14 font-semibold mt-20">
              {langData?.take_advantage_of_our_special_occasion_offer}
            </p>
          </div>
          <div className="">
            <Image
              width="378px"
              height="420px"
              src="https://dummyimage.com/378x420/878787/ffffff&text=No-clickable+378x420"
              alt="Banner"
              className="w-[100%] sm:w-auto"
            />
            <p className="text-14 font-semibold mt-20">
              {
                langData?.would_you_like_to_see_and_touch_the_products_of_your_choice
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Index;
