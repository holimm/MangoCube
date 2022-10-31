import ReactPlayer from "react-player";
import {motion} from "framer-motion";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setCurrentPage,setTransitionTabAnimation,setHeaderCancelAnimation } from "../counter/counterSlice";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentPage = useSelector((state)=>state.counter.currentPage);
    const headerCancelAnimation = useSelector((state)=>state.counter.headerCancelAnimation);
    function NavigateToAnotherPage(where){
        switch(where){
            case 'Home': 
                dispatch(setHeaderCancelAnimation(0));
                dispatch(setTransitionTabAnimation(true));
                dispatch(setCurrentPage('Home'));
                setTimeout(()=>{navigate('/MangoCube/homepage')},400);
                break;
            case 'Blog': 
                dispatch(setHeaderCancelAnimation(0));
                dispatch(setTransitionTabAnimation(true));
                dispatch(setCurrentPage('Blog'));
                setTimeout(()=>{navigate('/MangoCube/blog')},400);
                break;
            case 'Rules': 
                dispatch(setHeaderCancelAnimation(0));
                dispatch(setTransitionTabAnimation(true));
                dispatch(setCurrentPage('Rules'));
                setTimeout(()=>{navigate('/MangoCube/rules')},400);
                break;
        }
    }
    return(
        <motion.div className="h-16 w-full fixed top-0 z-50 bg-black/20 backdrop-blur-sm" 
            initial={{y:headerCancelAnimation}}
            animate={{y:0}}
            transition={{duration: 1, ease:'easeInOut'}}
        >
            <nav className="h-full w-full text-center">
                <div className="h-full w-full flex justify-center items-center">
                    {currentPage=='Home' ? <div className="h-fit w-fit mx-6 px-3 py-1 text-xl bg-white text-black cursor-pointer rounded-full">Homepage</div>
                    : <div onClick={()=>NavigateToAnotherPage('Home')} className="h-fit w-fit mx-6 px-3 py-1 text-xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer rounded-full">Homepage</div>}
                    {currentPage=='Blog' ? <div className="h-fit w-fit mx-6 px-3 py-1 text-xl bg-white text-black cursor-pointer rounded-full">News &amp; Info</div>
                    : <div onClick={()=>NavigateToAnotherPage('Blog')} className="h-fit w-fit mx-6 px-3 py-1 text-xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer rounded-full">News &amp; Info</div>}
                    {currentPage=='Rules' ? <div className="h-fit w-fit mx-6 px-3 py-1 text-xl bg-white text-black cursor-pointer rounded-full">Rules</div>
                    : <div onClick={()=>NavigateToAnotherPage('Rules')} className="h-fit w-fit mx-6 px-3 py-1 text-xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer rounded-full">Rules</div>}
                    <div onClick={()=>NavigateToAnotherPage('Store')} className="h-fit w-fit mr-20 ml-6 px-4 py-2 text-xl bg-amber-600 hover:bg-amber-500 transition-all duration-300 cursor-pointer rounded-full">Store</div>
                </div>
            </nav>
        </motion.div>
    );
}