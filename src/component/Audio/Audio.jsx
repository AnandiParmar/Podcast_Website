import React from "react";
import "./Audio.css";
import p1 from "../../assets/p1.webp";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.webp";
import p5 from "../../assets/p5.webp";
import p6 from "../../assets/p6.webp";

const Audio = () => {
  return (
    <>
      <div className="audio-box">
        <div className="card">
          <div className="btn-overlay">
            <i className="fa-solid fa-play plybtn"></i>
          </div>
          <img src={p1} alt="" className="img" />
          <div className="content">
            <h2 className="myh2">
              Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
            </h2>
            <h3 className="myh3">PODCAST</h3>
            <p className="myp">15k Views &bull; 2 days ago</p>
          </div>
        </div>
        <div className="card">
          <img src={p2} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p3} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p4} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p5} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p6} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p2} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p5} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
        <div className="card">
          <img src={p4} alt="" />
          <h2 className="myh2">
            Lorem ipsum dolor sit to be adipisicing elit. Error nesciunt?
          </h2>
          <h3 className="myh3">PODCAST</h3>
          <p className="myp">15k Views &bull; 2 days ago</p>
        </div>
      </div>
    </>
  );
};

export default Audio;
