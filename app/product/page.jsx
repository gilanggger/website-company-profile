import Link from "next/link";
import React from "react";
import { cn } from "../../lib/utils";
import { luckiest_guy } from "../fonts";
import { Placeholder } from "placeholder";
import { FaChevronRight, FaYoutube } from "react-icons/fa6";

const ProductPage = () => {
  return (
    <div className="flex flex-col">
      {/* Product 1 */}
      <div className="flex flex-row bg-[#1b1b1b] py-12">
        <div className="container flex flex-col md:flex-row gap-x-6 px-0 lg:px-8">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl bg-gradient-to-b md:hidden from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Petualangan
            </h2>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl bg-gradient-to-b md:hidden from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Si Minilemon
            </h2>
            <Placeholder height="500" width="350" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#c0cbdf] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl bg-gradient-to-b hidden md:block from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Petualangan
              </h2>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl bg-gradient-to-b hidden md:block from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Si Minilemon
              </h2>
            </div>
            <p>
              Petualangan Minilemon dimulai dari keceroohan Ucup dan Togar yang tanpa sengaja memicu kejar-kerjaran menegangkan dengan sekelompok
              angsa marah. Dalam kekacauan itu, Ucup terpisah dan menghilang setelah menemukan mesin portal misterius diruang rahasia Kak Bibie.
            </p>
            <p className="">
              Dengan kejadian itu, Anaak-anak Minilemon mulai bersatu dan siap bertualang mencari Ucup dengan bantuan Kak Bibie dan Paman Tigor.{" "}
              <Link className="text-blue-500 hover:underline  items-center inline-flex" href="/story">
                Read More <span className="text-xs">❯</span>
              </Link>
            </p>
            <Link href={"#"} className="flex flex-row items-center gap-x-4">
              <span className="rounded-full p-1 bg-black shadow-lg">
                <FaYoutube className="" />
              </span>
              Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex flex-row bg-[#d2e1f4] py-12">
       <div className="container flex flex-col md:flex-row gap-x-6 px-0 lg:px-8">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Minilemon
            </h2>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Save The Earth
            </h2>
            <Placeholder width="350" height="500" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#1b1b1d] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Minilemon
              </h2>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Save The Earth
              </h2>
            </div>
            <p>
              Dengan menyadari betapa pentingnya meenjaga dan melestarikan alam, Minilemon yang di pimpin Kak Biebie, memulai petualangan mereka dalam
              serial animasi "Minilemon Save The Earth". Di sini, mereka tidak hanya belajar lebih dalam tentang ekosistem yang rumit, keanekaragaman
              hayati yang menakjubkan, pentingnya konservasi alam, tetapi mereka juga belajar menanamkan nilai-nilai positif dan tanggung jawab
              terhadap alam dari setiap langkah mereka.{" "}
              <Link className="text-blue-500 hover:underline  items-center inline-flex font-bold" href="/story">
                Read More <span className="text-xs">❯</span>
              </Link>
            </p>
            <Link href={"#"} className="flex flex-row items-center gap-x-4">
              <span className="rounded-full p-1 bg-black shadow-lg">
                <FaYoutube className="text-white" />
              </span>
              Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-row bg-[#d2f4d3] py-12">
       <div className="container flex flex-col md:flex-row gap-x-6 px-0 lg:px-8">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Minilemon
            </h2>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Explorer
            </h2>
            <Placeholder width="350" height="500" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#1b1b1d] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Minilemon
              </h2>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Explorer
              </h2>
            </div>
            <p>
              Dengan menyadari betapa pentingnya menjaga dan melestarikan alam, Minilemon yang di pimpin oleh Kak Bibie memulai petualangan seru
              melalui serial animasi pramuka. Dalam petualangan ini, mereka tidak hanya belajar lebih dalam tentang ekosistem yang rumit,
              keanekaragaman hayati yang menakjubkan, dan pentingnya konservasi alam, tetapi juga menanamkan nilai-nilai positif dan tanggung jawab
              terhadap alam dalam setiap langkah mereka.{" "}
              <Link className="text-blue-500 hover:underline  items-center inline-flex font-bold" href="/story">
                Read More <span className="text-xs">❯</span>
              </Link>
            </p>
            <Link href={"#"} className="flex flex-row items-center gap-x-4">
              <span className="rounded-full p-1 bg-black shadow-lg">
                <FaYoutube className="text-white" />
              </span>
              Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Product 4 */}
      <div className="flex flex-row bg-[#f4d3e8] py-12">
       <div className="container flex flex-col md:flex-row gap-x-6 px-0 lg:px-8">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Minilemon
            </h2>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Live Parenting
            </h2>
            <Placeholder width="350" height="500" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#1b1b1d] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Minilemon
              </h2>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Live Parenting
              </h2>
            </div>
            <p>
              Minilemin percaya bahwa pendidikan karakter anak tidak hanya mengandalkan tontonan edukasi saja, akan tetapi dibutuhkan juga peran aktif
              orang tua dalam membimbing anak-anak mereka.
            </p>
            <p>
              "Sahabat Minilemon Parenting" adalah program yang dirancang khusus untuk membantu para bunda dengan memberikan tips dan saran praktis
              yang dapat langsung diterapkan di rumah. Sehingga orang tua dapat ikut berperan mendidik anak-anak mereka.{" "}
              <Link className="text-blue-500 hover:underline  items-center inline-flex font-bold" href="/story">
                Read More <span className="text-xs">❯</span>
              </Link>
            </p>
            <Link href={"#"} className="flex flex-row items-center gap-x-4">
              <span className="rounded-full p-1 bg-black shadow-lg">
                <FaYoutube className="text-white" />
              </span>
              Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Produk 5 */}
      <div className="flex flex-row bg-[#f4efd2] py-12">
      <div className="container flex flex-col md:flex-row gap-x-6 px-0 lg:px-8">
          <div className="flex flex-col items-center justify-center basis-4/12">
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Panggung Boneka
            </h2>
            <h2
              className={cn(
                luckiest_guy.className,
                "text-4xl md:hidden bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
              )}>
              Minilemon
            </h2>
            <Placeholder width="350" height="500" background="#333" color="#fff" />
          </div>
          <div className="flex flex-col text-[#1b1b1d] tracking-wider leading-loose gap-y-6 basis-8/12">
            <div>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Panggung Boneka
              </h2>
              <h2
                className={cn(
                  luckiest_guy.className,
                  "md:text-6xl lg:text-7xl hidden md:block bg-gradient-to-b from-[#fdfe28] from-10% via-[#ffa136] via-40% to-[#f66708] to-80% bg-clip-text text-transparent items-center text-wrap",
                  "drop-shadow-[0px_5px_0px_rgba(49,49,49,1)]"
                )}>
                Minilemon
              </h2>
            </div>
            <p>
              "Panggung Boneka Minilemon" adlaah program pertunjukan boneka yang menghadirkan kisah-kisah lucu dan seru dari keseharian Minilemon.
            </p>
            <p>
              Selain mengundang tawa dan penuh kejutan, certa "Panggung Boneka Minilemon" selalu disertai dengan pesan-pesan moral yang positif.
              Melalui karakter Minilemon, anak-anak diajak untuk bermain dan belajar tentang nilai-nilai persahabatan, gotong royong, kejujuran, dan
              tanggung jawab.{" "}
              <Link className="text-blue-500 hover:underline  items-center inline-flex font-bold" href="/story">
                Read More <span className="text-xs">❯</span>
              </Link>
            </p>
            <Link href={"#"} className="flex flex-row items-center gap-x-4">
              <span className="rounded-full p-1 bg-black shadow-lg">
                <FaYoutube className="text-white" />
              </span>
              Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
