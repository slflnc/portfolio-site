import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/starschema.png",
    altText: "Relational Star Schema data model diagram for Power BI",
    subtitle: "SharePoint to Power BI Reporting Architecture",
    description: `Redesigned fragmented Excel reporting into a centralised SharePoint data layer. Built a relational Star Schema and DAX measures to automate "Working-Day" KPIs, providing live operational visibility across the county.`,
    tags: [
      "Power BI",
      "DAX",
      "SharePoint Architecture",
      "Data Modelling",
      "ETL",
    ],
    button: "View Project →",
    link: "/data-bi",
    bg: "bg-mainblue text-white",
  },
  {
    image: "/PAD.png",
    altText: "Power Automate Desktop logic flow for retry mechanisms",
    subtitle: "Resilient RPA – High-Volume Data Automation",
    description: `Engineered a Power Automate Desktop solution to process 22,000+ records. Implemented advanced 3-attempt retry logic and automated Excel audit write-backs to ensure 100% traceability and zero data loss during high-volume migration.`,
    tags: [
      "RPA",
      "Power Automate",
      "Error Handling",
      "Process Mapping",
      "Excel Automation",
    ],
    button: "View Project →",
    link: "/rpa-automation",
    bg: "bg-blue-100 text-mainblue",
  },
  {
    image: "/py-thumb.png",
    altText: "Python Pandas code snippet next to generated document icons",
    subtitle: "Python Automation – Dynamic Batch Letter Generation",
    description: `Developed a Python tool to eliminate a 4-hour manual mail-merge process. Uses Pandas to group system exports by Entity and dynamically generate individual letters with embedded client data tables in seconds.`,
    tags: [
      "Python",
      "Pandas",
      "Automation",
      "Document Generation",
      "Business Logic",
    ],
    button: "View Project →",
    link: "/python-automation",
    bg: "bg-mainblue text-white",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-mainblue mb-16 tracking-tight">
          Featured Projects
        </h2>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.subtitle}
              className={`p-8 md:p-12 ${project.bg} shadow-xl rounded-sm transition-transform hover:-translate-y-1`}
            >
              <div
                className={`flex flex-col justify-between items-center gap-12 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                <div className="w-full lg:w-1/2">
                  <Link 
                    href={project.link} 
                    className="block group"
                    
                    aria-label={`View case study for ${project.subtitle}`}
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded shadow-2xl bg-white/10 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.altText} 
                        fill
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        priority={idx === 0}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {project.subtitle}
                  </h3>
                  <p className="text-lg font-medium opacity-90 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm font-bold shadow-[0_4px_0_rgba(0,0,0,0.2)] ring-1 ring-black/5 
                                   ${project.bg.includes("mainblue") ? "bg-white text-mainblue" : "bg-mainblue text-white"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <Link
                      href={project.link}
                      aria-label={`Read Case Study: ${project.subtitle}`}
                      className={`inline-block px-8 py-4 text-sm font-bold transition-all active:scale-95 shadow-lg
                        ${
                          project.bg.includes("blue-100")
                            ? "bg-mainblue text-white hover:brightness-110"
                            : "bg-white text-mainblue hover:bg-gray-100"
                        }`}
                    >
                      {project.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}