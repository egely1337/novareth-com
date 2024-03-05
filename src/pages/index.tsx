import React from "react";

import Navbar from "@/components/navbar";
import UserComment from "@/components/user_comment";


import customerComments from "@/customer_comments.json";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return(
    <>
      <Navbar/>
      <main id="main" className="min-h-[calc(100vh-136px)] p-4 lg:p-24 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full flex-col lg:flex items-center">
              <img 
                src="corporate.png" 
                className="rounded-full"
              />
          </div>
          <div className="lg:w-1/2 text-white w-full flex flex-col font-inter p-10">
            <span className="font-bold lg:text-8xl text-6xl mb-4">{`Sitelerini kolayca yönet!`}</span>
            <span className="text-3xl mb-4">{`Başarıya Novareth ile atla!`}</span>
            <Link href={"/#who we are"} className="group duration-300 self-start p-4 flex items-center rounded-full border-[1px] border-white cursor-pointer">
              <span className="text-white group-hover:translate-x-2 duration-300">{`Okumaya devam et 📖`}</span>
            </Link>
          </div>
      </main>

      <main id="who we are" className="min-h-[calc(100vh)] p-4 lg:p-24 flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col lg:w-1/2 w-full">
          <span className="font-bold font-inter text-8xl text-white">{`Neden biz?`}</span>
          <div className="mt-4 text-white font-inter text-base flex flex-col gap-5">
            <p>{`Novareth, online dünyada kendinizi ifade etmenin ve işlerinizi yönetmenin yeni ve çağdaş bir yolu. Bu platform, kullanıcılarına son derece kullanıcı dostu arayüzü sayesinde hızlı ve kolay bir şekilde kendi online sitelerini oluşturma imkanı sunar. Novareth'in etkileyici özellikleri, herhangi bir teknik bilgiye ihtiyaç duymadan, sadece birkaç adımda özgün ve profesyonel bir web sitesi oluşturmanıza olanak tanır.`}</p>
            <p>{`Novareth'in sunduğu şablonlar, çeşitli sektörlere hitap eden modern ve estetik tasarımları içerir. Kullanıcılar, kendi ihtiyaçlarına uygun olarak özelleştirilebilen bu şablonları seçerek, siteyi tamamen kendi tarzlarına göre düzenleyebilirler. Ayrıca, Novareth'in entegre ettiği güçlü araçlar sayesinde, e-ticaretten blog yönetimine kadar birçok farklı işlevi kolayca halledebilirsiniz. Novareth, online varlığınızı oluşturmanın ve geliştirmenin mükemmel bir yolunu sunarak, kullanıcılarına dijital dünyada başarılı olmaları için gereken araçları sağlamaktadır.`}</p>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 items-center justify-center lg:mt-0 mt-[24px]">
          <img src="https://www.shutterstock.com/image-vector/feedback-customers-review-positive-man-600nw-2276027817.jpg" className="lg:w-[512px] lg:h-[512px] w-[256px] h-[256px] rounded-full" alt="yarrak" />
        </div>
      </main>

      <div className="mt-8 flex flex-col w-full items-center p-2">
        <span className="font-inter text-5xl font-bold text-white">{`Müşteri Yorumları`}</span>
        <div className="mt-8 pb-10 lg:grid grid grid-cols-2 lg:grid-cols-5 gap-2">
          {
            customerComments.map((val, index) => {
              return(
                <UserComment
                  key={index}
                  author={val.author}
                  desc={val.description}
                  startCount={val.starCount}
                />
              )
            })
          }
        </div>
      </div>

      <Footer/>
    </>
  )
}
