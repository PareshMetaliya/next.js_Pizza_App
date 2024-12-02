import Image from "next/image";
import Link from "next/link";
import React from "react";

function MobileApp() {
    return (
        <section className="container ">
            <div className="bg-light-yellow flex p-20 items-center justify-evenly max-md:flex-col" >
                <div className="flex justify-center flex-2 items-center relative m-6" data-aos="flip-right"
            data-aos-delay="750">
                    <Image
                        src={"/image/Mobile.png"}
                        alt="mobile"
                        height={150}
                        width={150}
                        className="z-10"
                    />

                    <div className="w-64 h-64  absolute rounded-full border-[18px] border-yellow-500 flex justify-center items-center"></div>
                    <div className="w-48 h-48  absolute rounded-full border-[18px] border-yellow-500 flex justify-center items-center"></div>
                </div>
                <div className="flex justify-center gap-6 flex-1 flex-col items-center max-md:mt-6 max-xs:mt-12 p-4" data-aos="zoom-in"
            data-aos-delay="550">
                    <h2 className="h2-bold text-customBrown text-center w-auto">Download our Mobile App</h2>
                    <p className="paragraph-small text-customDark max-w-72  text-center">
                        Elevate your dining experience with our mobile app. Download now for
                        easy ordering and exclusive perks
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-4">
                       <Link href="/">
                        <Image
                            src={"/image/Android app.png"}
                            alt="logo"
                            height={150}
                            width={150}
                            className=""
                        /></Link>

<Link href="/">
                        <Image
                            src={"/image/appleApp.png"}
                            alt="logo"
                            height={150}
                            width={150}
                            className=""
                        /></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileApp;
