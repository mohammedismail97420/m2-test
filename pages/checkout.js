import { useState } from "react";
import Image from "next/image";
import CartItem from "../components/CartItem";
import OrderPlaced from "../components/OverlayMenus/OrderPlaced";
import AddNewCard from "../components/OverlayMenus/AddNewCard";
import { useSelector, useDispatch } from "react-redux";
import { overlay } from "../redux/slices/overlaysSlice";

const Checkout = () => {
  const [addType, setAddType] = useState("private");
  const [loggedIn, setLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const showOverlay = useSelector((state) => state.overlay);

  return (
    <div className="commonContainerWithBg relative">
      <h1 className="text-20 font-medium">Checkout</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <p className="text-14 font-medium text-grayText">
            Please fill in the fields below and click Place Order to complete
            purchase!
          </p>
        </div>
        {!loggedIn && (
          <div className="mt-20 sm:mt-0">
            <span className="text-14 font-semibold mr-20">
              Already registered?
            </span>
            <button
              className="btn text-14 mt-10 sm:mt-0"
              onClick={() => setLoggedIn(true)}
            >
              Login to your account
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-30">
        <div>
          {loggedIn && (
            <div>
              <h3 className="text-16 font-medium mt-20 mb-20">
                Billing Address
              </h3>
              <div className="grid grid-cols-2 gap-20">
                <div className="flex items-start bg-white p-10 border border-darkgray rounded-sm">
                  <input
                    className="mr-10 mt-5"
                    type="radio"
                    name="address"
                    id="add1"
                  />
                  <label className="font-medium text-14" htmlFor="add1">
                    <p>Colby Bernanrd</p>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem ipsum dolor </p>
                  </label>
                </div>
                <div className="flex items-start bg-white p-10 border border-darkgray rounded-sm">
                  <input
                    className="mr-10 mt-5"
                    type="radio"
                    name="address"
                    id="add2"
                  />
                  <label className="font-medium text-14" htmlFor="add2">
                    <p>Colby Bernanrd</p>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem ipsum dolor </p>
                    <p>Lorem ipsum dolor </p>
                  </label>
                </div>
              </div>
              <button className="text-themeBlue font-medium text-14">
                <i className="fa-solid fa-plus mx-10 mt-20"></i>
                <span>or Add a new Address</span>
              </button>
              <hr className="text-darkgray mt-30" />
              <input
                className="mr-10 mt-30 mb-10"
                type="radio"
                name="address1"
                id="thisAdd"
              />
              <label className="font-medium text-14" htmlFor="thisAdd">
                Ship to this address
              </label>
              <br />
              <input
                className="mr-10 mt-5"
                type="radio"
                name="address1"
                id="diffAdd"
              />
              <label className="font-medium text-14" htmlFor="diffAdd">
                Ship to different address
              </label>
            </div>
          )}
          {!loggedIn && (
            <div>
              <h3 className="text-16 font-medium mt-20">Shipping Address</h3>
              <form action="">
                <div className="grid grid-cols-2 gap-20">
                  <div className="flex bg-cardBg border-darkgray mt-15 border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md">
                    <input
                      className="ml-10"
                      type="radio"
                      id="addType"
                      name="addType"
                      checked={addType === "private"}
                      onChange={() => setAddType("private")}
                    />
                    <label
                      className="ml-10 font-medium text-14 flex-1 py-9 pr-10"
                      htmlFor="addType"
                    >
                      Private
                    </label>
                  </div>
                  <div className="flex bg-cardBg border-darkgray mt-15 border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md">
                    <input
                      className="ml-10"
                      type="radio"
                      id="addType2"
                      name="addType"
                      onChange={() => setAddType("company")}
                    />
                    <label
                      className="ml-10 font-medium text-14 flex-1 py-9 pr-10"
                      htmlFor="addType2"
                    >
                      Company
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-20">
                  <div className="mt-20">
                    <label className="font-medium text-14" htmlFor="fname">
                      First name
                    </label>
                    <input
                      className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                      type="text"
                    />
                  </div>
                  <div className="mt-20">
                    <label className="font-medium text-14" htmlFor="lname">
                      Last name
                    </label>
                    <input
                      className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-20">
                  <label className="font-medium text-14" htmlFor="lname">
                    Email address*
                  </label>
                  <input
                    className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                    type="text"
                  />
                </div>
                {addType === "company" && (
                  <div className="mt-20">
                    <label className="font-medium text-14" htmlFor="lname">
                      Company
                    </label>
                    <input
                      className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                      type="text"
                    />
                  </div>
                )}
                <div className="mt-20">
                  <label className="font-medium text-14" htmlFor="lname">
                    House # and Street name*
                  </label>
                  <input
                    className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-20">
                  {addType === "company" && (
                    <div className="mt-20">
                      <label className="font-medium text-14" htmlFor="fname">
                        VAT ID number
                      </label>
                      <select
                        className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                        name=""
                        id=""
                      >
                        <option value=""></option>
                      </select>
                    </div>
                  )}
                  <div className="mt-20">
                    <label className="font-medium text-14" htmlFor="fname">
                      Zip/Postal code*
                    </label>
                    <select
                      className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                      name=""
                      id=""
                    >
                      <option value=""></option>
                    </select>
                  </div>
                  {addType === "private" && (
                    <div className="mt-20">
                      <label className="font-medium text-14" htmlFor="lname">
                        City*
                      </label>
                      <select
                        className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                        name=""
                        id=""
                      >
                        <option value=""></option>
                      </select>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-20">
                  <div className="mt-20">
                    <label className="font-medium text-14" htmlFor="fname">
                      Country*
                    </label>
                    <select
                      className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                      name=""
                      id=""
                    >
                      <option value=""></option>
                    </select>
                  </div>
                  <div className="mt-20">
                    <label className="font-medium text-14" htmlFor="lname">
                      State/Province
                    </label>
                    <select
                      className="w-[100%] px-10 py-9 border border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                      name=""
                      id=""
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="mt-20">
                  <label className="font-medium text-14" htmlFor="lname">
                    Mobile or Telephone #
                  </label>
                  <input
                    className="w-[100%] px-10 py-9 border-darkgray text-14 outline-none mt-5 bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
                    type="text"
                  />
                </div>
              </form>
              <hr className="text-darkgray mt-30" />
              <h3 className="mt-20 mb-10 font-medium">Billing Information</h3>
              <p className="items-center flex">
                <span>
                  <i className="text-green fa-solid fa-circle-check mr-10"></i>
                </span>
                <span className="text-14 font-medium">
                  Same as Shipping Information
                </span>
              </p>
            </div>
          )}
          <hr className="text-darkgray mt-30" />
          <h3 className="mt-20 mb-10 font-medium">Shipping Method</h3>
          <div className="flex bg-cardBg border-darkgray mt-15 border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md">
            <input
              className="ml-10"
              type="radio"
              id="economy"
              name="shipping"
            />
            <label
              className="ml-10 font-medium text-14 flex-1 py-9 pr-10 flex justify-between"
              htmlFor="economy"
            >
              <span>Economy</span>
              <span>$6.00</span>
            </label>
          </div>
          <div className="flex bg-cardBg border-darkgray border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md mt-15">
            <input
              className="ml-10"
              type="radio"
              id="standard"
              name="shipping"
            />
            <label
              className="ml-10 font-medium text-14 flex-1 py-9 pr-10 flex justify-between"
              htmlFor="standard"
            >
              <span>Standard</span>
              <span>$8.00</span>
            </label>
          </div>
          <div className="flex bg-cardBg border-darkgray border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md mt-15">
            <input
              className="ml-10"
              type="radio"
              id="expShip"
              name="shipping"
            />
            <label
              className="ml-10 font-medium text-14 flex-1 py-9 pr-10 flex justify-between"
              htmlFor="expShip"
            >
              <span>Express Shipping</span>
              <span>$9.00</span>
            </label>
          </div>
          <hr className="text-darkgray mt-30" />
          <h3 className="mt-20 mb-10 font-medium">Payment Method</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="mb-10 sm:mb-0 flex ">
              <input name="payMet" className="mr-5" type="radio" id="cc" />
              <label className="" htmlFor="cc">
                Credit Card
              </label>
            </div>
            <div className="mb-10 sm:mb-0 flex">
              <input name="payMet" className="mr-5" type="radio" id="wt" />
              <label className="" htmlFor="wt">
                Wire Transfer
              </label>
            </div>
            <div className="mb-10 sm:mb-0 flex ">
              <input name="payMet" className="mr-5" type="radio" id="pp" />
              <label className="" htmlFor="pp">
                PayPal
              </label>
            </div>
          </div>
          <div className="flex bg-cardBg border-darkgray border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md mt-15">
            <input className="ml-20" type="radio" id="cc1" name="shipping" />
            <label
              className="ml-20 font-medium text-14 flex-1 py-15 pr-10 flex justify-between"
              htmlFor="cc1"
            >
              <span className="flex flex-col">
                <span>Ending in: **** 6793</span>
                <span className="text-grayText text-14">
                  Last used: Thu, Mar 8 2021
                </span>
              </span>
              <span>
                <Image
                  width="50px"
                  height="30px"
                  src="https://dummyimage.com/50x30/878787/ffffff&text=50x30"
                  alt="Credit Card"
                />
              </span>
            </label>
          </div>
          <div className="flex bg-cardBg border-darkgray border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md mt-15">
            <input className="ml-20" type="radio" id="cc2" name="shipping" />
            <label
              className="ml-20 font-medium text-14 flex-1 py-15 pr-10 flex justify-between"
              htmlFor="cc2"
            >
              <span className="flex flex-col">
                <span>Ending in: **** 6793</span>
                <span className="text-grayText text-14">
                  Last used: Thu, Mar 8 2021
                </span>
              </span>
              <span>
                <Image
                  width="50px"
                  height="30px"
                  src="https://dummyimage.com/50x30/878787/ffffff&text=50x30"
                  alt="Credit Card"
                />
              </span>
            </label>
          </div>
          <div className="mt-20 text-themeBlue pl-20">
            <button onClick={() => dispatch(overlay("addNewCard"))}>
              <i className="fa-solid fa-plus mr-10"></i>
              <span>or Add a new Card</span>
            </button>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-16 font-medium">Order Summary</h3>
          <div className="bg-white border border-darkgray rounded-[4px] mt-15 p-10 md:p-20">
            <CartItem />
            <CartItem />
            <div className="flex justify-between mt-30 text-14 font-medium pb-10">
              <span>Subtotal:</span>
              <span>€ 2,404.90</span>
            </div>
            <div className="flex justify-between text-14 font-medium pb-10">
              <span>Grand total Incl. Tax:</span>
              <span>€ 2,404.90</span>
            </div>
            <div className="flex justify-between text-14 font-medium pb-10">
              <span>Incl. Tax Germany (19%):</span>
              <span>€ 404.90</span>
            </div>
            <div className="text-14 font-medium pb-10 mt-30">
              Have a Coupon?
            </div>
            <div className="relative">
              <input
                type="text"
                className="py-10 text-14 pl-10 pr-100 w-[100%] border-darkgray outline-none bg-cardBg border-[1.5px] rounded-[4px] shadow-sm focus:shadow-md"
              />
              <button className="absolute top-[50%] translate-y-[-50%] right-10 uppercase font-semibold text-themeBlue text-14">
                apply code
              </button>
            </div>
            <div className="text-14 font-medium pb-10 mt-20 flex justify-between">
              <span>Grand Total Incl. Tax:</span>
              <span className="font-bold font-sans">€ 2,234.90</span>
            </div>
            <hr className="text-darkgray my-10" />
            <div className="flex items-start">
              <input className="mt-3" type="checkbox" name="" id="terms" />
              <label className="ml-10 text-14 font-medium" htmlFor="terms">
                I accept the general terms and condition and the right of
                cancellation policy.
              </label>
            </div>
            <button
              className="btn mt-20 w-[100%]"
              onClick={() => dispatch(overlay("orderPlaced"))}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {showOverlay === "orderPlaced" && <OrderPlaced />}
      {showOverlay === "addNewCard" && <AddNewCard />}
    </div>
  );
};
export default Checkout;
