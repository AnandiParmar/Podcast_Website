import React, { useState, useEffect, useCallback } from "react";
import "./Audio.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import fileExtension from 'file-extension';
import Cookies from "js-cookie";

const userCookie = Cookies.get("user");

const AudioCard = ({ item }) => {
  const navigate = useNavigate();
  const formatDate = useCallback((date) => {
    return moment(date).fromNow();
  },[]);
  return (
    <div className="audio_card" key={item._id} >
      { fileExtension(item.track) === 'mp4' ? (
        <div className="audio_image">
          <video
            poster={item.thumbnail}
            src={ `http://localhost:4000/podcast-tracks/${decodeURIComponent(item.track.split('\\').pop().split('/').pop())}`}
            controls
          />
          <div className="btn-overlay">
            <i
              className="fa-solid fa-play plybtn"
              onClick={() => navigate(`/singlepage/${encodeURIComponent(item._id)}`)}
            ></i>
          </div>
        </div>
      ) : (
        <div className="audio_image">
          <img
            src={`${item.thumbnail.replace(/"/g, '')}`}
            alt={item.title}
            className="img"
          />
          <div className="btn-overlay">
            <i
              className="fa-solid fa-play plybtn"
              onClick={() => navigate(`/singlepage/${encodeURIComponent(item._id)}`)}
            ></i>
          </div>
        </div>
      )}
      <div className="content">
        <h2 className="font-serif myh2">{item.title}</h2>
        <p className="text-center audio-artist">{item.artist}</p>
        <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
      </div>
    </div>
  );
};

const Audio = () => {
  const [data, setData] = useState([]);
  
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

  return (
    <div className="audio">
      <h1 className="audio-head">Podcast</h1>
      <div className="audio_box">
        {data.map((item) => (
          <AudioCard item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Audio;