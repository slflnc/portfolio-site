import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image"; 

export const metadata = {
  title: "Dynamic Document Automation | Alfie Lancaster",
  description:
    "Developed a Python-based tool to replace a manual Excel mail-merge process, reducing monthly document generation from 4 hours to just 5 minutes.",
};

export default function PythonAutomation() {
  return (
    <>
      <Header />
      <article className="bg-white min-h-screen pt-[120px] md:pt-[160px] pb-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <Link
            href="/#projects"
            className="group text-mainblue font-bold flex items-center gap-2 mb-8 transition-all"
            aria-label="Navigate back to projects section"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>{" "}
            Back to Projects
          </Link>

          <header className="border-b-4 border-mainblue pb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-mainblue tracking-tight mb-6 leading-tight">
              Dynamic Document Automation
            </h1>
            <p className="text-2xl text-neutral-600 leading-relaxed max-w-4xl">
              Developed a Python-based tool to replace a manual Excel mail-merge
              process. By ingesting structured exports and grouping records via
              Pandas, I reduced monthly document generation{" "}
              <strong>from 4 hours to just 5 minutes</strong>.
            </p>
          </header>

          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="group flex flex-col h-full">
              <a
                href="/Before & After.png"
                target="_blank"
                className="relative border border-gray-200 rounded-sm overflow-hidden cursor-zoom-in aspect-video flex items-center justify-center bg-gray-50 shadow-sm transition-shadow hover:shadow-md"
                aria-label="View Before and After Process Comparison in full screen"
              >
                <div className="absolute inset-0 bg-mainblue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-white text-mainblue px-4 py-2 font-bold shadow-lg text-sm">
                    View Comparison
                  </span>
                </div>
                <Image
                  src="/Before & After.png"
                  alt="Before and After Process Comparison"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>
              <p className="mt-3 text-sm text-gray-500 italic mt-auto pt-2">
                Fig 1.0: Transition from 4-hour manual prep to automated
                execution.
              </p>
            </div>

            <div className="group flex flex-col h-full">
              <a
                href="/Python Application.png"
                target="_blank"
                className="relative border border-gray-200 rounded-sm overflow-hidden cursor-zoom-in aspect-video flex items-center justify-center bg-gray-50 shadow-xl transition-shadow hover:shadow-2xl"
                aria-label="View Python Application UI in full screen"
              >
                <div className="absolute inset-0 bg-mainblue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-white text-mainblue px-4 py-2 font-bold shadow-lg text-sm">
                    View Application UI
                  </span>
                </div>
                <Image
                  src="/Python Application.png"
                  alt="Python Tkinter Interface"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>
              <p className="mt-3 text-sm text-gray-500 italic mt-auto pt-2">
                Fig 1.1: Custom Tkinter UI for non-technical staff deployment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="lg:col-span-4 space-y-10">
              <div className="sticky top-[160px]">
                <h2 className="font-bold text-mainblue uppercase text-sm tracking-widest mb-4">
                  Technical Stack & Highlights
                </h2>
                <ul className="space-y-3 mb-8 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Pandas Library:</strong> Leveraged for advanced
                      data manipulation and group-by transformations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Document Automation:</strong> Used Python
                      libraries to handle dynamic .docx generation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Modular Code:</strong> Developed a reusable
                      structure that allows for quick adaptation to different
                      letter types.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Error Reduction:</strong> Eliminated manual data
                      flattening, significantly reducing the risk of data
                      mismatches.
                    </span>
                  </li>
                </ul>

                <div className="mt-12 group border-t border-gray-100 pt-8">
                  <h3 className="font-bold text-mainblue uppercase text-[10px] tracking-widest mb-4">
                    The Logic Flow
                  </h3>
                  <a
                    href="/Letter Flow.png"
                    target="_blank"
                    className="bg-gray-50 cursor-zoom-in group-hover:border-mainblue transition-colors"
                    aria-label="View automation logic flowchart in full screen"
                  >
                    <img
                      src="/Letter Flow.png"
                      alt="Automation logic flowchart"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-16 text-lg leading-relaxed text-neutral-800">
              <section className="space-y-4">
                <h2 className="text-3xl font-extrabold text-mainblue">
                  The Problem
                </h2>
                <div className="space-y-4 text-base">
                  <p>
                    <strong>Legacy Limitations:</strong> Standard mail-merge
                    tools struggled with the "one-to-many" relationship (one
                    letter containing a table of multiple clients).
                  </p>
                  <p>
                    <strong>Time-Intensive:</strong> The monthly process
                    required manual data flattening and preparation in Excel,
                    taking approximately 4 hours per cycle.
                  </p>
                  <p>
                    <strong>Complex Grouping:</strong> The team had to manually
                    filter and group records for each Recipient, which was
                    highly prone to "copy-paste" errors.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-extrabold text-mainblue">
                  The Solution
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-base">
                  <li>
                    <strong>Automated Data Ingestion:</strong> Built a script to
                    ingest structured exports directly from the system.
                  </li>
                  <li>
                    <strong>Relational Grouping:</strong> Applied pandas
                    grouping logic to automatically segment records by Entity
                    ID, ensuring 100% data accuracy.
                  </li>
                  <li>
                    <strong>Dynamic Document Generation:</strong> Programmed the
                    script to generate individual letters, dynamically embedding
                    a formatted table of client data within each document.
                  </li>
                  <li>
                    <strong>Versatility:</strong> Reused and adapted the core
                    logic for multiple communication streams, including "Service
                    Rates" and "Account Status" letters.
                  </li>
                  <li>
                    <strong>Accessibility:</strong> Packaged the solution with a
                    lightweight GUI interface, allowing non-technical team
                    members to run the automation independently.
                  </li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-mainblue">
                  The Logic Layer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                  <div className="bg-slate-900 rounded-sm overflow-hidden flex flex-col">
                    <div className="px-4 py-2 bg-slate-800 border-b border-white/5 flex justify-between">
                      <span className="text-blue-300 text-[10px] font-mono uppercase">
                        Grouping Code
                      </span>
                    </div>
                    <a
                      href="/grouping.png"
                      target="_blank"
                      className="relative p-4 cursor-zoom-in hover:opacity-80 transition-opacity flex-grow flex items-center justify-center h-[250px]"
                      aria-label="View Pandas grouping logic code snippet in full size"
                    >
                      <Image
                        src="/grouping.png"
                        alt="Pandas grouping logic"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </a>
                  </div>
                  <div className="bg-slate-900 rounded-sm overflow-hidden flex flex-col">
                    <div className="px-4 py-2 bg-slate-800 border-b border-white/5 flex justify-between">
                      <span className="text-blue-300 text-[10px] font-mono uppercase">
                        Table Generation
                      </span>
                    </div>
                    <a
                      href="/table.png"
                      target="_blank"
                      className="relative p-4 cursor-zoom-in hover:opacity-80 transition-opacity flex-grow flex items-center justify-center h-[250px]"
                      aria-label="View Table creation logic code snippet in full size"
                    >
                      <Image
                        src="/table.png"
                        alt="Table creation logic"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </a>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 p-8 rounded-sm text-center">
                  <h2 className="text-sm font-bold text-mainblue uppercase tracking-widest mb-6">
                    Final Output Samples (Sanitised)
                  </h2>
                  <div className="grid grid-cols-2 gap-4 items-stretch">
                    <a
                      href="/Service Rate Letter.png"
                      target="_blank"
                      className="relative cursor-zoom-in shadow-md hover:scale-[1.02] transition-transform block bg-white aspect-[3/4] overflow-hidden border border-gray-200"
                      aria-label="View Service Rate Letter Sample in full screen"
                    >
                      <Image
                        src="/Service Rate Letter.png"
                        alt="Letter Sample 1"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </a>
                    <a
                      href="/Account Status Letter.png"
                      target="_blank"
                      className="relative cursor-zoom-in shadow-md hover:scale-[1.02] transition-transform block bg-white aspect-[3/4] overflow-hidden border border-gray-200"
                      aria-label="View Account Status Letter Sample in full screen"
                    >
                      <Image
                        src="/Account Status Letter.png"
                        alt="Letter Sample 2"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </a>
                  </div>
                </div>
              </section>

              <section className="bg-slate-900 p-8 md:p-12 rounded-sm text-white">
                <h2 className="text-3xl font-extrabold mb-8 text-buttonaccent">
                  Business Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-buttonaccent">
                      98% Efficiency Gain
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Reduced processing time drastically, bringing the 4-hour
                      manual cycle down to just 5 minutes of automated
                      execution.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2 text-buttonaccent">
                      Operational Capacity
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Freed up staff to focus on higher-value tasks and
                      operational priorities rather than administrative
                      formatting.
                    </p>
                  </div>

                  <div className="md:col-span-2 border-t border-white/10 pt-6">
                    <h3 className="font-bold text-xl mb-2">
                      Consistency & Error Reduction
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Standardised all communication outputs, ensuring a
                      professional and uniform appearance across all Entities
                      while completely eliminating the risk of copy-paste
                      grouping errors.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
