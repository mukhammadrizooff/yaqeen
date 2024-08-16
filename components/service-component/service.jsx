import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import "./service.css";
import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FreeTrial from "../free-trial-component/freeTrial";
import { motion } from "framer-motion";
import { animationVariants } from "../../constants/animationVariants";
import { scrollToTop } from "../../constants/scrollToTop";

const ServicePage = ({ id, title, heading, breif, descr, imageSrc }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
        className="relative bg-no-repeat bg-center bg-cover pt-44 pb-36 max-md:pt-36 max-md:pb-24 flex justify-center items-center text-white "
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50"></div>
        <motion.h1
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomOut}
          viewport={{ once: true, amount: 0.2 }}
          className="text-6xl max-md:text-5xl max-sm:text-4xl font-semibold z-10"
        >
          {title}
        </motion.h1>
      </div>
      <div
        style={{ maxWidth: 1200 }}
        className=" mx-auto flex
         p-10 max-sm:px-5 relative items-start gap-16 max-lg:flex-col"
      >
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.fadeUp}
          viewport={{ once: true, amount: 0 }}
          className="w-2/3 max-lg:w-full flex flex-col gap-5"
        >
          <h1 className="text-[46px] leading-none max-md:text-4xl font-semibold">
          {heading}
          </h1>
          <div className="text-xl flex flex-col gap-3">
            {descr?.map(desc => <p>{ desc }</p>)}
          </div>
          <div className="mt-10">
            <Accordion
              className="text-xl flex flex-col gap-5 "
              allowToggle={true}
            >
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    SAASworld qanday qilib pul ishlaydi?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Ko`pchilikda ma`rifat bir davlat degan tushuncha bor.
                Ko`pchilik, shuningdek, unga erishilganda, inson borligiga ishonishadi
                abadiy o`sha holatda. Kerakli aql-idrokingiz uchun. rahmat
                o`qiganingiz uchun.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Eng reytingli dastur nima?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Ko`pchilikda ma`rifat bir davlat degan tushuncha bor.
                Ko`pchilik, shuningdek, unga erishilganda, inson borligiga ishonishadi
                abadiy o`sha holatda. Kerakli aql-idrokingiz uchun. rahmat
                o`qiganingiz uchun.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    Onlayn mijozlarni topish o`rtasidagi farq nima?
                    mahalliyga nisbatan?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Ko`pchilikda ma`rifat bir davlat degan tushuncha bor.
                Ko`pchilik, shuningdek, unga erishilganda, inson borligiga ishonishadi
                abadiy o`sha holatda. Kerakli aql-idrokingiz uchun. rahmat
                o`qiganingiz uchun.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="border-none box-shadow p-6">
                <h2>
                  <AccordionButton
                    fontSize={"2xl"}
                    _hover={{ backgroundColor: "transparent" }}
                    _expanded={{ color: "#ef4444" }}
                  >
                    <Box as="span" flex="1" textAlign="left">
                    SAASworld qanday qilib pul ishlaydi?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                Ko`pchilikda ma`rifat bir davlat degan tushuncha bor.
                Ko`pchilik, shuningdek, unga erishilganda, inson borligiga ishonishadi
                abadiy o`sha holatda. Kerakli aql-idrokingiz uchun. rahmat
                o`qiganingiz uchun.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={animationVariants.zoomIn}
          viewport={{ once: true, amount: 0.2 }}
          className="w-1/3 max-lg:w-full sticky top-36 questions-card p-8 gap-5 flex flex-col"
        >
          <h1 className="text-center text-2xl font-semibold">
            Qoshimcha savvollar bolsa?
          </h1>
          <div className="flex mt-2  gap-3 text-xl items-center">
            <div>
              <FaEnvelope className="text-red-500" />
            </div>
            <p>Office # 2nd district, Andijan, UZ</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaPhone className="rotate-90 text-red-500" />
            </div>
            <p>+998 99 007 37 33</p>
          </div>
          <div className="flex  gap-3 text-xl items-center">
            <div>
              <FaMapMarkerAlt className="text-red-500" />
            </div>
            <p>info@yaqeen.uz</p>
          </div>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="text-red-500 hover:text-black transition-all duration-300"
          >
            <div className="flex items-center gap-1">
              <p className="text-xl">Bog&apos;lanish</p>
              <FaArrowRight className="text-sm mt-[2px]" />
            </div>
          </Link>
        </motion.div>
      </div>
      <FreeTrial />
    </>
  );
};

export default ServicePage;
