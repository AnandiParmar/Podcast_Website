import React from "react";
import styles from "../B/B.module.css";

const B = () => {
  return (
    <>
      <section className="banner-section" id={styles.banner_section}>
        <div className="banner-container" id={styles.banner_conatiner}>
          <div className="banner-content" id={styles.banner_content}>
            <div className="content-wrapper" id={styles.content_wrapper}>
              <div className="upper-content" id={styles.upper_content}>
                <div className="upper-container">
                  <div className="title" id={styles.title_container}>
                    <h3 className="title1" id={styles.title1}>
                      Lorem ipsum dolor sit amet.
                    </h3>
                    <h2 className="title2" id={styles.title2}>
                      Lorem ipsum dolor sit amet consectetur.
                    </h2>
                    <p className="decription" id={styles.decription}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas maiores vel, aspernatur error laudantium iste unde
                      quos voluptatum natus. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Veritatis, eaque!
                    </p>
                    <button className="more-btn" id={styles.more_btn}>
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default B;
