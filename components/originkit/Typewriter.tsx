"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type TypewriterProps = {
  texts: string[]
  prefix?: string
  color?: string
  typedColor?: string
  cursorColor?: string
  showCursor?: boolean
  hideCursorOnType?: boolean
  cursorChar?: string
  deleteSpeed?: number
  ease?: {
    duration?: number
    delay?: number
  }
  font?: React.CSSProperties
}

export default function Typewriter({
  texts = ["Hello World"],
  prefix = "",
  color = "#ffffff",
  typedColor,
  cursorColor = "#00e5ff",
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  deleteSpeed = 0.05,
  ease = { duration: 0.08, delay: 1.5 },
  font = {},
}: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (!texts.length) return

    const currentText = texts[textIndex % texts.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      }, Math.max(10, (ease.duration ?? 0.08) * 1000))
    } else if (
      !isDeleting &&
      displayText.length === currentText.length &&
      texts.length > 1
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, Math.max(0, (ease.delay ?? 1.5) * 1000))
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText((current) => current.slice(0, -1))
      }, Math.max(10, deleteSpeed * 1000))
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setTextIndex((index) => (index + 1) % texts.length)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, ease, deleteSpeed])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((visible) => !visible)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const textColor = typedColor ?? color
  const cursorShouldShow = showCursor && !(hideCursorOnType && !isDeleting)

  return (
    <span
      style={{
        display: "inline",
        color,
        ...font,
      }}
    >
      {prefix}
      <motion.span
        style={{
          color: textColor,
          whiteSpace: "pre-wrap",
        }}
      >
        {displayText}
      </motion.span>
      {cursorShouldShow && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: cursorVisible ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          style={{
            color: cursorColor,
            display: "inline-block",
            marginLeft: "2px",
          }}
        >
          {cursorChar}
        </motion.span>
      )}
    </span>
  )
}
