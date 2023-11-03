import React from "react";
import styles from "@/app/styles/lottery.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Lottery</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          The Orbis Event Lottery is an exhilarating and thrilling opportunity
          that invites individuals to test their luck in a fun and suspenseful
          way. This event is designed to provide participants with the chance to
          win an array of exciting prizes and rewards through a draw, creating
          an engaging and memorable experience for all involved.
        </div>
        <div className={styles.desc}>
          We want to make lotteries fun and exciting so we make sure to ensure
          100% tamper-proof lottery system. If you want to know more about how
          we make our lottery tamper-proof and unbiased, check out our rules and
          how it works!
        </div>
        <div className={styles.subhead}>Rules</div>
        <div className={styles.desc}>
          Click on the button below to read all the lottery rules.
        </div>
        <div className={styles.bottom}>
          <a
            href="https://docs.google.com/document/d/1mmwP8tFlgzr0u9lDcJULrkf3mb7iOsgWFa3XN6kBWys/edit?usp=sharing"
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
