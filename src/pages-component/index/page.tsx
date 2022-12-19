import Head from "next/head";
import { FC, FormEvent, useState } from "react";
import { useMutateAuth } from "src/lib/hook/useMutateAuth";

/** @package */
export const Auth: FC = () => {
  const [isSignin, setIsSignin] = useState(true);
  const {
    email,
    setEmail,
    password,
    setPassword,
    signInMutation,
    signUpMutation,
  } = useMutateAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignin) {
      signInMutation.mutate();
    } else {
      signUpMutation.mutate();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-zinc-800">
      <main className="flex w-screen flex-1 flex-col items-center justify-center bg-zinc-800">
        <span className="mb-4 text-2xl">⭐️</span>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              className="my-2 rounded border border-zinc-300 px-3 py-2 bg-zinc-700 text-base text-zinc-300 placeholder-gray-500 focus:border-yellow-300 focus:outline-none"
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
              className="my-2 mb-4 rounded border border-zinc-300 px-3 py-2 bg-zinc-700 text-zinc-300 text-base placeholder-gray-500 focus:border-yellow-300 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="mr-auto ml-auto group relative flex justify-center rounded-md bg-yellow-300 py-2 px-4 text-sm font-medium text-gray-600 hover:bg-yellow-200"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="my-6 flex items-center justify-center text-sm">
          <button
            onClick={() => setIsSignin(!isSignin)}
            className="cursor-pointer font-medium border-none outline-none bg-transparent text-zinc-300 hover:text-yellow-300 underline"
          >
            {isSignin ? "Sign Up ?" : "Sign In ?"}
          </button>
        </div>
      </main>
    </div>
  );
};
