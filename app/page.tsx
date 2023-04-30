import { Orbitron as Font } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { CardLink } from "./card-link";

const font = Font({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-7xl mx-auto relative border border-[#1d1d1f] pb-20">
      <div className="w-full relative">
        <Image
          src="/hero.webp"
          alt="Hero Background"
          className={`w-full object-contain`}
          width={1280}
          height={671}
          sizes="100vw"
          draggable={false}
        />
        <h1
          className={`${font.className} absolute right-[6%] top-[27%] text-center line-s uppercase text-[#3de7c9]`}
          style={{
            fontSize: "clamp(12px, 3vw, 38px)",
            lineHeight: "125%",
            textShadow: "0px 0px 2.5rem #35c7ae, 0px 0px 2.5rem #35c7ae",
          }}
        >
          The
          <br />
          Hidden
          <br />
          Gaming
          <br />
          Lair
        </h1>
      </div>
      <section>
        <h2
          className={`${font.className} text-center text-[#3de7c9] text-2xl uppercase py-10 from`}
          style={{
            textShadow: "0px 0px 1rem #35c7ae",
          }}
        >
          Gaming apps & tools
        </h2>

        <div className="p-4 flex flex-wrap gap-8 justify-center">
          <CardLink
            href="https://aeternum-map.gg"
            src="/aeternum-map.jpg"
            alt="Aeternum Map"
            title="New World Map"
            description="Interactive map for with real-time position tracking"
          />
          <CardLink
            href="https://sotf.th.gl"
            src="/sotf.jpg"
            alt="Sons Of The Forest Map"
            title="Sons Of The Forest Map"
            description="Real-Time position tracking, nodes and more"
          />
          <CardLink
            href="https://www.arkesia.gg"
            src="/arkesia.jpg"
            alt="Arkesia.gg"
            title="Lost Ark Map"
            description="Interactive map with mokoko seeds, hidden stories and more"
          />
          <CardLink
            href="https://www.hogwarts.gg"
            src="/hogwarts.jpg"
            alt="Hogwarts.gg"
            title="Hogwarts Legacy Map"
            description="Real-time tracking and progress updates"
          />
          <CardLink
            href="https://www.soc.gg"
            src="/soc.jpg"
            alt="SoC.gg"
            title="Songs Of Conquest"
            description="Database with buildings, factions, units, skills, spells and wielders"
          />
          <CardLink
            href="https://lol.th.gl"
            src="/th.jpg"
            alt="Trophy Hunter"
            title="League Of Legends"
            description="Over 200 trophies to achieve, all with unique abilities and skills"
          />
          <CardLink
            href="https://www.nwmap.info"
            src="/nwmap.jpg"
            alt="Trophy Hunter"
            title="New World Faction Map"
            description="Bring a visual understanding of each server"
          />
          <CardLink
            href="https://github.com/lmachens/skeleton"
            src="/skeleton.jpg"
            alt="Skeleton"
            title="Website Overlays"
            description="Simply display any website as customizable Overlay"
          />
          <CardLink
            href="https://github.com/josdemmers/NewWorldCompanion"
            src="/newworldcompanion.jpg"
            alt="New World Companion"
            title="New World Companion App"
            description="A companion app for New World, to keep track of all your learned recipes and current trading post prices."
          />
        </div>
        <section>
          <h2
            className={`${font.className} text-center text-[#3de7c9] text-2xl uppercase py-10 from`}
            style={{
              textShadow: "0px 0px 1rem #35c7ae",
            }}
          >
            Community
          </h2>
          <p className="p-4 text-center">
            We&apos;re a hub for gamers who want to enhance their gaming
            experience. Our portfolio includes a variety of gaming apps and
            tools, including interactive maps for popular games, as well as
            achievement trackers and databases. Do you have any questions,
            feedback or suggestions? Join our Discord server and let us know!
          </p>
          <Link
            href="https://discord.gg/NTZu8Px"
            target="_blank"
            className="mx-auto block w-fit my-6 hover:scale-110 transition-transform"
          >
            <Image
              src="/discord-logo-white.png"
              width={207}
              height={39}
              alt="Discord"
            />
          </Link>
        </section>
      </section>
    </main>
  );
}
