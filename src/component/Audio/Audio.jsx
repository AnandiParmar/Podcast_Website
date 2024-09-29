import React, { useState, useEffect } from "react";
import "./Audio.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import fileExtension from 'file-extension';



const Audio = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [track, setTrack] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/podcast");
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    return moment(date).fromNow();
  };

  return (
    <div className="audio-box">
      {data.map((item) => (
        <div className="card" key={item._id}>

          {fileExtension(item.track) === 'mp4' ? (
            <video
              src={`http://localhost:4000/podcast-tracks/${encodeURIComponent(item.track.split('\\').pop().split('/').pop())}`}
              controls
              onClick={() => navigate(`/singlepage/${item._id}`)}
            />
          ) : (
            <>
              <div className="btn-overlay">
                <i className="fa-solid fa-play plybtn" onClick={() => navigate(`/singlepage/${item._id}`)}></i>
              </div>
              <img src={`${item.thumbnail.replace(/"/g, '')}`} alt="" className="img" />

            </>
          )}



          <div className="content">
            <h2 className="myh2">{item.title}</h2>
            <p className="text-center p-2">{item.artist}</p>
            <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Audio;
