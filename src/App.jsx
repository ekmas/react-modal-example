import React, { useState } from "react"
import Modal from "./Modal"

export default function App() {
  const [isModalActive, setIsModalActive] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setIsModalActive(true)
        }}
      >
        Open modal
      </button>

      <Modal active={isModalActive} setActive={setIsModalActive} />
    </>
  )
}
