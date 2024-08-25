import React, { useState, useEffect } from "react";
import "./Audio.css";
import image from "../../assets/images/image_heading.jpg";
import axios from 'axios';
import { Link } from "react-router-dom";

const Audio = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/podcast")
      const res1 = res.data.data;
      // console.log(res1);
      setData(res1);
    }
    fetchData();

  }, []);


  return (

    <>
      <div className="audio-box">
        {data.map((item) => (

          <div className="card">

            <div className="btn-overlay">

              <Link to={`/singlepage/${item._id}`}>
                <i className="fa-solid fa-play plybtn"></i>
              </Link>
            </div>
            <img src={`${item.thumbnail.replace(/"/g, '')}`} alt="" className="img" />
            <div className="content">
              <h2 className="myh2">
                {item.title}
              </h2>
              <p className="text-center p-2">{item.artist}</p>
              <p className="myp">{item.views} &bull; {item.date}</p>
            </div>
          </div>
        ))};

      </div>


    </>
  )
}

export default Audio;
