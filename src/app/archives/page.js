import React from "react";
import styles from "../archives/archives.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.archive_section}>
        <div className={styles.title}> Archived Events</div>
        <div className={styles.cards}>
            <div className={styles.card_chess}>Chess Tournament 1</div>
            <div className={styles.card_giveaway}>Giveaway 1</div>
            <div className={styles.card_lottery}>Lottery 1</div>
            <div className={styles.card_betting}>Betting 1</div>
            <div className={styles.card_hunger}>Hunger Games 1</div>
        </div>
      </div>
    </div>
  );
};

export default page;
