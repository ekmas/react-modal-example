import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"

export default function Modal({ active, setActive }) {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      setActive(false)
    }, 300)
  }

  useEffect(() => {
    if (active) {
      setIsVisible(true)
    }
  }, [active])

  if (!active) return null

  return ReactDom.createPortal(
    <div className={isVisible ? "modal-wrapper active" : "modal-wrapper"}>
      <div className="modal">
        <h3>Modal</h3>

        <button onClick={closeModal} className="close-btn">
          ✖
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  )
}
