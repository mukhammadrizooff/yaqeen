import "./exculusiveCard.css";
import Button from "../buttons-component/solidbutton";
import { Link } from "react-router-dom";
import { formatCompactNumber } from "../../constants/formatNumber";
import { scrollToTop } from "../../constants/scrollToTop";
import { animationVariants } from "../../constants/animationVariants";
import { motion } from "framer-motion";
const ExculusivePropertyCard = ({
  titlePart1,
  titlePart2,
  pricing,
  imgSrc,
  type,
  href,
  cardHeight,
  bgColor,
}) => {
  return (
    <div
      className={`card ${cardHeight} h-64 w-full relative overflow-hidden rounded-lg`}
    >
      <img
        src={imgSrc}
        className="absolute w-full h-full object-cover object-center hover transition-all duration-500"
        alt=""
      />
      <div className="absolute w-full h-full bg-black/50 "></div>
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={animationVariants.toLeft}
        viewport={{ once: true, amount: 0.2 }}
        className={`absolute w-full h-full ${bgColor}  bg-gray-100 origin-left z-20 `}
      >
        <div className=""></div>
      </motion.div>
      <Link
        onClick={scrollToTop}
        className="absolute w-full h-full block "
        to={`/products/${href}`}
      >
        {/* <a href="" className="absolute w-full h-full block "></a> */}
      </Link>
      <Link onClick={scrollToTop} to={`/${type}`}>
        <Button
          content={type}
          fontSize={"text-xl"}
          padding={"px-3  py-0.5"}
          furtherClasses={"tracking-widest absolute top-6 left-6 uppercase"}
        />
      </Link>
      <div className="flex flex-col gap-3  text-white absolute bottom-6 left-6 right-6 ">
        <Link
          onClick={scrollToTop}
          to={`/products/${href}`}
          className="text-xl font-medium hover:text-red-500 w-fit transition-all"
        >
          {titlePart1}
          <span className="title-font">{titlePart2}</span>
        </Link>
        <hr />
        <p className="text-lg">{formatCompactNumber(pricing)} PKR/Month</p>
      </div>
    </div>
  );
};

export default ExculusivePropertyCard;
