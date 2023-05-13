"use client";

import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Avatar = () => {
  return (
    <div>
      <FaUserCircle className="rounded-full w-30 h-30" />
    </div>
  );
};

export default Avatar;
