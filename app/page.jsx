import { cn } from "../lib/utils";
import Image from "next/image";
import { luckiest_guy } from "./fonts";
import Button from "../components/ui/button";

export default function Home() {
  return (
    <div className=" flex items-center flex-col justify-center ">
      {/* Section 1 */}
      <div className="bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4] w-full">
        <div className="container flex flex-col ">
          <p className="uppercase font-semibold">welcome to</p>
          <h1
            className={cn(
              "capitalize text-6xl bg-gradient-to-b from-[#fdfe28] to-[#ff8a3b] bg-clip-text text-transparent items-center ",
              luckiest_guy.className
            )}>
            minilemon
          </h1>
          <p>
            Berawal dari cinta dan bangga akan budaya topeng yang merupakan wajah suku bangsa Indonesia,
            <span className="text-[#ffe200]">Reno Halsamer Founder (dTopeng Kingdom Foundation)</span>
            menciptakan tokoh animasi fiksi dari perpaduan topeng dan buah lemon yang banyak manfaat bagi kesehatan.
          </p>
          <Button className="uppercase w-fit font-bold shadow-md" variant={"default"} size={"default"}>
            See More
          </Button>
        </div>
      </div>

      {/* Story */}
      <div className="bg-[#D3DEF4] w-full">
        <div className="container flex flex-row ">
          <div className="flex flex-col gap-y-12">
            <h2
              // TODOS: change value drop shadow
              className={cn(
                luckiest_guy.className,
                "text-5xl bg-gradient-to-b from-[#fdfe28] to-[#ff8a3b] bg-clip-text text-transparent items-center drop-shadow-[12px_10px_0px_rgba(20,32,223,1)]"
              )}>
              Story
            </h2>
            <p>
              Di dalam gua ditengah kebun lemon yang indah, hidup seorang kakek (Djoyo) yang setiap hari membuat topeng berbentuk wajah manusia.
              Kecintaannya dengan Nusantara membuat gua yang ia tinggali dihiasi ribuan topeng wajah dari kesukuan yang berbeda-beda di Nusantara.
            </p>
            <p>
              Suatu malam, Kakek yang baik hati ini bermimpi. di dalam mimpinya ia melihat 6 topengnya hidup dan menjelma menjadi karakter anak-anak
              dengan tubuh buah lemon yang ia sebut MINILEMON.
            </p>
            <Button className="uppercase w-fit font-bold shadow-md" variant={"default"} size={"default"}>
              See More
            </Button>
          </div>
          <div className="flex flex-col">
            <h2>Characters</h2>
            <Image src="/assets/characters.png" width={500} height={500} alt="Characters" />
            <Button className="uppercase w-fit font-bold shadow-md" variant={"default"} size={"default"}>
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
