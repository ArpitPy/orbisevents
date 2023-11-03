import React from "react";
import styles from "@/app/styles/chess.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Chess Tournaments</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Orbis Events Chess Tournaments offer a fantastic opportunity to
          demonstrate your chess prowess while enjoying the game. Whether you're
          a novice or a chess grandmaster, you're welcome to join our
          tournaments and challenge yourself!
        </div>
        <div className={styles.desc}>
          We at <b>Orbis Events</b> want to ensure fair play and unbiased events
          so we require all our participants to abide by the rules laid down by
          us.
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          To read all rules, click on the button below. All chess matches must
          be played on ,{" "}
          <a
            className={styles.links}
            target="_blank"
            href="https://www.chess.com/"
          >
            <b>chess.com</b>
          </a>{" "}
          only.
        </div>
        <div className={styles.bottom}>
          <a
            href="https://docs.google.com/document/d/1twzJ7KaIE27BskSTMaElwfkt4is_bjb5p_nV5t10Kfo/edit?usp=sharing"
            target="_blank"
            className={styles.butt}
          >
            <button>Read Rules</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
