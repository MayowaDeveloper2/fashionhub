'use client';

import { useState } from "react";
import Image from "next/image";
import fashion from '../images/Africa_photo-removebg.png';
import fashion1 from "../images/fashion1.png";
import fashion2 from "../images/fashion2.png";
import fashion3 from "../images/fashion3.png";
import fashion4 from "../images/fashion4.png";
import fashion5 from "../images/fashion5.png";
import fashion6 from "../images/fashion6.png";
import joindesigners from "../images/locationhub.png";
import messagefashion from "../images/Fashion Hub Messaging chat.png";
import plusicon from "../images/plus-svgrepo-com.png";
import minusicon from "../images/minus-svgrepo-com.png";
import searchfashion from "../images/search ankara print.png"

export default function Homepage() {
    const images = [
        { src: fashion1, alt: "fashion 1" },
        { src: fashion2, alt: "fashion 2" },
        { src: fashion3, alt: "fashion 3" },
        { src: fashion4, alt: "fashion 4" },
        { src: fashion5, alt: "fashion 5" },
        { src: fashion6, alt: "fashion 6" }
    ];

    const accordionData = [
        { title: "Who can join the Fashion Hub?", content: "The minimum age for a Fashion Hub membership is 15. If you are a fashion designer, fashion retailer or brand, fashion influencer or blogger as fashion enthusiast, you are free to join the fashion hub." },
        { title: "Is Fashion Hub free?", content: "Fashion Hub offers a free membership to anyone who wants to create and maintain a professional profile online in the field of fashion" },
        { title: "Does Fashion Hub offer any tutorials on fashion?", content: "Yes, Fashion Hub offers an online community platform for self-paced learners to engage with fellow Fashion enthusiasts. These spaces are perfect for asking questions, seeking feedback, and staying motivated. The exchange of ideas and experience can enhance your learning and provide you the needed information" },
        { title: "What should I do if I need help?", content: "The easiest way to reach us is contact our support team on the Fashion Hub web app, then click chat with us. You can also send an email to support@fashionhub.com or chat us up via any of our social media page" }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full mt-16 lg:mt-4 lg:h-screen flex flex-col lg:flex-row ">
                <div className="flex flex-col text-center justify-center lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-4xl text-black font-bold">Get in touch with <span className="bg-gradient-to-r from-customPurple to-customBlue bg-clip-text text-transparent">fashion</span> professionals</h1>
                    <p className="text-lg text-gray-700 mt-4">
                        Connect with other fashion professionals to learn, share ideas,
                        and inspire the newbies of the industry.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-customPurple mt-5 text-white w-[200px] h-[50px] rounded-lg">Get started</button>
                    </div>
                </div>
                <div className="flex justify-center lg:w-1/2">
                    <Image
                        src={fashion}
                        alt="Fashion Hub"
                        className="h-50 w-70"
                    />
                </div>
            </div>
            <div className="mt-4">
                <div className="text-2xl font-bold ml-10 mb-3">Who Is Fashion For</div>
                <div className="flex overflow-x-auto no-scrollbar w-50 h-60">
                    {images.map((image, index) => (
                        <Image
                          key={index}
                          src={image.src}
                          alt={image.alt}
                          className={`rounded-3xl ${index === 0 ? 'ml-10' : ''} mr-3`}
                        />
                    ))}
                </div>
            </div>
            <div className="bg-customPurple w-full flex flex-col lg:flex-row mt-4">
                <div className="flex flex-col justify-center mx-auto ml-5 mr-5 lg:ml-10 lg:mr-10">
                    <div className="text-4xl mt-5 w-[400px] text-white font-extrabold">Join your colleagues, professional designers on Fashion Hub</div>
                    
                    <div className="text-2xl mt-1 text-white">Connect and share the latest fashion trends with your colleagues today</div>
                    <div className="flex mt-3 mb-4 justify-center">
                        <button className="bg-white font-bold text-customPurple rounded-lg px-3 py-2 w-[200px] h-[50px]">Get Started</button>
                    </div>
                </div>
                <div className="flex">
                    <Image
                    src={joindesigners}
                    alt=""
                    className="w-45 h-50"
                    
                    />
                </div>

            </div>
            <div className="mx-auto mt-4 ml-5 mr-5 lg:ml-5 lg:mr-5 ">
                <div className="text-3xl text-black font-bold">Explore fashion together with your friends</div>
                <p className="ml-3 text-black">Share photos, videos, style tips, and more with your friends</p>
                <Image
                 src={messagefashion}
                 alt=""
                 width={500}
                 height={300}
                
                />
            </div>
            <div className="bg-customPink flex flex-col justify-center items-center mx-auto lg:flex-row w-full ">
                <div className="flex lg:w-1/2">
                   <Image className="w-[400px] h-[400px]" src={searchfashion} alt="search fashion" />

                </div>
                <div className="flex items-center flex-col lg:w-1/2">
                   <div>
                     <div className="text-4xl font-bold text-customPurple mb-3">Search for an idea</div>
                   </div>
                   <div className="w-[380px] text-customPurple text-[20px] mb-4">What do you want to try next? Think of a style or trend you love __ like 'African print dresses' or 'Dashiki' __ and discover endless inspiration</div>
                   <button className="bg-customPurple text-white px-2 py-2 w-[200px] rounded-3xl mb-10">Explore</button>
                </div>

            </div>
            <div className="flex flex-col w-full bg-customGrey items-center justify-center">
                <div className="text-2xl lg:text-4xl  text-black font-extrabold mt-4">Frequently Asked Questions</div>
                <div className="flex mt-4 mb-4 justify-center">
                    <div className="">
                      {accordionData.map((accordionInfo, index) => (
                        <div className="lg:w-[800px] md:w-[800px] w-[360px] h-[full]  bg-white border rounded-3xl mb-2 relative" key={index}>
                            <h6 className="mb-0" onClick={() => toggleAccordion(index)}>
                                <button
                                    className="flex items-center p-4 w-full"
                                >
                                    <span className="text-left text-black font-bold">{accordionInfo.title} </span>
                                    {openIndex === index ? <Image className="absolute right-5 w-[20px] h-[20px]" src={minusicon} alt="" /> : <Image className="absolute right-5 w-[20px] h-[20px]" src={plusicon} alt="" /> }
                                </button>
                            </h6>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'h-auto' : 'h-0'}`}>
                                <div className="p-4 text-black leading-normal">
                                    {accordionInfo.content}
                                </div>
                            </div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
        </>
    );
}
