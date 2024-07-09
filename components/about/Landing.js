"use client"
import React, { useEffect, useState } from 'react';
import MainButton from '../accets/MainButton';
import "./about.css"
import Partners from "@/components/accets/Partners"
import { motion } from 'framer-motion';


function Landing() {

  const [color, setColor] = useState(["fill-slate-300 fill-opacity-50", "fill-slate-300 fill-opacity-50"])
  useEffect(() => {
    const changeColors = () => {
      setTimeout(() => {
        setColor(["fill-white fill-opacity-1", "fill-slate-300 fill-opacity-50"]);
        setTimeout(() => {
          setColor(["fill-white fill-opacity-1", "fill-white fill-opacity-1"]);
          setTimeout(() => {
            setColor(["fill-slate-300 fill-opacity-50", "fill-slate-300 fill-opacity-50"]);
            changeColors();
          }, 500);
        }, 300);
      }, 300);
    };
    changeColors();
  }, []);

    let a=0;





  return (
    <div className='flex flex-col w-screen text-white overflow-x-hidden'>
      <div className='w-full md:h-[113vh] overflow-hidden relative flex justify-center items-center bg-[#EAEFF2]'>
        <div className='md:block hidden'><img src="/About/car.avif" alt="loading" className='w-full h-full  object-cover ' /></div>
        <div className='md:hidden block'><img src="/About/front (2).avif" alt="loading" className='w-full h-screen  object-cover ' /></div>

        <div className="absolute top-0 h-screen inset-0 bg-gradient-to-b from-transparent to-black/50 z-1"></div>
        <div className='z-2 flex flex-col items-center text-center w-[80%] md:top-[45%] top-[45%] translate-y-[-30%] left-[50%] translate-x-[-50%] absolute md:w-[63%] gap-2'>
          <p className='md:text-[20px] text-[20px] font-medium' data-aos="fade-up" data-aos-delay="10" data-aos-once="true">Cars</p>
          <p className='text-2xl md:text-4xl font-extrabold' data-aos="fade-up" data-aos-delay="40" data-aos-once="true">THE 12CILINDRI - DRAWN TO THE FUTURE</p>
          <p className='md:font-semibold text-lg' data-aos="fade-up" data-aos-delay="70" data-aos-once="true">With the new 12Cilindri, Ferrari has invented a radical new design language. We speak to the design team to get the inside line on its place in Ferrari's proud lineage of iconic V12 front-mid-engined models, and understand its radically futuristic design ethos</p>
          <div className='flex justify-center items-center font-bold' data-aos="fade-up" data-aos-delay="100" data-aos-once="true" data-aos-offset="0">READ MORE <MainButton /></div>
          <ul className='absolute w-full h-[10rem] bottom-[-10%] md:bottom-[-50%] flex justify-center z-20' data-aos-delay="0" data-aos-once="true">
            <li className='absolute bottom-[10%]   '><svg className={`${color[0]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem] `} xmlns="http://www.w3.org/2000/svg" width="40" height="15" viewBox="0 0 40 15" fill="none"><path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" /></svg></li>
            <li className='absolute bottom-0 '><svg className={`${color[1]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem] `} xmlns="http://www.w3.org/2000/svg" width="40" height="15" viewBox="0 0 40 15" fill="none"><path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" /></svg></li>
          </ul>
        </div>
      </div>

      <div className='w-full h-screen flex justify-center items-center relative flex-col '>

        <div className="h-screen absolute top-0 inset-0 bg-gradient-to-b from-transparent to-black/50 z-1"></div>
        <div className='md:hidden block'><img src="/About/mobile.avif" alt="loading" className='w-full h-screen  object-cover ' /></div>
        <div className='md:block hidden'><img src="/About/desktop.avif" alt="loading" className='w-full h-full  object-cover ' /></div>
        <div className='z-2 flex flex-col items-center text-center w-[80%] top-[55%] md:top-[60%] translate-y-[-30%] left-[50%] translate-x-[-50%] absolute md:w-[63%] gap-2'>
          <p className='md:text-[20px] text-[20px] font-medium' data-aos="fade-up" data-aos-delay="10" data-aos-once="true">Passion</p>
          <p className='text-2xl md:text-4xl font-extrabold' data-aos="fade-up" data-aos-delay="40" data-aos-once="true">CONQUERING HERO</p>
          <p className='md:font-semibold text-lg' data-aos="fade-up" data-aos-delay="70" data-aos-once="true">Although a lesser-known face in the exalted band of spirited post-war racing drivers, Umberto Maglioli was a force to be reckoned with. We celebrate the 70th anniversary of his glorious triumph at the fearsome 1954 Carrera Panamericana</p>
          <div className='flex justify-center items-center font-bold' data-aos="fade-up" data-aos-delay="100" data-aos-once="true">READ MORE <MainButton /></div>
        </div>
        <ul className='absolute w-full h-[10rem] bottom-4 md:bottom-1 flex justify-center z-20' data-aos-delay="0" data-aos-once="true">
          <li className='absolute bottom-[10%]   '><svg className={`${color[0]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem] `} xmlns="http://www.w3.org/2000/svg" width="40" height="15" viewBox="0 0 40 15" fill="none"><path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" /></svg></li>
          <li className='absolute bottom-0 '><svg className={`${color[1]} md:w-[4rem] w-[2rem] h-[2rem] md:h-[4rem] `} xmlns="http://www.w3.org/2000/svg" width="40" height="15" viewBox="0 0 40 15" fill="none"><path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" /></svg></li>
        </ul>
      </div>

      <ImgCards/>
      <div className='relative bg-black z-50 w-auto h-auto'><div className='w-screen h-[5%] md:h-[20%] top-0 z-10 absolute bg-gradient-to-b from-black to-transparent font-light text-2xl pl-5 md:pl-20 flex items-center text-[red] gap-2 '><div className='w-[8rem] h-[0.3px] bg-[red]'></div>Team</div><RracesCard num={a}/></div>
      <CarSH />
      <Partners />
    </div>
  );
}

