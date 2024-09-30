import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import fileExtension from 'file-extension';
import styles from "../pages/Singlepage.module.css";

function Singlepage() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [Data, setData] = useState([]);
  const [track, setTrack] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [previd, setprevid] = useState("");
  const [nextid, setnextid] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:4000/podcast/${id}`);
      const res1 = res.data.data;
      const all = await axios.get("http://localhost:4000/podcast");
      const alldata = all.data.data;
      // console.log(alldata);
      setData(res1);
      setTrack(res1.track.split('\\').pop().split('/').pop());
      setimgurl(res1.thumbnail.replace(/"/g, ''));

      alldata.map((item, index) => {
        if (id === item._id) {
          const prevIndex = [((index - 1 + alldata.length) % alldata.length)];
          setprevid(alldata[prevIndex]._id);
          const nextIndex = [((index - 1 + alldata.length) % alldata.length)];
          setnextid(alldata[nextIndex]._id);

        }
      })
    }
    fetchData();

  }, [])

  const handlePrev = () => {
    if (previd) {
      navigate(`/singlepage/${previd}`, { replace: true });
      window.location.reload();
    }
  };
  const handleNext = () => {
    if (previd) {
      navigate(`/singlepage/${nextid}`, { replace: true });
      window.location.reload();
    }
  };

  return (
    <>

      <div className={styles.singlepage}>
        <div className=" flex flex-col items-center w-full h-max">


          <h2>{Data.title}</h2>
          <p className={styles.single_artist}>{Data.artist}</p>
          <p className=' mx-2 '>{Data.desc}</p>
          {fileExtension(track) === 'mp4' ? (
            <video
              src={`http://localhost:4000/podcast-tracks/${encodeURIComponent(track)}`}
              controls
              autoPlay={true}
            />
          ) : (
            <>
              <img
                src={imgurl}
                alt={Data.title}
                className="w-1/3 h-1/3 rounded-lg"
              />

              <audio
                src={`http://localhost:4000/podcast-tracks/${decodeURIComponent(track)}`}
                controls
              />
            </>
          )}

          <div>
            <button className="px-4 py-2 my-3 mx-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700" onClick={handlePrev}  >
              <i class="fa-solid fa-backward-step"></i>
            </button>
            <button className="px-4 py-2 my-3 mx-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700" onClick={handleNext} >
              <i class="fa-solid fa-forward-step"></i>
            </button>
            

          </div>

        </div>
      </div>


    </>
  )
}

export default Singlepage;
