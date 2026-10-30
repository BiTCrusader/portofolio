"use client"

import MouseEffects from "@/components/originkit/MouseEffects"

export default function MouseEffectsOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    >
      <MouseEffects
        interactionMode="sniper"
        color="#ffffff"
        duration={0.3}
        strokeWidth={2}
        effectSize={90}
        showLabel={false}
      />
    </div>
  )
}
