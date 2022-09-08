import CartItem from "../CartItem";
import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { overlay } from "../../redux/slices/overlaysSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCheckout = () => {
    dispatch(overlay(null));
    router.push("/checkout");
  };
  return (
    <div>
      <OverlayMenu>
        <div className="flex justify-between">
          <h3 className="font-semibold">Shopping Cart</h3>
        </div>
        <CartItem />

        <div className="flex justify-between mt-50 text-14 font-semibold mb-5">
          <p>Subtotal:</p>
          <p>€ 2,394.36</p>
        </div>
        <div className="flex justify-between text-14 font-semibold mb-5">
          <p>Grand total Incl Tax:</p>
          <p>€ 2,394.36</p>
        </div>
        <div className="flex justify-between text-14 font-semibold mb-5">
          <p>Incl. Tax Germany (19%)</p>
          <p>€ 382.29</p>
        </div>

        <button onClick={() => handleCheckout()} className="btn w-[100%] mt-20">
          Checkout
        </button>

        <p className="text-center mt-10 font-medium text-14">
          <span>or Continue Shopping</span>
          <i className="ml-10 text-12 fa-solid fa-arrow-right"></i>
        </p>
      </OverlayMenu>
    </div>
  );
};
export default Cart;
