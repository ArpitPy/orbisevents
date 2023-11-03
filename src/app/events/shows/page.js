import React from "react";
import styles from "@/app/styles/shows.module.css";

const page = () => {
  return (
    <div>
      <div className={styles.main_wrapper}>
        <div className={styles.title}>Shows</div>
        <div className={styles.subhead}>About</div>
        <div className={styles.desc}>
          Orbis Events brings you the best shows from all over the game. We have
          a wide range of shows that we regularly host in our server. Shows are
          100% free for all the server members!
        </div>
        <div className={styles.bottom}>
          <div className={styles.desc}>
            We cover a wide variety of shows like Roast Battles, Orbis Report,
            Rant Shows, Memes, VC shows, Movie Nights and a lot more! So make
            sure to stay tuned and subscribe to the shows you are interested in.
            If you want to host a show in our server or sponsor a show, make
            sure to contact Lord Skeleton!
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
