import React from "react";
import styles from "@/app/styles/giveaway.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Giveaways</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Orbis Events frequently hosts giveaways for members on its server,
          providing you with exciting opportunities to win valuable prizes. To
          ensure you stay updated on these giveaways and don't miss out on any
          of them, we recommend subscribing to giveaway alerts through the
          self-role channel. This way, you'll receive notifications whenever a
          new giveaway is announced, increasing your chances of participating
          and winning fantastic rewards.
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          You can click the button below to read the giveaway rules!
        </div>
        <div className={styles.bottom}>
          <a
            href="https://docs.google.com/document/d/1wrY0ndW_RRmv0nbC_2_bFkt6fEuokkR2kxd2pk4cEI0/edit?usp=sharing"
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
