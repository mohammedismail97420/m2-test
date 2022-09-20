import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";
import Breadcrumb from "../../components/Breadcrumb";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import ProductCard2 from "../../components/ProductCard2";
import ProductsSidebar from "../../components/Sidebar/ProductsSidebar";

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

const Category = () => {
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
       <div className="py-70 px-50 mb-30 bg-[url('https://dummyimage.com/1000x200/878787/ffffff&text=Non-clickable+1000x200')] bg-no-repeat bg-cover">
         <p className="text-12 text-white">
           The most amazing water <br />
           experiences
         </p>
         <h1 className="text-18 md:text-24 font-bold text-white md:max-w-[50%]">
           Discover the branded variety of bathroom products.
         </h1>
       </div>
       <div className="grid grid-cols-3 md:grid-cols-4 gap-20">
         <div className="hidden md:block col-span-2 md:col-span-1">
           <ProductsSidebar />
         </div>
         <div className="col-span-3 md:col-span-3 grid grid-cols-1 auto-rows-min">
           <div className="grid grid-cols-6 gap-20 mb-20">
             <div className="col-span-3 md:col-span-4 auto-rows-min relative">
               <input
                 placeholder="Search your products"
                 className="w-[100%] py-10 bg-cardBg placeholder:text-placeholder text-12 px-40 shadow-none outline-none border border-darkgray rounded-sm"
                 type="text"
               />
               <i className="fa fa-search absolute top-[50%] translate-y-[-50%] text-lightgray left-15"></i>
             </div>
             <div className="col-span-3 md:col-span-2">
               <select
                 className="w-[100%] py-11 border border-darkgray text-12 px-15 outline-none shadow-none rounded-sm"
                 name=""
                 id=""
               >
                 <option value="">Sort by: High to low prices</option>
               </select>
             </div>
           </div>
           <div className="grid col-span-1 md:col-span-3 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-20 z-0">
             {currentItems.map((data) => (
               <ProductCard2
                 key={data.title}
                 img="https://dummyimage.com/378x420/878787/ffffff&text=Clickable+378x420"
                 title={data.title}
                 subtitle="Delivery time: approx. 4-3 weeks"
                 price="€679.18"
                 dashedPrice="€923.44*"
                 discount="(-10%)"
                 rating="4.4"
                 tagType="red"
               />
             ))}
           </div>
         </div>
       </div>
       <div className="float-right pt-30">
         <Pagination
           paginate={paginate}
           itemsPerPage={itemsPerPage}
           totalItems={dummy.length}
         />
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-50 w-[100%]">
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
           <Slider {...settings2}>
             <ProductCard
               img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
               title="Wall mounted bidet Standard"
               subtitle="Delivery time: approx. 4-3 weeks"
               price="€679.18"
               dashedPrice="€923.44*"
               discount="(-10%)"
               rating="4.6"
               tagType="red"
             />
             <ProductCard
               img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
               title="Wall mounted bidet Standard"
               subtitle="Delivery time: approx. 4-3 weeks"
               price="€679.18"
               dashedPrice="€923.44*"
               discount="(-10%)"
               rating="4.6"
               tagType="red"
             />
             <ProductCard
               img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
               title="Wall mounted bidet Standard"
               subtitle="Delivery time: approx. 4-3 weeks"
               price="€679.18"
               dashedPrice="€923.44*"
               discount="(-10%)"
               rating="4.6"
               tagType="red"
             />
             <ProductCard
               img="https://xtwostore-ae01a.web.app/images/prod-img-1.svg"
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
     <section className="commonContainer bg-backgroundgray">
       <div className="grid grid-cols-1 gap-50 py-50 sm:grid-cols-3">
         <div className="grid grid-cols-5 gap-10">
           <div>
             <Image
               width="50px"
               height="50px"
               src="https://dummyimage.com/50x50/878787/ffffff&text=No-clickable+50x50"
               alt="Banner"
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
               alt="Banner"
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
               alt="Banner"
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
     </section>
   </>
 );
};
export default Category;
