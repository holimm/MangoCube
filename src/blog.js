import ReactPlayer from "react-player";
import {motion} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setCurrentPage,setTransitionTabAnimation,setHeaderCancelAnimation } from "./counter/counterSlice";
import { useNavigate } from "react-router-dom";
import Header from "./constant/header";
import Footer from "./constant/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blogs(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const transitionTabAnimation = useSelector((state)=>state.counter.transitionTabAnimation);
    const currentPage = useSelector((state)=>state.counter.currentPage);
    useEffect(()=>{
        dispatch(setHeaderCancelAnimation(-200));
        dispatch(setCurrentPage('Blog'));
        dispatch(setTransitionTabAnimation(false));
    },[]);   
    const react_slick_settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    function TransitionAnimation(){
        return(
            <>
            <motion.div className="fixed top-0 h-screen w-full bg-black" style={{zIndex: 60}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.35}}></motion.div>
            </>
        );
    }
    function Banner(){
        return(
            <>         
            <div className="h-screen w-full bg-cover bg-no-repeat absolute z-10" style={{backgroundImage: `url('../img/homepage.jpg')`}}>               
                <div className="h-full w-full absolute bg-gradient-to-b from-transparent via-transparent to-black top-0 z-20">
                    <div className="h-full w-full flex justify-start items-center">
                        <div className="h-fit w-10/12 mx-auto"></div>
                    </div>
                </div>
            </div>
            </>
        );
    }
    function Splitter(){
        return(<div className="w-full" style={{height:'20vh'}}></div>)
    }
    function Blogs (){
        function SingleBlog(){
            return(
                <motion.div onClick={()=>{navigate('/MangoCube/post')}} className="h-fit w-fit mx-3 cursor-pointer" whileHover={{scale:1.008}}>
                    <img className="rounded-xl" src="https://assets.originrealms.com/cdn-cgi/image/format=webp,quality=90,fit=scale-down,width=1920/2022/03/Badger_Blog.jpg" alt="BlogImage"></img>
                    <h1 className="mt-3 text-2xl font-bold text-start">0.18.0 - Gigs & Jigs Update</h1>
                    <p className="mt-1 text-start">September 27th, 2022</p>
                    <p className="mt-1 text-start">As many of you have recently seen, Origin Isles is undergoing some major construction to the right side of the island and there's plenty more to see! Buckle up as we dive into the most expressive update Origin Isles has ever seen!</p>
                </motion.div>
            );
        }
        return(
            <div className="h-fit w-full bg-black/80 rounded-xl inline-block relative py-20">
            {/* <div className="h-fit w-full bg-gradient-to-r from-purple-900 via-violet-900 to-amber-900 inline-block relative py-20"> */}
                <div className="h-full w-full flex justify-center items-center">                   
                    <div className="h-fit w-11/12">
                        <div className="h-fit w-full">
                            <h1 className="text-4xl text-center">News &amp; Info</h1>
                            <p className="text-lg mt-3 text-center">Stay up to date with the latest blog posts!</p>
                        </div>
                        <div className="h-fit w-full mt-10 grid grid-cols-2 gap-10">  
                            <SingleBlog/>
                            <SingleBlog/>
                            <SingleBlog/>
                            <SingleBlog/>
                            <SingleBlog/>
                            <SingleBlog/>
                        </div>
                        <div className="h-fit w-full mt-14 flex justify-start">
                            <div className="h-10 w-10 bg-white/30 flex justify-center items-center mx-2 cursor-pointer hover:bg-white/50">1</div>
                            <div className="h-10 w-10 bg-white/30 flex justify-center items-center mx-2 cursor-pointer hover:bg-white/50">2</div>
                            <div className="h-10 w-10 bg-white/30 flex justify-center items-center mx-2 cursor-pointer hover:bg-white/50">3</div>
                            <div className="h-10 w-10 bg-white/30 flex justify-center items-center mx-2 cursor-pointer hover:bg-white/50">4</div>
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
    return(  
        <>
        {transitionTabAnimation ? <TransitionAnimation/> : null}
        <motion.div className="fixed top-0 h-screen w-full bg-black" style={{zIndex: 70}} initial={{opacity:1}} animate={{opacity:0,transitionEnd:{display:'none'} }} transition={{duration:0.4}}></motion.div>
        <div className="h-fit w-full">
            <div className="h-fit w-full">
                <Banner/>
                <Header/>
                <div className="h-fit w-full absolute z-20"> 
                    <div className="h-fit w-11/12 mx-auto">
                        <Splitter/>           
                        <Blogs/>                   
                    </div> 
                    <Footer/> 
                </div>
            </div>
        </div>
        </>
    );
}