import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import '../component/Audio/Audio.css';
import { useNavigate } from "react-router-dom";
import moment from "moment";
import fileExtension from 'file-extension';
import { useCallback } from 'react';
function fav() {
  const userCookie = Cookies.get("user");
  const [favData, setFavData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/fav/", {
          headers: {
            Authorization: `Bearer ${userCookie}`,
          },
        });
        setFavData(res.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userCookie]);

  useEffect(() => {
    const fetchPodcast = async () => {
      if (favData.length === 0) return;

      const promises = favData.map(async (item) => {
        const res = await axios.get(`http://localhost:4000/podcast/${item._id}`);
        return res.data.data;
      });

      Promise.all(promises).then((podcasts) => {
        setData(podcasts);
      }).catch((error) => {
        setError(error);
      });
    };
    fetchPodcast();
  }, [favData]);

  const AudioCard = ({ item }) => {
    const navigate = useNavigate();
    const formatDate = useCallback((date) => {
      return moment(date).fromNow();
    }, []);
    return (
      <div className="audio_card" key={item._id} >
        {fileExtension(item.track) === 'mp4' ? (
          <div className="audio_image">
            <video
              poster={item.thumbnail}
              src={`http://localhost:4000/podcast-tracks/${decodeURIComponent(item.track.split('\\').pop().split('/').pop())}`}
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

  return (
    <div className="audio">
      <h1 className="audio-head">Podcast</h1>
      <div className="audio_box">
        {data.map((item) => (
          <AudioCard item={item} key={item._id} />
        ))}
      </div>
    </div>  
  )
}

export default fav
