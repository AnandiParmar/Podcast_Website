import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
function Edit() {
    const navigate = useNavigate();
    let id = useParams();
    const [data, setdata] = useState()
    const [title, settitle] = useState("");
    const [artist, setartist] = useState("");
    const [desc, setdesc] = useState("");
    const [category, setcategory] = useState("");
    const [track, settrack] = useState("");
    const [option, setoption] = useState([]);
    const [userId, setuserId] = useState("");
    const [url, seturl] = useState("");
    const [date, setdate] = useState("");
    const [titleError, setTitleError] = useState("");
    const [artError, setartError] = useState("");
    const [descError, setdescError] = useState("");
    const [catError, setcatError] = useState("");
    const [trackError, settrackError] = useState("");
    const [imgError, setimgError] = useState("");
    const [token, settoken] = useState("");
    useEffect(() => {
        const token = Cookies.get("user");
        settoken(token);
        if (!token) {
            navigate("/signin");
        } else {
            const decodedToken = jwtDecode(token);
            setuserId(decodedToken._id);
            if (!decodedToken) {
                navigate("/signin");
            }
        }
    }, [navigate]);
    // console.log(id);
    useEffect(() => {
        axios.get("http://localhost:4000/category")
            .then((res) => {
                setoption(res.data.data);
            })
            .catch((e) => {
                console.log("ERROR", e);
            })
        const fetchpodcast = async () => {
            const res = await axios.get(`http://localhost:4000/podcast/${id.id}`)
            setdata(res.data.data);
            settitle(res.data.data.title);
            setartist(res.data.data.artist);
            setdesc(res.data.data.desc);
            seturl(res.data.data.thumbnail);
        }
        fetchpodcast();
    }, [])
    const updatepodcast = async () => {
        if (!title) {
            setTitleError("Enter title of podcast");
            document.getElementById("title").focus();
            return;
        }
        if (!artist) {
            setartError("Enter Artist Name of podcast");
            document.getElementById("art").focus();
            return;
        }
        if (!desc) {
            setdescError("Enter Description of podcast");
            document.getElementById("desc").focus();
            return;
        }

        if (!category) {
            setcatError("Select Category of podcast");
            document.getElementById("cat").focus();
            return;
        }
        if (!track) {
            settrackError("Choose Podcast File");
            document.getElementById("track").focus();
            return;
        }
        if (!url) {
            setimgError("Enter URL of Image");
            document.getElementById("img").focus();
            return;
        }
        const date = new Date();
        setdate(date);
        const data = new FormData();
        data.append("title", title);
        data.append("artist", artist);
        data.append("desc", desc);
        data.append("thumbnail", url);
        data.append("categoryId", category);
        data.append("date", date);
        data.append("track", track);
        data.append("userId", userId);
        try {

            const res = await axios.put(`http://localhost:4000/podcast/${id.id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(res.data.code);
            console.log(res);
            if (res.data.code === 200) {
                console.log("Successfully updated Podcast");
            }
        }
        catch (e) {
            console.log(e);
        }

    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        const url = URL.createObjectURL(file);
        settrack(file);
        // Current date

    }
    return (
        <div className='mt-14 pt-11'>
            <>
            <h4 className='text-center'>Select Category and File before update</h4>
                <center className='pt-11'>
                    <div className="flex flex-col items-center w-1/2 border-x-2 border-y-2 p-4 m-4 form">
                        <div className="flex flex-col w-full mb-4">

                            <div className="flex flex-col w-full mb-4 relative">
                                <label className="self-start mb-2 font-bold">Enter Title:</label><br />
                                <input type="text" id='title' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${titleError ? "border-red-500" : ""
                                    }`} value={title} onChange={(e) => { settitle(e.target.value); setTitleError("") }} />
                                {titleError && <span className="text-red-500">{titleError}</span>}
                            </div>
                            <div className="flex flex-col w-full mb-4">
                                <label className="self-start mb-2 font-bold">Enter Artist Name:</label>
                                <input id='art' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${artError ? "border-red-500" : ""
                                    }`} value={artist} onChange={(e) => { setartist(e.target.value) }} />
                                {artError && <span className="text-red-500">{artError}</span>}
                            </div>
                            <div className="flex flex-col w-full mb-4 relative">
                                <label className="self-start mb-2 font-bold">Enter Description:</label><br />
                                <textarea id='desc' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${descError ? "border-red-500" : ""
                                    }`} value={desc} onChange={(e) => { setdesc(e.target.value) }} />
                                {descError && <span className="text-red-500">{descError}</span>}

                            </div>
                            <div className="flex flex-col w-full mb-4 relative">
                                <label className="self-start mb-2 font-bold">Enter Image URL:</label><br />
                                <input id="img" className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${imgError ? "border-red-500" : ""
                                    }`} value={url} onChange={(e) => { seturl(e.target.value) }} />
                                {imgError && <span className="text-red-500">{imgError}</span>}

                            </div>
                            <div className="flex flex-col w-full mb-4 relative">
                                <label className="self-start mb-2 font-bold">Select category:</label><br />
                                <select id="cat" value={category} className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${catError ? "border-red-500" : ""
                                    }`} onChange={(e) => { setcategory(e.target.value) }}>
                                    {option.map((item) => (
                                        <option value={item._id}>{item.name}</option>
                                    ))}
                                </select>
                                {catError && <span className="text-red-500">{catError}</span>}

                            </div>
                            <div className="flex flex-col w-full mb-4 relative">
                                <label className="self-start mb-2 font-bold">Choose Podcast file:</label><br />
                                <input type="file" id='track' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${trackError ? "border-red-500" : ""
                                    }`} onChange={handleFileChange} />
                            </div>
                            {trackError && <span className="text-red-500">{trackError}</span>}

                            <button
                                className="w-full py-2 mt-8 bg-purple-800 text-white text-xl rounded-lg cursor-pointer"
                                onClick={updatepodcast}
                            >
                                Update Podcast
                            </button>

                        </div>
                    </div>
                </center>



            </>
        </div>
    )
}

export default Edit
