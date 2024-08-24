import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import 'react-toastify/ReactToastify.css';
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
function profile() {
  const [Data, setData] = useState({ name: "", email: "" });
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
        });
        //  console.log(res.username);
        setUser(true); // Set user to true after successful login
      }
      catch (error) {
        console.error("Error fetching user :", error);
      }
    };
    fetchData();

  }, []);
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

  if (user) {
    return (
      <>
        <div className='row pt-20'>
          <div className="col-md-6 text-center">
            <h1>user Profile</h1>
            <p className="text-black text-2xl font-bold">username:{Data.name}</p>
            <p className="text-black text-base font-thin">email:
              {Data.email}
            </p>
          </div>
          <div className="col-md-6 flex items-center">
            <button className='btn btn-lg' onClick={logout}>
              Logout
            </button>
            <button className='btn btn-lg' onClick={delAcc}>Delete Account</button>
          </div>
        </div>
      </>

    )
  }
  else {
      useEffect(()=>{
        navigate("/signin");
      })
  }

}

export default profile
