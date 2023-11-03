import React from "react";
import styles from "@/app/styles/hungergames.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Hunger Games</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Orbsi Events Hunger Games is an event that is based on the movie
          series Hunger Games, in which participants are left to survive in a
          forest and the last surviving team is declared the winner.
        </div>
        <div className={styles.desc}>
          Hunger Games one of the most fun games in the server in which the
          event host simulates the hunger games and the last surviving team wins
          the cash prize! We use a third part hunger games simulator to make
          sure the event is unbiased.
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          Click on the button below to read the Hunger Games Rules!
        </div>
        <div className={styles.bottom}>
          <a
            href="https://docs.google.com/document/d/1Var3TP-9CK9GynfPhyx0eQe6HhkII97zIk5GniOvE5I/edit?usp=sharing"
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
