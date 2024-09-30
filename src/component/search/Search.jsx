import styles from "../search/Search.module.css";
import "../Audio/Audio.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import fileExtension from 'file-extension';
import { useEffect, useState } from "react";
import { set } from "mongoose";
export default function (){
    const [data,setData] = useState([]);
    const [searchinput,setSearchinput] = useState('');
    const [filterres,setFilterres] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const Data = async ()=>{
            try {
                const res = await axios.get("http://localhost:4000/podcast");
                setData(res.data.data);
            } catch (error) {
                console.log(error);
                
            }
        };
        Data();
    },[])
    const formatDate = (date) => {
        return moment(date).fromNow();
      };
    const handleSearch=(e)=>{
        setSearchinput(e);
        if(searchinput !== '')
        {
        const filterdata = data.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchinput.toLowerCase())
        })
        setFilterres(filterdata);
        console.log(filterdata);
        }else{
            setFilterres(data);
        }
    }
    return <div className={styles.mainSearch}>
    <h1 className={styles.searchHead}>Search Podcast</h1>
    <div className={styles.searchInput}>
        <input type="text" placeholder="Search Podcast..." onChange={(e)=>{handleSearch(e.target.value)}} />
    </div>
    <div>
    <div className="audio">
      <div className="audio_box">
        {searchinput > 1 ? 
        filterres.map((item) => (
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
  
              <div className="content">
                <h2 className="font-serif myh2 pt-2">{item.title}</h2>
                <p className="text-center audio-artist">{item.artist}</p>
                
                <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
              </div>
            </div>
          )) : 

          data.map((item) => (
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
  
              <div className="content">
                <h2 className="font-serif myh2 pt-4">{item.title}</h2>
                <p className="text-center audio-artist">{item.artist}</p>
                
                <p className="myp">1.3k &bull; {formatDate(item.date)}</p>
              </div>
            </div>
          ))}
    
      </div>
    </div>
    </div>
    </div>
}