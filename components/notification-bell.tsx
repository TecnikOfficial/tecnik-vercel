"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function NotificationBell() {
  const [showPanel, setShowPanel] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const bellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        bellRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !bellRef.current.contains(event.target as Node)
      ) {
        setShowPanel(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const togglePanel = () => {
    setShowPanel(!showPanel)
  }

  return (
    <>
      <div className="notification-bell" onClick={togglePanel} ref={bellRef}>
        <Image
          src="/images/noti.webp"
          className="notification-bell"
          alt="Notification Bell"
          width={60}
          height={60}
          unoptimized
        />
      </div>

      <div
        id="notification-panel"
        ref={panelRef}
        style={{
          display: showPanel ? "block" : "none",
          position: "absolute",
          right: 0,
          top: 80,
          width: 300,
          zIndex: 6,
          backgroundColor: "transparent",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div className="overlay-content">
          <p>
            • NEW! Interactive Resume Site:{" "}
            <Link href="https://aquib-farhaan.vercel.app" target="_blank">
              Sample 1
            </Link>{" "}
            ,{" "}
            <Link href="https://iftikar-ali-zaman.vercel.app" target="_blank">
              Sample 2
            </Link>{" "}
            Contact now if u want yours
          </p>
          <br />
          <p>
            • Are you subscribed to ▶️
            <Link href="https://www.youtube.com/channel/UCXucwi4swKyTmCUB9RrFaQw?sub_confirmation=1" target="_blank">
              Tecnik Official
            </Link>
            💻 and{" "}
            <Link href="https://www.youtube.com/channel/UC35TPNUnNegZq4mBWvU0o7g?sub_confirmation=1" target="_blank">
              Syncking
            </Link>
            🎵 ?
          </p>
          <br />
          <p>
            •{" "}
            <Link
              href="https://www.youtube-nocookie.com/embed/videoseries?list=PLzXDhbvRPJ1A33piKX-ss1zjNAVdqu4mM&loop=1&autoplay=1&modestbranding=1"
              target="_blank"
            >
              CSGO Montage 😎
            </Link>
          </p>
          <br />
          <p>
            • <Link href="./oldtheme/1.0.html">Old Site 🐈 </Link>• <Link href="/404">4🚫4</Link>
          </p>
        </div>
      </div>
    </>
  )
}
