"use client";
import { useRouter } from "next/navigation";

const FacebookPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>fb.com</h1>
      <button onClick={() => router.push("/")}>back Home</button>
    </>
  );
};

export default FacebookPage;
