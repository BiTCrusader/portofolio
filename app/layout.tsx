import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import "./portfolio.css"
import MouseEffectsOverlay from "@/components/MouseEffectsOverlay"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Rio Anton Prayoga — Portofolio",
  description:
    "Portofolio Rio Anton Prayoga, mahasiswa Teknik Informatika yang membangun pengalaman web, aplikasi, dan sistem digital.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          {children}
          <MouseEffectsOverlay />
        </ThemeProvider>
      </body>
    </html>
  )
}
