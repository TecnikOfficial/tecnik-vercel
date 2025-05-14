"use client"

import { useState, useEffect } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentYear, setCurrentYear] = useState(1999)
  const [opacity, setOpacity] = useState(1)
  const [display, setDisplay] = useState("flex")

  useEffect(() => {
    const updateYear = () => {
      if (currentYear <= 2025) {
        setOpacity(1)

        const baseDelay = 600
        const finalDelay = 600

        // Calculate delay based on year
        const delay =
          currentYear === 1999
            ? baseDelay
            : currentYear === 2024
              ? finalDelay
              : (2000 - baseDelay - finalDelay) / (27 - 2)

        if (currentYear < 2025) {
          // Fade out current year
          setTimeout(() => setOpacity(0), delay - 30)

          // Update to next year
          setTimeout(() => {
            setCurrentYear((prev) => prev + 1)
          }, delay)
        } else {
          // Final year reached, fade out loading screen
          setTimeout(() => {
            setOpacity(0)
            setTimeout(() => {
              setDisplay("none")
              onComplete()
            }, 3400)
          }, 700)
        }
      }
    }

    updateYear()
  }, [currentYear, onComplete])

  return (
    <div
      id="loading-screen"
      style={{
        opacity,
        display,
        transition: "opacity 5s ease",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        zIndex: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="loading-content">
        <div id="year-timer">{currentYear}</div>
      </div>
    </div>
  )
}
