import React from "react";
import QuoteCard from "./quote-card";
import whyteImg from "@/public/David_Whyte.jpg";
import ourLogoImg from "@/public/luiardpress-logo.png";
import Image from "next/image";

const Overlay = () => {
  return (
    <div>
      <div className="fixed  left-[0vh] top-[2vh]  z-[1000] m-auto h-[98vh] w-[100vw] cursor-pointer rounded-2xl bg-zinc-200/10 backdrop-blur-sm" />
      <div className="fixed left-[10vw] top-[10vh] z-[1002] m-auto h-[360px] w-[480px]  rounded-2xl bg-white/90 p-10  ">
        <div className="z-[1001] -mt-4 ml-2 flex -rotate-6 flex-col items-center gap-6 text-center">
          <h6 className="border-1 small-caps text-4xl text-zinc-800 ">
            Luiard Press.
          </h6>
          <div className="flex flex-col items-center ">
            <p className="mb-7 text-lg font-semibold text-zinc-800/40">
              <span className="small-caps align-sup text-4xl text-teal-600/70">
                We
              </span>{" "}
              will be launching in January 2024
            </p>

            <Image
              src={ourLogoImg}
              alt="Luiard Press graphic"
              height={240}
              width={240}
              className="mt-2 rounded-full shadow-lg outline-4 ring-4 ring-gray-300/40 ring-offset-2"
            />
          </div>
        </div>
        <div className="fixed bottom-10 right-10 z-[999] rotate-3">
          <QuoteCard
            imgSrc={whyteImg}
            attribution="David Whyte"
            smHandle="From &ldquo;Consolations&rdquo;"
          >
            Maturity is the ability to live fully and equally in multiple
            contexts.
          </QuoteCard>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
