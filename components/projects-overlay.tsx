"use client"

import { useEffect } from "react"

interface ProjectsOverlayProps {
  onClose: () => void
}

export default function ProjectsOverlay({ onClose }: ProjectsOverlayProps) {
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [onClose])

  return (
    <div
      id="projects-overlay"
      className="futuristic-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="futuristic-content">
        <div className="overlay-header">
          <h2 className="futuristic-title">Projects</h2>
          <span className="close-overlay" onClick={onClose}>
            ✖
          </span>
        </div>

        <div className="overlay-content-scroll">
          <div className="support-message">Expertise in Efficiency | Provides Value for Money Solutions</div>

          <div>
            <h2 style={{ color: "green", textDecoration: "underline" }}>Worked as Lead:</h2>
            <br />
            <div className="scrolling-text">
              <span>
                Automotive (Social Media Marketing) | Agro Pvt Ltd (Product Label & Logo Design) | Music Distributor
                (Website Design) | Resume Design (Multiple Clients){" "}
              </span>
              <span>
                Automotive (Social Media Marketing) | Agro Pvt Ltd (Product Label & Logo Design) | Music Distributor
                (Website Design) | Resume Design (Multiple Clients)
              </span>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h2 style={{ color: "green", textDecoration: "underline" }}>Collaborations:</h2>
            <br />
            <div className="scrolling-text">
              <span>
                Cover Song Channel (Mix & Mastering), Portfolio Websites (Art Showcase), Gaming Channel (Montage Edits)
              </span>
              <span>
                Cover Song Channel (Mix & Mastering), Portfolio Websites (Art Showcase), Gaming Channel (Montage Edits)
              </span>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <h2 style={{ color: "green", textDecoration: "underline" }}>Currently Working On:</h2>
            <br />
            <span>Building WEB App (working along with doctor)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
