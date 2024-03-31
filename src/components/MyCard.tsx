import styles from '@/styles/Home.module.css'
import React from 'react'

type MyCardProps = React.PropsWithChildren<{
  title: string
  subtitle: string

}>

export default function MyCard({title, subtitle, children}: MyCardProps) {
  return (
        <div className={styles.card}>
            <header className={styles.cardTitle}>{title}</header>
            <div className={styles.cardSubtitle}>{subtitle}</div>
            <div className={styles.cardContent}>{children}</div>            
        </div>
  )
}