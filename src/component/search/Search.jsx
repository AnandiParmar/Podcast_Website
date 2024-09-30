import styles from "../search/Search.module.css";
import "../Audio/Audio.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import fileExtension from 'file-extension';
import { useEffect, useState } from "react";

export default function Search() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filterRes, setFilterRes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/podcast");
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (date) => {
    return moment(date).fromNow();
  };

  const handleSearch = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== '') {
      const filterData = data.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilterRes(filterData);
    } else {
      setFilterRes(data);
    }
  };

  const AudioCard = ({ item }) => {
    return (
      <div className="audio_card" key={item._id}>
        {fileExtension(item.track) === 'mp4' ? (
          <div className="audio_image">
            <video poster={item.thumbnail} src={`http://localhost:4000/podcast-tracks/${decodeURIComponent(item.track.split('\\').pop().split('/').pop())}`} controls />
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
        <div className="content">
          <h2 className="font-serif myh2 pt-2">{item.title}</h2>
          <p className="text-center audio-artist">{item.artist}</p>
          <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.mainSearch}>
      <h1 className={styles.searchHead}>Search Podcast</h1>
      <div className={styles.searchInput}>
        <input type="text" placeholder="Search Podcast..." onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div>
        <div className="audio">
          <div className="audio_box">
            {searchInput !== '' ? filterRes.map((item) => (
              <AudioCard item={item} key={item._id} />
            )) : data.map((item) => (
              <AudioCard item={item} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
