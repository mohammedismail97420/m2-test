import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/");
    dispatch(overlay(null));
  };
  return (
    <div>
      <OverlayMenu>
        <h1 className="text-24 font-bold mt-10">Forgot your password?</h1>
        <p className="text-14 italic mt-10">
          Please enter your registered email address to reset password.
        </p>

        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="relative font-medium text-14 w-auto"
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
          <input
            type="text"
            className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
            title="enter a valid email address"
            required
          />

          <button
            className="btn w-[100%] text-16 font-semibold rounded-[4px] mt-15"
            type="submit"
          >
            Submit
          </button>
        </form>
      </OverlayMenu>
    </div>
  );
};
export default ForgotPassword;
