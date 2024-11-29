import React from "react";
import ProductCard from "./ProductCard";

function PopularItems() {

    interface Pizza {
        _id: string,
        name: string,
        description: string,
        imageSrc: string,
    }

    const pizzadata = [
        {
            _id: "605c72ef153207001f04e4c",
            name: "Margherita",
            description:
                "A classic pizza with fresh mozzarella, tomato sauce, and basil.",
            imageSrc: "/image/heroPizzaImage.png",
        },
        {
            _id: "605c72ef153207001f04e4d",
            name: "Pepperoni",
            description:
                "A pepperoni lover's dream, topped with spicy pepperoni, mozzarella cheese, and tangy tomato sauce.",
            imageSrc: "/image/heroPizzaImage.png",
        },
        {
            _id: "605c72ef153207001f04e4e",
            name: "Vegetarian",
            description:
                "A delicious blend of fresh vegetables, including mushrooms, bell peppers, olives, and onions.",
            imageSrc: "/image/heroPizzaImage.png",
        },
        {
            _id: "605c72ef153207001f04e4f",
            name: "BBQ Chicken",
            description:
                "Grilled chicken with smoky BBQ sauce, red onions, and cilantro.",
            imageSrc: "/image/heroPizzaImage.png",
        },
    ];
    return (


        <>
            <section className="container flex flex-col mt-10 ">

                <div className="flex flex-col items-center justify-center gap-4 pb-[8px] mb-4 border-b-[0.5px] border-b-customGrayDark">
                    <h2 className="h2-bold text-customGray">
                    Exclusive Menu For You!
                    </h2>

                    <p className="paragraph-small text-customDark text-center">

                    Experience the epitome of luxury dining with our exclusive menu, a carefully<br></br> curated selection for our discerning patrons
                    </p>

                </div>

                <div className=" justify-items-center grid grid-cols-4 max-xs:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-2 max-lg:grid-cols-4 gap-0 mt-6">
                    {pizzadata.map((pizza) => (
                        <ProductCard key={pizza._id} pizza={pizza} />
                    ))}
                </div>
            </section>
        </>

    );
}

export default PopularItems;
