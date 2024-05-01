// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";
import ReviewCard from "../home-page-components/reviewCard";
import Carousel from "../home-page-components/carousel";
import PartnerBrandCard from "../home-page-components/partnerBrandCard";
import { partnerBrands } from "../../constants/partnerBrands";
import "./about.css";

const AboutPage = () => {
  return (
    <>
      <div className="bg-[url(https://yaqeenuz.files.wordpress.com/2024/04/9.jpg)] bg-fixed bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 ">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="flex gap-10 justify-between items-end max-md:items-center px-10 mx-auto max-md:px-5 max-md:flex-col"
        >
          <div className="text-white flex flex-col gap-8 max-md:items-center max-md:text-center">
            <h1 className="text-5xl font-bold">Biz o&apos;zi kimmiz?</h1>
            <p className="text-xl max-w-md">
              Bizning maqsadimiz har bir insonni o&apos;z orzusi yo&apos;lida yanada yaqinroq qilishdur.
            </p>
          </div>
          <div className="flex gap-12 max-sm:text-center text-white">
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl title-font font-bold">500+</h2>
              <p className="text-lg">Premium uylar</p>
            </div>
            <div className="flex max-md:items-center flex-col gap-4">
              <h2 className="text-4xl  title-font font-bold">1500+</h2>
              <p className="text-lg">Condominium uylar</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* what we offer section start */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0.2 }}
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 "
        >
          <div className="flex w-full gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
            <div className="flex flex-col items-start justify-between max-md:items-center">
              <h1 className="text-5xl font-bold title-font w-max">
                Biz sizga nima vada qilamiz?
              </h1>
              <Link onClick={scrollToTop} to={"/services"}>
                <Button
                  content={"Xizmatlarimiz"}
                  fontSize={"text-xl"}
                  padding={"px-5  py-2"}
                  furtherClasses={"mt-8"}
                />
              </Link>
            </div>
            <div className="w-full">
              <img
                src="https://yaqeenuz.files.wordpress.com/2024/03/homyz-logo.jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="what-we-do-cards mt-14 gap-8 max-md:grid-cols-1 max-md:grid-rows-3 grid grid-cols-3 grid-rows-1">
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Bir zumda bepul konsultatsiya
              </h2>
              <p className="text-xl mt-2">
                Uy-joy, IT xizmatlari va Ijtimoiy tarmoqga shaxsiy elonlar joylash kabi xizmatlarimiz bilan yaqindan tanishing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
                Huquqshunoslik
              </h2>
              <p className="text-xl mt-2">
                Huquq sohasi boyicha oz malakangizni oshiring va haq-huquqingizni himoya qilish yolida bizning xizmatlarimizdan foydalaning.
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-red-500 font-semibold">
              Takliflar dahlsizligi
              </h2>
              <p className="text-xl mt-2">
                Bizning taklif va xizmat turlarimizdan foydalansangiz har biz qilgan ishimizga alo darajada javobgarlikni qabul qilamiz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="bg-black">
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto flex max-md:flex-col justify-center items-center max-md:text-center gap-20 max-md:gap-12 p-10 py-28  max-sm:px-5 max-md:py-16  md:pb-36 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center"
          >
            <h1 className="text-5xl font-bold title-font w-max">
              Davom etamiz...
            </h1>
            <p className="text-xl mt-5">
              Bizning jamoa 2018 yilda ish boshlagan bo&apos;lib ushbu vaqtgacha 200 dan ortiq katta va kichik loyihalarni tugatish va yaratgan hisoblanadi. 
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.zoomOut}
            viewport={{ once: true, amount: 0.2 }}
            className=" w-1/2 max-md:w-full text-white/50"
          >
            <h2 className="text-2xl">Loyihalarimiz</h2>
            <div className="relative w-fit max-md:mx-auto -mt-7 max-md:-mt-5">
              <h1 className="text-[150px] max-sm:text-[120px] font-semibold relative text-red-500">
                200+
              </h1>
              <div
                className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-no-repeat "
                style={{
                  backgroundImage: "url(/200+.png)",
                  backgroundPosition: "40% 100%",
                  backgroundSize: "95%",
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* we focus section start */}
      <div>
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className=" flex max-md:flex-wrap-reverse justify-center items-end max-md:text-center gap-10 max-md:gap-12  -mt-44 max-md:mt-0 "
          >
            <div className=" w-1/2 max-md:w-full flex flex-col text-white items-start justify-between max-md:items-center">
              <img src="/we-focus.jpg" alt="" />
            </div>

            <div className=" w-1/2 text-5xl max-lg:text-4xl max-md:w-full ">
              <h1 className="font-semibold ">Bizning loyihalar</h1>
              <h1 className="font-semibold  text-red-500">
                Real Estate
              </h1>
            </div>
          </motion.div>
          <div className="we-focus-cards grid grid-cols-3 max-md:grid-cols-1 grid-rows-1 max-md:grid-rows-3 gap-6 mt-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-01</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Ijtimoiy
              </h2>
              <p className="mt-2">
                Ijtimoiy loyihalarni ichiga har qanday xizmatlarimiz kiradi.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-02</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Texnologik
              </h2>
              <p className="mt-2">
                Web2 va web3 da qolanilyotgan har qanday loyiha yoki yangi proyektlarni loyihalashtirish.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={animationVariants.zoomIn}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 text-xl border-black/20 pt-4"
            >
              <h2 className="title-font font-semibold">-03</h2>
              <h2 className="title-font mt-7  font-medium text-red-500">
                Konstruktiv
              </h2>
              <p className="mt-2">
                Qurilish yonalishda erishligan katta natijalar.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* we focus section start */}
      <div
        className="bg-[50%] max-lg:bg-[55%] max-md:bg-[90%] bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/faq-bannar.jpg')" }}
      >
        <div
          style={{ maxWidth: 1200 }}
          className="mx-auto  p-10 py-28  max-sm:px-5 max-md:py-16 flex justify-end  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="w-1/2 max-lg:w-2/3 max-md:w-full"
          >
            <h1 className="text-5xl ">
              Bizning platformadagi
              <span className="text-red-500"> Servislar</span>
            </h1>
            <div className="flex flex-col gap-5 mt-7">
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Servis 1</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Servis 2</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Servis 3</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
              <div className="flex justify-between items-center border-b-2 border-black/30 pb-5 text-2xl">
                <h2>Servis 4</h2>
                <Link
                  to={"/services"}
                  onClick={scrollToTop}
                  className="text-red-500"
                >
                  <FaArrowRight className="rotate-45" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* appreciation section start */}
      <div className="bg-white">
        <div
          style={{ maxWidth: 1200 }}
          className="p-10 max-md:px-5 py-28 mx-auto grid grid-cols-2 grid-rows-1 gap-20 max-lg:grid-cols-1 max-lg:grid-rows-2 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-full max-lg:w-full flex flex-col  items-start max-lg:items-center max-lg:text-center gap-7"
          >
            <motion.h1
              variants={animationVariants.fadeLeft}
              className="text-5xl max-md:text-4xl font-semibold"
            >
              Biz dunyoga o&apos;z kuchimizni namoyon qilish uchun sifatli va ishonchli loyihalarni barpo etamiz.
            </motion.h1>
            <motion.p
              variants={animationVariants.fadeLeft}
              className="text-2xl"
            >
              Biz loyihalarni qo&apos;llab-quvvatlash uchun global miqyosda o&apos;z yangilik va texnologiylar ustida izlanishlar ham olib boramiz.
            </motion.p>
            <motion.div
              variants={animationVariants.fadeLeft}
              className="grid grid-cols-2 grid-rows-2 gap-10"
            >
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  6
                </h2>
                <p className="text-xl">
                  Yillik tajriba va sifat uyg&apos;unligadagi loyihalar va kuchli jamoa
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  6
                </h2>
                <p className="text-xl">
                  Yillik tajriba va sifat uyg&apos;unligadagi loyihalar va kuchli jamoa
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  6
                </h2>
                <p className="text-xl">
                  Yillik tajriba va sifat uyg&apos;unligadagi loyihalar va kuchli jamoa
                </p>
              </div>
              <div className="flex flex-col max-lg:justify-center max-lg:items-center">
                <h2 className="title-font text-red-500 text-5xl max-md:text-4xl font-semibold">
                  6
                </h2>
                <p className="text-xl">
                  Yillik tajriba va sifat uyg&apos;unligadagi loyihalar va kuchli jamoa
                </p>
              </div>
            </motion.div>
            <motion.div variants={animationVariants.fadeLeft}>
              <Link onClick={scrollToTop} to={"/contact"}>
                <Button
                  content={"Ulanish"}
                  padding={"px-6 py-3"}
                  fontSize={"text-xl"}
                />
              </Link>
            </motion.div>
          </motion.div>
          <div className="w-full max-lg:w-full h-full max-sm:max-h-[500px] ">
            <div className=" h-full w-full relative overflow-hidden rounded-lg">
              <img
                src="https://yaqeenuz.files.wordpress.com/2024/04/1.jpg"
                className="absolute w-full h-full object-cover object-center "
                alt=""
              />
              <div className="absolute w-full h-full bg-black/50 "></div>
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={animationVariants.toLeft}
                viewport={{ once: true, amount: 0.2 }}
                className="absolute w-full h-full bg-white origin-left z-20 "
              >
                <div className=""></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* appreciation section end */}
      {/* review section start */}
      <div className="bg-gray-100">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-16 p-10 max-md:px-5 py-28 "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="w-2/4 max-md:w-full max-md:px-3 items-center flex flex-col gap-5"
          >
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F87555%2F22f599b9-d827-4294-b576-b09db4dc3f4a.png"}
                title={"Ariel Camus"}
                from={"Microverse.INC CEO"}
              />
            </motion.div>
            <motion.div
              className="w-full mr-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"https://yaqeenuz.files.wordpress.com/2024/04/uslb.png"}
                title={"Baxromjon Usmonov"}
                from={"USLB.uz Asoschisi"}
              />
            </motion.div>
            <motion.div
              className="w-full ml-6"
              variants={animationVariants.zoomIn}
            >
              <ReviewCard
                imgSrc={"https://yaqeenuz.files.wordpress.com/2024/04/apex.png"}
                title={"Oybek Kyumov"}
                from={"Software Engineer Apex Bank"}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeRight}
            viewport={{ once: true, amount: 0.2 }}
            className="w-2/4 max-md:w-full max-md:text-center flex flex-col gap-8"
          >
            <h1 className="text-5xl max-md:text-4xl font-semibold">
              Nima uchun Yaqeenni tanlash kerak
            </h1>
            <div>
              <Carousel />
            </div>
          </motion.div>
        </div>
      </div>
      {/* review section end */}
      {/* partner brand section start */}
      <div className="bg-gray-100 border-t-2 border-black/30  border-dashed">
        <div
          style={{ maxWidth: 1200 }}
          className=" mx-auto flex max-md:flex-col justify-center items-center gap-10 p-10 max-md:px-5  "
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={animationVariants.fadeIn}
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 flex-wrap justify-center items-center"
          >
            {partnerBrands.map((e, i) => {
              return (
                <PartnerBrandCard
                  title={e.title}
                  src={`${e.src}.png`}
                  alt={e.src}
                  key={i}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* partner brand section end */}
    </>
  );
};

export default AboutPage;
