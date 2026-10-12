const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Git & GitHub",
  "Docker",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/umehchinaemeze-a11y",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinazom-chinaemeze-a89711415/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#101010] text-[#f5f1e8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="text-lg font-black tracking-tight">
          UC<span className="text-[#c5f467]">.</span>
        </a>

        <a
          href="mailto:umehchinaemeze@gmail.com"
          className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-[#c5f467] hover:text-[#c5f467]"
        >
          Let&apos;s talk ↗
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.3fr_0.7fr] md:px-10 md:pb-28 md:pt-24">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-[#c5f467]">
            <span className="h-2 w-2 rounded-full bg-[#c5f467]" />
            Available for opportunities
          </p>

          <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-9xl">
            BUILD
            <br />
            THINGS
            <br />
            <span className="text-[#c5f467]">THAT</span>
            <br />
            MATTER<span className="text-[#c5f467]">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
            I&apos;m Chinazom, a Computer Science graduate and developer focused
            on JavaScript, React, Next.js, and building useful experiences for
            the web.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#c5f467] px-7 py-3 font-bold text-[#101010] transition hover:bg-white"
            >
              Explore my work ↓
            </a>
            <a
              href="mailto:umehchinaemeze@gmail.com"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-white"
            >
              Contact me ↗
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#c5f467]/60" />
          <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[2rem] bg-[#c5f467] p-7 text-[#101010]">
            <div className="flex items-start justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                THE DEVELOPER
              </span>
              <span className="text-3xl">✳</span>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-widest">
                Curious mind.
              </p>
              <p className="mt-1 text-4xl font-black leading-none tracking-tight sm:text-5xl">
                CREATIVE
                <br />
                BUILDER.
              </p>
            </div>

            <div className="flex items-end justify-between border-t border-black/20 pt-4">
              <span className="max-w-[160px] text-sm font-medium">
                Learning, building, and getting better every day.
              </span>
              <span className="text-4xl">↗</span>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white/45 md:px-10">
          <span>Frontend</span>
          <span className="text-[#c5f467]">✳</span>
          <span>Backend</span>
          <span className="text-[#c5f467]">✳</span>
          <span>Problem solving</span>
          <span className="text-[#c5f467]">✳</span>
          <span>Always learning</span>
        </div>
      </div>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-28"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c5f467]">
          / A little about me
        </p>

        <div>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Turning ideas into digital experiences, one step at a time.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/60">
            I graduated with a B.Sc. in Computer Science from the University of
            Nigeria, Nsukka, in 2025. I enjoy working with modern web
            technologies and growing my skills across frontend and backend
            development. I&apos;m currently focused on creating projects that
            demonstrate what I can build and how I approach problems.
          </p>
        </div>
      </section>

      <section className="bg-[#171717] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c5f467]">
            / My toolkit
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Tools I work with<span className="text-[#c5f467]">.</span>
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:border-[#c5f467] hover:text-[#c5f467]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28"
      >
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c5f467]">
          / Selected work
        </p>
        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Projects<span className="text-[#c5f467]">.</span>
          </h2>
          <p className="max-w-md leading-7 text-white/50">
            A collection of projects I&apos;m developing to solve practical
            problems and strengthen my full-stack engineering skills.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#c5f467]/50 sm:p-9">
            <p className="text-sm font-semibold text-[#c5f467]">01 / Rota</p>
            <h3 className="mt-5 text-2xl font-bold">Rota</h3>
            <p className="mt-3 leading-7 text-white/60">
              An application project focused on building practical software
              with a clean user experience and reliable functionality.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Application Development", "Full-stack"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-[#c5f467]">
              Status: In progress
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#c5f467]/50 sm:p-9">
            <p className="text-sm font-semibold text-[#c5f467]">02 / Matinee</p>
            <h3 className="mt-5 text-2xl font-bold">Matinee</h3>
            <p className="mt-3 leading-7 text-white/60">
              A cinema-focused application project exploring user-friendly
              booking experiences and application design.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Application Design"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-[#c5f467]">
              Status: In progress
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#c5f467]/50 sm:p-9">
            <p className="text-sm font-semibold text-[#c5f467]">
              03 / System Design
            </p>
            <h3 className="mt-5 text-2xl font-bold">System Design</h3>
            <p className="mt-3 leading-7 text-white/60">
              A learning project focused on software architecture,
              scalability, and the design of reliable systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Architecture", "Scalability"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-[#c5f467]">
              Status: In progress
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-[#c5f467]/50 sm:p-9">
            <p className="text-sm font-semibold text-[#c5f467]">04 / RAG</p>
            <h3 className="mt-5 text-2xl font-bold">
              Retrieval-Augmented Generation
            </h3>
            <p className="mt-3 leading-7 text-white/60">
              An AI project planned around retrieving relevant information
              and using it to generate context-aware responses.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "AI", "RAG"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm font-semibold text-[#c5f467]">
              Status: In progress
            </p>
          </article>
        </div>
      </section>
      <section className="bg-[#c5f467] px-6 py-16 text-[#101010] md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em]">
            / Have an idea?
          </p>
          <h2 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl md:text-8xl">
            LET&apos;S MAKE
            <br />
            IT HAPPEN.
          </h2>
          <a
            href="mailto:umehchinaemeze@gmail.com"
            className="mt-8 inline-flex rounded-full bg-[#101010] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#101010]"
          >
            Email me ↗
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© 2026 Chinazom Chinaemeze</p>
        <div className="flex gap-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#c5f467]"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}