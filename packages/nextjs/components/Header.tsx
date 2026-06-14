"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RainbowKitCustomConnectButton, FaucetButton } from "~~/components/scaffold-eth";

/**
 * Minimal Site header - Token Vendor only
 */
export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <Link href="/" passHref className="flex items-center gap-2 ml-4 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="Token Vendor logo" className="cursor-pointer" fill src="/logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Token Vendor</span>
            <span className="text-xs">Challenge #2</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end flex-grow mr-4 gap-2">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
