import React from "react";
import styles from "@/app/styles/hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          Orbis Events is a community server that organizes events, shows, VCs,
          competitions, giveaways, etc!
        </div>
        <div className={styles.hero_button}>
          <a href="https://discord.gg/jcdZBJyqDW" target="_blank">
            <button>Join Server</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
