import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image"; 

const Navbar = () => {
  return (
    <div className={styles.nav_main}>
        <div className={styles.logo}>
            <Link href="/">
                <Image src="/logo.png" layout="responsive" alt="logo" height={80} width={448} />
            </Link>
        </div>
        <div className={styles.right_nav}>
            <div className={styles.links}>
                <ul>
                    <Link style={{ textDecoration: 'none' }} href="/events"><li>Events</li></Link>
                    <Link style={{ textDecoration: 'none' }} href="/archives"><li>Archives</li></Link>
                </ul>
            </div>
            <div className={styles.nav_button}>
            <a href="https://discord.gg/rmbkq6VFhP" target="_blank"><button>Join Server</button></a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
