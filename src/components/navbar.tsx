import React from "react";

export default function Navbar(props: {

}) {    

    return(
        <nav className="p-12 text-white w-full flex flex-row justify-between items-center font-inter">
            <div className="flex flex-row items-center gap-6">
                <span className="font-bold text-4xl mr-32">{`Novareth`}</span>
                <div className="lg:flex hidden flex-row items-center gap-6">
                    <span className="text-opacity-80 cursor-pointer">{`Anasayfa`}</span>
                    <span className="text-opacity-80 cursor-pointer">{`Hakkımızda`}</span>
                    <span className="text-opacity-80 cursor-pointer">{`Ürünler`}</span>
                </div>
            </div>

            <div className="lg:flex hidden flex-row items-center gap-6">
                <span className="font-bold">{`Giriş/Kayıt ol`}</span>
            </div>
        </nav>
    )
}