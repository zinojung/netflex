import Link from "next/link";
import React from "react";
import Logo from "@/assets/svg/logo.svg";
import Image from "next/image";

function Header() {
  console.log(Logo);

  return (
    <header className="h-20 px-8 flex justify-between items-center">
      {/* 로고 */}
      <Link href="/" className="text-red-600 font-extrabold text-3xl">
        <Image src={Logo.src} width={120} height={100} alt="netflix" />
      </Link>

      {/* 로그인 버튼 등 */}
      <div>
        <button className="font-bold">로그인</button>
      </div>
    </header>
  );
}

export default Header;
