import { Orbitron as Font } from "next/font/google";
import Image from "next/image";

const font = Font({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-7xl mx-auto relative">
      <div className="w-full relative">
        <Image
          src="/hero.webp"
          alt="Hero Background"
          className={`w-full object-contain`}
          width={0}
          height={0}
          sizes="100vw"
          draggable={false}
        />
        <h1
          className={`${font.className} absolute right-[2.8%] top-[15%] text-center line-s uppercase text-[#3de7c9]`}
          style={{
            fontSize: "clamp(14px, 2.7vw, 36px)",
            lineHeight: "120%",
            textShadow: "0px 0px 2.5rem #35c7ae, 0px 0px 2.5rem #35c7ae",
          }}
        >
          The Hidden
          <br />
          Gaming Lair
        </h1>
        <p
          className="absolute right-[2.8%] top-[33%] w-[20%] text-[#a7a7a7] text-center"
          style={{
            fontSize: "clamp(10px, 1.5vw, 19px)",
            lineHeight: "130%",
            textShadow: "2px 2px 0.5rem black",
          }}
        >
          We&apos;re a hub for gamers who want to enhance their gaming
          experience. Our portfolio includes a variety of gaming apps and tools,
          including interactive maps for popular games, as well as achievement
          trackers and databases.
        </p>
      </div>
      <section className="pt-10">
        <h2
          className={`${font.className} text-center text-[#3de7c9] text-2xl uppercase`}
        >
          Gaming apps & tools
        </h2>

        <div className="my-10 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Aeternum Map{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Interactive map for New World
            </p>
            <Image
              src="https://raw.githubusercontent.com/lmachens/aeternum-map/main/media/Tile.jpg"
              alt="Aeternum Map"
              width={258}
              height={198}
            />
          </a>
        </div>
      </section>
    </main>
  );
}
