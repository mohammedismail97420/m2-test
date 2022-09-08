import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";

const EditAccount = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <OverlayMenu>
        <button onClick={() => dispatch(overlay(null))}>
          <i className="fa-solid fa-arrow-left text-darkgray text-14"></i>
          <span className="uppercase text-green font-bold text-14 ml-10">
            account information
          </span>
        </button>
        <h1 className="text-24 font-bold mt-10">Edit Account Information</h1>
        <label className="text-14 font-semibold" htmlFor="">
          First Name*
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          placeholder="ABCD"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
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
              Last Name*
            </label>
            <input
              type="text"
              className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
              placeholder="Sattar"
            />
          </div>
        </div>
        <label className="text-14 font-semibold" htmlFor="">
          Email Address*
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          placeholder="abcd@gmail.com"
        />
        <label className="text-14 font-semibold" htmlFor="">
          Tax/VAT Number
        </label>
        <input
          type="text"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          placeholder="A121212"
        />
        <button className="btn w-[100%] mt-20 text-14 font-medium">
          Save Information
        </button>
        <div className="text-center">
          <button
            className="mt-10 text-14 font-medium"
            onClick={() => dispatch(overlay(null))}
          >
            Cancel
          </button>
        </div>
      </OverlayMenu>
    </div>
  );
};
export default EditAccount;
