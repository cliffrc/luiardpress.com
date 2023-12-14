import Image from "next/image";
import profileImg from "@/public/luiardpress-logo.png";

const Intro = () => {
  return (
    <section
      className="mx-auto mt-28 max-w-[50rem]  scroll-mt-28 items-center text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src={profileImg}
              alt="Luiard Press logo"
              priority
              style={{
                width: "192px",
                height: "192px",
              }}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </div>
          <span className="absolute -bottom-4 -right-2 -rotate-12 text-4xl">
            🥇
          </span>
        </div>
      </div>
      <h1 className="small-caps mb-10 mt-7 max-w-lg px-4 text-center text-4xl !leading-[1.5] sm:text-2xl">
        In the garden of Luiard Press, we celebrate the slow, steady maturation
        of thoughts into stories that resonate and endure.{" "}
      </h1>
      <p className="small-caps mb-10  max-w-md px-4 text-center text-base font-normal italic !leading-[1.5] text-zinc-600 sm:text-base">
        Ideas grow at their own rhythm, unbound by the haste of the world. We
        celebrate the slow, steady maturation of thoughts into stories that
        resonate and endure. Our comprehensive services, from KDP Book
        Publishing to content repurposing, cater to authors and thinkers who
        tread the path of creative resilience. Let our editing team polish your
        manuscript, our author guidance illuminate your writing journey, and our
        workshops be your crucible of creativity. Beyond the page, our social
        media marketing and content marketing strategies ensure your voice is
        heard across the vast digital landscape. Here, every idea is given the
        time and space to flourish, transforming into narratives that echo
        through time.
      </p>
    </section>
  );
};

export default Intro;
