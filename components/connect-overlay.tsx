"use client"

import { useEffect } from "react"
import Link from "next/link"

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#ff0000" }}
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#1db954" }}
                >
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <div className="connect-info">
                <div className="connect-name">SyncKing</div>
                <div className="connect-desc">A.i Music & Songs</div>
              </div>
            </Link>

            <Link href="https://github.com/TecnikOfficial" target="_blank" className="connect-item">
              <div className="connect-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#fff" }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "#00a4ef" }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="connect-info">
                <div className="connect-name">Email</div>
                <div className="connect-desc">TecnikOfficial@Outlook.com</div>
              </div>
            </a>

            <Link href="https://discord.com/invite/uFMJ6xZbDz" className="connect-item">
              <div className="connect-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <g fill="none" stroke="#7289DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M9 3q-2.5.5-5 2q-3 5-3 12q2 2.5 6 4q1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5q4-1.5 6-4q0-7-3-12q-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3" />
                    <circle cx="8" cy="12" r="1" />
                    <circle cx="16" cy="12" r="1" />
                  </g>
                </svg>
              </div>
              <div className="connect-info">
                <div className="connect-name">Discord</div>
                <div className="connect-desc">50 slots left</div>
              </div>
            </Link>

            <Link href="https://www.linkedin.com/in/technostar-creations" className="connect-item">
              <div className="connect-icon">
                <img
                  src="https://www.svgrepo.com/download/355096/linkedin.svg"
                  width="24"
                  height="24"
                  alt="LinkedIn Logo"
                />
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
