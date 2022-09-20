import OverlayMenu from "./OverlayMenu";
import { useDispatch } from "react-redux";
import { overlay } from "../../redux/slices/overlaysSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";
import { apis } from "../../config/apis";
import { useEffect } from "react";
import { setCookie } from "cookies-next";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { res, error, loading, executeFetch } = useFetch(
    "post",
    apis?.customer_login,
    null,
    false
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await executeFetch({
      username: e.target.email.value,
      password: e.target.password.value,
    });
  };

  useEffect(() => {
    if (res?.status === 200 && res?.data) {
      setCookie("_SYS_USER_AUTH", window.btoa(res?.data));
      router.push("/account");
      dispatch(overlay(null));
    }
  }, [res]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <OverlayMenu>
        <h1 className="text-24 font-bold mt-10 uppercase">Sign In</h1>
        <br />
        {error && (
          <div className="bg-[#f2dede] text-[#ba5f55] font-semibold rounded-sm px-10 py-15">
            <i className="fa-solid fa-circle-exclamation mr-10"></i>
            {error?.response?.data?.message}
          </div>
        )}
        <br />
        <form onSubmit={handleSubmit} className="flex flex-col gap-22">
          <div>
            <div>
              <label
                className="relative font-medium text-16 w-auto"
                htmlFor="email"
              >
                Email Address
                <span className="absolute -right-8 -top-5 text-22">*</span>
              </label>
            </div>
            <input
              type="text"
              className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
              required
              name="email"
            />
          </div>

          <div>
            <div>
              <label
                className="relative font-medium text-16 w-auto"
                htmlFor="password"
              >
                Password
                <span className="absolute -right-8 -top-5 text-22">*</span>
              </label>
            </div>
            <input
              type="text"
              className="bg-inputBg border-[1.5px] border-inputBorder rounded-[4px] outline-none text-14 p-10 w-[100%] shadow-sm focus:shadow-md"
              required
              name="password"
            />
          </div>

          <button
            className="btn w-[100%] text-16 font-semibold rounded-[4px] mt-8"
            type="submit"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <a
            onClick={() => dispatch(overlay("forgotPassword"))}
            className="mx-auto text-16 font-semibold cursor-pointer"
          >
            Forgot your password?
          </a>
          <Link href="/register" className="w-[100%]">
            <a
              onClick={() => dispatch(overlay(null))}
              className="btn-border border-themeBlueLight bg-inputBg text-center text-14 font-semibold rounded-[4px]"
            >
              Create an Account
            </a>
          </Link>
        </form>
      </OverlayMenu>
    </div>
  );
};
export default SignIn;
