import Link from "next/link";

export function AppHeader() {
  return (
    <header className="">
      <div className="bg-[#161516] max-w-7xl mx-auto flex h-14 justify-between items-center px-6">
        <h1 className="text-2xl">The Hidden Gaming Lair</h1>
        <nav className="space-x-4">
          <Link href="#apps">Apps</Link>
          <Link href="#community">Community</Link>
        </nav>
      </div>
    </header>
  );
}
