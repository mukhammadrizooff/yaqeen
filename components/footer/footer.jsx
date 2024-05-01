import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTelegram, } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";

const Footer = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Xabar Yuborildi",
      status: "Muvaffaqiyatli",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("https://homyz-server.vercel.app/contact", formData)
        .then(() => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Yuborilgan formada xatolik mavjud", error);
        });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Avval maydonlarni to'ldiring!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Ismingizni kiriting!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Familiyani kiriting!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Elektron pochtani kiriting!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Yaroqli elektron pochta manzilini kiriting!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Telefon raqamini kiriting!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Xabarni kiriting!", "error");
      }
    }
    return _error;
  };

  // You can add more validations based on your requirements

  return (
    <div className="bg-black">
      <footer
        style={{ maxWidth: 1200 }}
        className="mx-auto flex justify-between gap-20 max-lg:flex-col py-20 px-8 max-sm:px-5  "
      >
        <div className="flex flex-col items-start h-auto justify-between gap-16 w-2/4 max-lg:w-full pr-10 max-sm:pr-0">
          <div className="flex flex-col text-lg items-start  justify-between gap-10 ">
            <a href="/">
              <img src="https://yaqeenuz.files.wordpress.com/2024/03/homyz-logo.jpg" className="w-36" alt="Yaqeen-logo" />
            </a>
            <p style={{ color: "#696969" }}>
            Biz loyihalarni qo&apos;llab-quvvatlash uchun global miqyosda o&apos;z yangilik va texnologiylar ustida izlanishlar ham olib boramiz.
            </p>
            <div className="flex text-xl justify-start items-center gap-10 text-red-500">
              <Link target="_blank" to={"https://facebook.com"}>
                <FaFacebookF />
              </Link>
              <Link target="_blank" to={"https://instagram.com"}>
                <FaInstagram />
              </Link>
              <Link target="_blank" to={"https://twitter.com"}>
                <FaTelegram />
              </Link>
            </div>
            <ul className="text-white text-lg flex justify-start items-center flex-wrap gap-x-8 gap-y-4">
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/"
              >
                Asosiy
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/services"
              >
                Servislar
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/about"
              >
                Biz haqimizda
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/contact"
              >
                Aloqa
              </Link>
            </ul>
          </div>
          <p style={{ color: "#696969" }}>© Yaqeen. All Rights Reserved 2023.</p>
        </div>

        <div
          id="contact"
          className="w-2/4 max-lg:w-full flex flex-col h-auto justify-between items-start gap-10 "
        >
          <h1 className="text-3xl text-white">Biz bilan Aloqa</h1>
          <div className="name w-full gap-8 text-white max-sm:flex-col max-sm:gap-10 mt-3 flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Ismingiz"
              name="firstName"
              maxLength={20}
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="off"
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Familyangiz"
              name="lastName"
              maxLength={20}
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="contact w-full text-white gap-8 max-sm:flex-col max-sm:gap-10  flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Pochta Manzilingiz"
              name="email"
              maxLength={40}
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              type="number"
              placeholder="Mobil Raq"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              autoComplete="off"
              max={15}
              maxLength={15}
            />
          </div>
          <Textarea
            pl={3}
            fontSize={19}
            variant={"flushed"}
            borderColor={"#696969"}
            focusBorderColor="white"
            _placeholder={{ color: "#696969" }}
            placeholder="Xabar yozish uchun..."
            maxLength={200}
            className="w-full text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#F35C27" }}
            backgroundColor={"#F35C27"}
            color={"white"}
            borderColor={"#F35C27"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Yuborilmoqda..."}
            onClick={handleSubmit}
            className="mt-4  max-lg:w-72 max-sm:w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Yuborish
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
