import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-bannerBackground text-white commonContainer py-50">
        <div className="grid grid-cols-10">
          <div className="hidden md:block col-span-2"></div>
          <div className="col-span-10 md:col-span-8">
            <div className="grid grid-cols-10 gap-20">
              <div className="col-span-10 md:col-span-6 grid grid-cols-6">
                <div className="col-span-3 md:col-span-2 uppercase flex flex-col">
                  <h6 className="mb-15 font-semibold">shop</h6>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">shipping</a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">delivery time</a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">payment</a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">warranty</a>
                  </Link>
                </div>
                <div className="col-span-3 md:col-span-2 uppercase flex flex-col">
                  <h6 className="mb-15 font-semibold">about</h6>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">about xtwo</a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">
                      business customer
                    </a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">showroom</a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">contact us</a>
                  </Link>
                </div>
                <div className="col-span-3 md:col-span-2 uppercase flex flex-col">
                  <h6 className="mb-15 font-semibold">legal</h6>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">
                      terms &amp; conditions
                    </a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">return policy</a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">
                      privacy policy
                    </a>
                  </Link>
                  <Link href="">
                    <a className="mb-10 text-darkgray text-12">imprint</a>
                  </Link>
                </div>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h6 className="font-semibold mb-10 mt-20 md:mt-0">
                  Get comfortable &amp; stay a while
                </h6>
                <p className="text-10 mb-10">
                  Subscribe to our news letter and get 10% off first purchase
                </p>
                <div className="flex relative">
                  <i className="far fa-envelope absolute top-[50%] transform translate-y-[-50%] left-10"></i>
                  <input
                    type="text"
                    className="bg-[transparent] border py-8 flex-1 text-12 placeholder:text-white pl-40 outline-none shadow-none"
                    placeholder="Email address"
                  />
                  <button className="border px-10">
                    <i className="text-12 fa fa-arrow-right"></i>
                  </button>
                </div>
                <p className="mt-10 text-10">
                  By signing up, you agree that we may send you e-mail
                  marketing. You can opt-out of e-mail marketing at any time.
                  See our privacy policy for more information.
                </p>
              </div>
            </div>
            <div className="grid mt-50">
              <div className="col-span-6">
                <span>
                  <div className="inline mr-15">
                    <Image
                      height="14px"
                      width="45px"
                      src="https://xtwostore-ae01a.web.app/images/visa.png"
                      alt="Visa"
                    />
                  </div>
                  <div className="inline mr-15">
                    <Image
                      height="14px"
                      width="45px"
                      src="https://xtwostore-ae01a.web.app/images/paypal.png"
                      alt="Paypal"
                    />
                  </div>
                  <div className="inline mr-15">
                    <Image
                      height="14px"
                      width="45px"
                      src="https://xtwostore-ae01a.web.app/images/applepay.png"
                      alt="Apple Pay"
                    />
                  </div>
                  <div className="inline mr-15">
                    <Image
                      height="19px"
                      width="33px"
                      src="https://xtwostore-ae01a.web.app/images/mastero.png"
                      alt="Mastero"
                    />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-10 mt-10 gap-y-10">
          <div className="col-span-2 row-span-2 self-end flex items-end">
            <Image
              height="30px"
              width="150px"
              src="/common/xlogo.svg"
              alt="xTWO Logo"
            />
          </div>
          <div className="col-span-7 flex flex-col sm:flex-row text-12 text-darkgray">
            <span>All rights reserved - &copy; 2021 xTWO store</span>
            <Link href="">
              <a className="mt-10 sm:ml-20 sm:mt-0">Privacy Policy</a>
            </Link>
            <Link href="">
              <a className="mt-10 sm:ml-20 sm:mt-0">Terms of Use</a>
            </Link>
            <Link href="">
              <a className="mt-10 sm:ml-20 sm:mt-0">Accessibility Policy</a>
            </Link>
          </div>
          <div className="col-span-7 flex flex-col md:flex-row text-12 text-darkgray">
            <Link href="">
              <a className="mt-10 md:mr-20 md:mt-0">help@xtwostore.com</a>
            </Link>
            <Link href="">
              <a className="mt-10 md:mr-20 md:mt-0">+1(855) 461-2272</a>
            </Link>
            <span className="mt-10 md:mt-0">
              Store Access, xTWOstore GieBener Str. 42 35410 Hungen
            </span>
          </div>
          <div className="col-span-1 relative">
            <div className="relative mt-20 md:absolute bottom-0">
              <Image
                width="50px"
                height="50px"
                src="https://xtwostore-ae01a.web.app/images/icon-ssl.svg"
                alt="SSL"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
