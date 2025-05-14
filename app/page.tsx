"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import LoadingScreen from "@/components/loading-screen"
import MainSlider from "@/components/main-slider"
import NotificationBell from "@/components/notification-bell"
import ConnectOverlay from "@/components/connect-overlay"
import SupportOverlay from "@/components/support-overlay"
import ServicesOverlay from "@/components/services-overlay"
import ProjectsOverlay from "@/components/projects-overlay"
import Footer from "@/components/footer"

export default function Home() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [showConnect, setShowConnect] = useState(false)
  const [showSupport, setShowSupport] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showProjects, setShowProjects] = useState(false)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const drawingsRef = useRef<HTMLDivElement[]>([])
  const donateButtonRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseDown = () => setIsDrawing(true)
    const handleMouseUp = () => setIsDrawing(false)
    const handleContextMenu = (e: MouseEvent) => e.preventDefault()

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("contextmenu", handleContextMenu)

    // Add heart drop effect to donate button
    if (donateButtonRef.current) {
      donateButtonRef.current.addEventListener("mouseover", createHearts)
    }

    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("contextmenu", handleContextMenu)

      if (donateButtonRef.current) {
        donateButtonRef.current.removeEventListener("mouseover", createHearts)
      }
    }
  }, [])

  useEffect(() => {
    // Clean up drawings after they fade
    const interval = setInterval(() => {
      drawingsRef.current.forEach((drawing, index) => {
        if (drawing && drawing.style.opacity === "0") {
          document.body.removeChild(drawing)
          drawingsRef.current.splice(index, 1)
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const createHearts = () => {
    for (let i = 0; i < 10; i++) {
      createHeart()
    }
  }

  const createHeart = () => {
    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.innerText = "❤️"
    heart.style.fontSize = window.innerWidth < 768 ? "20px" : "30px"
    heart.style.position = "fixed"
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.top = "0"

    document.body.appendChild(heart)

    heart.addEventListener("animationend", () => {
      heart.remove()
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return

    const drawing = document.createElement("div")
    drawing.classList.add("drawing")
    drawing.style.left = `${e.pageX}px`
    drawing.style.top = `${e.pageY}px`
    document.body.appendChild(drawing)

    drawingsRef.current.push(drawing)

    setTimeout(() => {
      if (drawing) drawing.style.opacity = "0"
    }, 5000)
  }

  const closeAllOverlays = () => {
    setShowConnect(false)
    setShowSupport(false)
    setShowServices(false)
    setShowProjects(false)
  }

  return (
    <main onMouseMove={handleMouseMove}>
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}

      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/videos/video.webm" type="video/webm" />
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <MainSlider
          onContactClick={() => {
            closeAllOverlays()
            setShowConnect(true)
          }}
          onServicesClick={() => {
            closeAllOverlays()
            setShowServices(true)
          }}
          onProjectsClick={() => {
            closeAllOverlays()
            setShowProjects(true)
          }}
        />

        <div className="widget-container">
          <Image
            ref={donateButtonRef}
            src="/images/donate.webp"
            className="widget-image"
            title="TYSM❤️"
            alt="Donate"
            width={100}
            height={100}
            onClick={() => {
              closeAllOverlays()
              setShowSupport(true)
            }}
            unoptimized
          />
        </div>

        <NotificationBell />

        {showConnect && <ConnectOverlay onClose={() => setShowConnect(false)} />}
        {showSupport && <SupportOverlay onClose={() => setShowSupport(false)} />}
        {showServices && <ServicesOverlay onClose={() => setShowServices(false)} />}
        {showProjects && <ProjectsOverlay onClose={() => setShowProjects(false)} />}

        <Footer />
      </div>
    </main>
  )
}
