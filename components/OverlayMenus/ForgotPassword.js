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
          Please enter the following information to create your account.
        </p>

        <div className="ml-14 mt-10">
          <label
            className="relative font-medium text-14 w-auto"
            htmlFor="email"
          >
            Required Fields
            <span className="absolute -left-16 -top-8 text-36 text-red">*</span>
          </label>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label
              className="relative font-medium text-14 w-auto"
              htmlFor="email"
            >
              Email Address
              <span className="absolute -right-16 -top-8 text-36 text-red">
                *
              </span>
            </label>
          </div>
          <input
            type="email"
            className="bg-cardBg border border-darkGrey rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="enter a valid email address"
            required
          />

          <button
            className="btn w-[100%] my-10 text-14 font-semibold"
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
