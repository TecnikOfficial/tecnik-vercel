"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

export default function NotFound() {
  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope)
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error)
          })
      })
    }
  }, [])

  return (
    <div
      style={{
        minHeight: "100%",
        overflow: "hidden",
        backgroundColor: "#000000",
        backgroundImage:
          'radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "var(--font-inconsolata), Helvetica, sans-serif",
        fontSize: "1.5rem",
        color: "rgba(128, 255, 128, 0.8)",
        textShadow: "0 0 1ex rgba(51, 255, 51, 1), 0 0 2px rgba(255, 255, 255, 0.8)",
      }}
    >
      <div className="noise"></div>
      <div className="overlay"></div>
      <div className="terminal">
        <p>
          <Link href="/">Back to main page</Link>
        </p>
        <h1>
          tecnik<span className="errorcode">.404</span>
          <Link href="https://geekprank.com/">
            <Image
              className="widget-button"
              src="https://tecnik.pages.dev/oldtheme/assets/img/xp.gif"
              height={50}
              width={50}
              alt="Paradox"
              title="404"
              style={{ bottom: "74px" }}
            />
          </Link>
        </h1>
        <p className="output">You are viewing this site because this page is unavailable :(</p>
        <p className="output">
          Until things get fixed, you can visit{" "}
          <Link className="link-overlay" href="https://tecnik.bio.link">
            Bio Link
          </Link>{" "}
          or{" "}
          <Link className="link-overlay" href="https://tecnik.pages.dev">
            Try Again
          </Link>
          .
        </p>
        <p className="output">Tap on Dino and Press Space :)</p>
        <div className="iframe-container-404">
          <iframe
            src="https://chromedino.com/color/"
            frameBorder="0"
            scrolling="no"
            title="Tap on Dino & Press Spacebar"
          ></iframe>
        </div>
        <br />
        <footer style={{ position: "fixed", bottom: 0, width: "100%", textAlign: "left" }}>
          <Link href="https://codepen.io/robinselmer/pen/vJjbOZ" target="_blank">
            Forked
          </Link>
        </footer>
      </div>
    </div>
  )
}
