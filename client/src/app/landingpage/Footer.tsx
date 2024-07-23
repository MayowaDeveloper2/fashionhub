import Image from "next/image";
import googleplaystore from "../images/googleplay.png";
import applestore from "../images/appstore.png";
import fashionhublogo from "../images/fashion-hub-web-3.png";

export default function Footer() {
    return (
        <>
            <footer className="bg-customPurple py-6 mx-auto w-full">
                <div className="flex flex-col items-center">
                    <Image className="w-[180px] h-[60px]" src={fashionhublogo} alt="" />
                    <div className="w-[300px] lg:w-[700px] text-4xl mt-6 font-bold text-white text-center">Get started with Fashion Hub Today</div>
                    <div className="flex flex-row mt-4">
                        <Image className="w-[180px] h-[60px]" src={googleplaystore} alt="Google Play Store" />
                        <Image className="ml-3 w-[180px] h-[60px]" src={applestore} alt="Apple Store" />
                    </div>
                </div>
                <div className="md:px-24 lg:px-24 mx-auto mt-6 ml-5 mr-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-8 lg:gap-x-8 ">
                        <div>
                            <span className="text-white font-bold">Company</span>
                            <div className="mt-4 text-white">About us</div>
                            <div className="mt-4 text-white">Privacy policy</div>
                            <div className="mt-4 text-white">Terms of use</div>
                        </div>
                        <div>
                            <span className="text-white font-bold">Contact</span>
                            <div className="mt-4 text-white">+2348128460866</div>
                            <div className="mt-4 text-white">support@fashionhub.com</div>
                        </div>
                        <div className="md:ml-auto lg:ml-auto mt-6 md:mt-0 lg:mt-0">
                            <span className="text-white font-bold">Support</span>
                            <div className="mt-4 text-white ">FAQs</div>
                        </div>
                        <div className="md:ml-auto mt-6 md:mt-0 lg:mt-0 lg:ml-auto">
                            <span className="text-white font-bold">Socials</span>
                            <div className="mt-4 text-white">Facebook</div>
                            <div className="mt-4 text-white">Twitter</div>
                            <div className="mt-4 text-white">Instagram</div>
                            <div className="mt-4 text-white">Whatsapp</div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center items-center">
                    <span className="text-white font-bold">Copyright ©2024 Fashion Hub </span>
                </div>
            </footer>
        </>
    );
}
