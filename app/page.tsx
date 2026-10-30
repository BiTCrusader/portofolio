import { ArrowUpRight, Mail } from "lucide-react"

import FadeContent from "@/components/FadeContent"
import Lanyard from "@/components/Lanyard"
import PillNav from "@/components/PillNav"
import PortfolioTabs from "@/components/PortfolioTabs"
import { certificates } from "@/data/certificates"
import Hero35 from "@/components/originkit/hero-35"

const projects = [
  {
    number: "01",
    name: "EscrowAI",
    category: "Web3 · AI · Smart contract",
    description:
      "Platform smart contract dan escrow Web3 dengan agen verifikasi AI serta konektivitas MetaMask untuk transaksi terdesentralisasi yang aman.",
    stack: ["Web3", "Smart contract", "AI agent", "MetaMask"],
  },
  {
    number: "02",
    name: "el-barito-order",
    category: "Web application · Food & beverage",
    description:
      "Sistem pemesanan mandiri berbasis kode QR dengan Kitchen Display System real-time dan integrasi payment gateway.",
    stack: ["QR ordering", "Real-time KDS", "Payment gateway"],
  },
  {
    number: "03",
    name: "im_relawan",
    category: "Mobile app · Social impact",
    description:
      "Aplikasi Flutter untuk manajemen relawan dan pelaporan bencana, dengan pembaruan status yang responsif.",
    stack: ["Flutter", "Mobile", "Disaster response"],
  },
  {
    number: "04",
    name: "Image Huffman Compressor",
    category: "Desktop app · Image processing",
    description:
      "Aplikasi kompresi gambar berbasis Python dan Streamlit dengan format binary header kustom .huffimg.",
    stack: ["Python", "Streamlit", "Huffman coding"],
  },
]

const capabilities = [
  "Responsive web interface",
  "Front-end development",
  "Back-end systems",
  "Database management",
  "MySQL",
]

const techStack = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Prisma",
  "Solidity",
  "Python",
  "PHP",
  "MySQL",
  "Supabase",
  "Firebase",
  "XAMPP",
  "Git",
  "GitHub",
  "Vite",
  "Vercel",
]

