import { overlay } from "../../redux/slices/overlaysSlice";
import { useDispatch } from "react-redux";
import OverlayMenu from "./OverlayMenu";

const AddNewCard = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <OverlayMenu>
        <button onClick={() => dispatch(overlay(null))}>
          <i className="fa-solid fa-arrow-left text-darkgray text-14"></i>
          <span className="uppercase text-green font-bold text-14 ml-10">
            checkout
          </span>
        </button>
        <h1 className="text-24 font-bold mt-10">Add new card</h1>

        <label className="text-14 font-semibold" htmlFor="">
          Card Number*
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          placeholder="2346 **** **** ****"
        />
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              Expiry Date
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
              placeholder="01/20"
            />
          </div>
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              CVC/CVV
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
              placeholder="123"
            />
          </div>
        </div>
        <label className="text-14 font-semibold" htmlFor="">
          Cardholder Name*
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
        />
        <div className="flex items-center">
          <i className="fa-solid fa-check-circle text-green mr-10 my-10"></i>
          <span className="text-14 font-semibold">Save card information</span>
        </div>
        <button className="btn w-[100%] my-10 text-14 font-semibold">
          Save
        </button>
        <div className="w-[100%] text-center">
          <button
            onClick={() => dispatch(overlay(null))}
            className="mx-auto text-14 font-semibold"
          >
            Cancel
          </button>
        </div>
      </OverlayMenu>
    </div>
  );
};
export default AddNewCard;
