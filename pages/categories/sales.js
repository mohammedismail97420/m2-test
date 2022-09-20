import Slider from "react-slick";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Breadcrumb from "../../components/Breadcrumb";

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

const Sales = () => {
  const dummy = [
    { title: "card1" },
    { title: "card2" },
    { title: "card3" },
    { title: "card4" },
    { title: "card5" },
    { title: "card6" },
    { title: "card7" },
    { title: "card8" },
    { title: "card9" },
    { title: "card10" },
    { title: "card11" },
    { title: "card12" },
    { title: "card13" },
    { title: "card14" },
    { title: "card15" },
    { title: "card16" },
    { title: "card17" },
    { title: "card18" },
    { title: "card19" },
    { title: "card20" },
    { title: "card21" },
    { title: "card22" },
    { title: "card23" },
    { title: "card24" },
    { title: "card25" },
    { title: "card26" },
    { title: "card27" },
    { title: "card28" },
    { title: "card29" },
    { title: "card30" },
    { title: "card31" },
    { title: "card32" },
    { title: "card33" },
    { title: "card34" },
    { title: "card35" },
    { title: "card36" },
    { title: "card37" },
    { title: "card38" },
    { title: "card39" },
    { title: "card40" },
    { title: "card41" },
    { title: "card42" },
    { title: "card43" },
    { title: "card44" },
    { title: "card45" },
    { title: "card46" },
    { title: "card47" },
    { title: "card48" },
    { title: "card49" },
    { title: "card50" },
    { title: "card51" },
    { title: "card52" },
    { title: "card53" },
    { title: "card54" },
    { title: "card55" },
    { title: "card56" },
    { title: "card57" },
    { title: "card58" },
    { title: "card59" },
    { title: "card60" },
    { title: "card61" },
    { title: "card62" },
    { title: "card63" },
    { title: "card64" },
    { title: "card65" },
    { title: "card66" },
    { title: "card67" },
    { title: "card68" },
    { title: "card69" },
    { title: "card70" },
    { title: "card71" },
    { title: "card72" },
    { title: "card73" },
    { title: "card74" },
    { title: "card75" },
    { title: "card76" },
    { title: "card77" },
    { title: "card78" },
    { title: "card79" },
    { title: "card80" },
    { title: "card81" },
    { title: "card82" },
    { title: "card83" },
    { title: "card84" },
  ];
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
  const links = [
    {
      link: "/",
      title: "home",
    },
  ];

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Get current cards
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummy.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <section className="commonContainerWithBg">
        <Breadcrumb links={links} active={router.route.substring(1)} />
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
        <div className="mt-100"></div>
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
        <div className="mb-100"></div>
      </section>
    </>
  );
};
export default Sales;
