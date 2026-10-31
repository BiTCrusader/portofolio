"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Check, Copy, MapPin, Send } from "lucide-react"
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
  "Database management & MySQL",
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
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const isClickScrolling = useRef(false)
  const clickTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    navigator.clipboard.writeText("rioantonprayoga1324@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.email || !contactForm.message) return

    const subject = encodeURIComponent(`Portfolio Inquiry from ${contactForm.name}`)
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    )
    window.open(
      `mailto:rioantonprayoga1324@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    )

    setFormSubmitted(true)
    setTimeout(() => {
      setContactForm({ name: "", email: "", message: "" })
      setFormSubmitted(false)
    }, 4000)
  }

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
            className="mx-auto max-w-7xl lg:px-4"
            effect="mist"
            duration={1.8}
            ease="power2.out"
            stagger={0.1}
            threshold={0.1}
          >
            {/* Header Section */}
            <div className="mb-8 sm:mb-12">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#78c9ff] uppercase">
                01 / ABOUT ME
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl uppercase">
                LEARNING, CONTINUE TO GROW.
              </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
              {/* Card 1 (Main Bio & Quote): 2 columns on desktop */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b0f19]/70 p-6 sm:p-8 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-[#78c9ff]/30 hover:shadow-[0_0_25px_rgba(120,201,255,0.08)] md:col-span-2">
                <div>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                    I&apos;I’m Rio, an Informatics Engineering student with a strong passion for building end-to-end digital solutions. My journey in technology is driven by a deep curiosity about how systems work under the hood—from crafting intuitive front-end interfaces to architecting robust back-end engines.

Throughout my studies and practical projects, I’ve specialized in full-stack web and mobile application development. I enjoy bridging clean design with functional technical logic, leveraging modern frameworks to build seamless user experiences, solid APIs, and scalable database architectures.

Guided by a commitment to continuous growth, I constantly refine my craftsmanship and explore new technology stacks. I’m always eager to collaborate on innovative ideas, tackle complex engineering problems, and transform vision into high-quality software products.
                  </p>
                </div>
                <div className="mt-8 border-l-2 border-[#78c9ff]/60 pl-4 py-1">
                  <p className="text-sm sm:text-base italic text-gray-400">
                    &ldquo;Remain trusting in God and keep praying.&rdquo;
                  </p>
                </div>
              </div>

              {/* Card 2 (3D Identity Card): 1 column on the right */}
              <div className="flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-[#0b0f19]/70 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-[#78c9ff]/30 hover:shadow-[0_0_25px_rgba(120,201,255,0.08)] md:col-span-1">
                <p className="font-mono text-xs tracking-widest text-gray-400 uppercase text-center mb-3">
                  3D IDENTITY CARD
                </p>
                <div className="relative my-auto h-[320px] sm:h-[360px] w-full overflow-hidden flex items-center justify-center">
                  <Lanyard
                    frontImage="/lanyard/card-front.png"
                    backImage="/lanyard/card-back.png"
                    strapImage="/lanyard/band.png"
                    size={0.5}
                    style={{}}
                  />
                </div>
              </div>

              {/* Card 3 (Focus & Expertise): full width below */}
              <div className="rounded-2xl border border-white/10 bg-[#0b0f19]/70 p-6 sm:p-8 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-[#78c9ff]/30 hover:shadow-[0_0_25px_rgba(120,201,255,0.08)] md:col-span-3">
                <div className="mb-5">
                  <h3 className="font-mono text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Focus & Expertise
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {capabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-gray-200 backdrop-blur-sm transition-all duration-200 hover:border-[#78c9ff]/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(120,201,255,0.18)]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#78c9ff] shadow-[0_0_8px_#78c9ff]" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
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
            {/* Header Section */}
            <div className="space-y-4">
              {/* Availability Badge & Sub-label */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#78c9ff] uppercase">
                  03 / LET&apos;S CONNECT
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="font-mono text-xs font-medium tracking-wider text-emerald-400 uppercase">
                    AVAILABLE FOR NEW OPPORTUNITIES
                  </span>
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight max-w-4xl">
                Have a project in mind? Let&apos;s build something great together.
              </h2>

              {/* Brief Description */}
              <p className="max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
                Feel free to reach out for full-stack opportunities, web/mobile applications, or just a technical chat.
              </p>
            </div>

            {/* Split 2-Column Layout */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Left Column: Contact Cards List */}
              <div className="flex flex-col gap-4">
                {/* Email Card with Click to Copy */}
                <div
                  onClick={() => handleCopyEmail()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      handleCopyEmail()
                    }
                  }}
                  className="group flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5 backdrop-blur-md transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-800/60 shadow-lg"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-[#78c9ff] transition-colors group-hover:bg-blue-500/20 group-hover:text-white">
                      <SiGmail className="size-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                        Email
                      </span>
                      <span className="mt-0.5 truncate text-sm font-medium text-gray-200 transition-colors group-hover:text-white sm:text-base">
                        rioantonprayoga1324@gmail.com
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCopyEmail()
                    }}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                      copiedEmail
                        ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.2)]"
                        : "border-slate-700/70 bg-slate-800/60 text-gray-300 group-hover:border-blue-500/40 group-hover:text-white"
                    }`}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* GitHub Card */}
                <a
                  href="https://github.com/BiTCrusader"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub BiTCrusader"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5 backdrop-blur-md transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-800/60 shadow-lg"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-slate-800 text-gray-300 transition-colors group-hover:bg-slate-700 group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.62 5.23-5.11 5.5.4.35.76 1.03.76 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                        GitHub
                      </span>
                      <span className="mt-0.5 truncate text-sm font-medium text-gray-200 transition-colors group-hover:text-white sm:text-base">
                        @BiTCrusader
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </a>

                {/* Instagram Card */}
                <a
                  href="https://instagram.com/ri0_110300"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram ri0_110300"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5 backdrop-blur-md transition-all duration-200 hover:border-blue-500/50 hover:bg-slate-800/60 shadow-lg"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-pink-500/10 text-pink-400 transition-colors group-hover:bg-pink-500/20 group-hover:text-pink-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                        Instagram
                      </span>
                      <span className="mt-0.5 truncate text-sm font-medium text-gray-200 transition-colors group-hover:text-white sm:text-base">
                        @ri0_110300
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </a>
              </div>

              {/* Right Column: Quick Contact Form */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7 backdrop-blur-md shadow-lg">
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs font-medium tracking-wider text-gray-400 uppercase mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs font-medium tracking-wider text-gray-400 uppercase mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-mono text-xs font-medium tracking-wider text-gray-400 uppercase mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell me about your project or inquiry..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 shadow-md shadow-blue-600/20 active:scale-[0.99]"
                  >
                    {formSubmitted ? (
                      <>
                        <Check size={16} className="text-white" />
                        <span>Message Prepared & Opened!</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Footer Info */}
            <div className="mt-14 flex items-center justify-center gap-2 font-mono text-xs text-gray-500 sm:mt-16">
              <MapPin size={14} className="text-[#78c9ff]" />
              <span>Based in Samarinda, Indonesia (UTC+8)</span>
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
            <span></span>
          </FadeContent>
        </footer>
      </main>
    </>
  )
}
