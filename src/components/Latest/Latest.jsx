import React from "react";
import styles from "../Latest/Latest.module.css";
import image1 from "../../assets/i1.jpg";
import image2 from "../../assets/i2.jpg";
import image3 from "../../assets/i3.jpg";
import image4 from "../../assets/i4.jpg";
import image5 from "../../assets/i5.jpg";
import image6 from "../../assets/i6.jpg";

const Latest = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading" id={styles.heading}>
          LATEST EPISODES
        </h1>
      </div>
      <section className="latest-sec" id={styles.latest_sec}>
        <div className="latest-container" id={styles.latest_container}>
          <div className="column-container" id={styles.column_container}>
            <div className="box-container">
              <div className="row">
                <div className="col-lg-2 col-md-6" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img">
                      <img src={image1} alt="image1" />
                    </div>
                  </div>
                  <div className="img-body">
                    <div className="img-content">
                      <h2 className="h2" id={styles.h2}>
                        {/* <span id={styles.span}></span> */}
                        <h6 id={styles.span}>EPISODE I</h6>DARK DIARIES
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img">
                      <img src={image2} alt="image1" />
                    </div>
                  </div>
                  <div className="img-body">
                    <div className="img-content">
                      <h2 className="h2" id={styles.h2}>
                        {/* <span id={styles.span}></span> */}
                        <h6 id={styles.span}>EPISODE II</h6>CALL HER DADDY
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img">
                      <img src={image3} alt="image1" />
                    </div>
                  </div>
                  <div className="img-body">
                    <div className="img-content">
                      <h2 className="h2" id={styles.h2}>
                        {/* <span id={styles.span}></span> */}
                        <h6 id={styles.span}>EPISODE III</h6>CLEVER CAST
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img">
                      <img src={image4} alt="image1" id={styles.myimg} />
                    </div>
                  </div>
                  <div className="img-body">
                    <div className="img-content">
                      <h2 className="h2" id={styles.h2}>
                        {/* <span id={styles.span}></span> */}
                        <h6 id={styles.span}>EPISODE IV</h6>COMEDY SCAN
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img">
                      <img src={image5} alt="image1" />
                    </div>
                  </div>
                  <div className="img-body">
                    <div className="img-content">
                      <h2 className="h2" id={styles.h2}>
                        {/* <span id={styles.span}></span> */}
                        <h6 id={styles.span}>EPISODE V</h6>Baking A MURDER
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img">
                      <img src={image6} alt="image1" id={styles.img1} />
                    </div>
                  </div>
                  <div className="img-body">
                    <div className="img-content">
                      <h2 className="h2" id={styles.h2}>
                        {/* <span id={styles.span}></span> */}
                        <h6 id={styles.span}>EPISODE VI</h6>THE SELF LOVE
                      </h2>
                    </div>
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

export default Latest;
