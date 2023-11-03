import React from "react";
import styles from "@/app/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div>
        <Image src="/footer.png" alt="logo" height={200} width={200} />
      </div>
      <div className={styles.footer_link}>
        <ul>
          <Link style={{ textDecoration: "none" }} href="/events">
            <li>Events</li>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/archives">
            <li>Archives</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
