import Header from "@/components/Header";
import Image from "next/image";

export const metadata = {
  title: "Contact | Alfie Lancaster",
  description:
    "Get in touch to discuss data systems, automation, and streamlining your operational workflows.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className="bg-mainblue text-white min-h-[100svh] w-full flex items-center justify-center pt-[120px] md:pt-[160px] pb-12 overflow-x-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left justify-center h-full">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Contact me
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold opacity-90">
                  Stop fighting your data
                </h2>
                <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                  Whether you need to automate a manual bottleneck or architect a 
                  resilient Power BI reporting system, I'm ready to help you build it.
                </p>
              </div>

              <div className="space-y-6 pt-4 w-full flex flex-col items-center lg:items-start">
                <div className="space-y-2 flex flex-col items-center lg:items-start">
                  <p className="text-sm uppercase tracking-widest text-white/60 font-bold">
                    Email
                  </p>
                  <a
                    href="mailto:alfie.lancaster@outlook.com"
                    className="text-xl font-semibold underline hover:text-buttonaccent transition-colors break-all"
                  >
                    alfie.lancaster@outlook.com
                  </a>
                </div>

                <div className="space-y-3 flex flex-col items-center lg:items-start">
                  <p className="text-sm uppercase tracking-widest text-white/60 font-bold">
                    LinkedIn
                  </p>
                  <div className="flex flex-wrap gap-5 pt-1 justify-center lg:justify-start">
                    <a
                      href="https://linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:-translate-y-1 transition-transform"
                      aria-label="Connect with me on LinkedIn"
                    >
                      <Image
                        src="/linked.svg"
                        alt="LinkedIn Logo"
                        width={44}
                        height={44}
                        className="opacity-90 hover:opacity-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form card */}
            <div className="w-full flex items-start justify-center">
              <div className="w-full lg:max-w-md rounded-sm bg-white/5 ring-1 ring-white/10 shadow-[12px_12px_0_rgba(0,0,0,0.25)] p-6 md:p-10">
                <form
                  action="https://formspree.io/f/mpqjbjzj"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="space-y-1.5 flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-white/70"
                    >
                      Name (required)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-sm bg-white text-mainblue px-4 py-3 outline-none focus:ring-2 focus:ring-buttonaccent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-white/70"
                    >
                      Email (required)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-sm bg-white text-mainblue px-4 py-3 outline-none focus:ring-2 focus:ring-buttonaccent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold uppercase tracking-wider text-white/70"
                    >
                      Subject (required)
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-sm bg-white text-mainblue px-4 py-3 outline-none focus:ring-2 focus:ring-buttonaccent transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-1.5 flex flex-col">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-white/70"
                    >
                      Message (required)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-sm bg-white text-mainblue px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-buttonaccent transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-sm bg-buttonaccent text-white py-4 font-bold hover:brightness-110 shadow-lg active:scale-95 transition-all cursor-pointer mt-2"
                  >
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}