export default Landing;



const CarSH = () => {
  return (
    <div className='w-screen md:h-[100vh] overflow-hidden relative flex justify-center items-center bg-[#EAEFF2] '>

      <div className="absolute top-0 h-[100vh] inset-0 bg-gradient-to-b from-transparent to-black/50 z-2"></div>
      <div className='md:block hidden w-[30rem] h-[20rem] absolute bg-[#EAEFF2] top-[69%] left-[53%] z-1'></div>
      <div className='md:block hidden z-0'><img src="/About/car.avif" alt="loading" className='w-full h-full  object-cover scale-125' /></div>
      <div className='md:hidden block'><img src="/About/front (2).avif" alt="loading" className='w-full md:w-full h-[70vh]  object-cover ' /></div>
      <div className='flex flex-col w-[35%] absolute top-[15%] left-[5%] gap-2 z-2'>
        <div className='flex items-center text-[red] gap-2'>
          <div className='bg-[red] h-[0.3px] w-[25%]'></div>CAREER
        </div>
        <div className='flex flex-col gap-4 pl-6 md:w-auto w-screen'>
          <p className='text-4xl font-bold'>Our search for excellence</p>
          <div className='flex text-medium font-medium items-center'>CAREER OPPORTUNITIES <MainButton /></div>
        </div>
      </div>
    </div>
  )
}


