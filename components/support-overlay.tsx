"use client"

import { useEffect, useRef } from "react"
import { FaGooglePay, FaPaypal, FaCoffee } from "react-icons/fa"
import { SiKofi } from "react-icons/si"
import { MdPayment } from "react-icons/md"

interface SupportOverlayProps {
  onClose: () => void
}

export default function SupportOverlay({ onClose }: SupportOverlayProps) {
  const supportItemsRef = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscapeKey)

    // Add heart drop effect to all support items
    supportItemsRef.current.forEach((item) => {
      if (item) {
        item.addEventListener("mouseover", () => {
          for (let i = 0; i < 10; i++) {
            createHeart()
          }
        })
      }
    })

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [onClose])

  const handleDonation = (url: string) => {
    // Create hearts animation
    for (let i = 0; i < 15; i++) {
      createHeart()
    }

    // Create thank you message
    const message = document.createElement("div")
    message.style.position = "fixed"
    message.style.top = "40%"
    message.style.left = "50%"
    message.style.transform = "translate(-50%, -50%)"
    message.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    message.style.color = "white"
    message.style.padding = "20px"
    message.style.borderRadius = "10px"
    message.style.zIndex = "2000"
    message.style.fontSize = "1.5rem"
    message.style.fontWeight = "bold"
    message.style.width = window.innerWidth < 768 ? "70%" : "450px"
    message.innerText = "🤗Thanks so much for your support! It means a lot❤️"

    document.body.appendChild(message)

    // Open donation link after delay
    setTimeout(() => {
      window.open(url, "_blank")
      document.body.removeChild(message)
    }, 2000)
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

  return (
    <div
      id="support-overlay"
      className="support-overlay"
      style={{ display: "flex" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="support-content" style={{ paddingTop: "10px" }}>
        <div className="overlay-header">
          <h2 className="futuristic-title">Support</h2>
          <span className="close-overlay" onClick={onClose}>
            ✖
          </span>
        </div>

        <div className="overlay-content-scroll">
          <div className="support-message">
            Your support helps me continue creating content and developing new projects.
          </div>

          <div className="support-grid">
            <a
              href="#"
              ref={(el) => (supportItemsRef.current[0] = el)}
              onClick={(e) => {
                e.preventDefault()
                handleDonation(
                  "https://upi2qr.in/pay?name=Tecnik+Official&upiId=tecnikpay-1@okaxis&description=Thank+You",
                )
              }}
              className="support-item"
            >
              <div className="support-icon">
                <FaGooglePay size={24} color="#4285f4" />
              </div>
              <div className="support-info">
                <div className="support-name">Google Pay</div>
                <div className="support-desc">Fast & secure payment</div>
              </div>
            </a>

            <a
              href="#"
              ref={(el) => (supportItemsRef.current[1] = el)}
              onClick={(e) => {
                e.preventDefault()
                handleDonation("https://upi2qr.in/pay?name=Tecnik+Official&upiId=tecnik@upi&description=Thank+You")
              }}
              className="support-item"
            >
              <div className="support-icon">
                <MdPayment size={24} color="#00baf2" />
              </div>
              <div className="support-info">
                <div className="support-name">UPI</div>
                <div className="support-desc">Indian payment system</div>
              </div>
            </a>

            <a
              href="#"
              ref={(el) => (supportItemsRef.current[2] = el)}
              onClick={(e) => {
                e.preventDefault()
                handleDonation("https://www.paypal.me/TecnikOfficial")
              }}
              className="support-item"
            >
              <div className="support-icon">
                <FaPaypal size={24} color="#00457c" />
              </div>
              <div className="support-info">
                <div className="support-name">PayPal</div>
                <div className="support-desc">International payments</div>
              </div>
            </a>

            <a
              href="#"
              ref={(el) => (supportItemsRef.current[3] = el)}
              onClick={(e) => {
                e.preventDefault()
                handleDonation("https://buymeacoffee.com/tecnik")
              }}
              className="support-item"
            >
              <div className="support-icon">
                <FaCoffee size={24} color="#fd0" />
              </div>
              <div className="support-info">
                <div className="support-name">Buy me a Coffee</div>
                <div className="support-desc">Support my work</div>
              </div>
            </a>

            <a
              href="#"
              ref={(el) => (supportItemsRef.current[4] = el)}
              onClick={(e) => {
                e.preventDefault()
                handleDonation("https://ko-fi.com/tecnik")
              }}
              className="support-item"
            >
              <div className="support-icon">
                <SiKofi size={24} color="#29abe0" />
              </div>
              <div className="support-info">
                <div className="support-name">Ko-Fi</div>
                <div className="support-desc">Buy me a coffee</div>
              </div>
            </a>
          </div>

          <div className="support-footer">Every contribution, makes a difference. Thank you for your support! ❤️</div>
        </div>
      </div>
    </div>
  )
}
