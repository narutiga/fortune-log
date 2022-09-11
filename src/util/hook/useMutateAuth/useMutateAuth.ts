import { useState } from "react";
import { useMutation } from "react-query";
import { supabase } from "src/util/supabase";

/** @package */
export const useMutateAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const reset = () => {
    setEmail("");
    setPassword("");
  };
  const signinMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw new Error(error.message);
    },
    {
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );
  const signupMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw new Error(error.message);
    },
    {
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );
  return {
    email,
    setEmail,
    password,
    setPassword,
    signinMutation,
    signupMutation,
  };
};
