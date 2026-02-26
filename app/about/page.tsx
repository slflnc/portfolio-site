import Header from "@/components/Header";
import Image from "next/image";


export const metadata = {
  title: "About | Alfie Lancaster - Data Systems & Automation",
  description:
    "Bridging the gap between complex fiduciary requirements and high-performance data systems. Learn about my journey from Law to Computer Science.",
  openGraph: {
    title: "Alfie Lancaster | High-Stakes Logic. Resilient Automation.",
    description:
      "I bridge the gap between complex fiduciary requirements and high-performance data systems.",
    url: "https://alfielancaster.dev/about",
  },
};


const educationItems = [
  "MSc Computer Science - Distinction",
  "LLB Law (Honours) - 2.1",
  "Google UX Design Professional Certificate",
  "Level 3 Diploma in Business Studies",
];

const pivotItems = [
  {
    title: "The IT Foundation",
    description:
      "Pivoted to IT Support to master the 'nuts and bolts' of infrastructure, ensuring I could build solutions from the hardware up.",
  },
  {
    title: "The Strategic Return",
    description:
      "Returned to Adult Social Care as a Finance Systems Officer, tasked with innovating workflows and automating high-volume migrations at scale.",
  },
  {
    title: "The Future Focus",
    description:
      "Now focused on advanced technical projects that require a consultant's eye for strategy and a developer's ability to execute.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-mainblue text-white pt-[140px] md:pt-[180px] pb-16">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Critical Business Logic. <br />
                Resilient Automation.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I bridge the gap between data vision and system performance.
              </p>
            </div>

            <div className="relative group">
              <div className="relative w-[300px] md:w-[370px] aspect-square rounded-sm shadow-[8px_8px_0px_white,16px_16px_0px_rgba(255,255,255,0.2)]">
              
                <Image
                  src="/Headshot3.png" 
                  alt="Alfie Lancaster"
                  fill
                  sizes="(max-width: 768px) 300px, 370px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-b border-gray-100">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-mainblue uppercase tracking-wider text-sm">
                The Evolution
              </h2>
              <h3 className="text-4xl font-extrabold text-mainblue tracking-tight">
                Data with Real-World Consequences
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                My career began in the high-pressure world of{" "}
                <strong>Health & Adult Social Care Finance</strong>, from
                invoicing, journalling, and arranging payments, to acting as a
                corporate Appointee & Deputy for the{" "}
                <strong>Court of Protection team</strong>.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                In a role governed by strict legal frameworks and fiduciary
                duties, I saw firsthand how "spreadsheet chaos" could lead to
                genuine risk. I became the go-to person for navigating messy
                reports, amending systems, and fixing broken workflows.
                Eventually, I realised that I didn't just want to patch
                redundant processes, I wanted to{" "}
                <strong>engineer the systems</strong> that made following them
                effortless.
              </p>
            </div>

            <div className="bg-blue-50 p-8 md:p-12 border-l-4 border-mainblue shadow-sm">
              <h3 className="text-2xl font-bold text-mainblue mb-4 italic">
                From Law to Computer Science
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                I originally set out to practice as a solicitor within the{" "}
                <strong>Court of Protection</strong>, a field requiring
                meticulous attention to detail and a high duty of care. <br />
                <br />I have since channeled that commitment to{" "}
                <strong>rigorous logic</strong> into an MSc in Computer Science
                to build resilient data systems where accuracy and reliability
                are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl font-extrabold text-mainblue tracking-tight max-w-3xl">
              Turning "Can this be done?" into "It's already automated."
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8 w-full">
              {pivotItems.map((item, index) => (
                <li key={index} className="p-6 bg-gray-50 rounded-sm">
                  <h4 className="font-bold text-mainblue mb-2 text-xl underline decoration-buttonaccent decoration-4 underline-offset-4">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="bg-blue-50 py-20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-mainblue mb-4">
                Education
              </h2>
              {/* FIXED: Removed "legal discipline" and focused on analytical skills */}
              <p className="text-mainblue/70 font-medium">
                A foundation in analytical problem-solving and advanced technical engineering.
              </p>
            </div>

            <ul className="lg:w-2/3 flex flex-wrap justify-center lg:justify-start gap-4">
              {educationItems.map((item) => (
                <li
                  key={item}
                  className="bg-white text-mainblue px-6 py-4 font-bold shadow-[6px_6px_0px_#001f3f] ring-1 ring-black/5 text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}