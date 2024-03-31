import React from 'react'
import styles from '@/styles/Navbar.module.css'


function scrollToSection(e: React.MouseEvent, id: string) {
  e.preventDefault()
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  return (
    <>
      <main>
          <nav className={styles.navbar}>
              <div>
                  <button onClick={(e) => scrollToSection(e, 'calendario2024')} aria-label="Ir para o calendário">CALENDÁRIO</button>
              </div>
          </nav>
      </main>
    </>
  )
}