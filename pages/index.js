import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SpinnerDotted } from "spinners-react";
import { useCallback, useEffect, useState } from "react";
import { meme } from "../utils/meme";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [Loading, setLoading] = useState(false);
  const [Copy, setCopy] = useState("");
  const [Data, setData] = useState({});

  const fetchRequest = useCallback(() => {
    setLoading(true);
    setTimeout(async () => {
      const data = await axios.get("https://meme-api.com/gimme", {
        param: 1,
      });
      // console.log(data.data);
      setData(data.data);
      const copy = Data.url;
      setCopy("Hey, I found something interesting on reddit, " + copy);
    }, 2000);
  });

  const imageLoaded = () => {
    setLoading(false);
  };

  useEffect(async () => {
    setLoading(true);
    setTimeout(async () => {
      const data = await axios.get("https://meme-api.com/gimme", {
        param: 1,
      });
      // console.log(data.data);
      setData(data.data);
      const copy = Data.url;
      setCopy("Hey, I found something interesting on reddit, " + copy);
      // setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col justify-evenly items-center bg-black font-acme py-10 px-10">
      <nav className="py-10 text-darkCream text-4xl text-center">
        Meme-Centre by Annonymous Ninja...
      </nav>

      <div className="flex flex-col justify-evenly items-center  rounded shadow w-11/12 lg:w-1/2 pt-10">
        {Loading ? (
          <SpinnerDotted color="#D89228"></SpinnerDotted>
        ) : (
          <img
            src={Data.url}
            alt={Data.title}
            className="w-10/12 lg:w-1/2"
            onLoad={imageLoaded}
          />
        )}
        <div className="textlg flex text-darkCream pt-2">
          author : {Data.author}
        </div>
        <div className="w-full flex justify-between items-center px-10 py-4">
          <button
            className="text-darkCream bg-darkOrange px-2 py-1 rounded"
            onClick={() => {
              navigator.clipboard.writeText(Copy);
              toast.success("🦄 Link Copied!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            Copy link
          </button>
          <button
            className="text-darkCream bg-darkOrange px-2 py-1 rounded"
            onClick={() => {
              setLoading(true);
              fetchRequest();
              setLoading(false);
            }}
          >
            Next
          </button>
        </div>
      </div>

      <div className="text-darkCream py-2">
        Credits: ❣️ <a href="https://github.com/D3vd/Meme_Api">D3vd/Meme_Api</a>
      </div>
      <ToastContainer />
    </div>
  );
}
