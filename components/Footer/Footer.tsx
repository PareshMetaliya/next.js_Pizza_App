import Link from "next/link";
import React from "react";

function Footer() {
  const items = [
    { id: 1, name: "Campaigns" },
    { id: 2, name: "Email Marketing" },
    { id: 3, name: "Branding" },
    { id: 4, name: "Offline" },
    { id: 5, name: "Contact" },
    { id: 6, name: "FAQs" },
  ];

  return (
    <footer className="container">
      <div className=" bg-customYellow flex gap-4 flex-col items-center justify-center ">
        <div className="flex gap-4 flex-col items-center justify-center py-6">
          <Link href="/">
          <h2 className="h2-bold text-customBrown  ">
            Pizza
            <span className="text-customYellow bg-customBrown rounded-sm px-2">
              Rush
            </span>
          </h2>
          </Link>
          <p className="paragraph-small max-w-[400px] max-sm:max-w-[200px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>
        </div>

       
        <div className="grid grid-cols-6 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 justify-center text-center p-4 ">
          {items.map((item) => (
            <div key={item.id}>
              {" "}
              <Link href="/" className="hover:text-customGrayDark font-medium">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
