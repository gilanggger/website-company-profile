import React from "react";

const Test = () => {
  return (
    <>
      {/* Story */}
      <div className="bg-[#D3DEF4] w-full relative">
        <Assets.WaveMd className="absolute hidden md:block xl:hidden -top-24 w-full -z-0" />
        <Assets.WaveLg className="absolute hidden lg:block -top-32 w-full -z-0" />
        <Assets.WaveSm className="absolute block -top-24 md:hidden w-full -z-0" />
        {/* <div className="absolute -top-20 bg-repeat-x w-full flex">
          {Array(20)
            .fill("")
            .map((_, index) => (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="100pt"
                height="100pt"
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0,1000) scale(0.100000,-0.100000)" fill="#D3DEF4" stroke="none">
                  <path
                    d="M531 4649 c-162 -73 -327 -335 -485 -771 l-46 -128 0 -1875 0 -1875
                  5000 0 5000 0 -1 1868 0 1867 -21 -55 c-165 -433 -260 -614 -394 -747 -273
                  -274 -540 -22 -818 772 -162 462 -290 719 -428 858 -140 142 -285 142 -427 0
                  -140 -141 -260 -385 -432 -873 -138 -390 -257 -618 -395 -758 -272 -273 -541
                  -20 -818 773 -162 462 -290 719 -428 858 -140 142 -285 142 -427 0 -140 -141
                  -260 -385 -432 -873 -138 -390 -257 -618 -395 -758 -272 -273 -541 -20 -818
                  773 -162 462 -290 719 -428 858 -140 142 -285 142 -427 0 -140 -141 -260 -385
                  -432 -873 -138 -390 -257 -618 -395 -758 -272 -273 -541 -20 -818 773 -162
                  462 -290 719 -428 858 -100 101 -208 131 -307 86z"
                  />
                </g>
              </svg>
            ))}
        </div> */}
        <div className=" mt-20 container flex lg:flex-row flex-col gap-20 z-10">
          <div className="flex flex-col gap-y-12 basis-1/2 z-10">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center",
                "drop-shadow-[0px_5px_0px_rgba(114,4,165,1)]"
              )}>
              Story
            </h2>
            <p className="leading-relaxed z-10">
              Di dalam gua ditengah kebun lemon yang indah, hidup seorang kakek (Djoyo) yang setiap hari membuat topeng berbentuk wajah manusia.
              Kecintaannya dengan Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng wajah dari kesukuan yang berbeda-beda di Nusantara.
            </p>
            <p className="leading-relaxed z-10">
              Suatu malam, Kakek yang baik hati ini bermimpi. di dalam mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi karakter anak-anak
              dengan tubuh buah lemon yang ia sebut MINILEMON.
            </p>
            <Button className="uppercase w-fit font-bold shadow-md" variant={"default"} size={"default"}>
              See More
            </Button>
          </div>
          <div className="flex flex-col basis-1/2">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-5xl text-center bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center",
                "drop-shadow-[0px_5px_0px_rgba(114,4,165,1)]"
              )}>
              Characters
            </h2>
            <div className="h-[500px] lg:w-[500px] w-[100px] relative">
              <Image src={Minggus} fill sizes="100vw" style={{ objectFit: "none" }} alt="Characters" className="z-10" />
            </div>
            <Button className="uppercase w-fit font-bold shadow-md self-center" variant={"default"} size={"default"}>
              See More
            </Button>
          </div>
        </div>
      </div>

      {/* Product */}
      <div className="flex flex-col w-full bg-[#1b1b1b]">
        <div className="flex flex-col items-center justify-center my-20 gap-10">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center "
            )}>
            Our Product
          </h2>
          <div className="flex flex-row gap-4">
            <div className="h-[500px] lg:w-[350px] w-[50px] bg-black"></div>
            <div className="h-[500px] lg:w-[350px] w-[50px] bg-black"></div>
            <div className="h-[500px] lg:w-[350px] w-[50px] bg-black"></div>
          </div>
          <Button className="uppercase w-fit font-bold shadow-md self-center" variant={"default"} size={"default"}>
            See More
          </Button>
        </div>
      </div>

      {/* Company */}
      <div className="w-full flex flex-col bg-[#f4e4d4] ">
        <div className="flex flex-col gap-6 container my-20">
          <h2
            className={cn(
              luckiest_guy.className,
              "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center ",
              "drop-shadow-[0px_5px_0px_rgba(143,27,2,1)]"
            )}>
            Company
          </h2>
          <p className="tracking-wide leading-relaxed">
            PT. Minilemon Nusantara adalah perusahaan yang berdomisili di Surabaya dan Jakarta, Indonesia. Yang berorientasi pada Pendidikan Karakter
            Anak dan nilai-nilai kebaikan melalui berbagai Program Pendidikan berbasis seni, hiburan dan teknologi.
          </p>
          <Button className="uppercase w-fit font-bold shadow-md " variant={"default"} size={"default"}>
            See More
          </Button>
        </div>
      </div>

      {/* Contact Us */}
      <div className="w-full bg-[#1b1b1b] flex flex-row">
        <div className="flex lg:flex-row flex-col gap-12 container my-20">
          <div className="flex justify-center items-center flex-col basis-1/2">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-5xl bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center ",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Contact Us
            </h2>
            <p className="text-2xl text-[#d2def4]">How can we help you?</p>
          </div>
          <div className="flex flex-col basis-1/2 gap-2">
            <input type="text" placeholder="Name" className="bg-transparent border rounded p-2" />
            <input type="email" placeholder="Email" className="bg-transparent border rounded p-2" />
            <input type="text" placeholder="Subject" className="bg-transparent border rounded p-2" />
            <input type="text" placeholder="Message" className="bg-transparent border rounded p-2 pb-24" />
            <Button className="uppercase w-fit font-bold shadow-md " variant={"default"} size={"default"}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
