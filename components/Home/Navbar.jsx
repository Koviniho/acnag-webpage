"use client";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [translate, setTranslate] = useState(0);

  const handleLinkClick = (translateValue) => {
    setTranslate(translateValue);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='md:flex hidden text-white rounded-[16px] font-semibold text-lg items-center left-[50%] p-3 w-[70vw] h-[4rem] absolute z-50 custom-NavBar translate-x-[-50%] top-3 justify-around'>
        <div className='hover:scale-110 transition-transform ease-linear'>
          <img src='company_logo.svg' alt='LOGO' className='w-8 h-full object-cover' />
        </div>
        <div
          className='absolute w-[130px] h-10 top-[15%] translate-y-[-50%] left-[11%] custom-gradient z-0 transition-transform ease-linear duration-200'
          style={{ transform: `translateX(${translate * 100}%)` }}
        ></div>
        <div className='z-20' onClick={() => handleLinkClick(0)}><Link href='/home/'>HOME</Link></div>
        <div className='z-20' onClick={() => handleLinkClick(0.8)}><Link href='/sales/'>SALES</Link></div>
        <div className='z-20' onClick={() => handleLinkClick(1.95)}><Link href='/corrosion/'>CORROSION</Link></div>
        <div className='z-20' onClick={() => handleLinkClick(3.09)}><Link href='/about/'>ABOUT</Link></div>
        <div className='z-20' onClick={() => handleLinkClick(4.1)}><Link href='/contact/'>CONTACT</Link></div>
        <div className='z-20' onClick={() => handleLinkClick(5.28)}><Link href='/FAQ/'>IMPRESSUM</Link></div>
      </div>

      {/* Mobile Navbar */}
      <div className='px-3'>
        <div className='md:hidden flex items-center justify-start custom-NavBar absolute w-[90%] h-16 top-5 z-50 p-4'>
          <button onClick={onOpen} className="">
            <FontAwesomeIcon icon={faBars} className='w-9 h-9 text-white' />
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      <Modal
        size='full'
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className='custom-NavBar text-white' style={{ backgroundImage: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iPeraoMnxTC8/v1/-1x-1.jpg' }}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-4 items-center justify-center">
                <img src="/company_logo_2.svg" alt="Logo" className='w-72 h-72 absolute nav_img' />
              </ModalHeader>
              <ModalBody className="flex flex-col items-center gap-4 text-3xl mt-10">
                <Link href='/home/'  onClick={onClose}>
                  <p className='font-bold'>HOME</p>
                </Link>
                <div className='w-full h-[0.3px] bg-white' ></div>
                <Link href='/sales/' onClick={onClose}>
                  <p className='font-bold'>SALES</p>
                </Link>
                <div className='w-full h-[0.3px] bg-white'></div>
                <Link href='/corrosion/' onClick={onClose}>
                  <p className='font-bold'>CORROSION</p>
                </Link>
                <div className='w-full h-[0.3px] bg-white'></div>

                <Link href='/about/' onClick={onClose}>
                  <p className='font-bold'>ABOUT</p>
                </Link>
                <div className='w-full h-[0.3px] bg-white'></div>

                <Link href='/contact/ ' onClick={onClose}>
                  <p className='font-bold'>CONTACT</p>
                </Link>
                <div className='w-full h-[0.3px] bg-white'></div>
                <Link href='/FAQ/ ' onClick={onClose}>
                  <p className='font-bold'>IMPRESSUM</p>
                </Link>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}

export default Navbar;
