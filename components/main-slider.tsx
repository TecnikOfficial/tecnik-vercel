"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface MainSliderProps {
  onContactClick: () => void
  onServicesClick: () => void
  onProjectsClick: () => void
}

export default function MainSlider({ onContactClick, onServicesClick, onProjectsClick }: MainSliderProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [sliderText, setSliderText] = useState("Welcome\nThanks for Visiting!")
  const textChangeIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const textOptions = [
    "COMPUTER ENTHUSIAST",
    "GRAPHICS DESIGNER VFX",
    "A.i TECH EXPLORER 0101",
    "WEB DESIGN + DEVELOPER",
    "PRIVACY FOCUSED MODE",
    "DIGITAL MUSIC CREATOR",
    "CASUAL GAMER GG + OG",
    "FREELANCE VIDEO EDITOR",
  ]

  useEffect(() => {
    // Start text rotation after a delay
    const timer = setTimeout(() => {
      startTextDisplay()
    }, 600)

    return () => {
      clearTimeout(timer)
      if (textChangeIntervalRef.current) {
        clearInterval(textChangeIntervalRef.current)
      }
    }
  }, [])

  const startTextDisplay = () => {
    if (textChangeIntervalRef.current) {
      clearInterval(textChangeIntervalRef.current)
    }

    textChangeIntervalRef.current = setInterval(changeText, 3000)
  }

  const changeText = () => {
    const nextIndex = currentTextIndex < textOptions.length ? currentTextIndex : 0
    setSliderText(textOptions[nextIndex])
    setCurrentTextIndex(nextIndex + 1)
  }

  const copyDiscord = () => {
    navigator.clipboard
      .writeText("tecnik.gg")
      .then(() => alert("Discord username copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err))
  }

  return (
    <div className="slider">
      <Image
        src="/assets/media/tecnikofficial.webp"
        onClick={copyDiscord}
        className="hover-image"
        alt="Main Image"
        width={322}
        height={60}
        priority
        unoptimized
      />

      <div className="text three-d" id="slider-text" onClick={changeText}>
        {sliderText}
      </div>

      <div className="button-container">
        <button className="glow-button" id="contactButton" title="📧Connect with Us" onClick={onContactClick}>
          Contact
        </button>

        <button className="glow-button" id="button2" title="💲Freelance" onClick={onServicesClick}>
          Services
        </button>

        <button className="glow-button" id="button3" title="✔️Completed & Delivered" onClick={onProjectsClick}>
          Projects
        </button>
      </div>

      <div className="iframe-container">
        <iframe
          id="hearthis_at_user_syncking"
          width="100%"
          height="350"
          src="https://app.hearthis.at/syncking/embed/?hcolor=ba1010&css=&skin=black"
          title="SyncKing"
          frameBorder="0"
          allowTransparency
        ></iframe>
      </div>
    </div>
  )
}
