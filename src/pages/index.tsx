import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { useMutateAuth } from "src/util/hook/useMutateAuth";

const Auth: NextPage = () => {
  const [isSignin, setIsSignin] = useState(true);
  const {
    email,
    setEmail,
    password,
    setPassword,
    signinMutation,
    signupMutation,
  } = useMutateAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignin) {
      signinMutation.mutate();
    } else {
      signupMutation.mutate();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-zinc-800">
      <Head>
        <title>Auth</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center bg-gray-700">
        <span className="text-2xl">⭐️</span>
        <div className="my-6 flex items-center justify-center text-sm">
          <button
            onClick={() => setIsSignin(!isSignin)}
            className="cursor-pointer font-medium border-none outline-none bg-transparent text-gray-300 hover:text-yellow-600"
          >
            {isSignin ? "Sign Up ?" : "Sign In ?"}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              className="my-2 rounded border border-gray-300 px-3 py-2 text-base placeholder-gray-500 focus:border-yellow-300 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className="my-2 rounded border border-gray-300 px-3 py-2 text-base placeholder-gray-500 focus:border-yellow-300 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="mr-auto ml-auto group relative flex justify-center rounded-full bg-yellow-300 py-2 px-4 text-sm font-medium text-gray-600 hover:bg-yellow-300"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Auth;
