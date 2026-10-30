"use client"

import AsciiImage from "@/components/originkit/ui/hero-35/ascii-reveal"

const PROFILE_IMAGE = "/lanyard/penguin-profile.png"

const BOX =
  "pointer-events-none relative h-[213px] w-full max-w-[318.62px] ipad:h-[363px] ipad:w-[543px] ipad:max-w-none ipad-landscape:h-[310px] ipad-landscape:w-[370px] desktop-sm:h-[551px] desktop-sm:w-[679px] desktop-sm:pointer-events-auto"

const CANVAS =
  "absolute top-1/2 left-1/2 size-[308px] -translate-x-1/2 -translate-y-1/2 ipad:size-[504px] ipad-landscape:size-[350px] desktop-sm:size-[700px]"

export const AsciiPenguin = () => (
  <div className={BOX}>
    <div className={CANVAS}>
      <AsciiImage
        image={{
          src: PROFILE_IMAGE,
          alt: "Ilustrasi profil pinguin",
        }}
        fit="contain"
        columns={140}
        ramp=" .:-=+*#%@"
        invert={false}
        contrast={100}
        colorMode="image"
        reveal={true}
        revealOptions={{
          size: 80,
          softness: 16,
        }}
      />
    </div>
  </div>
)
