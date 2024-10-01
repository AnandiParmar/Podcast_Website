import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
function Edit() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [data, setData] = useState();
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [desc, setDesc] = useState("");
    const [category, setCategory] = useState("");
    const [track, setTrack] = useState(null);
    const [option, setOption] = useState([]);
    const [userId, setUserId] = useState("");
    const [url, setUrl] = useState("");
    const [date, setDate] = useState("");
    const [titleError, setTitleError] = useState("");
    const [artError, setArtError] = useState("");
    const [descError, setDescError] = useState("");
    const [catError, setCatError] = useState("");
    const [trackError, setTrackError] = useState("");
    const [imgError, setImgError] = useState("");
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = Cookies.get("user");
        setToken(token);
        if (!token) {
            navigate("/signin");
        } else {
            const decodedToken = jwtDecode(token);
            setUserId(decodedToken._id);
            if (!decodedToken) {
                navigate("/signin");
            }
        }
    }, [navigate]);

    useEffect(() => {
        axios.get("http://localhost:4000/category")
            .then((res) => {
                setOption(res.data.data);
            })
            .catch((e) => {
                console.log("ERROR", e);
            });

        const fetchPodcast = async () => {
            const res = await axios.get(`http://localhost:4000/podcast/${id}`);
            setData(res.data.data);
            setTitle(res.data.data.title);
            setArtist(res.data.data.artist);
            setDesc(res.data.data.desc);
            setUrl(res.data.data.thumbnail);
        };
        fetchPodcast();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setTrack(file);
    };


    const updatePodcast = async () => {
        if (!title) {
            setTitleError("Enter title of podcast");
            document.getElementById("title").focus();
            return;
        }
        if (!artist) {
            setArtError("Enter Artist Name of podcast");
            document.getElementById("art").focus();
            return;
        }
        if (!desc) {
            setDescError("Enter Description of podcast");
            document.getElementById("desc").focus();
            return;
        }
        // if (!category) {
        //     setCatError("Select Category of podcast");
        //     document.getElementById("cat").focus();
        //     return;
        // }
        if (!track) {
            setTrackError("Choose Podcast File");
            document.getElementById("track").focus();
            return;
        }
        if (!url) {
            setImgError("Enter URL of Image");
            document.getElementById("img").focus();
            return;
        }

        const date = new Date();
        setDate(date);

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
            const res = await axios.put(`http://localhost:4000/podcast/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            // console.log(res.data.status);
            // console.log(res);
            if (res.data.status === 200) {
                toast.success("Successfully updated Podcast");
            }
        } catch (e) {
            console.log(e);
            toast.error("Error updating podcast", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className='mt-14 pt-11'>

            <h4 className='text-center'>Select Category and File before update</h4>
            <center className='pt-11'>
                <div className="flex flex-col items-center w-1/2 border-x-2 border-y-2 p-4 m-4 form">
                    <div className="flex flex-col w-full mb-4">

                        <div className="flex flex-col w-full mb-4 relative">
                            <label className="self-start mb-2 font-bold">Enter Title:</label><br />
                            <input type="text" id='title' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${titleError ? "border-red-500" : ""
                                }`} value={title} onChange={(e) => { setTitle(e.target.value); setTitleError("") }} />
                            {titleError && <span className="text-red-500">{titleError}</span>}
                        </div>
                        <div className="flex flex-col w-full mb-4">
                            <label className="self-start mb-2 font-bold">Enter Artist Name:</label>
                            <input id='art' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${artError ? "border-red-500" : ""
                                }`} value={artist} onChange={(e) => { setArtist(e.target.value) }} />
                            {artError && <span className="text-red-500">{artError}</span>}
                        </div>
                        <div className="flex flex-col w-full mb-4 relative">
                            <label className="self-start mb-2 font-bold">Enter Description:</label><br />
                            <textarea id='desc' className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${descError ? "border-red-500" : ""
                                }`} value={desc} onChange={(e) => { setDesc(e.target.value) }} />
                            {descError && <span className="text-red-500">{descError}</span>}

                        </div>
                        <div className="flex flex-col w-full mb-4 relative">
                            <label className="self-start mb-2 font-bold">Enter Image URL:</label><br />
                            <input id="img" className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${imgError ? "border-red-500" : ""
                                }`} value={url} onChange={(e) => { setUrl(e.target.value) }} />
                            {imgError && <span className="text-red-500">{imgError}</span>}

                        </div>
                        <div className="flex flex-col w-full mb-4 relative">
                            <label className="self-start mb-2 font-bold">Select category:</label><br />
                            <select id="cat" value={category} className={`mb-2 p-2 border rounded-lg bg-[rgba(250,250,250,0.8)] w-full ${catError ? "border-red-500" : ""
                                }`} onChange={(e) => { setCategory(e.target.value) }}>
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
                            onClick={updatePodcast}
                        >
                            Update Podcast
                        </button>

                    </div>
                </div>
            </center>
            <ToastContainer
                position="top-right"
                autoClose={3000}
            />


        </div>
    )
}

export default Edit
