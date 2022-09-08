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
    if (res?.status === 200) {
      const encoded = window.btoa(res?.data);
      setCookie("_SYS_USER_AUTH", encoded);
      router.push("/account");
      dispatch(overlay(null));
    }
  }, [res]);

  return (
    <div>
      <OverlayMenu>
        <h1 className="text-24 font-bold mt-10 uppercase">Sign In</h1>
        <small>Password details are case sensitive.</small>
        <br />
        <br />
        {error && (
          <div className="bg-[#f2dede] text-[#ba5f55] font-semibold rounded-sm px-10 py-15">
            <i className="fa-solid fa-circle-exclamation mr-10"></i>
            {error?.response?.data?.message}
          </div>
        )}
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
            name="email"
          />
          <div>
            <label
              className="relative font-medium text-14 w-auto"
              htmlFor="password"
            >
              Password
              <span className="absolute -right-16 -top-8 text-36 text-red">
                *
              </span>
            </label>
          </div>
          <input
            type="password"
            className="bg-cardBg border border-darkGrey rounded-sm outline-none text-14 p-10 w-[100%] mt-5 mb-10"
            required
            name="password"
          />

          <button
            className="btn w-[100%] my-10 text-14 font-semibold"
            type="submit"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="w-[100%] text-center flex flex-col">
            <a
              onClick={() => dispatch(overlay("forgotPassword"))}
              className="mx-auto text-14 font-semibold cursor-pointer"
            >
              Forgot your password?
            </a>
            <Link href="/register">
              <a
                onClick={() => dispatch(overlay(null))}
                className="btn-border w-[100%] my-10 text-14 font-semibold mt-30"
              >
                Create an Account
              </a>
            </Link>
          </div>
        </form>
      </OverlayMenu>
    </div>
  );
};
export default SignIn;
