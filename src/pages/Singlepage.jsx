import React, { useEffect, useState } from 'react'
import { useParams,useLocation } from 'react-router-dom';
import axios from 'axios';

  

function Singlepage() {

  const [Data, setData] = useState([]);
  const [imgurl, setimgurl] = useState("");
  const [track, setTrack] = useState("");


  const { id } = useParams();
  const location = useLocation();
  const { prevId, nextId } = location.state || {};

  // Use the id, prevId, and nextId props here
  console.log(id, prevId, nextId);

  // console.log(id.id);
  // console.log(prevId,nextId);
  useEffect(() => {
    const fetchData = async () => {
      const all = await axios.get(`http://localhost:4000/podcast`);
      const alldata = all.data.data;
      const res = await axios.get(`http://localhost:4000/podcast/${id.id}`);
      const res1 = res.data.data;
      // console.log(res1);
      setData(res1);
      setimgurl(res1.thumbnail.replace(/"/g, ''));
      setTrack(res1.track.split('\\').pop().split('/').pop());

    

  }
    fetchData();

}, []);


// console.log(currentTrackIndex);

return (
  <>

    <div className="bg-black text-white py-5 mt-20 flex flex-col justify-center items-center h-screen">
      <div className=" flex flex-col items-center w-full h-max">

        <img
          src={imgurl}
          alt={Data.title}
          className="w-1/3  rounded-lg"
        />

        <h2 className="text-lg font-bold uppercase">{Data.title}</h2>
        <p className="text-white capitalize">{Data.artist}</p>
        <p className=' mx-2'>{Data.desc}</p>
        <audio
          src={`http://localhost:4000/podcast-tracks/${decodeURIComponent(track)}`}
          controls
        />
        <div>
          <button className="px-4 py-2 my-3 mx-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"  >
            Previous
          </button>
          <button className="px-4 py-2 my-3 mx-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"  >
            Next
          </button>

        </div>

      </div>
    </div>


  </>
)
}

export default Singlepage;
