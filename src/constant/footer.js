import ReactPlayer from "react-player";
import {motion} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setCurrentPage,setTransitionTabAnimation,setHeaderCancelAnimation } from "../counter/counterSlice";
import { useNavigate } from "react-router-dom";

export default function Footer(){
    const navigate = useNavigate();
    const currentPage = useSelector((state)=>state.counter.currentPage);
    return(
        <div className="h-fit w-full inline-block bg-black">
            <div className="h-full w-3/4 grid grid-cols-3 mx-auto mt-10 pb-20">
                <div className="h-full w-full">
                    <h1 className="text-4xl text-start mt-20">Play Now</h1>
                    <p className="mt-1 text-start text-lg">Join and start your journey today!</p>
                    <p className="mt-1 text-start text-lg">play.mangocube.net</p>
                </div>
                <div className="h-full w-full">
                    <h1 className="text-4xl text-start mt-20">Links</h1>
                    {currentPage=='Home' ? <p className="mt-1 text-start text-lg text-amber-400 cursor-pointer">Home</p>
                     : <p onClick={()=>{navigate('/MangoCube/homepage')}} className="mt-1 text-start text-lg cursor-pointer">Home</p> }
                    {currentPage=='Blog' ? <p className="mt-1 text-start text-lg text-amber-400 cursor-pointer">News &amp; Info</p>
                     : <p onClick={()=>{navigate('/MangoCube/blog')}} className="mt-1 text-start text-lg cursor-pointer">News &amp; Info</p> }
                     {currentPage=='Rules' ? <p className="mt-1 text-start text-lg text-amber-400 cursor-pointer">Rules</p>
                     : <p onClick={()=>{navigate('/MangoCube/rules')}} className="mt-1 text-start text-lg cursor-pointer">Rules</p> }
                </div>
                <div className="h-full w-full">
                    <h1 className="text-4xl text-start mt-20">Store</h1>
                    <p className="mt-1 text-start text-lg">Check out our store to purchase ranks, crate keys, and more!</p>
                    <button className="px-8 py-2 mt-2 rounded-md bg-yellow-600 hover:bg-yellow-500">Shop Now!</button>
                </div>
            </div>
            <div className="h-20 w-full mx-auto bg-zinc-900 border-t-2 border-zinc-700">
                <div className="h-full w-3/4 mx-auto flex items-center">
                    <p className="mt-1 text-start text-lg">&#169; 2022 MangoCube</p>
                </div>
            </div>
        </div>
    );
}