"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FaYoutube, FaMusic, FaGithub, FaEnvelope, FaDiscord, FaLinkedin } from "react-icons/fa"

interface ConnectOverlayProps {
  onClose: () => void
}

export default function ConnectOverlay({ onClose }: ConnectOverlayProps) {
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

  const copyEmailAndOpenMailApp = () => {
    const email = "TecnikOfficial@Outlook.com"
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!")
        window.location.href = `mailto:${email}`
      })
      .catch((err) => console.error("Failed to copy: ", err))
  }

  return (
    <div
      id="connect-overlay"
      className="connect-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="connect-content" style={{ paddingTop: "10px" }}>
        <div className="overlay-header">
          <h2 className="futuristic-title">Connect</h2>
          <span className="close-overlay" onClick={onClose}>
            ✖
          </span>
        </div>

        <div className="overlay-content-scroll">
          <div className="support-message">Explore my Youtube channels and other ways to get in touch.</div>

          <div className="connect-grid">
            <Link
              href="https://www.youtube.com/channel/UCXucwi4swKyTmCUB9RrFaQw"
              target="_blank"
              className="connect-item"
            >
              <div className="connect-icon">
                <FaYoutube size={24} color="#ff0000" />
              </div>
              <div className="connect-info">
                <div className="connect-name">TecNik Official</div>
                <div className="connect-desc">Tech tips & tutorials</div>
              </div>
            </Link>

            <Link
              href="https://www.youtube.com/channel/UC35TPNUnNegZq4mBWvU0o7g"
              target="_blank"
              className="connect-item"
            >
              <div className="connect-icon">
                <FaMusic size={24} color="#1db954" />
              </div>
              <div className="connect-info">
                <div className="connect-name">SyncKing</div>
                <div className="connect-desc">A.i Music & Songs</div>
              </div>
            </Link>

            <Link href="https://github.com/TecnikOfficial" target="_blank" className="connect-item">
              <div className="connect-icon">
                <FaGithub size={24} color="#fff" />
              </div>
              <div className="connect-info">
                <div className="connect-name">GitHub</div>
                <div className="connect-desc">Open source projects</div>
              </div>
            </Link>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                copyEmailAndOpenMailApp()
              }}
              className="connect-item"
            >
              <div className="connect-icon">
                <FaEnvelope size={24} color="#00a4ef" />
              </div>
              <div className="connect-info">
                <div className="connect-name">Email</div>
                <div className="connect-desc">TecnikOfficial@Outlook.com</div>
              </div>
            </a>

            <Link href="https://discord.com/invite/uFMJ6xZbDz" className="connect-item">
              <div className="connect-icon">
                <FaDiscord size={24} color="#7289DA" />
              </div>
              <div className="connect-info">
                <div className="connect-name">Discord</div>
                <div className="connect-desc">50 slots left</div>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/technostar-creations" className="connect-item">
              <div className="connect-icon">
                <FaLinkedin size={24} color="#0077b5" />
              </div>
              <div className="connect-info">
                <div className="connect-name">Linkedin</div>
                <div className="connect-desc">Showcase of recent projects</div>
              </div>
            </Link>

            <Link href="https://tellonym.me/tecnik" target="_blank" className="connect-item">
              <div className="connect-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                  <path
                    fill="#FFFFFF"
                    d="M16 19a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 16 19zm4-11a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2zm-8 0a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V6a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v14a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V6a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v14a4 4 0 0 1-4 4h-4.835Z"
                  />
                </svg>
              </div>
              <div className="connect-info">
                <div className="connect-name">Feedback</div>
                <div className="connect-desc">Send Text Anonymously</div>
              </div>
            </Link>
          </div>

          <div className="support-footer">
            Whether you want to follow my latest updates, collaborate on projects, or just say hello, feel free to reach
            out!👋
          </div>
        </div>
      </div>
    </div>
  )
}
