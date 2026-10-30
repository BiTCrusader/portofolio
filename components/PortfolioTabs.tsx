"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, FileBadge2 } from "lucide-react"
import {
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPython,
  SiPrisma,
  SiReact,
  SiSolidity,
  SiSupabase,
  SiVercel,
  SiVite,
  SiXampp,
} from "react-icons/si"
import type { IconType } from "react-icons"
import type { Certificate } from "@/data/certificates"

type Project = {
  number: string
  name: string
  category: string
  description: string
  stack: string[]
}

type PortfolioTab = "projects" | "certificates" | "tech-stack"

const techStackIcons: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "#61dafb" },
  JavaScript: { icon: SiJavascript, color: "#f7df1e" },
  HTML5: { icon: SiHtml5, color: "#e34f26" },
  CSS3: { icon: SiCss, color: "#1572b6" },
  Prisma: { icon: SiPrisma, color: "#ffffff" },
  Solidity: { icon: SiSolidity, color: "#8c8c8c" },
  Python: { icon: SiPython, color: "#ffd43b" },
  PHP: { icon: SiPhp, color: "#8892be" },
  MySQL: { icon: SiMysql, color: "#5b9ab5" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  Firebase: { icon: SiFirebase, color: "#ff9100" },
  XAMPP: { icon: SiXampp, color: "#fb7a24" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: "#f4f4f5" },
  Vite: { icon: SiVite, color: "#bd34fe" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
}

const tabs: { id: PortfolioTab; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "tech-stack", label: "Tech Stack" },
]

export default function PortfolioTabs({
  projects,
  techStack,
  certificates,
}: {
  projects: Project[]
  techStack: string[]
  certificates: Certificate[]
}) {
  const [activeTab, setActiveTab] = useState<PortfolioTab>("projects")

  return (
    <div className="mt-12">
      <div
        className="flex flex-wrap gap-2 border-b border-[#191817]/15 pb-4"
        role="tablist"
        aria-label="Kategori portofolio"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`portfolio-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls="portfolio-panel"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full border px-5 py-2.5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
              activeTab === tab.id
                ? "border-[#191817] bg-[#191817] text-[#f3f0e9]"
                : "border-[#191817]/20 bg-white/40 text-[#625e58] hover:border-[#191817]/50 hover:text-[#191817]"
            }`}
          >
            <span className="portfolio-tab-label">{tab.label}</span>
            <span className="portfolio-tab-indicator" aria-hidden="true" />
          </button>
        ))}
      </div>

      <div
        id="portfolio-panel"
        role="tabpanel"
        aria-labelledby={`portfolio-tab-${activeTab}`}
        key={activeTab}
        className="portfolio-tab-panel pt-8"
      >
        {activeTab === "projects" && (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.number}
                style={{ animationDelay: `${index * 80}ms` }}
                className="group flex min-h-[300px] flex-col justify-between border border-[#191817]/15 bg-[#f3f0e9] p-6 transition-colors hover:bg-[#191817] hover:text-[#f3f0e9] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-[#f05a3e]">
                    / {project.number}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-[#625e58] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f05a3e]"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-12">
                  <p className="mb-3 text-[10px] font-medium tracking-[0.14em] text-[#77716a] uppercase group-hover:text-[#c2bbb1]">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#625e58] group-hover:text-[#d4cec5]">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#191817]/15 px-3 py-1 text-[10px] text-[#625e58] group-hover:border-white/25 group-hover:text-[#d4cec5]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {activeTab === "certificates" && (
          certificates.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((certificate, index) => (
                <article
                  key={`${certificate.issuer}-${certificate.title}`}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className="portfolio-card-enter overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
                >
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Lihat sertifikat ${certificate.title}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                      {certificate.image.toLowerCase().endsWith(".pdf") ? (
                        <div className="flex h-full flex-col items-center justify-center gap-3 text-[#b7b7b7] transition-colors group-hover:text-white">
                          <FileBadge2 size={40} aria-hidden="true" />
                          <span className="text-xs font-semibold tracking-[0.16em] uppercase">
                            Buka sertifikat PDF
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={certificate.image}
                          alt={`Sertifikat ${certificate.title}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-4 p-5">
                      <div>
                        <h3 className="font-semibold">{certificate.title}</h3>
                        <p className="mt-1 text-sm text-[#b7b7b7]">
                          {certificate.issuer}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="shrink-0 text-[#b7b7b7] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex min-h-56 flex-col items-center justify-center border border-dashed border-[#191817]/25 px-6 text-center">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#f05a3e] uppercase">
                Certificates
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">
                Sertifikat belum ditambahkan
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[#b7b7b7]">
                Tambahkan file ke folder public/certificates, lalu daftarkan
                informasinya di data/certificates.ts.
              </p>
            </div>
          )
        )}

        {activeTab === "tech-stack" && (
          <div className="tech-stack-grid grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {techStack.map((technology, index) => {
              const techIcon = techStackIcons[technology]
              const Icon = techIcon?.icon

              return (
                <div
                  key={technology}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className="tech-stack-card flex min-h-44 flex-col items-center justify-center gap-5 rounded-[22px] border px-4 py-6 text-center"
                >
                  {Icon && (
                    <Icon
                      className="tech-stack-icon size-14"
                      style={{ color: techIcon.color }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-lg font-semibold tracking-tight text-[#d8deea]">
                    {technology}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
