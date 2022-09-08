import Link from "next/link";
import Image from "next/image";
import OverlayMenu from "./OverlayMenu";

const OrderPlaced = () => {
  return (
    <div>
      <OverlayMenu>
        <span className="uppercase text-green font-bold text-14">
          thank you
        </span>

        <h1 className="text-24 font-bold mt-10">It&apos;s on the way!</h1>
        <span className="text-14 font-medium mt-10">
          Your order #123 has shipped and will be with you soon.
        </span>
        <p className="text-14 font-medium mt-20">Tracking Number</p>
        <Link href="">
          <a className="text-themeBlue font-sans text-14">#123</a>
        </Link>
        <hr className="mt-20 text-darkgray" />
        <div className="grid grid-cols-3 xs:grid-cols-4 gap-20 py-20">
          <div className="col-span-3 xs:col-span-1">
            <Image
              width="75px"
              height="75px"
              src="https://picsum.photos/75"
              alt="Order Item"
            />
          </div>
          <div className="col-span-2">
            <Link href="/order-details">
              <a className="font-semibold mb-5">Grotherm SmartControl</a>
            </Link>
            <p className="text-14 mb-5">
              Article No: <span>3298983</span>
            </p>
            <p className="text-14 mb-5">
              Delivery time approx.
              <span className="text-green font-medium">18-24 weeks</span>
            </p>
            <p className="text-14">Qty 6</p>
          </div>
          <div className="col-span-1">
            <p className="font-sans font-bold text-themeBlue text-right">
              €2,232.90
            </p>
          </div>
        </div>
        <hr className=" text-darkgray mb-20" />
        <div className="grid grid-cols-4">
          <div className="col-span-1 hidden sm:block"></div>
          <div className="col-span-4 sm:col-span-3">
            <div className="grid grid-cols-2">
              <div>
                <h6 className="font-semibold mb-10">Shipping address</h6>
                <p className="text-grayText text-14 font-medium">
                  Cecilia Chapman
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
              </div>
              <div>
                <h6 className="font-semibold mb-10">Shipping address</h6>
                <p className="text-grayText text-14 font-medium">
                  Cecilia Chapman
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
              </div>
            </div>
            <hr className="my-20 text-darkgray" />
            <div className="grid grid-cols-2">
              <div>
                <h6 className="font-semibold mb-10">Payment method</h6>
                <p className="text-grayText text-14 font-medium">
                  Cecilia Chapman
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
              </div>
              <div>
                <h6 className="font-semibold mb-10">Shipping method</h6>
                <p className="text-grayText text-14 font-medium">
                  Cecilia Chapman
                </p>
                <p className="text-grayText text-14 font-medium">
                  711-244 Nuhg St.
                </p>
              </div>
            </div>
            <hr className="my-20 text-darkgray" />

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
            <div className="flex justify-between text-14 font-medium pb-10">
              <span>Grand Total Incl tax:</span>
              <span className="font-bold">€ 2,404.90</span>
            </div>
          </div>
        </div>
      </OverlayMenu>
    </div>
  );
};
export default OrderPlaced;
