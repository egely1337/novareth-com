import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaReddit, FaRedditAlien, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Footer(props: {

}) {
    return(
        <div className="w-full flex items-center justify-center bg-purple-800">
            <div className="lg:w-1/2 w-full relative p-8 min-h-[300px] flex flex-col items-center lg:items-start lg:flex-row gap-10">
                <h1 className="font-inter text-6xl font-bold text-white select-none">Novareth</h1>
                <div className="flex font-inter text-white flex-col">
                    <span className="font-bold text-xl mb-2">Politikalarımız</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Gizlilik Politikası</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Kullanıcı Sözleşmesi</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Gizlilik Politikası</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Sıkça Sorulan Sorular</span>
                </div>
                <div className="flex text-white font-inter flex-col">
                    <span className="font-bold text-xl mb-2">Ürünler</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Novareth Web Designer</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Domain Al/Sat</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Novareth Komünitesi</span>
                </div>
                <div className="flex text-white font-inter flex-col">
                    <span className="font-bold text-xl mb-2">İhtiyacın Olabilir</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Forum</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70">Yardım</span>
                    <span className="text-sm cursor-pointer duration-300 ease-in-out hover:opacity-70"></span>
                </div>
                <div className="absolute right-1 bottom-1 flex flex-row justify-end p-4 gap-3">
                    <FaFacebook size={24} className="text-white duration-300 ease-in-out hover:opacity-70 hover:-translate-y-1 cursor-pointer"/>
                    <FaDiscord size={24} className="text-white duration-300 ease-in-out hover:opacity-70 hover:-translate-y-1 cursor-pointer"/>
                    <FaX size={24} className="text-white duration-300 ease-in-out hover:opacity-70 hover:-translate-y-1 cursor-pointer"/>
                    <FaInstagram size={24} className="text-white duration-300 ease-in-out hover:opacity-70 hover:-translate-y-1 cursor-pointer"/>
                </div>  
            </div>
        </div>
    )
}