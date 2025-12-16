'use client';

import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm rounded-lg bg-gray-800 p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Register
        </h2>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            role: 'student',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = 'Required';
            if (!values.email) errors.email = 'Required';
            if (!values.password) errors.password = 'Required';
            return errors;
          }}
          onSubmit={(values) => {
            try {
              /**
               * TEMP: simulate backend registration
               * Later → POST to backend
               */
              localStorage.setItem(
                'registeredUser',
                JSON.stringify(values)
              );

              router.push('/login');
            } catch {
              setError('Registration failed');
            }
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
                className="w-full rounded px-3 py-2"
              />

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                className="w-full rounded px-3 py-2"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
                className="w-full rounded px-3 py-2"
              />

              {/* ROLE SELECT */}
              <select
                name="role"
                onChange={handleChange}
                value={values.role}
                className="w-full rounded px-3 py-2"
              >
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="w-full rounded bg-indigo-600 py-2 font-semibold text-white"
              >
                Register
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
