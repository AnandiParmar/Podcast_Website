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
  const like = () =>{
    const heart = document.getElementsByClassName("fa-heart")[0];
    heart.style.color = "var(--theme)";
  }
  return (
    <div className="audio">
      <h1 className="audio-head">Podcast</h1>
      <div className="audio_box">

        {data.map((item) => (
          <div className="audio_card" key={item._id}>

            {fileExtension(item.track) === 'mp4' ? (
              <div className="audio_image">
                <video
                 poster={item.thumbnail}
                  src={`http://localhost:4000/podcast-tracks/${decodeURIComponent(item.track.split('\\').pop().split('/').pop())}`}
                  controls

                />
                <div className="btn-overlay">
                  <i className="fa-solid fa-play plybtn" onClick={() => navigate(`/singlepage/${item._id}`)}></i>
                </div>
              </div>
            ) : (
              <div className="audio_image">
                <img src={`${item.thumbnail.replace(/"/g, '')}`} alt="" className="img" />
                <div className="btn-overlay">
                  <i className="fa-solid fa-play plybtn" onClick={() => navigate(`/singlepage/${item._id}`)}></i>
                </div>
              </div>
            )}

            <div className="small_card">
              <i className="fa-solid fa-heart" onClick={like}></i>
            </div>

            <div className="content">
              <h2 className="font-serif myh2">{item.title}</h2>
              <p className="text-center audio-artist">{item.artist}</p>
              
              <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Audio;
