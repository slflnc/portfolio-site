import Link from "next/link";

export default function Hero() {
  const bubbles = [
    { label: "RPA",           cls: "text-3xl font-medium px-4 py-4 -rotate-1" },
    { label: "SharePoint Architecture", cls: "text-lg  font-bold   px-5 py-2  translate-y-1" },
    { label: "Power Automate",          cls: "text-2xl font-semibold px-7 py-3  rotate-1" },
    { label: "Relational Modelling",    cls: "text-xl  font-semibold px-6 py-3  -translate-y-1" },
    { label: "ETL",           cls: "text-3xl font-extrabold px-6 py-3  -rotate-2" },
    { label: "Python",                  cls: "text-lg  font-medium   px-5 py-2  rotate-2" },
    { label: "Process Automation",      cls: "text-2xl font-semibold px-7 py-3" },
    { label: "Advanced DAX",            cls: "text-xl  font-semibold px-6 py-3  translate-y-1" },
    { label: "Data Strategy",           cls: "text-lg font-extrabold px-6 py-5 -rotate-1 md:text-2xl md:px-10" },
    { label: "Business Logic",          cls: "text-xl  font-semibold px-6 py-3  -translate-y-1" },
  ];

  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center bg-mainblue text-white overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-[140px] pb-12 lg:pt-0 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg tracking-tight">
              Hi, I’m Alfie
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-semibold opacity-90 leading-relaxed max-w-xl">
              Optimising business intelligence through precision data modeling and end-to-end process automation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              
              <Link 
                href="#projects" 
                className="w-full sm:w-auto text-center bg-buttonaccent hover:brightness-110 text-white hover:-translate-y-1 active:scale-95 font-bold py-4 px-10 shadow-lg transition-all duration-200 text-lg"
              >
                View my projects →
              </Link>

              <a 
                href="/Alfie_Lancaster_CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-white text-mainblue ring-1 ring-black/10 hover:bg-gray-50 hover:-translate-y-1 active:scale-95 font-bold py-4 px-10 shadow-lg transition-all duration-200 text-lg"
              >
                Download CV ↓
              </a>

            </div>
            </div>

          <div className="w-full lg:w-1/2 flex flex-wrap gap-4 justify-center items-center select-none">
            {bubbles.map(({ label, cls }) => (
              <span
                key={label}
                className={`inline-flex items-center whitespace-nowrap
                            bg-white text-mainblue
                            shadow-[0_8px_0_rgba(0,0,0,0.25)] ring-1 ring-black/10
                            transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_12px_0_rgba(0,0,0,0.2)]
                            will-change-transform cursor-crosshair ${cls}`}
              >
                {label}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}