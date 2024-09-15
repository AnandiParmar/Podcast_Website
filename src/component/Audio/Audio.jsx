import React, { useState, useEffect } from "react";
import "./Audio.css";
import image from "../../assets/images/image_heading.jpg";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const Audio = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:4000/podcast")
      const res1 = res.data.data;
      // console.log(res1);
      setData(res1);
    }
    fetchData();

  }, []);
  const formatDate = (date) => {
    return moment(date).fromNow();
  }
  

  return (

    <>
      <div className="audio-box">
        {data.map((item) => (

          <div className="card">

            <div className="btn-overlay">

              {/* <Link to={`/singlepage/${item._id}`}>
                
              </Link> */}
              <i className="fa-solid fa-play plybtn" onClick={() => navigate(`/singlepage/${item._id}`)}></i>

            </div>
            <img src={`${item.thumbnail.replace(/"/g, '')}`} alt="" className="img" />
            <div className="content">
              <h2 className="myh2">
                {item.title}
              </h2>
              <p className="text-center p-2">{item.artist}</p>
              <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
            </div>
          </div>
        ))};

      </div>


    </>
  )
}

export default Audio;
