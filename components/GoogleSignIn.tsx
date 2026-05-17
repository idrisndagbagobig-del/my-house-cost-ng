"use client";

import { supabase }
from "@/lib/supabase";

export default function
GoogleSignIn() {

  const signInWithGoogle =
    async () => {

    await supabase.auth.signInWithOAuth({

      provider: "google",

      options: {

        redirectTo:
          "http://localhost:3000/premium-dashboard",

      },

    });

  };

  return (

    <button
      onClick={signInWithGoogle}
      className="
      w-full
      bg-white
      text-black
      p-4
      rounded-2xl
      font-bold
      mt-4
      hover:scale-[1.02]
      transition
      "
    >

      Continue with Google

    </button>

  );

}