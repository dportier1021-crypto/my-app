export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          MyApp
        </span>
        <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Features</a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col flex-1">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center gap-6 px-8 py-32 text-center">
          <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Build something amazing
          </h1>
          <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
            A modern full-stack web application powered by Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#features"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="px-8 py-24 bg-zinc-50 dark:bg-zinc-900">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
              Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                { title: "Fast", description: "Optimized for speed with server-side rendering and static generation." },
                { title: "Scalable", description: "Built on a modern stack that grows with your needs." },
                { title: "Beautiful", description: "Styled with Tailwind CSS for a polished, responsive design." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center px-8 py-6 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500">
        © 2026 MyApp. All rights reserved.
      </footer>
    </div>
  );
}
