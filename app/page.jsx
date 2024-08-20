import { cn } from "@/lib/utils";
import Image from "next/image";
import { luckiest_guy } from "./fonts";

export default function Home() {
  return (
    <div className=" flex items-center justify-center ">
      {/* Section 1 */}
      <div className="bg-gradient-to-b from-[#0a040e] to-[#3a1c52] text-[#d0dff4] w-full">
        <div className="container flex flex-col ">
          <p className="uppercase font-semibold">welcome to</p>
          <h1
            className={cn(
              "capitalize text-6xl bg-gradient-to-b from-[#fdfe28] to-[#ff8a3b] bg-clip-text text-transparent items-center flex center",
              luckiest_guy.className
            )}>
            minilemon
          </h1>
          <p>
            Berawal dari cinta dan bangga akan budaya topeng yang merupakan wajah suku bangsa Indonesia,
            <span className="text-[#ffe200]">Reno Halsamer Founder (dTopeng Kingdom Foundation)</span>
            menciptakan tokoh animasi fiksi dari perpaduan topeng dan buah lemon yang banyak manfaat bagi kesehatan.
          </p>
        </div>
      </div>
    </div>
  );
}
