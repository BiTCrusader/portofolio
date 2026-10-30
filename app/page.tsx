"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { SiGmail } from "react-icons/si"

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
      "Web3 smart contract and escrow platform featuring AI verification agents and MetaMask connectivity for secure, decentralized transactions.",
    stack: ["Web3", "Smart contract", "AI agent", "MetaMask"],
  },
  {
    number: "02",
    name: "ScanNDine",
    category: "Web application · Food & beverage",
    description:
      "Self-service ordering system based on QR codes with real-time Kitchen Display System and payment gateway integration.",
    stack: ["QR ordering", "Real-time KDS", "Payment gateway"],
  },
  {
    number: "03",
    name: "im_relawan",
    category: "Mobile app · Social impact",
    description:
      "Flutter application for volunteer management and disaster reporting, with responsive status updates.",
    stack: ["Flutter", "Mobile", "Disaster response"],
  },
  {
    number: "04",
    name: "Image Huffman Compressor",
    category: "Desktop app · Image processing",
    description:
      "Image compression application based on Python and Streamlit with a custom binary header format .huffimg.",
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

const navItems = [
  { label: "HOME", href: "#beranda" },
  { label: "ABOUT", href: "#tentang" },
  { label: "PORTOFOLIO", href: "#portofolio" },
  { label: "CONTACT", href: "#kontak" },
]

export default function Page() {
  const [activeSection, setActiveSection] = useState("#beranda")
  const isClickScrolling = useRef(false)
  const clickTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const sectionIds = ["beranda", "tentang", "portofolio", "kontak"]

    const handleScroll = () => {
      if (isClickScrolling.current) return

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Jika sudah di dekat dasar halaman, aktifkan #kontak
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection("#kontak")
        return
      }

      // Jika di paling atas, aktifkan #beranda
      if (scrollY < 120) {
        setActiveSection("#beranda")
        return
      }

      const threshold = 220
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= threshold && rect.bottom > threshold) {
            setActiveSection(`#${id}`)
            break
          }
        }
      }
    }

    const handleUserScroll = () => {
      isClickScrolling.current = false
      if (clickTimeout.current) clearTimeout(clickTimeout.current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    window.addEventListener("wheel", handleUserScroll, { passive: true })
    window.addEventListener("touchmove", handleUserScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      window.removeEventListener("wheel", handleUserScroll)
      window.removeEventListener("touchmove", handleUserScroll)
      if (clickTimeout.current) clearTimeout(clickTimeout.current)
    }
  }, [])

  const handleItemClick = (item: { href?: string }) => {
    if (item?.href) {
      setActiveSection(item.href)
      isClickScrolling.current = true
      if (clickTimeout.current) clearTimeout(clickTimeout.current)
      clickTimeout.current = setTimeout(() => {
        isClickScrolling.current = false
      }, 900)
    }
  }

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
              items={navItems}
              activeHref={activeSection}
              onItemClick={handleItemClick}
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
                01 / About me
              </p>
              <h2 className="mt-5 max-w-sm text-4xl leading-[0.98] font-semibold tracking-[-0.06em] sm:text-5xl">
                Learning,
                <br />
                continue to grow.
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-[#393632] sm:text-2xl">
                I’m Rio, an Informatics Engineering student with an interest in building 
                digital products—from the user interface to the underlying systems. 
                I enjoy the process of transforming ideas into functional, usable solutions.
              </p>
              <p className="mt-6 border-l-2 border-[#f05a3e] pl-4 text-sm leading-relaxed text-[#625e58]">
                “Remain trusting in God and keep praying.”
              </p>
              <div className="mt-12 border-t border-[#191817]/20 pt-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] uppercase">
                  Focus & expertise
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
                3D Identity Card
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
                Explore the projects, certificates, and technologies I use.
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
                03 / Let’s connect
              </p>
              <h2 className="mt-5 max-w-3xl text-5xl leading-[0.92] font-semibold tracking-[-0.07em] sm:text-7xl">
                Have an interesting idea?
                <br />
                <span className="text-[#f05a3e]">Let’s discuss it.</span>
              </h2>
            </div>
            <div className="mt-10 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="mailto:rioantonprayoga1324@gmail.com"
                aria-label="Kirim email ke rioantonprayoga1324@gmail.com"
                className="contact-link group flex min-w-0 items-center gap-3 rounded-xl border px-4 py-3"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#191817]/[0.06]">
                  <SiGmail
                    className="size-6 shrink-0"
                    aria-hidden="true"
                  />
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
          </FadeContent>
        </footer>
      </main>
    </>
  )
}
