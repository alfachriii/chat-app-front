import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { FiMessageSquare } from "react-icons/fi"
import { Link } from "react-router-dom"

const LoginPage = () => {
const [showPass, setShowPass] = useState(false)

  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-slate-50 w-1/3 h-fit p-5 flex flex-col items-center">
        <div className="p-4 rounded-md bg-sky-100 mb-2">
          <FiMessageSquare className="text-2xl" />
        </div>
        <h1 className="font-bold text-2xl">Welcome Back!</h1>
        <h3 className="text-sm font-normal">
          the best chat app?
        </h3>
        <form className="mt-5 flex flex-col">
          <label className="label mt-3">
            <span className="text-sm font-semibold ml-2">Email</span>
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            className="w-96 p-2 py-3 text-sm border-none outline-none"
          />
          <label className="label mt-3">
            <span className="text-sm font-semibold ml-2">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="**********"
              className="w-96 p-2 py-3 text-sm border-none outline-none"
            />
            <button
              type="button"
              className="absolute top-3 right-3"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className="mt-4 bg-sky-300 p-4 text-sm font-semibold rounded"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-xs flex gap-1">
          <h3 >Don&lsquo;t have an account.</h3>
          <Link to="/signup" className="text-sky-900 underline underline-offset-1">Create Account</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage