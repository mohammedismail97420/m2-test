import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";

const EditAddress = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <OverlayMenu>
        <button onClick={() => dispatch(overlay(null))}>
          <i className="fa-solid fa-arrow-left text-darkgray text-14"></i>
          <span className="uppercase text-green font-bold text-14 ml-10">
            address book
          </span>
        </button>
        <h1 className="text-24 font-bold mt-10">Edit Address</h1>

        <p className="font-bold mt-20 mb-10">Contact Information</p>

        <label className="text-14 font-semibold" htmlFor="">
          First Name*
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          placeholder="Munawar"
        />
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              Middle Name/Initial
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
              placeholder="Abdul"
            />
          </div>
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              Last Name
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
              placeholder="Sattar"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              Company
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
            />
          </div>
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              Mobile/Tel Number*
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
            />
          </div>
        </div>
        <label className="text-14 font-semibold" htmlFor="">
          Fax
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
        />

        <p className="font-bold mt-15 mb-10">Address</p>

        <label className="text-14 font-semibold" htmlFor="">
          House # and street #
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
        />
        <label className="text-14 font-semibold" htmlFor="">
          Street Adress 2*
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          placeholder="Munawar"
        />
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              VAT ID #
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
            />
          </div>
          <div>
            <label className="font-semibold text-14" htmlFor="fname">
              City*
            </label>
            <select
              className="rounded-sm w-[100%] px-10 py-[11.5px] border border-darkgray text-14 outline-none mt-5 mb-10 bg-cardBg"
              name=""
              id=""
            >
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label className="font-semibold text-14" htmlFor="fname">
              State/Province
            </label>
            <select
              className="rounded-sm w-[100%] px-10 py-[11.5px] border border-darkgray text-14 outline-none mt-5 mb-10 bg-cardBg"
              name=""
              id=""
            >
              <option value=""></option>
            </select>
          </div>
          <div>
            <label className="text-14 font-semibold" htmlFor="">
              Zip/Postal Code*
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
            />
          </div>
        </div>
        <label className="font-semibold text-14" htmlFor="fname">
          Country
        </label>
        <select className="w-[100%] px-10 mb-10 py-[11.5px] border border-darkgray text-14 outline-none mt-5 bg-cardBg">
          <option value=""></option>
        </select>

        <div className="py-10 flex justify-between">
          <div>
            <input
              className="mr-10"
              type="radio"
              name="defAddress"
              id="billing"
            />
            <label className="font-medium" htmlFor="billing">
              Default Billing Address
            </label>
          </div>
          <div>
            <input
              className="mr-10 ml-20"
              type="radio"
              name="defAddress"
              id="shipping"
            />
            <label className="font-medium" htmlFor="shipping">
              Default Shipping Address
            </label>
          </div>
        </div>

        <button className="btn w-[100%] my-10 text-14 font-semibold">
          Save Address
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
export default EditAddress;
