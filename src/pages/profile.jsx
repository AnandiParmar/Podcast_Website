import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import "react-toastify/ReactToastify.css";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import styles from "./ProfilePage.module.css";

function profile() {
  const [Data, setData] = useState({ name: "", email: "", userId: "" });
  const [user, setUser] = useState(false);
  const [podcast, setpodcast] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Fetching data to get user profile
    const fetchData = async () => {
      try {
        const userToken = Cookies.get("user");
        const res = await axios.get("http://localhost:4000/user_profile", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        // console.log(res.data);
        setData({
          name: res.data.data.username,
          email: res.data.data.email,
          userId: res.data.data._id,
        });
        console.log(Data);
        setUser(true); // Set user to true after successful login
      } catch (error) {
        console.error("Error fetching user :", error);
      }
    };

    //fetching podcast which is uploaded by user
    const fetchPodcastData = async (userId) => {
      try {
        const res = await axios.get("http://localhost:4000/podcast");
        let result = res.data.data;
        setpodcast(result.filter((item) => item.userId === userId));
      } catch (error) {
        console.error("Error fetching podcast :", error);
      }
    };
    fetchData();
    fetchPodcastData(Data.userId);
  }, [Data.userId]);

  //Logout code
  const logout = async () => {
    try {
      await axios.delete("http://localhost:4000/logout", {
        headers: {
          authorization: `Bearer ${Cookies.get("user")}`,
        },
      });
      Cookies.remove("user");
      console.log("logout");
      setUser(false);
      navigate("/");
      // Set user to false after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  // delete Account
  const delAcc = async () => {
    try {
      await axios.delete("http://localhost:4000/delete_account", {
        headers: {
          Authorization: `Bearer ${Cookies.get("user")}`,
        },
      });
      Cookies.remove("user");
      setUser(false);
      navigate("/");
    } catch (error) {
      console.error("Error deleting Account:", error);
    }
  };
  //delete Podcast
  const del_podcast = async (podcastid) => {
    try {
      await axios
        .delete(`http://localhost:4000/delete_podcast/${podcastid}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("user")}`,
          },
        })
        .then(() => {
          navigate("/profile"); // Reload the page
          toast.success("successfully deleted podcast");
        })
        .catch((error) => {
          if (error.response) {
            // Server responded with an error
            console.error(error.response.data);
          } else if (error.request) {
            // Request failed (e.g., network error)
            console.error(error.request);
          } else {
            // Other error
            console.error(error.message);
          }
        });

      console.log(podcastid);
    } catch (error) {
      console.error("Error deleting podcast:", error);
    }
  };
  if (user) {
    return (
      <>
        <div className="row pt-20">
          <div className="col-md-6 text-center">
            <h1 className="page-header">User Profile</h1>
            <p className="text-black text-2xl font-bold">
              username:{Data.name}
            </p>
            <p className="text-black text-base font-thin">
              email:
              {Data.email}
            </p>
          </div>
          <div className="col-md-6 flex items-center">
            <button className="btn btn-lg mx-3" style={{backgroundColor:"var(--theme)",color:"#fff"}} onClick={logout}>
              Logout
            </button>
            <button className="btn btn-lg" style={{backgroundColor:"var(--theme)",color:"#fff"}} onClick={delAcc}>
              Delete Account
            </button>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-center page-header">Your Podcast</h1>
        </div>
        <div className="d-flex flex-wrap items-center justify-center w-screen overflow-hidden">
          {podcast.map((item) => (
            <div className={styles.box}>
              <div className={styles.imgbox}>
                <img src={item.thumbnail} alt="" className="" />
                <div className={styles.iconbar}>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this podcast?"
                        )
                      ) {
                        del_podcast(item._id);
                      }
                    }}
                  >
                    <abbr title="Delete Podcast">
                      <i class="fa-solid fa-trash"></i>
                    </abbr>
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/edit/${item._id}`);
                    }}
                  >
                    <abbr title="Edit Podcast">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </abbr>
                  </button>
                </div>
              </div>
              <hr className="mx-auto w-50" />
              <h2 className="font-mono text-xl font-bold uppercase">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    toast.error("user have to login first");
    return (
      <>
        <h1 className="pt-20 mb-20 h-full">You have to Log in First</h1>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop={false}
          pauseOnHover
        />
      </>
    );
  }
}

export default profile;
