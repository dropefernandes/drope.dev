import Image from "next/image";
import Link from "next/link";

import { socialMedia } from "@/data/socialMedia";

export const Header = () => (
  <header className="w-full">
    <nav className="sm:p-8 p-5">
      <ul className="flex justify-between items-center flex-wrap">
        <div className="brand">
          <li>
            <Image
              src="/drope.svg"
              alt="Drope dev logo"
              className="dark:invert"
              width={50}
              height={12}
              priority
            />
          </li>
        </div>
        <div className="social-media flex order-last gap-4 sm:mt-0 mt-4">
          {socialMedia.map(({ id, name, link, icon }) => (
            <li key={id} className="text-[12px] text-slate-400">
              <Link href={link} className="hover:text-slate-50">
                {name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  </header>
);
