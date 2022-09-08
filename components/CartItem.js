import Image from "next/image";
const CartItem = () => {
  return (
    <div>
      <div className="grid grid-cols-4 py-20 gap-10 xl:gap-20">
        <span className="col-span-1">
          <Image
            width="80px"
            height="80px"
            src="https://picsum.photos/80"
            alt="Cart Item"
          />
        </span>
        <div className="col-span-2">
          <h3 className="font-semibold mb-5">Grotherm SmartControl</h3>
          <p className="text-12 mb-5">Article number: 36028080</p>
          <p className="text-12 mb-5">
            Delivery time approx.
            <span className="text-red2"> 18-24 weeks</span>
          </p>
          <p className="text-12 pt-5">
            Qty 6
            <span>
              <i className="ml-10 text-12 text-black2 fa-solid fa-angle-down"></i>
            </span>
          </p>
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <span className="font-sans text-right text-themeBlue font-bold">
            €2,394.36
          </span>
          <span className="text-12 text-right">
            Remove
            <i className="fa-solid fa-trash text-darkergray lg:ml-10"></i>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-1"></div>
        <hr className="col-span-3 text-darkgray" />
      </div>
      <div className="grid grid-cols-4 my-10">
        <div className="col-span-1"></div>
        <div className="col-span-2 text-12">Volume weight:</div>
        <div className="col-span-1 text-12 text-right">
          14.16kg
          <i className="fa-solid fa-bag-shopping text-darkergray ml-10"></i>
        </div>
      </div>
      <hr className="text-darkgray" />
    </div>
  );
};
export default CartItem;
