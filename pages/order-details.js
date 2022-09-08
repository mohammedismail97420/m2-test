import Link from "next/link";
import Image from "next/image";

const OrderDetails = () => {
  return (
    <div className="commonContainerWithBg">
      <Link href="account">
        <a>
          <i className="fa-solid fa-arrow-left text-14"></i>
          <span className="ml-10 text-20 font-medium">Order Details</span>
        </a>
      </Link>
      <div className="flex justify-between items-center text-14 font-medium text-grayText p-10 mb-20">
        <div className="flex">
          <p className="mr-30">Order Number: #AWSGAHHGS</p>
          <p className="relative before:w-4 before:h-4 before:rounded-full before:bg-darkgray before:absolute before:left-[-15px] before:top-[50%] before:translate-y-[-50%]">
            March 20,2022
          </p>
        </div>
        <button className="py-7 px-14 bg-cardBg text-grayText border border-darkgray shadow-md outline-none font-medium rounded-sm">
          View Invoice
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 border-t-[1px] border-darkgray py-30">
        <div className="col-span-1 w-[100%]">
          <Image
            width="300px"
            height="300px"
            src="https://picsum.photos/300"
            alt="Ordered Product"
          />
        </div>
        <div className="col-span-2">
          <h2 className="font-medium">Grotherm SmartControl</h2>
          <h6 className="font-medium text-14 mt-5 mb-20">$2655.89</h6>
          <p className="text-grayText text-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            dolorem quam at placeat! Temporibus nihil omnis nam id odio cumque.
          </p>
          <div className="flex text-14 mt-20">
            <div>
              <p className="mb-10 font-medium">Shipping address</p>
              <div className="text-grayText mr-50">
                <p>Cecila chapman</p>
                <p>711-9278-298</p>
                <p>Mankata lorem lorem</p>
                <p>711-9278-298</p>
              </div>
            </div>
            <div>
              <p className="mb-10 font-medium">Billing address</p>
              <div className="text-grayText">
                <p>Cecila chapman</p>
                <p>711-9278-298</p>
                <p>Mankata lorem lorem</p>
                <p>711-9278-298</p>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-darkgray mt-20 pt-20">
            <p className="text-14 font-semibold">Shipped on March 6th, 2022</p>
            <div className="bg-white w-[100%] h-5 rounded-full mt-15">
              <div className="w-[50%] h-[100%] bg-themeBlue rounded-full"></div>
            </div>
            <div className="grid grid-cols-4 text-14 font-medium mt-15">
              <div>Order Placed</div>
              <div>Processing</div>
              <div>Shipped</div>
              <div>Delivered</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 border-t-[1px] border-darkgray py-30">
        <div className="col-span-1 w-[100%]">
          <Image
            width="300px"
            height="300px"
            src="https://picsum.photos/300"
            alt="Ordered Product"
          />
        </div>
        <div className="col-span-2">
          <h2 className="font-medium">Grotherm SmartControl</h2>
          <h6 className="font-medium text-14 mt-5 mb-20">$2655.89</h6>
          <p className="text-grayText text-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            dolorem quam at placeat! Temporibus nihil omnis nam id odio cumque.
          </p>
          <div className="flex text-14 mt-20">
            <div>
              <p className="mb-10 font-medium">Shipping address</p>
              <div className="text-grayText mr-50">
                <p>Cecila chapman</p>
                <p>711-9278-298</p>
                <p>Mankata lorem lorem</p>
                <p>711-9278-298</p>
              </div>
            </div>
            <div>
              <p className="mb-10 font-medium">Billing address</p>
              <div className="text-grayText">
                <p>Cecila chapman</p>
                <p>711-9278-298</p>
                <p>Mankata lorem lorem</p>
                <p>711-9278-298</p>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] border-darkgray mt-20 pt-20">
            <p className="text-14 font-semibold">Shipped on March 6th, 2022</p>
            <div className="bg-white w-[100%] h-5 rounded-full mt-15">
              <div className="w-[50%] h-[100%] bg-themeBlue rounded-full"></div>
            </div>
            <div className="grid grid-cols-4 text-14 font-medium mt-15">
              <div>Order Placed</div>
              <div>Processing</div>
              <div>Shipped</div>
              <div>Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