export default function Page() {
  return (
    <>
      <div className="originkit-hero35">
        <Hero35 />
      </div>
      <main className="portfolio-page overflow-x-clip bg-[#f3f0e9] text-[#191817]">
        <FadeContent
          className="hero-navigation relative z-20 mx-auto w-full max-w-7xl"
          effect="mist"
          duration={1.8}
          ease="power2.out"
          stagger={0.1}
          threshold={0.1}
        >
          <header className="flex items-center justify-center px-6 py-6 sm:px-10 lg:px-14">
            <PillNav
              logo="/lanyard/card-front.png"
              logoAlt="Rio Anton Prayoga"
              logoHref="#beranda"
              items={[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang", href: "#tentang" },
                { label: "Portofolio", href: "#portofolio" },
                { label: "Kontak", href: "#kontak" },
              ]}
              defaultActiveIndex={0}
              ariaLabel="Navigasi utama"
              theme="dark"
              size="lg"
              surface="glass"
              itemStyle="pill"
              hoverEffect="fill"
              indicator="dot"
              highlightColor="#78c9ff"
              highlightTextColor="#101827"
              style={{}}
            />
          </header>
        </FadeContent>

        <section id="tentang" className="px-6 py-24 sm:px-10 lg:py-32">
          <FadeContent
            className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-12 lg:px-4 xl:grid-cols-[0.7fr_1.2fr_0.7fr]"
            effect="mist"
            duration={1.8}
            ease="power2.out"
            stagger={0.1}
            threshold={0.1}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f05a3e] uppercase">
                01 / Tentang saya
              </p>
              <h2 className="mt-5 max-w-sm text-4xl leading-[0.98] font-semibold tracking-[-0.06em] sm:text-5xl">
                Sedang belajar,
                <br />
                terus bertumbuh.
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-[#393632] sm:text-2xl">
                Saya Rio, mahasiswa Teknik Informatika yang tertarik membangun
                produk digital dari antarmuka hingga sistem di baliknya. Saya
                menikmati proses mengubah ide menjadi solusi yang bisa
                digunakan.
              </p>
              <p className="mt-6 border-l-2 border-[#f05a3e] pl-4 text-sm leading-relaxed text-[#625e58]">
                “Tetap bertawakal dan berdoa.”
              </p>
              <div className="mt-12 border-t border-[#191817]/20 pt-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase">
                  Fokus & keahlian
                </h3>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {capabilities.map((capability, index) => (
                    <li
                      key={capability}
                      className="flex items-center gap-3 text-sm text-[#4e4a45]"
                    >
                      <span className="font-mono text-[10px] text-[#f05a3e]">
                        0{index + 1}
                      </span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[280px] lg:col-span-2 lg:justify-self-center xl:col-span-1 xl:col-start-3 xl:row-start-1">
              <p className="mb-2 text-center text-[10px] font-medium tracking-[0.16em] text-[#625e58] uppercase">
                Kartu identitas 3D
              </p>
              <div className="h-[380px] w-full overflow-hidden">
                <Lanyard
                  frontImage="/lanyard/card-front.png"
                  backImage="/lanyard/card-back.png"
                  strapImage="/lanyard/band.png"
                  size={0.5}
                  style={{}}
                />
              </div>
              <p className="mt-2 text-center text-[10px] leading-relaxed text-[#77716a]"></p>
            </div>
          </FadeContent>
        </section>

        <section
          id="portofolio"
          className="bg-[#e9e5dc] px-6 py-24 sm:px-10 lg:px-14 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <FadeContent
              className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
              effect="mist"
              duration={1.8}
              ease="power2.out"
              stagger={0.1}
              threshold={0.1}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#f05a3e] uppercase">
                  02 / Portofolio
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
                  Portofolio<span className="text-[#f05a3e]">.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#625e58]">
                Jelajahi proyek, sertifikat, serta teknologi yang saya gunakan.
              </p>
            </FadeContent>

            <PortfolioTabs
              projects={projects}
              techStack={techStack}
              certificates={certificates}
            />
          </div>
        </section>

        <section id="kontak" className="px-6 py-24 sm:px-10 lg:py-32">
          <FadeContent
            className="mx-auto max-w-7xl lg:px-4"
            effect="mist"
            duration={1.8}
            ease="power2.out"
            stagger={0.1}
            threshold={0.1}
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f05a3e] uppercase">
                03 / Mari terhubung
              </p>
              <h2 className="mt-5 max-w-3xl text-5xl leading-[0.92] font-semibold tracking-[-0.07em] sm:text-7xl">
                Punya ide menarik?
                <br />
                <span className="text-[#f05a3e]">Mari berdiskusi.</span>
              </h2>
            </div>
            <div className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="mailto:rioantonprayoga1324@gmail.com"
                aria-label="Kirim email ke rioantonprayoga1324@gmail.com"
                className="contact-link group flex min-w-0 items-center gap-3 rounded-xl border px-4 py-3"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#191817]/[0.06]">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase">
                    Email
                  </span>
                  <span className="mt-1 text-sm font-medium break-all">
                    rioantonprayoga1324@gmail.com
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://github.com/BiTCrusader"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub BiTCrusader"
                className="contact-link group flex min-w-0 items-center gap-3 rounded-xl border px-4 py-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 shrink-0"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.62 5.23-5.11 5.5.4.35.76 1.03.76 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase">
                    GitHub
                  </span>
                  <span className="mt-1 truncate text-sm font-medium">
                    @BiTCrusader
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="https://instagram.com/ri0_110300"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram ri0_110300"
                className="contact-link group flex min-w-0 items-center gap-3 rounded-xl border px-4 py-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                <span className="flex min-w-0 flex-col">
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase">
                    Instagram
                  </span>
                  <span className="mt-1 truncate text-sm font-medium">
                    @ri0_110300
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </FadeContent>
        </section>

        <footer className="border-t border-[#191817]/15 px-6 py-6 sm:px-10 lg:px-14">
          <FadeContent
            className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-[10px] font-medium tracking-[0.14em] text-[#625e58] uppercase sm:flex-row"
            effect="mist"
            duration={1.8}
            ease="power2.out"
            stagger={0.1}
            threshold={0.1}
          >
            <span>© 2026 Rio Anton Prayoga</span>
            <span>Dibuat dengan rasa ingin tahu dan secangkir kopi.</span>
          </FadeContent>
        </footer>
      </main>
    </>
  )
}
