import PortfolioCard from './components/PortfolioCard'
// test
const cards = [
  {
    eyebrow: 'Personal Information',
    title: 'Ethan, Software Engineer',
    description:
      'Based in Nebraska and building across frontend, backend, data, and AI workflows with a practical focus on usable products and reliable delivery.',
    featured: true,
    content: (
      <div className="space-y-5">
        <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-2">
          <div className="rounded-2xl border border-stone-200/80 bg-white/80 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
              Focus
            </p>
            <p className="mt-2 text-base font-semibold text-stone-950">
              Full stack apps, cloud-backed systems, and practical AI solutions
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200/80 bg-white/80 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
              Core Stack
            </p>
            <p className="mt-2 text-base font-semibold text-stone-950">
              JavaScript, React, SQL, Python, Java, Azure Foundry, Databricks
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            className="group rounded-2xl border border-stone-300 bg-stone-100 px-5 py-4 text-left text-stone-950 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            href="https://github.com/eyehl12"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-lg font-semibold">GitHub</p>
            <p className="mt-1 text-sm text-stone-600">
              Explore repositories covering full stack builds, experiments, and implementation work.
            </p>
          </a>

          <a
            className="group rounded-2xl border border-stone-300 bg-stone-100 px-5 py-4 text-left text-stone-950 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            href="https://www.linkedin.com/in/ethan-yehl-50a724278/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-lg font-semibold">LinkedIn</p>
            <p className="mt-1 text-sm text-stone-600">
              View experience, interests, and the broader professional story behind the work.
            </p>
          </a>
        </div>
      </div>
    ),
  },
  {
    eyebrow: 'Bio',
    title: 'Full stack builder with product and platform range',
    description:
      'I work across frontend, backend, databases, and applied AI, with an interest in building systems that are both useful to people and maintainable to ship.',
    content: (
      <div className="space-y-4 text-sm leading-7 text-stone-700">
        <p>
          I enjoy turning broad ideas into working products, whether that means building
          a React interface, shaping API and database logic, or connecting AI-enabled workflows.
        </p>
        <p>
          My toolkit spans JavaScript, React, SQL, Python, and Java, alongside cloud and
          data platforms like Azure Foundry and Azure Databricks when a project needs more than a UI.
        </p>
        <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
          <span className="rounded-full bg-stone-100 px-3 py-2">JavaScript</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">React</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">SQL</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">Python</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">Java</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">AI</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">Azure Foundry</span>
          <span className="rounded-full bg-stone-100 px-3 py-2">Azure Databricks</span>
        </div>
      </div>
    ),
  },
  {
    eyebrow: 'Project',
    title: 'Blue Cross Blue Shield chatbot analytics agent',
    description:
      'Worked on a team to add a new agent to an existing chatbot that helps users ask for natural-language insights about chatbot usage.',
    content: (
      <div className="space-y-4 text-sm text-stone-700">
        <p>
          The agent connects to Azure Databricks and uses a preprocessed SQL table to answer
          questions conversationally about how the chatbot is being used across the platform.
        </p>
        <div className="rounded-2xl bg-stone-100 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            Stack
          </p>
          <p className="mt-2 text-stone-900">
            Python FastAPI, Azure Databricks, SQL, natural language generation,
            charts, and tabular reporting
          </p>
        </div>
        <div className="rounded-2xl border border-orange-200 bg-orange-50/80 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-700">
            Contribution
          </p>
          <p className="mt-2 text-stone-900">
            Built as part of a team and designed to return text, tables, and charts depending
            on what the user needs to understand about chatbot usage.
          </p>
        </div>
      </div>
    ),
  },
  {
    eyebrow: 'Project',
    title: 'CornHacks application website',
    description:
      'Worked with a partner to design and build the application website for the CornHacks hackathon at the University of Nebraska-Lincoln.',
    content: (
      <div className="space-y-4 text-sm text-stone-700">
        <p>
          The site was built in the same general style as this portfolio, but with Next.js,
          and focused on giving applicants a clear, polished flow for learning about and applying to the event.
        </p>
        <div className="rounded-2xl bg-stone-100 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
            Stack
          </p>
          <p className="mt-2 text-stone-900">Next.js, React, JavaScript, and modern frontend styling</p>
        </div>
        <div className="rounded-2xl border border-orange-200 bg-orange-50/80 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-700">
            Collaboration
          </p>
          <p className="mt-2 text-stone-900">
            Designed and shipped with a partner, balancing event branding with a clean
            application experience for prospective hackathon participants.
          </p>
        </div>
      </div>
    ),
  },
]

function App() {
  return (
    <div
      className="min-h-screen text-stone-950"
      style={{
        background:
          'radial-gradient(circle at top left, rgba(255, 237, 213, 0.55), transparent 28%), radial-gradient(circle at top right, rgba(251, 146, 60, 0.32), transparent 30%), linear-gradient(180deg, #fff7ed 0%, #fdba74 38%, #f97316 100%)',
      }}
    >
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <header className="max-w-3xl">
          <h1 className="font-['Fraunces',Georgia,serif] text-4xl leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
            Ethan&apos;s Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-800 sm:text-lg">
            Work across web apps, databases, cloud platforms, and applied AI,
            with experience spanning JavaScript, React, SQL, Python, Java, Azure Foundry,
            and Azure Databricks.
          </p>
        </header>

        <section className="mt-8 sm:mt-10">
          <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
            {cards.map((card) => (
              <PortfolioCard key={card.title} {...card}>
                {card.content}
              </PortfolioCard>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
