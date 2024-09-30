import React from "react";
import styles from "../../components/Recent/Recent.module.css";
import image1 from "../../assets/i1.jpg";
import image2 from "../../assets/horror.jpg";
import image3 from "../../assets/kids.jpg";
import image4 from "../../assets/education.jpg";
import image5 from "../../assets/natureimg.jpg";
import image6 from "../../assets/romance.jpg";
import image7 from "../../assets/galaxy.jpg";
import image8 from "../../assets/science.jpg";

const Recent = () => {
  return (
    <>
      <section className="latest-section" id={styles.latest_section}>
        <div className="section-wrapper">
          <div className="section-title" id={styles.section_title}>
            <h2 className="heading" id={styles.heading}>
              RECENTLY UPLOADED
            </h2>
          </div>
          <div className="column-container" id={styles.column_container}>
            <div className="box-container">
              <div className="row" id={styles.row}>
                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image1}
                        alt="image1"
                        style={{ pointerEvents: "none" }}
                        id={styles.myimg}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>Self LOVE Fix</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image2}
                        alt="image1"
                        style={{
                          pointerEvents: "none",
                          height: "287px",
                          width: "287px",
                        }}
                        id={styles.myimg}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>Dark Diaries</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image3}
                        alt="image1"
                        style={{ pointerEvents: "none" }}
                        id={styles.myimg}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>Story Time</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image4}
                        alt="image1"
                        id={styles.myimg}
                        style={{ pointerEvents: "none" }}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>The CREATIVE Classroom</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image5}
                        alt="image1"
                        style={{ pointerEvents: "none" }}
                        id={styles.myimg}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>Into The WILD</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image7}
                        alt="image1"
                        id={styles.myimg}
                        style={{ pointerEvents: "none" }}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>SPACEPOD</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image8}
                        alt="image1"
                        id={styles.myimg}
                        style={{ pointerEvents: "none" }}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>CollegeHood Advice</h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3" id={styles.column_box}>
                  <div className="img-card" id={styles.img_card}>
                    <div className="img" id={styles.img_container}>
                      <img
                        src={image6}
                        alt="image1"
                        id={styles.myimg}
                        style={{ pointerEvents: "none" }}
                      />
                      <div className="play-btn">
                        <i class="fa-solid fa-play" id={styles.play_btn}></i>
                      </div>
                    </div>
                    <div className="content" id={styles.img_content}>
                      <h5 id={styles.h5}>LOVE & LUCK</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="btn-section" id={styles.btn_section}>
        <button className="more-btn" id={styles.more_btn}>
          VIEW ALL EPISODES
        </button>
      </section>
    </>
  );
};

export default Recent;
