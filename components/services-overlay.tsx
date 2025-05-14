"use client"

import { useEffect } from "react"
import Link from "next/link"

interface ServicesOverlayProps {
  onClose: () => void
}

export default function ServicesOverlay({ onClose }: ServicesOverlayProps) {
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
      id="table-overlay"
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
          <h2 className="futuristic-title">Services</h2>
          <span className="close-overlay" onClick={onClose}>
            ✖
          </span>
        </div>

        <div className="overlay-content-scroll">
          <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Price Range in (INR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Graphic Design</td>
                  <td>A.i Photo editing, Logo/Banner/Thumbnails/Product label/Social media promotional Post Designs</td>
                  <td>149 - 849</td>
                </tr>
                <tr>
                  <td>Video Editing</td>
                  <td>Youtube video editing and intro/outro design or cover song mix</td>
                  <td>449 - 2499</td>
                </tr>
                <tr>
                  <td>Website Design & Develop</td>
                  <td>
                    Building Static Portfolio Sites with Html5,CSS,JS and Dynamic sites with Reactjs. Provides Hosting
                    Advice and Site Optimisation
                  </td>
                  <td>749 - 4999</td>
                </tr>
                <tr>
                  <td>Web App Design & Develop</td>
                  <td>
                    Building web apps that meets your needs on next js framework optimised for performance. Converting
                    sites to Android App.
                  </td>
                  <td>6449 - 14999</td>
                </tr>
                <tr>
                  <td>Resume Making</td>
                  <td>ATS compatible or modern design resume</td>
                  <td>175 - 249</td>
                </tr>
                <tr>
                  <td>Computer Troubleshoot</td>
                  <td>Diagnose computer related problem and try to find solution, pc build advice</td>
                  <td>FREE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <h4>
            Contact using Discord or Email📧:{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                copyEmailAndOpenMailApp()
              }}
            >
              TecnikOfficial@Outlook.com
            </a>
          </h4>
          <br />
          <p style={{ fontSize: "15px" }}>
            Please note: The preferred payment method is UPI. Full refunds are only available for payments made via UPI.
            Payments made through PayPal or Stripe are not eligible for refunds. Prices will vary for international
            clients
          </p>
          <br />
          <p style={{ fontSize: "16px", textAlign: "center" }}>
            <strong>
              GIVE US FEEDBACK <Link href="https://tellonym.me/tecnik">HERE😃</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}
