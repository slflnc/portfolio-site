import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Resilient RPA Automation | Alfie Lancaster",
  description:
    "Automated 3 months of manual labor into an unattended, 22,000-record execution using Power Automate Desktop.",
};

export default function RpaAutomation() {
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
              Resilient RPA Automation
            </h1>
            <p className="text-2xl text-neutral-600 leading-relaxed max-w-4xl">
              Designed and implemented a resilient Power Automate Desktop
              solution to automate a large-scale web uplift process. By
              incorporating structured exception handling, retry logic, and
              audit write-back, I automated{" "}
              <strong>3 months of manual labor</strong> into an unattended,
              22,000-record execution.
            </p>
          </header>

          <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="group flex flex-col h-full">
              <div className="relative border border-gray-200 rounded-sm overflow-hidden bg-slate-900 shadow-xl aspect-video flex items-center justify-center">
                <video
                  controls
                  className="w-full h-full object-contain"
                  poster="/poster1.png"
                  preload="metadata"
                >
                  <source src="/RPADemo.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-3 text-sm text-gray-500 italic mt-auto pt-2">
                Fig 1.0: 1:35 execution clip demonstrating UI interaction and
                state updates.
              </p>
            </div>

            <div className="group flex flex-col h-full">
              <a
                href="/PAD.png"
                target="_blank"
                className="relative border border-gray-200 rounded-sm overflow-hidden cursor-zoom-in aspect-video flex items-center justify-center bg-gray-50 shadow-sm transition-shadow hover:shadow-md"
                aria-label="View RPA Architecture Diagram in full screen"
              >
                <div className="absolute inset-0 bg-mainblue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-white text-mainblue px-4 py-2 font-bold shadow-lg text-sm">
                    View Architecture
                  </span>
                </div>
                <Image
                  src="/PAD.png"
                  alt="RPA Architecture Diagram Placeholder"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <p className="mt-3 text-sm text-gray-500 italic mt-auto pt-2">
                Fig 1.1: High-level view of the resilient retry logic and audit
                loop.
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
                      <strong>Structured Exception Handling:</strong> Modular
                      subflow catches errors without stopping the run.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Memory Management:</strong> High-speed processing
                      via DataTables over UI-based Excel interaction.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>UI/Web Robustness:</strong> Popup detection and
                      failure handling for &quot;Unattended&quot; capability.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Audit Write-Back:</strong> Real-time processing
                      status logged per record.
                    </span>
                  </li>
                </ul>

                <div className="mt-12 border-t border-gray-100 pt-8">
                  <h3 className="font-bold text-mainblue uppercase text-[10px] tracking-widest mb-6">
                    By The Numbers
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="bg-blue-50/50 p-5 border-l-2 border-buttonaccent group hover:bg-blue-50 transition-colors">
                      <p className="text-3xl font-extrabold text-mainblue tracking-tight">
                        22,000+
                      </p>
                      <p className="text-[11px] text-neutral-600 font-bold uppercase tracking-widest mt-1">
                        Records Inputted
                      </p>
                    </div>

                    <div className="bg-blue-50/50 p-5 border-l-2 border-buttonaccent group hover:bg-blue-50 transition-colors">
                      <p className="text-3xl font-extrabold text-mainblue tracking-tight">
                        3 Months
                      </p>
                      <p className="text-[11px] text-neutral-600 font-bold uppercase tracking-widest mt-1">
                        Manual Labour Saved
                      </p>
                    </div>

                    <div className="bg-blue-50/50 p-5 border-l-2 border-buttonaccent group hover:bg-blue-50 transition-colors">
                      <p className="text-3xl font-extrabold text-mainblue tracking-tight">
                        100%
                      </p>
                      <p className="text-[11px] text-neutral-600 font-bold uppercase tracking-widest mt-1">
                        Audit Traceability
                      </p>
                    </div>

                    <div className="bg-blue-50/50 p-5 border-l-2 border-buttonaccent group hover:bg-blue-50 transition-colors">
                      <p className="text-3xl font-extrabold text-mainblue tracking-tight">
                        0
                      </p>
                      <p className="text-[11px] text-neutral-600 font-bold uppercase tracking-widest mt-1">
                        Data Loss Events
                      </p>
                    </div>
                  </div>
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
                    <strong>Time Scale & Volume:</strong> 22,000 records
                    required record-by-record execution in a web-based wizard.
                    This required sustained manual input from April to July
                    every year (approx. 3 months of full-time capacity).
                  </p>
                  <p>
                    <strong>Operational Bottleneck:</strong> The team was stuck
                    in data-entry mode for a quarter of the year before they
                    could focus on higher-value operational work.
                  </p>
                  <p>
                    <strong>Risk:</strong> High-volume repetitive input
                    increased cognitive fatigue, leading to a high risk of human
                    error and context-switching fatigue between Excel and the
                    web.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-3xl font-extrabold text-mainblue">
                  The Solution
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-base">
                  <li>
                    <strong>In-Memory Optimisation:</strong> Instead of the bot
                    clicking cell-by-cell in Excel, I used the &apos;Read from Excel&apos;
                    action to pull all 22,000 records into a DataTable variable.
                    This reduced data retrieval time from minutes to seconds and
                    prevented Excel-app crashes.
                  </li>
                  <li>
                    <strong>State-Aware Logic:</strong> Implemented status-based
                    conditional processing (the bot checks the status and skips
                    a record if already marked ‘uplifted’), allowing for
                    idempotent re-runs.
                  </li>
                  <li>
                    <strong>Resiliency Subflow & Retry Mechanism:</strong>{" "}
                    Designed a dedicated retry & exception-handling subflow.
                    Introduced 3-attempt retry logic governed by an{" "}
                    <code>attempt &lt;= 3</code> counter and a{" "}
                    <code>keepTrying</code> flag to handle web latency or UI
                    timeouts.
                  </li>
                  <li>
                    <strong>Audit Loop:</strong> Wrote success/failure outcomes,
                    error notes, and timestamps back to the source Excel file
                    for full auditability.
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
                        Variable Setting, Flow Stopping, & Skip Loop Logic
                      </span>
                    </div>
                    <a
                      href="/variablecode.png"
                      target="_blank"
                      className="relative p-4 cursor-zoom-in hover:opacity-80 transition-opacity flex-grow flex items-center justify-center h-[250px]"
                      aria-label="View variable setting logic snippet in full size"
                    >
                      <Image
                        src="/variablecode.png"
                        alt="PAD Retry Logic Subflow"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </a>
                  </div>
                  <div className="bg-slate-900 rounded-sm overflow-hidden flex flex-col">
                    <div className="px-4 py-2 bg-slate-800 border-b border-white/5 flex justify-between">
                      <span className="text-blue-300 text-[10px] font-mono uppercase">
                        Error Handling
                      </span>
                    </div>
                    <a
                      href="/paderror.png"
                      target="_blank"
                      className="relative p-4 cursor-zoom-in hover:opacity-80 transition-opacity flex-grow flex items-center justify-center h-[250px]"
                      aria-label="View error handling logic snippet in full size"
                    >
                      <Image
                        src="/paderror.png"
                        alt="PAD Error Handling"
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
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
                    <h3 className="font-bold text-xl mb-2">
                      Massive Time Recovery
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Reclaimed 3 months of manual inputting, freeing up the
                      team for Financial Year-End operational priorities much
                      earlier in the cycle.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Error Elimination
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Completely removed the risk of human error and data
                      mismatches caused by context-switching and cognitive
                      fatigue.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Unattended Reliability
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Enabled safe, controlled, and repeatable execution across
                      22,000 records that can be reliably run overnight without
                      human supervision.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Total Transparency
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Provided a full traceability trail via the automated Excel
                      audit log, allowing for seamless management review and
                      compliance tracking.
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