const ImgCards = () => {
  return (
    <div className='relative'>
    <div className='flex flex-col w-[300vw] md:w-[100vw] h-[80vh] md:h-screen bg-[#181818] relative custom-about-gradient overflow-hidden md:mt-0 py-5'>
      <h1 className='font-bold text-3xl flex h-[15%] w-[40%] justify-center items-end absolute left-[-6%] top-[-5%] md:top-[-2%]'>SPIRIT OF FERRARI</h1>

      {/* for desktop */}
      <div className='justify-center items-center w-full h-full gap-4 pt-5 md:flex hidden'>
        <Card src={"/About/1 (1).avif"} heading="CARS" subHeading="LESS IS MORE" dis="The 'exposed carbon' personalisation for the Daytona SP3 grants Tailor Made customers the opportunity to fully appreciate their car's underlying and sophisticated beauty" />
        <Card src={"/About/1 (3).avif"} heading="PASSION" subHeading="THE FERRARI PUROSANGUE NEW ZEALAND GRAND TOUR: LEG ONE" dis="Koichi Yamaguchi from Japan travels from Auckland south to spectacular Lake Taupo as part of the New Zealand tour in the Ferrari Purosangue" />
        <Card src={"/About/1 (2).avif"} heading="CARS" subHeading="QUALITY ASSURED" dis="Franco Mantellassi explains how his complete trust in the pre-owned Approved Certificate led to the purchase of a 2015 California, and the beginning of a magnificent family collection" />
      </div>



      {/* for mobile */}
      <motion.div 
        className='md:hidden flex justify-center items-center h-full gap-4 md:pt-5 px-[1%] md:overflow-hidden w-full overflow-x-auto'
        drag="x"
        dragConstraints={{ left: -777, right: 0 }}
      >
        <Card src="/About/1 (1).avif" heading="CARS" subHeading="LESS IS MORE" dis="The 'exposed carbon' personalisation for the Daytona SP3 grants Tailor Made customers the opportunity to fully appreciate their car's underlying and sophisticated beauty" />
        <Card src="/About/1 (3).avif" heading="PASSION" subHeading="THE FERRARI " dis="Koichi Yamaguchi from Japan travels from Auckland south to " />
        <Card src="/About/1 (2).avif" heading="CARS" subHeading="QUALITY ASSURED" dis="Franco Mantellassi explains how his complete trust in the pre-owned Approved Certificate led to the purchase of a 2015 California, and the beginning of a magnificent family collection" />
      </motion.div>
    </div>
      {/* <div className='absolute'><SVGComponent/></div> */}
    </div>
  );
}


const Card = ({ src, heading, subHeading, dis }) => {
  return (
    <div className='flex flex-col h-[90%] md:h-[85%] w-[90%] md:w-[30%] gap-1 custom-gradient overflow-hidden'>
      <div className='w-full h-[45%] overflow-hidden'><img src={src} alt="card_1" className='object-cover w-full h-full hover:scale-110 transition-transform ease-linear' /></div>
      <div className='p-2'>
      <div className='flex flex-col gap-2'>
        <p className='text-[red] text-lg font-semibold'>{heading}</p>
        <p className='text-xl font-bold'>{subHeading}</p>
        <p className='text-sm '>{dis}</p>
        <div className='flex items-center text-basic font-semibold'>
          <svg className="transition-transform rotate-90 fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8"><path d="M9.547.732L16 8 8 4 0 8 6.453.732A1.996 1.996 0 0 1 8 0c.623 0 1.18.285 1.547.732z" /></svg>
          READ MORE
        </div>
      </div>
      </div>
    </div>
  );
}




const RracesCard = ({num}) => {


  const name = [{ name: "CHARLES LECLERC", src: "/About/race (2).avif" },
  { name: 'CARLOS SAINZ', src: "/About/race (1).avif" },
  { name: "CHARLES LECLERC", src: "/About/race (2).avif" },
  { name: 'CARLOS SAINZ', src: "/About/race (1).avif" },
  ];

  return (
    <div className='md:grid  flex flex-col grid-cols-2 w-full items-center justify-center' >
      {name.map((value,index) => (
        <div className='relative h-[50vh] md:h-[70vh] overflow-hidden w-full' data-aos="zoom-in" data-aos-delay={50*(index+1)}>
          {/* <div className='w-full h-full bg-black/10 absolute z-1'></div> */}
          <img src={value.src} alt="RACER" className='md:w-full w-screen h-full object-cover transition-transform ease-linear hover:scale-150 ' />
          <div className=' absolute z-2 left-[50%] w-full translate-x-[-50%] bottom-[10%] text-center flex flex-col items-center'>
            <p className='font-bold text-3xl'>Offical Driver</p>
            <p className='font-extrabold text-5xl '>{value.name}</p>
            <div className='flex text-lg font-medium justify-center items-center w-full'>DISCOVER MORE <MainButton /></div>
          </div>
        </div>))}
    </div>
  );
}