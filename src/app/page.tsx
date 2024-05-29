import { about } from "@/data/about";
import { skills } from "@/data/skills";

import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />

      <section className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 p-8">
        <div className="resume">
          <h1 className="font-bold tracking-tight sm:text-4xl">
            Hey, I&apos;m Pedro! 👋
          </h1>
          {about.map((text) => (
            <p
              key={text}
              className="leading-5 text-base mt-6 text-lg leading-8 text-gray-600"
            >
              {text}
            </p>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-bold text-slate-50">Top Skills</h3>
          <ul className="flex items-center gap-5 mt-2 flex-wrap">
            {skills.map((skill) => (
              <li className="text-[12px] text-slate-400" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
