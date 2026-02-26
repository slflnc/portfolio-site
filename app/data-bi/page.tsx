import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "SharePoint to Power BI Architecture | Alfie Lancaster",
  description:
    "Led the redesign of fragmented, Excel-based service reporting into a centralised SharePoint data ecosystem.",
};

export default function PowerBIProject() {
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
              SharePoint to Power BI Architecture
            </h1>
            <p className="text-2xl text-neutral-600 leading-relaxed max-w-4xl">
              Led the redesign of fragmented, Excel-based service reporting into
              a centralised SharePoint data ecosystem. Engineered a structured
              relational model and interactive dashboards, replacing manual
              consolidation with a scalable <strong>Source of Truth</strong> for
              management.
            </p>
          </header>

          <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dashboard Page 1 */}
            <div className="w-full group">
              <a
                href="/Power BI Dash.png"
                target="_blank"
                className="relative block w-full aspect-[16/10] rounded-sm overflow-hidden border border-gray-200 shadow-xl bg-white cursor-zoom-in"
                aria-label="Open Executive Overview Dashboard in full screen"
              >
                <div className="absolute inset-0 bg-mainblue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-white text-mainblue px-4 py-2 text-sm font-bold shadow-lg">
                    View Full Screen
                  </span>
                </div>

                <Image
                  src="/Power BI Dash.png"
                  alt="Executive Overview Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>
              <p className="mt-3 text-sm text-neutral-500 italic text-center">
                Fig 1.0: Executive Overview tracking £8M+ in financial activity.
              </p>
            </div>


            <div className="w-full group">
              <a
                href="/bidrilldown.png"
                target="_blank"
                className="relative block w-full aspect-[16/10] rounded-sm overflow-hidden border border-gray-200 shadow-xl bg-white cursor-zoom-in"
                aria-label="Open Operational Drill-down Dashboard in full screen"
              >
                <div className="absolute inset-0 bg-mainblue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-white text-mainblue px-4 py-2 text-sm font-bold shadow-lg">
                    View Full Screen
                  </span>
                </div>
                <Image
                  src="/bidrilldown.png"
                  alt="Operational Drill-down Dashboard"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </a>
              <p className="mt-3 text-sm text-neutral-500 italic text-center">
                Fig 1.1: Operational drill-down for team-level SLA monitoring.
              </p>
            </div>
          </div>


          <div className="my-16 border-y border-gray-100 py-12">
            <h2 className="text-sm font-bold text-mainblue uppercase tracking-[0.2em] mb-8 text-center">
              Project Process
            </h2>
            <a
              href="/Flow.png"
              target="_blank"
              className="block bg-slate-900 p-4 md:p-10 rounded-sm shadow-xl cursor-zoom-in group relative"
              aria-label="Expand End-to-end data architecture workflow"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white text-mainblue px-4 py-2 text-sm font-bold uppercase tracking-widest">
                  Expand Workflow
                </span>
              </div>

              <Image
                src="/Flow.png"
                alt="End-to-end data architecture flow"
                width={1200}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </a>
            <p className="mt-6 text-base text-neutral-600 max-w-2xl mx-auto text-center leading-relaxed">
              <strong>Fig 2.0: Data Architecture Overview.</strong> An
              end-to-end pipeline integrating Excel-based ETL with SharePoint
              List storage and Power BI for enterprise-grade reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">

            <aside className="lg:col-span-4 space-y-10">
              <div className="sticky top-[160px]">

                <h2 className="font-bold text-mainblue uppercase text-sm tracking-widest mb-4">
                  Technical Stack & Highlights
                </h2>
                <ul className="space-y-3 mb-8 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Power Query (M):</strong> ETL for data
                      normalisation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>DAX Logic:</strong> Time-intelligence functions
                      and custom business-day logic.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Data Modeling:</strong> Fact/Dimension
                      relationship design for scalable reporting.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>System Integration:</strong> Bridged SharePoint
                      List infrastructure with Power BI service.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-buttonaccent mt-0.5">▹</span>
                    <span>
                      <strong>Stakeholder Management:</strong> Delivered
                      training and supported the county-wide transition to the
                      new reporting standard.
                    </span>
                  </li>
                </ul>

                <div className="mt-10 bg-mainblue p-8 text-white shadow-[12px_12px_0_#d1d5db]">
                  {/* 2. FIXED: h4 -> h3 (Nested under the H2 above) */}
                  <h3 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 opacity-70">
                    Project Impact
                  </h3>
                  <p className="text-2xl font-bold leading-tight uppercase tracking-tight">
                    Replaced Spreadsheet Chaos with a professional-grade data
                    architecture.
                  </p>
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
                    <strong>Data Fragmentation:</strong> Critical service data
                    was trapped in multiple Excel sheets with inconsistent
                    structures across different teams.
                  </p>
                  <p>
                    <strong>Manual Overhead:</strong> Significant time wasted on
                    manual data consolidation to produce management reports.
                  </p>
                  <p>
                    <strong>Lack of Structure:</strong> Absence of a relational
                    data model led to inconsistent KPI definitions and
                    restricted historical analysis.
                  </p>
                  <p>
                    <strong>Visibility Gap:</strong> Managers had limited,
                    delayed visibility into operational performance.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-extrabold text-mainblue">
                  The Solution
                </h2>
                <div className="space-y-12">
                  <div className="border-l-4 border-buttonaccent pl-6">
                    <h3 className="font-bold text-xl text-mainblue mb-2">
                      Centralised Data Layer
                    </h3>
                    <p>
                      Designed and deployed standardised SharePoint Lists to
                      replace local Excel files, ensuring multi-user access and
                      data consistency.
                    </p>
                  </div>

                  <div className="my-8 w-full group">
                    <a
                      href="/Power BI Model.png"
                      target="_blank"
                      className="relative block border border-gray-200 shadow-sm rounded-sm bg-gray-50 p-4 cursor-zoom-in"
                      aria-label="View Power BI Star Schema Model in full size"
                    >
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-mainblue text-white px-3 py-1 text-xs font-bold uppercase">
                          View Relationship Model
                        </span>
                      </div>
                      <Image
                        src="/Power BI Model.png"
                        alt="Power BI Star Schema Model"
                        className="w-full h-auto object-contain"
                        loading="lazy"
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </a>
                    <p className="text-xs text-center text-gray-500 mt-2 italic">
                      Fig 3.0: Relational Modeling (Fact/Dimension logic)
                      connecting service data with organisational attributes.
                    </p>
                  </div>

                  <div className="border-l-4 border-buttonaccent pl-6">
                    <h3 className="font-bold text-xl text-mainblue mb-2">
                      ETL Engineering
                    </h3>
                    <p>
                      Built robust Power Query (M) pipelines to clean,
                      streamline, and merge disparate source data.
                    </p>
                  </div>

                  <div className="border-l-4 border-buttonaccent pl-6">
                    <h3 className="font-bold text-xl text-mainblue mb-2">
                      Advanced Analytics
                    </h3>
                    <p>
                      Developed a custom Calendar Table and DAX measures to
                      calculate complex KPIs, such as Working-Day Duration
                      (excluding weekends and bank holidays) and processing
                      volumes.
                    </p>
                  </div>

                  <div className="my-8 w-full group">
                    <a
                      href="/DAX Snip.png"
                      target="_blank"
                      className="relative block bg-slate-900 rounded-sm shadow-xl overflow-hidden border border-white/10 cursor-zoom-in"
                      aria-label="View Custom DAX Logic Snippet in full size"
                    >
                      <div className="px-4 py-2 bg-slate-800 border-b border-white/5 flex justify-between items-center">
                        <span className="text-blue-300 text-xs font-mono uppercase tracking-widest">
                          // Business Logic Engineering
                        </span>
                        <span className="text-white/40 text-[10px] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          Full Snippet
                        </span>
                      </div>
                      <div className="p-4">
                        <Image
                          src="/DAX Snip.png"
                          alt="Custom DAX Logic Snippet"
                          width={1200}
                          height={800}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="w-full h-auto object-contain rounded-sm transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
                    </a>
                  </div>

                  <div className="border-l-4 border-buttonaccent pl-6">
                    <h3 className="font-bold text-xl text-mainblue mb-2">
                      Deployment & Governance
                    </h3>
                    <p>
                      Rebuilt the final model in Power BI Desktop, creating
                      high-impact visualisations before coordinating the handoff
                      to the Data & Insight team for enterprise-wide publishing.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gray-50 p-8 md:p-12 rounded-sm border ring-1 ring-black/5">
                <h2 className="text-3xl font-extrabold text-mainblue mb-6">
                  The Impact
                </h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-buttonaccent font-black text-2xl">
                      01.
                    </span>
                    <div>
                      <p className="font-bold text-mainblue text-xl">
                        Standardisation
                      </p>
                      <p className="text-neutral-700">
                        Unified KPI definitions across all teams, ensuring
                        management reports are accurate and comparable.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-buttonaccent font-black text-2xl">
                      02.
                    </span>
                    <div>
                      <p className="font-bold text-mainblue text-xl">
                        Operational Insight
                      </p>
                      <p className="text-neutral-700">
                        Provided live visibility into processing times and
                        completion rates, enabling data-driven decision-making.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-buttonaccent font-black text-2xl">
                      03.
                    </span>
                    <div>
                      <p className="font-bold text-mainblue text-xl">
                        Future Proofing
                      </p>
                      <p className="text-neutral-700">
                        Created a repeatable framework that allowed the Data &
                        Insight team to automate refreshes and scale the
                        solution further.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
