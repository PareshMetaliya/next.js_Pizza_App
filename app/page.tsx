import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-[45px] font-bold font-poppins mb-4 text-red-500">Poppins Bold</h1>
      <h1 className="text-4xl font-bold mb-4">Poppins Bold 2</h1>
      <h2 className="text-3xl font-semibold font-poppins mb-4">Poppins Semi-Bold</h2>
      <h2 className="text-3xl font-semibold mb-4">Poppins Semi-Bold</h2>
      <h3 className="text-2xl font-medium font-poppins mb-4">Poppins Medium</h3>
      <p className="text-lg font-normal font-poppins">
        This is a paragraph using Poppins Regular. If the fonts are working,
        you should see different weights for the headings and text.
      </p>
    </div>
  );
}
