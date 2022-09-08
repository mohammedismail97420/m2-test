import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";

const ChangePassword = () => {
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
        <h1 className="text-24 font-bold mt-10">Change Password</h1>

        <label className="text-14 font-semibold" htmlFor="">
          Current Password*
        </label>
        <input
          type="password"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
          defaultValue="12365577"
        />
        <label className="text-14 font-semibold" htmlFor="">
          New Password*
        </label>
        <input
          type="password"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
        />
        <label className="text-14 font-semibold" htmlFor="">
          Confirm New Password*
        </label>
        <input
          type="password"
          className="bg-cardBg border border-darkgray rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
        />

        <button className="btn w-[100%] my-10 text-14 font-semibold">
          Change & Update
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
export default ChangePassword;
