"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to token vendor page
    router.push("/token-vendor");
  }, [router]);

  return null;
};

export default Home;
