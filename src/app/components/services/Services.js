import React from 'react'
import styles from '@/app/styles/services.module.css'
import Link from 'next/link'

function Services() {
  return ( 
    <div className={styles.services_main}>
        <div className={styles.heading}>OUR EVENTS</div>
        <div className={styles.cards}>
            <Link style={{ textDecoration: 'none' }} href="/chess"><div className={styles.cardone}>Chess Tournaments</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/lottery"><div className={styles.cardtwo}>Lotteries</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/shows"><div className={styles.cardthree}>Shows</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/giveaways"><div className={styles.cardfour}>Giveaways</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/hunger-games"><div className={styles.cardfive}>Hunger Games</div></Link>
            <Link style={{ textDecoration: 'none' }} href="/betting"><div className={styles.cardsix}>Bettings</div></Link>
        </div>
    </div>
  )
}

export default Services