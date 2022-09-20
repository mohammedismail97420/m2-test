import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AddNewAddress from "../components/OverlayMenus/AddNewAddress";
import EditAccount from "../components/OverlayMenus/EditAccount";
import EditAddress from "../components/OverlayMenus/EditAddress";
import NewsletterSubscription from "../components/OverlayMenus/NewsletterSubscription";
import Pagination from "../components/Pagination";
import ProductCard2 from "../components/ProductCard2";
import { useDispatch, useSelector } from "react-redux";
import { overlay } from "../redux/slices/overlaysSlice";
import WriteReview from "../components/WriteReview";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

const Account = () => {
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

  const dispatch = useDispatch();
  const router = useRouter();

  const [show, setShow] = useState("dashboard");
  const [reviewModal, setReviewModal] = useState(false);

  const showOverlay = useSelector((store) => store.overlayReducer.overlay);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummy.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [sideMenu, setSideMenu] = useState(false);

  const [wishList, setWishList] = useState(true);

  const toggleLinks = (link) => {
    //Close the sidebar when clicked on any link
    setSideMenu(false);
    //Close overlay (edit A) if open
    dispatch(overlay(null));
    //Display content based on link
    if (link === "dashboard") {
      setShow("dashboard");
    } else if (link === "information") {
      dispatch(overlay("editAccount"));
    } else if (link === "address") {
      setShow("address");
    } else if (link === "orders") {
      setShow("orders");
    } else if (link === "wishlist") {
      setShow("wishlist");
    } else if (link === "reviews") {
      setShow("reviews");
    }
  };

  const logout = () => {
    deleteCookie("_SYS_USER_AUTH");
    router.push("/");
  };

  return (
    <div className="commonContainerWithBg relative z-0">
      <div className="flex md:gap-20 lg:gap-50">
        {/* Account Sidebar */}
        <div
          className={`${
            sideMenu ? "min-w-[94vw]" : "w-0"
          } w-0 md:block md:min-w-[230px] relative `}
        >
          <div
            className={`absolute ${
              sideMenu ? "top-0 right-35" : "-top-25 -right-15"
            } md:hidden`}
            onClick={() => setSideMenu(!sideMenu)}
          >
            {sideMenu ? (
              <i className="fa-solid fa-xmark text-25"></i>
            ) : (
              <i className="fa fa-bars text-25"></i>
            )}
          </div>
          <div
            className={`${
              sideMenu ? "min-w-[94vw]" : "w-0"
            } w-0 overflow-hidden md:min-w-[230px]`}
          >
            <Link href="/">
              <a>
                <i className="fa-solid fa-arrow-left text-14"></i>
                <span className="ml-10 text-20 font-medium">My Account</span>
              </a>
            </Link>

            <div className="flex flex-col mt-20">
              <button
                className={`py-7 text-left px-10 lg:px-20 rounded-sm ${
                  show === "dashboard" ? "bg-white text-themeBlue" : ""
                }`}
                onClick={(e) => toggleLinks("dashboard")}
              >
                <i className="fa-solid fa-home mr-10"></i>
                <span className="uppercase text-12 font-semibold tracking-[1px]">
                  account dashboard
                </span>
              </button>

              <button
                className={`py-7 text-left px-10 lg:px-20 rounded-sm ${
                  show === "information" ? "bg-white text-themeBlue" : ""
                }`}
                onClick={() => toggleLinks("information")}
              >
                <i className="fa-solid fa-circle-user mr-10"></i>
                <span className="uppercase text-12 font-semibold tracking-[1px]">
                  account information
                </span>
              </button>

              <button
                className={`py-7 text-left px-10 lg:px-20 rounded-sm ${
                  show === "address" ? "bg-white text-themeBlue" : ""
                }`}
                onClick={() => toggleLinks("address")}
              >
                <i className="fa-solid fa-map-location-dot mr-10"></i>
                <span className="uppercase text-12 font-semibold tracking-[1px]">
                  address book
                </span>
              </button>

              <button
                className={`py-7 text-left px-10 lg:px-20 rounded-sm ${
                  show === "orders" ? "bg-white text-themeBlue" : ""
                }`}
                onClick={() => toggleLinks("orders")}
              >
                <i className="fa-solid fa-box mr-10"></i>
                <span className="uppercase text-12 font-semibold tracking-[1px]">
                  my orders
                </span>
              </button>

              <button
                className={`py-7 text-left px-10 lg:px-20 rounded-sm ${
                  show === "wishlist" ? "bg-white text-themeBlue" : ""
                }`}
                onClick={() => toggleLinks("wishlist")}
              >
                <i className="fa-solid fa-heart mr-10"></i>
                <span className="uppercase text-12 font-semibold tracking-[1px]">
                  my wishlist
                </span>
              </button>

              <button
                className={`py-7 text-left px-10 lg:px-20 rounded-sm ${
                  show === "reviews" ? "bg-white text-themeBlue" : ""
                }`}
                onClick={() => toggleLinks("reviews")}
              >
                <i className="fa-solid fa-star mr-10"></i>
                <span className="uppercase text-12 font-semibold tracking-[1px]">
                  my product reviews
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Account Content */}
        {!sideMenu && (
          <section className="flex-1 max-w-[100%]">
            {show === "dashboard" && (
              <div className="overflow-hidden mt-15">
                <div className="flex flex-col justify-between md:flex-row">
                  <h1 className="text-20 font-medium">My Dashboard</h1>
                  <button onClick={logout} className="btn">
                    <span className="mr-10">Logout</span>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </div>
                <h2 className="font-semibold mt-30 mb-10 text-14">
                  Hello, Munawar Khel!
                </h2>
                <p className="text-14">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque magni harum aspernatur optio ipsa perspiciatis
                  cupiditate quis quisquam expedita soluta.
                </p>
                <div className="bg-white2 md:p-20 mt-20 border border-darkGrey rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-themeBlue scrollbar-track-themeBlueLight">
                  <div className="p-20">
                    <div className="flex justify-between">
                      <p className="font-semibold text-14">Recent Orders</p>
                      <button
                        onClick={() => setShow("orders")}
                        className="text-themeBlue text-14 font-semibold"
                      >
                        View all
                      </button>
                    </div>
                    <p className="text-12 font-medium mt-5">
                      Lorem ipsum dolor sit amet consectetur
                    </p>
                  </div>

                  <table className="hidden md:table md:w-[150%] lg:w-full text-14 mt-30 overflow-x-scroll">
                    <thead className="font-semibold">
                      <tr className="border-b-[0.5px]">
                        <td className="pb-10">Order #</td>
                        <td className="pb-10">Date</td>
                        <td className="pb-10">Ship to</td>
                        <td className="pb-10">Order Total</td>
                        <td className="pb-10">Status</td>
                        <td className="pb-10"></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b-[0.5px] border-b-grey">
                        <td className="py-10 font-medium">10110100112</td>
                        <td className="py-10 font-medium">06/10/2022</td>
                        <td className="py-10 font-medium">Benjamin Farmer</td>
                        <td className="py-10 font-medium">$217.21</td>
                        <td className="py-10 font-medium">
                          <i className="fa-solid fa-clock mr-5 text-[orange]"></i>
                          Pending...
                        </td>
                        <td className="font-bold text-themeBlue">View order</td>
                      </tr>
                      <tr>
                        <td className="py-10 font-medium">10110100112</td>
                        <td className="py-10 font-medium">06/10/2022</td>
                        <td className="py-10 font-medium">Benjamin Farmer</td>
                        <td className="py-10 font-medium">$217.21</td>
                        <td className="py-10 font-medium">
                          <i className="fa-solid fa-clock mr-5 text-[orange]"></i>
                          Pending...
                        </td>
                        <td className="font-bold text-themeBlue">View order</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="recentOrdersMobile md:hidden p-10">
                    <div className="flex flex-col gap-5 p-10 shadow-md">
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Order #</h6>
                        <p>10110100112</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Date</h6>
                        <p>06/10/2022</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Ship to</h6>
                        <p>Benjamin Farmer</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Order Total</h6>
                        <p>$217.21</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Status</h6>
                        <p>
                          <i className="fa-solid fa-clock mr-5 text-[orange]"></i>
                          Pending...
                        </p>
                      </div>
                      <p className="font-bold text-themeBlue text-center">
                        View order
                      </p>
                    </div>
                    <div className="flex flex-col gap-5 p-10 shadow-md mt-20">
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Order #</h6>
                        <p>10110100112</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Date</h6>
                        <p>06/10/2022</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Ship to</h6>
                        <p>Benjamin Farmer</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Order Total</h6>
                        <p>$217.21</p>
                      </div>
                      <div className="grid grid-cols-2 items-center justify-between">
                        <h6>Status</h6>
                        <p>
                          <i className="fa-solid fa-clock mr-5 text-[orange]"></i>
                          Pending...
                        </p>
                      </div>
                      <p className="font-bold text-themeBlue text-center">
                        View order
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white2 p-20 mt-20 border border-darkGrey">
                  <p className="font-semibold text-14">Account Information</p>
                  <p className="text-12 font-medium mt-5 pb-20">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Name
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-6">
                      <p className="font-semibold text-14">Munawar Khel</p>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("editAccount"))}
                        className="text-themeBlue font-semibold text-14"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Email
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-6">
                      <p className="font-semibold text-14">abc@gmail.com</p>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("editAccount"))}
                        className="text-themeBlue font-semibold text-14"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Password
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-6">
                      <p className="font-semibold text-14">***********</p>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("changePassword"))}
                        className="text-themeBlue font-semibold text-14"
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                  <p className="font-semibold text-14 mt-20">Newsletters</p>
                  <p className="text-12 font-medium mt-5 pb-10 border-b-[1px] border-darkGrey">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <div className="flex justify-between pt-10">
                    <p className="text-14 font-semibold text-greyText">
                      You are currently not subscribed to any newsletter.
                    </p>
                    <button
                      onClick={() =>
                        dispatch(overlay("newsLetterSubscription"))
                      }
                      className="text-14 font-semibold text-themeBlue"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="bg-white2 p-20 mt-20 border border-darkGrey rounded-sm mb-50">
                  <p className="font-semibold text-14">Address Book</p>
                  <p className="text-12 font-medium mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Default billing
                        <br /> address
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-4 flex flex-col items-center">
                      <div className="font-semibold text-14">
                        <p>Coldy Bernard</p>
                        <p>Ap #273, UK</p>
                        <p>Germany</p>
                        <p>1236142451</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("editAddress"))}
                        className=" text-themeBlue font-semibold text-14"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Deafult shipping
                        <br /> address
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-4 flex flex-col items-center">
                      <div className="font-semibold text-14">
                        <p>Coldy Bernard</p>
                        <p>Ap #273, UK</p>
                        <p>Germany</p>
                        <p>1236142451</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("editAddress"))}
                        className=" text-themeBlue font-semibold text-14"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {show === "address" && (
              <div>
                <div className="flex flex-col justify-between md:flex-row">
                  <h1 className="text-20 font-medium">Address Book</h1>
                  <button
                    onClick={() => dispatch(overlay("addNewAddress"))}
                    className="btn"
                  >
                    Add New Address
                  </button>
                </div>
                <div className="bg-white2 p-20 mt-20 border border-darkGrey rounded-sm mb-50">
                  <p className="font-semibold text-14">Address Book</p>
                  <p className="text-12 font-medium mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Deafult billing
                        <br /> address
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-4 flex flex-col items-center">
                      <div className="font-semibold text-14">
                        <p>Coldy Bernard</p>
                        <p>Ap #273, UK</p>
                        <p>Germany</p>
                        <p>1236142451</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("editAddress"))}
                        className="text-right text-themeBlue font-semibold text-14"
                      >
                        Change Billing Adrress
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-3 md:col-span-2">
                      <p className="text-greyText font-semibold text-14">
                        Deafult shipping
                        <br /> address
                      </p>
                    </div>
                    <div className="col-span-5 md:col-span-4 flex flex-col items-center">
                      <div className="font-semibold text-14">
                        <p>Coldy Bernard</p>
                        <p>Ap #273, UK</p>
                        <p>Germany</p>
                        <p>1236142451</p>
                      </div>
                    </div>
                    <div className="col-span-2 text-right">
                      <button
                        onClick={() => dispatch(overlay("editAddress"))}
                        className="text-right text-themeBlue font-semibold text-14"
                      >
                        Change Shipping Adrress
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white2 p-20 mt-20 border border-darkGrey rounded-sm mb-50">
                  <p className="font-semibold text-14">
                    Additional Adress Enteries
                  </p>
                  <p className="text-12 font-medium mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <div className="grid grid-cols-10 py-10 border-t-[1px] border-darkGrey">
                    <div className="col-span-10">
                      <p className="text-greyText font-semibold text-14">
                        You have no additional enteries in your address book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {show === "orders" && (
              <div>
                <h1 className="text-20 font-medium">My Orders</h1>
                <div>
                  <div className="w-[100%] scrollbar-thin scrollbar-thumb-themeBlue scrollbar-track-themeBlueLight overflow-x-scroll">
                    <div className="md:w-[150%] lg:w-[100%] bg-white grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 px-20 py-10 text-14 mt-30 rounded-sm">
                      <div className="grid grid-cols-2 md:block">
                        <h6 className="font-semibold">Date placed</h6>
                        <p className="font-medium text-greyText">
                          January 22, 2022
                        </p>
                      </div>
                      <div className="grid grid-cols-2 md:block justify-between">
                        <h6 className="font-semibold">Order #</h6>
                        <p className="font-medium text-greyText">#2131231232</p>
                      </div>
                      <div className="grid grid-cols-2 md:block justify-between">
                        <h6 className="font-semibold">Total:</h6>
                        <p className="text-themeBlue font-medium">$2,398.00</p>
                      </div>
                      <div className="lg:col-span-2 text-center md:text-right">
                        <button className="bg-cardBg text-greyText px-15 lg:px-20 py-10 border border-darkGrey rounded-sm font-medium shadow-sm">
                          View Invoice
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] mt-20 scrollbar-thin scrollbar-thumb-themeBlue scrollbar-track-themeBlueLight overflow-x-auto">
                    <table className="hidden w-[150%] lg:w-[100%] md:table">
                      <thead>
                        <tr className="font-semibold border-b-[1px] border-darkGrey">
                          <td className="pb-10">Product</td>
                          <td className="pb-10">Price</td>
                          <td className="pb-10">Status</td>
                          <td className="pb-10"></td>
                          <td className="pb-10 text-right">Info</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b-[0.5px] border-darkGrey">
                          <td className="py-20">
                            <div className="flex">
                              <div className="mr-20">
                                <Image
                                  width="75px"
                                  height="75px"
                                  src="https://dummyimage.com/75x75/878787/ffffff&text=Non-clickable+75x75"
                                  alt="Product"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="font-semibold">
                                  Grotherm SmartControl
                                </h6>
                                <p className="text-14 font-medium text-greyText">
                                  Article No: 36207001
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-20 text-14 font-medium text-themeBlue">
                            $2898.00
                          </td>
                          <td className="py-20 text-14 font-medium text-greyText">
                            <i className="fa-solid fa-check text-12 text-green pr-10"></i>
                            Delivered Jan 27, 2022
                          </td>
                          <td
                            className="py-20 text-right text-14 font-medium text-themeBlue cursor-pointer"
                            onClick={() => setReviewModal(true)}
                          >
                            Write a review
                          </td>
                          <td className="py-20 text-right text-14 font-medium text-themeBlue">
                            View Product
                          </td>
                        </tr>
                        <tr className="border-b-[0.5px] border-darkGrey">
                          <td className="py-20">
                            <div className="flex">
                              <div className="mr-20">
                                <Image
                                  width="75px"
                                  height="75px"
                                  src="https://dummyimage.com/75x75/878787/ffffff&text=Non-clickable+75x75"
                                  alt="Product"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="font-semibold">
                                  Grotherm SmartControl
                                </h6>
                                <p className="text-14 font-medium text-greyText">
                                  Article No: 36207001
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-20 text-14 font-medium text-themeBlue">
                            $2898.00
                          </td>
                          <td className="py-20 text-14 font-medium text-greyText">
                            <i className="fa-solid fa-check text-12 text-green pr-10"></i>
                            Delivered Jan 27, 2022
                          </td>
                          <td
                            className="py-20 text-right text-14 font-medium text-themeBlue cursor-pointer"
                            onClick={() => setReviewModal(true)}
                          >
                            Write a review
                          </td>
                          <td className="py-20 text-right text-14 font-medium text-themeBlue">
                            View Product
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="mobileProdTable md:hidden">
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Product</h6>
                        <div className="col-span-3 flex flex-col">
                          <div className="mr-20 w-80">
                            <Image
                              width="75px"
                              height="75px"
                              src="https://dummyimage.com/75x75/878787/ffffff&text=Non-clickable+75x75"
                              alt="Product"
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="font-semibold">
                              Grotherm SmartControl
                            </h6>
                            <p className="text-14 font-medium text-greyText">
                              Article No: 36207001
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Price</h6>
                        <p className="col-span-3 py-20 text-14 font-medium text-themeBlue">
                          $2898.00
                        </p>
                      </div>
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Status</h6>
                        <p className="col-span-3 py-20 text-14 font-medium text-greyText">
                          <i className="fa-solid fa-check text-12 text-green pr-10"></i>
                          Delivered Jan 27, 2022
                        </p>
                      </div>
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Info</h6>
                        <p className="col-span-3 py-20 text-14 font-medium text-themeBlue">
                          View Product
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-[100%] scrollbar-thin scrollbar-thumb-themeBlue scrollbar-track-themeBlueLight overflow-x-scroll">
                    <div className="md:w-[150%] lg:w-[100%] bg-white grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 px-20 py-10 text-14 mt-30 rounded-sm">
                      <div className="grid grid-cols-2 md:block">
                        <h6 className="font-semibold">Date placed</h6>
                        <p className="font-medium text-greyText">
                          January 22, 2022
                        </p>
                      </div>
                      <div className="grid grid-cols-2 md:block justify-between">
                        <h6 className="font-semibold">Order #</h6>
                        <p className="font-medium text-greyText">#2131231232</p>
                      </div>
                      <div className="grid grid-cols-2 md:block justify-between">
                        <h6 className="font-semibold">Total:</h6>
                        <p className="text-themeBlue font-medium">$2,398.00</p>
                      </div>
                      <div className="lg:col-span-2 text-center md:text-right">
                        <button className="bg-cardBg text-greyText px-15 lg:px-20 py-10 border border-darkGrey rounded-sm font-medium shadow-sm">
                          View Invoice
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] mt-20 scrollbar-thin scrollbar-thumb-themeBlue scrollbar-track-themeBlueLight overflow-x-auto">
                    <table className="hidden w-[150%] lg:w-[100%] md:table">
                      <thead>
                        <tr className="font-semibold border-b-[0.5px] border-darkGrey">
                          <td className="pb-10">Product</td>
                          <td className="pb-10">Price</td>
                          <td className="pb-10">Status</td>
                          <td></td>
                          <td className="pb-10 text-right">Info</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b-[0.5px] border-darkGrey">
                          <td className="py-20">
                            <div className="flex">
                              <div className="mr-20">
                                <Image
                                  width="75px"
                                  height="75px"
                                  src="https://dummyimage.com/75x75/878787/ffffff&text=Non-clickable+75x75"
                                  alt="Product"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="font-semibold">
                                  Grotherm SmartControl
                                </h6>
                                <p className="text-14 font-medium text-greyText">
                                  Article No: 36207001
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-20 text-14 font-medium text-themeBlue">
                            $2898.00
                          </td>
                          <td className="py-20 text-14 font-medium text-greyText">
                            <i className="fa-solid fa-check text-12 text-green pr-10"></i>
                            Delivered Jan 27, 2022
                          </td>
                          <td
                            className="py-20 text-right text-14 font-medium text-themeBlue cursor-pointer"
                            onClick={() => setReviewModal(true)}
                          >
                            Write a review
                          </td>
                          <td className="py-20 text-right text-14 font-medium text-themeBlue">
                            View Product
                          </td>
                        </tr>
                        <tr className="border-b-[0.5px] border-darkGrey">
                          <td className="py-20">
                            <div className="flex">
                              <div className="mr-20">
                                <Image
                                  width="75px"
                                  height="75px"
                                  src="https://dummyimage.com/75x75/878787/ffffff&text=Non-clickable+75x75"
                                  alt="Product"
                                />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="font-semibold">
                                  Grotherm SmartControl
                                </h6>
                                <p className="text-14 font-medium text-greyText">
                                  Article No: 36207001
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-20 text-14 font-medium text-themeBlue">
                            $2898.00
                          </td>
                          <td className="py-20 text-14 font-medium text-greyText">
                            <i className="fa-solid fa-check text-12 text-green pr-10"></i>
                            Delivered Jan 27, 2022
                          </td>
                          <td
                            className="py-20 text-right text-14 font-medium text-themeBlue cursor-pointer"
                            onClick={() => setReviewModal(true)}
                          >
                            Write a review
                          </td>
                          <td className="py-20 text-right text-14 font-medium text-themeBlue">
                            View Product
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="mobileProdTable md:hidden">
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Product</h6>
                        <div className="col-span-3 flex flex-col">
                          <div className="mr-20 flex w-full justify-between">
                            <Image
                              width="75px"
                              height="75px"
                              src="https://picsum.photos/100"
                              alt="Product"
                            />
                            <p className="py-20 text-14 font-medium text-themeBlue">
                              write a review
                            </p>
                          </div>
                          <div className="flex flex-col justify-center">
                            <h6 className="font-semibold">
                              Grotherm SmartControl
                            </h6>
                            <p className="text-14 font-medium text-greyText">
                              Article No: 36207001
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Price</h6>
                        <p className="col-span-3 py-20 text-14 font-medium text-themeBlue">
                          $2898.00
                        </p>
                      </div>
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Status</h6>
                        <p className="col-span-3 py-20 text-14 font-medium text-greyText">
                          <i className="fa-solid fa-check text-12 text-green pr-10"></i>
                          Delivered Jan 27, 2022
                        </p>
                      </div>
                      <div className="grid grid-cols-5 items-center justify-between">
                        <h6 className="col-span-2 font-semibold">Info</h6>
                        <p className="col-span-3 py-20 text-14 font-medium text-themeBlue">
                          View Product
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20">
                  <p className="text-center md:text-left">
                    Showing 2 to 10 of 20 results
                  </p>
                  <div className="text-center md:text-left">
                    <button className="bg-cardBg text-greyText px-15 lg:px-20 py-10 border border-darkGrey rounded-sm font-medium shadow-sm mr-10">
                      Previous
                    </button>
                    <button className="bg-cardBg text-greyText px-15 lg:px-20 py-10 border border-darkGrey rounded-sm font-medium shadow-sm">
                      Next
                    </button>
                  </div>
                </div>
                {reviewModal && (
                  <WriteReview
                    reviewModal={reviewModal}
                    setReviewModal={setReviewModal}
                  />
                )}
              </div>
            )}
            {show === "wishlist" && (
              <div>
                <div className="flex flex-col justify-between md:flex-row">
                  <h1 className="text-20 font-medium">My Wishlist</h1>
                  <div className="col-span-1 relative">
                    <input
                      placeholder="Search your products"
                      className="py-10 bg-cardBg placeholder:text-placeholder text-12 px-40 shadow-none outline-none border border-darkGrey w-[300px]"
                      type="text"
                    />
                    <i className="fa fa-search absolute top-[50%] translate-y-[-50%] text-lightGrey left-15"></i>
                  </div>
                </div>
                <p className="text-14 font-semibold mt-10">
                  Find your saved items and get ready to order them!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-25 z-0">
                  {currentPosts.map((data) => (
                    <ProductCard2
                      key={data.title}
                      img="https://dummyimage.com/700x700/878787/ffffff&text=Clickable+700x700"
                      title={data.title}
                      subtitle="Delivery time: approx. 4-3 weeks"
                      price="€679.18"
                      dashedPrice="€923.44*"
                      discount="(-10%)"
                      rating="4.2"
                      tagType="red"
                      wishList={wishList}
                    />
                  ))}
                </div>
                <div className="float-right pt-30">
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={dummy.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            )}
            {show === "reviews" && (
              <div>
                <h1 className="text-20 font-medium">My Product Reviews</h1>
                <div className="bg-white2 border border-darkGrey rounded-sm py-20 px-10 mt-30 w-100% scrollbar-thin scrollbar-thumb-themeBlue scrollbar-track-themeBlueLight overflow-x-scroll">
                  <table className="w-[150%] lg:w-[100%] hidden md:table">
                    <thead>
                      <tr>
                        <td className="font-semibold px-10 pb-10">Created</td>
                        <td className="font-semibold px-10 pb-10">
                          Product Name
                        </td>
                        <td className="font-semibold px-10 pb-10">Rating</td>
                        <td className="font-semibold px-10 pb-10">Review</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="align-top border-t-[1px] border-darkGrey">
                        <td className="p-10 text-14 text-greyText font-medium">
                          01/05/2022
                        </td>
                        <td className="p-10 text-14 text-themeBlue font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor, nihil.
                        </td>
                        <td className="p-10 flex text-14">
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star-half text-rating"></i>
                        </td>
                        <td className="p-10 text-14 font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Debitis, eos. Lorem ipsum dolor sit amet
                          consectetur adipisicing
                        </td>
                      </tr>
                      <tr className="align-top border-t-[1px] border-darkGrey">
                        <td className="p-10 text-14 text-greyText font-medium">
                          01/05/2022
                        </td>
                        <td className="p-10 text-14 text-themeBlue font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </td>
                        <td className="p-10 flex text-14">
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star-half text-rating"></i>
                        </td>
                        <td className="p-10 text-14 font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <div className="ProductReviewsMobile md:hidden p-10 shadow-md">
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Created
                        </p>
                        <p className="col-span-3 p-10 text-14 text-greyText font-medium">
                          01/05/2022
                        </p>
                      </div>
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Product Name
                        </p>
                        <p className="col-span-3 p-10 text-14 text-themeBlue font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor, nihil.
                        </p>
                      </div>
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Rating
                        </p>
                        <div className="col-span-3 p-10 flex text-14">
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Review
                        </p>
                        <p className="col-span-3 p-10 text-14 font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="ProductReviewsMobile md:hidden p-10 shadow-md mt-20">
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Created
                        </p>
                        <p className="col-span-3 p-10 text-14 text-greyText font-medium">
                          01/05/2022
                        </p>
                      </div>
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Product Name
                        </p>
                        <p className="col-span-3 p-10 text-14 text-themeBlue font-semibold">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor, nihil.
                        </p>
                      </div>
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Rating
                        </p>
                        <div className="col-span-3 p-10 flex text-14">
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                          <i className="fa-solid fa-star text-rating"></i>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 justify-between">
                        <p className="col-span-2 font-semibold p-10 pl-0 md:px-10 md:pb-10">
                          Review
                        </p>
                        <p className="col-span-3 p-10 text-14 font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showOverlay === "editAccount" && <EditAccount />}
            {showOverlay === "addNewAddress" && <AddNewAddress />}
            {showOverlay === "editAddress" && <EditAddress />}
            {showOverlay === "newsLetterSubscription" && (
              <NewsletterSubscription />
            )}
          </section>
        )}
      </div>
    </div>
  );
};
export default Account;

export async function getServerSideProps({ req }) {
  if (!req?.cookies?._SYS_USER_AUTH) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
