import Image from "next/image";
import React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { CustomerReviews } from "@/constants/constants";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function CustomerReview() {
    return (
        <section className="container flex flex-col gap-4 mt-8 p-2">
            <div className=" flex flex-col justify-between items-center gap-2">
                <p className="text-customYellow text-[12px] font-semibold">
                    Testimonials
                </p>
                <h2 className="h2-bold text-customDark">Our Happy Client Says</h2>
            </div>
            <div className=" flex gap-4 m-6 p-2">
                <div className="flex flex-1 justify-center items-center ">


                    <Carousel className="max-w-[450px] max-md:w-[300px] max-sm:w-[250px]">
                        <CarouselContent>
                            {CustomerReviews.map((review) => (

                                <CarouselItem key={review.id}>



                                    <Card className="p-4">
                                        <CardHeader className="flex gap-2 items-center justify-center border-b border-customGrayDark mb-2">

                                            <Avatar className="h-[60px] w-[60px]">
                                                <AvatarImage src={review.image} />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>

                                            <CardTitle>{review.name}</CardTitle>
                                            {/* <CardDescription>Card Description</CardDescription> */}
                                        </CardHeader>
                                        <CardContent>
                                            <p>{review.review}</p>
                                        </CardContent>
                                        {/* <CardFooter>
                                            <p>{review.rating}</p>
                                        </CardFooter> */}
                                    </Card>


                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        <CarouselPrevious className="bg-customYellow text-customGray" />
                        <CarouselNext className="bg-customYellow text-customGray" />
                    </Carousel>

                </div>
                <div className=" flex flex-1 justify-center items-center max-lg:hidden">
                    <Image
                        src="/image/customer review image.png"
                        // src="/image/loginPizza2.png"
                        alt="cusomer image"
                        height={200}
                        width={200}
                        className=" mb-2"
                    />
                </div>
            </div>
        </section>
    );
}

export default CustomerReview;
