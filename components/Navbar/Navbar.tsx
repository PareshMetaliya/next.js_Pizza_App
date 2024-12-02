import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const User = true;

  return (
    <>

      <nav className="fixed top-0 z-20 w-full">
        <div className="container p-0 items-center">
        <div className="px-8 shadow-md bg-slate-50 max-md:h-[6vh] md:h-[10vh]   flex  justify-between items-center">
        
            <div className="flex justify-start ">
              <Link href="/">

                <h2 className='h2-bold text-customBrown  '>Pizza <span className='text-customYellow bg-customBrown rounded-sm px-2'>Rush</span></h2>
              </Link>

            </div>

            <div className="flex items-center justify-between gap-6 mx-4">
              <Link
                href="/menu"
                className="text-customGreen font-semibold hover:text-customBrown text-xl ease-in-out  hover:scale-105 transition-all duration-300 hover:border-b-2 border-customYellow"
              >
                Menu
              </Link>
              <Link
                href="/cart"
                className="text-customGreen font-semibold text-lg ease-in-out  hover:scale-105 transition-all duration-300"
              >
                <Image src={"/image/cart.png"} alt="cart" width={15} height={15} />
              </Link>

              <div>
                {User ? (
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="https://randomuser.me/api/portraits/men/10.jpg" alt="logo" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Log Out</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <Link href="/login">Log In</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
