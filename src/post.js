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

export default function Post(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const transitionTabAnimation = useSelector((state)=>state.counter.transitionTabAnimation);
    const currentPage = useSelector((state)=>state.counter.currentPage);
    useEffect(()=>{
        dispatch(setHeaderCancelAnimation(-200));
        dispatch(setCurrentPage('Blog'));
        dispatch(setTransitionTabAnimation(false));
    },[]);   
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
                <motion.div className="h-fit w-fit mx-3 cursor-pointer" whileHover={{scale:1.008}}>
                    <img className="rounded-xl" src="../img/homepage.jpg" alt="BlogImage"></img>
                    
                </motion.div>
            );
        }
        return(
            <div className="h-fit w-full bg-black/80 rounded-xl inline-block relative py-20">
            {/* <div className="h-fit w-full bg-gradient-to-r from-purple-900 via-violet-900 to-amber-900 inline-block relative py-20"> */}
                <div className="h-full w-full flex justify-center items-center">                   
                    <div className="h-fit w-full">
                        {/* <div className="h-96 w-10/12 mx-auto bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('https://assets.originrealms.com/cdn-cgi/image/format=webp,quality=90,fit=scale-down,width=1920/2022/03/Badger_Blog.jpg')`}}></div> */}
                        <img className="w-10/12 mx-auto rounded-xl" src="https://assets.originrealms.com/cdn-cgi/image/format=webp,quality=90,fit=scale-down,width=1920/2022/03/Badger_Blog.jpg" alt="BlogImage"></img>
                        <div className="h-fit w-8/12 mx-auto">
                            <h1 className="mt-10 text-4xl font-bold text-center">0.18.0 - Gigs & Jigs Update</h1>
                            <p className="text-xl mt-1 text-center">sen2y</p>
                            <p className="text-xl mt-1 text-center">September 27th, 2022</p>
                            <hr className="my-5"></hr>
                            <p className="text-lg mt-1 text-start">As many of you have recently seen, Origin Isles is undergoing some major construction to the right side of the island and there's plenty more to see! Buckle up as we dive into the most expressive update Origin Isles has ever seen!</p>
                            <p className="text-lg mt-3 text-start">Finally, the Badges and Tasks system is here! As discussed in some of our previous blogs, we intended this month to release the very first iteration of the long-awaited badges system, finally, we have made it.</p>
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