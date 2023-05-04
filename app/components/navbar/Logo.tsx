"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/logo.png"
      height={100}
      width={100}
      alt="logo"
    />
  );
};

export default Logo;
