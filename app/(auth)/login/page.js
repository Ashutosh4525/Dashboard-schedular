'use client'
import Link from "next/link";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();
  const[formError,setformError]=useState("");
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
           <Formik
                initialValues={{ username: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.username) {
                    errors.username = 'Username is Required';
                    }
                    if(!values.password){
                        errors.password='Password is Required'
                    }
                    return errors;
                }}
                onSubmit={async(values, { setSubmitting }) => {
            //     setTimeout(() => {
            //     // alert(JSON.stringify(values, null, 2));
            //     axios
            //     .post("https://dummyjson.com/auth/login",values)
            //     .then((response)=>{
            //         console.log(response.data.accessToken); 
            //         sessionStorage.setItem("token",response.data.accessToken);
            //         router.push("/admin");
            //     })
            //     .catch((error)=>{
            //         // console.error(error.response.data.message);
            //         setformError(error.response.data.message);
            //     })
            //     .finally(() => setSubmitting(false));
            //     setSubmitting(false);
            //     }, 400);
            //   }}
            // >
            try {
              const res = await axios.post(
                'https://dummyjson.com/auth/login',
                values
              );

              
              const role =
                values.username === 'admin'
                  ? 'admin'
                  : values.username === 'parent'
                  ? 'parent'
                  : 'student';

              document.cookie = `token=${res.data.accessToken}; path=/`;
              document.cookie = `role=${role}; path=/`;

              
              router.push(`/${role}`);
            } catch (err) {
              setformError('Invalid credentials');
            } finally {
              setSubmitting(false);
            }
          }}
        >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">
                User name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <p className="text-sm text-red-700">{errors.username && touched.username && errors.username}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                 onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                 <p className="text-sm text-red-700">{errors.password && touched.password && errors.password}</p>
              </div>
            </div>

           
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" disabled={isSubmitting}
              >
                Sign in
              </button>
            </div>
          </form>
       )}
      </Formik>
       {formError && <p className='text-sm text-red-700'>{formError}</p>}
          {/* <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  )
}
