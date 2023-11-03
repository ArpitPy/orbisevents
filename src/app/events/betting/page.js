import React from "react";
import styles from "@/app/styles/betting.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Betting</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Betting events typically revolve around sports like Cricket and
          Football, where participants place their bets on their predicted match
          winners. The victorious bettors receive the prize pool as their
          reward. If you're someone who has confidence in your betting
          abilities, don't hesitate to contribute to the wager. Who knows, you
          might just end up with a substantial cash prize in your pocket!
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          Click on the button below to read Betting rules.
        </div>
        <div className={styles.bottom}>
          <a
            href="https://docs.google.com/document/d/1IrAtU737PSN0lQwsckLn9GBO-VEG1yaty8TXG-yGpQo/edit?usp=sharing"
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
