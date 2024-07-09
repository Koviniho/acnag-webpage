"use client";
// evry thing is update nowpnpm install --no-frozen-lockfile
import React from "react";

import { NextUIProvider } from "@nextui-org/react";
import { StickyScroll } from "./Home/sticky-scroll-reveal";

import { HeroParallax } from "./Home/hero-parallex";

import ImagePreenter from "@/components/Home/ImagePreenter"
import MainButton from "@/components/accets/MainButton"
import Partners from "./accets/Partners";

const Landing = () => {

  const content = [
    {
      title: "Schaden melden",
      description:
        "Melden Sie Schäden schnell und einfach online. Unser System ermöglicht es Ihnen, den Schaden detailliert zu beschreiben und Bilder hochzuladen, sodass wir sofort mit der Bearbeitung beginnen können. Verfolgen Sie den Fortschritt Ihrer Meldung in Echtzeit und bleiben Sie stets informiert.",
    },
    {

      title: "Termin vereinbaren",
      description:
        "Planen Sie Ihren Werkstattbesuch unkompliziert online. Wählen Sie einen passenden Termin aus und erhalten Sie eine Bestätigung in Echtzeit. Unsere Plattform sorgt dafür, dass Sie stets den Überblick behalten und Ihren Termin jederzeit verwalten können.",
    },
    {

      title: "Reparaturstatus abfragen",
      description:
        "Erfahren Sie jederzeit den aktuellen Status Ihrer Reparatur. Unser System hält Sie über jeden Schritt des Reparaturprozesses auf dem Laufenden, sodass Sie immer wissen, wann Ihr Fahrzeug fertig ist. Kein Stress mehr, immer bestens informiert!",
    },
    {
      title: "Auto abholen",
      description:
        "Holen Sie Ihr repariertes Auto schnell und problemlos ab. Unser Echtzeit-Update-System benachrichtigt Sie sofort, wenn Ihr Fahrzeug abholbereit ist. Sparen Sie Zeit und genießen Sie die nahtlose Abwicklung ohne unnötige Wartezeiten.",
    },
  ];
  const images = [
    "/Home/traning.jpg",
    "/Home/1 (2).jpeg"
,    "/Home/dark.jpg",
    "/Home/1 (2).jpeg",
    "/Home/endurance.jpg",
    "/Home/1 (3).jpeg",
    "/Home/formula_1.jpg",
    "/Home/1 (4).jpeg",
    "/Home/dark_2.jpg",
    "/Home/traning.jpg",
  ];
  const products = [
    {
      title: "Digital Dynamo",
      link: "https://digitaldynamo.com",
      thumbnail: images[0],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."
    },
    {
      title: "Marketing Maven",
      link: "https://marketingmaven.io",
      thumbnail: images[1],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."


    },
    {
      title: "Brand Brilliance",
      link: "https://brandbrilliance.co",
      thumbnail: images[2],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Creative Catalyst",
      link: "https://creativecatalyst.biz",
      thumbnail: images[3],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum error reiciendis aliquid ut non eaque voluptates? Suscipit, reiciendis? Id consequuntur, reprehenderit doloribus facere ipsa possimus ut quod obcaecati itaque optio."

    },
    {
      title: "Strategy Summit",
      link: "https://strategysummit.com",
      thumbnail: images[4],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Content Crafters",
      link: "https://contentcrafters.io",
      thumbnail: images[5],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum error reiciendis aliquid ut non eaque voluptates? Suscipit, reiciendis? Id consequuntur, reprehenderit doloribus facere ipsa possimus ut quod obcaecati itaque optio."

    },
    {
      title: "Social Sphere",
      link: "https://socialsphere.net",
      thumbnail: images[6],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "SEO Synergy",
      link: "https://seosynergy.org",
      thumbnail: images[7],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Analytics Ace",
      link: "https://analyticsace.com",
      thumbnail: images[8],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."


    },
    {
      title: "Conversion Connoisseur",
      link: "https://conversionconnoisseur.io",
      thumbnail: images[9],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
    {
      title: "Email Excellence",
      link: "https://emailexcellence.biz",
      thumbnail: images[10],
      description:
        "Lorem ipsum dolor sit amet,, reiciendis? Id consequuntur, reprehenderit doloribus fac."

    },
  ];





  return (
    <NextUIProvider>
      <section className="w-full overflow-x-hidden bg-black">
        <div className="w-screen h-screen relative overflow-hidden">
          <video
            src="/videos/intro.mp4"
            className="w-full h-full object-cover z-0 overflow-hidden"
            autoPlay
            muted
            loop

          />
          <div className="flex flex-col items-center text-center md:w-[40%] w-[80%] gap-4 text-white h-[20rem] absolute z-10 bottom-10 left-[50%] translate-x-[-50%] justify-center " data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <p className="text-lg font-bold" data-aos="fade-up" data-aos-delay="50">Sports Cars</p>
            <p className="text-4xl font-extrabold" data-aos="fade-up" data-aos-delay="100">STARTEN SIE DEN MOTOR</p>
            <div className="flex text-xs font-semibold items-center" data-aos="fade-up" data-aos-delay="150"><p>ENTDECKEN SIE DIE FERRARI BAUREIHE</p>
              <MainButton />
            </div>
          </div>
        </div>
        <StickyScroll content={content} />
        <HeroParallax products={products} />
        <ImagePreenter />
        <Partners />
      </section>
    </NextUIProvider>
  );
};

export default Landing;
