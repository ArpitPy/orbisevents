import React from "react";
import Services from "../components/services/Services";
import styles from "./about.module.css";

const Services_main = () => {
  return (
    <>
      <Services />
      <div className={styles.about_section}>
        <div className={styles.title}>About Us</div>
        <div className={styles.desc}>
          Orbis Events is the heart and soul of competitive entertainment within
          Orbis. As a dynamic and player-centric organization, we are dedicated
          to delivering an array of thrilling and engaging activities that
          enrich the gaming experience for all players.
        </div>
        <br />
        <div className={styles.desc}>
          At Orbis Events, we believe that gaming should not just be about
          sitting idle, battling, and accumulating resources; it should also be
          about coming together, making new friends, participating in events and
          having a blast while doing it. That's why we actively organize a wide
          range of competitive events that cater to a variety of tastes and
          preferences.
        </div>
        <br />
        <div className={styles.desc}>
          We strive hard to ensure that we serve quality entertainment to our
          participants and give them an exciting, thrilling and unbiased
          experience!
        </div>
        <br />
        <div className={styles.desc}>
          <center>
            <br />
            👑{" "}
            <u>
              <b>Owner</b>
            </u>{" "}
            👑
            <br />
            Lord Skeleton
            <br />
            <br />
            💵{" "}
            <u>
              <b>Accounting Team</b>
            </u>{" "}
            💵
            <br />
            Holy Phoenix Lizzie
            <br />
            Chad
            <br />
            <br />⚡{" "}
            <u>
              <b>Tech Team</b>
            </u>{" "}
            ⚡
            <br />
            Matyo
            <br />
            Lord Skeleton
            <br />
            <br />
            🎤{" "}
            <u>
              <b>Show Hosts</b>
            </u>{" "}
            🎤
            <br />
            Thomas
            <br />
            Matyo
            <br />
            Lord Skeleton
            <br />
            <br />
            🎨{" "}
            <u>
              <b>Graphics Team</b>
            </u>{" "}
            🎨
            <br />
            Ronjoy Tehmina
            <br />
            <br />
            <br />
            <div className={styles.desc}>
              To join our team shoot a DM to Lord Skeleton!
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default Services_main;
