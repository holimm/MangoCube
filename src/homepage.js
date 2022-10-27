import ReactPlayer from "react-player";
import {motion} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setCurrentPage,setTransitionTabAnimation,setHeaderCancelAnimation } from "./counter/counterSlice";
import { useNavigate } from "react-router-dom";
import Header from "./constant/header";
import Footer from "./constant/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Homepage(){
    const refServerIP = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const transitionTabAnimation = useSelector((state)=>state.counter.transitionTabAnimation);
    const currentPage = useSelector((state)=>state.counter.currentPage);
    useEffect(()=>{
        dispatch(setHeaderCancelAnimation(-200));
        dispatch(setCurrentPage('Home'));
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
            <div className="h-screen w-full bg-cover bg-no-repeat relative" style={{backgroundImage: `url('../img/homepage.jpg')`}}>               
                <div className="h-full w-full absolute bg-gradient-to-b from-transparent via-transparent to-black top-0 z-20">
                    <div className="h-full w-full flex justify-start items-center">
                        <div className="h-fit w-10/12 mx-auto">
                            <p className="text-6xl cursor-pointer">Explore the incredible world of</p>
                            <p className='text-6xl text-amber-600 cursor-pointer '>MangoCube</p>
                            <p className="text-2xl cursor-pointer mt-2">Join and start your journey today!</p>
                            <motion.div className="h-fit w-fit flex justify-center items-center px-5 py-2 bg-amber-500 border-r-2 border-b-2 border-amber-900 mt-5"
                                whileHover={{scale:1.05}} whileTap={{scale:1}}
                            >                               
                                <motion.p ref={refServerIP} className="text-2xl text-center cursor-pointer" onClick={copyServerIP}>play.mangocube.net</motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Header/>
            </div>
            </>
        );
    }
    function Introduce(){
        return(
            <div className="h-fit w-full bg-black" >
            <div className="h-full w-full mx-auto pb-20 pt-20 relative">
                <div className="h-full w-full absolute top-0 z-20"></div>
                <div className="h-full w-2/3 mx-auto">
                    <ReactPlayer url={'https://www.youtube.com/embed/jMe3tdyjouM'} width={'100%'} height={'40rem'} playing={true} muted={true} controls={false} loop={true}></ReactPlayer>    
                </div>
                <div className="h-full w-1/3 mx-auto flex items-center mt-20">
                    <div className="h-fit w-full text-center">
                        <h1 className="text-4xl">What is MangoCube?</h1>
                        <p className="mt-3 text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
    function Blogs (){
        function SingleBlog(){
            return(
                <motion.div className="h-fit w-fit mx-8 cursor-pointer" whileHover={{scale:1.008}}>
                    <img className="border-2 border-slate-300" src="../img/homepage.jpg" alt="BlogImage"></img>
                    <h1 className="mt-3 text-2xl font-bold text-start">0.1 | Summer Madness</h1>
                    <p className="mt-1 text-start">September 27th, 2022</p>
                </motion.div>
            );
        }
        return(
            <div className="h-fit w-full bg-cover bg-center inline-block relative py-32" style={{backgroundImage: `url('../img/news_bg.gif')`}}>
            {/* <div className="h-fit w-full inline-block relative py-20"> */}
                <div className="h-full w-full flex justify-center items-center">                   
                    <div className="h-fit w-10/12 mx-auto">
                        <div className="h-fit w-full">
                            <h1 className="text-4xl text-center">News &amp; Info</h1>
                            <p className="text-lg mt-3 text-center">Stay up to date with the latest blog posts!</p>
                        </div>
                        <div className="h-fit w-full mt-10">   
                                <Slider {...react_slick_settings}>
                                    <SingleBlog/>
                                    <SingleBlog/>
                                    <SingleBlog/>
                                    <SingleBlog/>
                                    <SingleBlog/>
                                    <SingleBlog/>
                                </Slider>
                        </div>
                    </div>
                </div>        
            </div>
        )
    }
    function Staff (){
        const staffs = [
            {
                name: 'SEN2Y',
                model: 'https://crafatar.com/renders/body/a2bb5d3f-0fae-4dea-9019-001de88dfc19',
                position: 'FOUNDER',
                content: `Hey, I’m SEN2Y! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!`
            },
            {
                name: 'SHIRU',
                model: 'https://crafatar.com/renders/body/a11c007b-a2c8-42c0-8959-5c154cd1bc9d',
                position: 'WEBSITE DEVELOPER',
                content: `Hey, my name is Ho, and I coded the website you're using right now! Having a great server is great, but you need a special place to keep yourself up to date with the latest news, learn more about the server, and even support us on the store. I love playing around with new technologies to improve your web experience!`
            },          
        ]
        const [currentStaff, setCurrentStaff] = useState({
            name: 'SEN2Y',
            model: 'https://crafatar.com/renders/body/a2bb5d3f-0fae-4dea-9019-001de88dfc19',
            position: 'FOUNDER',
            content: `Hey, I’m SEN2Y! As the founder of Origin Realms, my main tasks revolve around planning and organising new and exciting content for everyone to enjoy on a weekly basis. Keeping everyone on track is a busy job, but when I’m not working with the team to make awesome stuff, you’ll see lots of me on the server and the Discord - don’t be a stranger if you see me around!`
        });
        const StaffWholeContent = () => {
            const StaffContent = () =>{
                return(
                    <div className="h-fit w-1/2 float-left">
                        <motion.div className="h-fit w-fit"
                            initial={{x:-30, opacity: 0}}
                            animate={{x:0, opacity: 1}}
                            transition={{duration:0.5, ease:'easeInOut'}}
                        >
                            <h1 className="mt-3 text-2xl font-bold text-start">{currentStaff.name} - {currentStaff.position}</h1>
                            <p className="mt-1 text-start">{currentStaff.content}</p>
                        </motion.div>
                    </div>
                );
            }
            const StaffModel = () =>{
                return(
                    <div className="h-fit w-1/2 float-left">
                        <motion.div className="h-fit w-fit mx-auto"
                            initial={{scale: 0.5, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{duration:0.5, ease:'easeInOut'}}
                        >
                        <img src={`${currentStaff.model}`} alt="Staff Model"></img>
                        </motion.div>
                    </div>
                );
            }
            return(
                <>
                    <StaffModel/>
                    <StaffContent/>                   
                </>
            );
        }
        const StaffHead = (props) => {
            return(
                <div className="h-fit w-fit float-left">
                    <img onClick={()=>changeShowingStaff(props.name)} alt="Staff Head" className="hover:scale-110 cursor-pointer" height={'50%'} width={'50%'} src={`${props.img}`}></img>
                </div>
            );
        }
        function changeShowingStaff(name){
            let setThisStaff = staffs.filter(item=>{
                return item.name === name;
            });
            setCurrentStaff(setThisStaff[0]);
        }
        return(
            <div className="h-fit w-full bg-black inline-block relative py-20">
                <div className="h-full w-full flex justify-center items-center">                   
                    <div className="h-fit w-2/3 mx-auto grid grid-cols-1">
                        <div className="h-fit w-full">
                            <h1 className="text-4xl text-center">Meet The Team</h1>
                            <p className="text-lg mt-3 text-center">Learn about the people who make MangoCube amazing!</p>
                        </div>
                        <div className="h-72 w-full mt-10 flex justify-center items-center">                       
                            <StaffWholeContent/>
                        </div>
                        <div className="h-fit w-full flex justify-center items-center mt-20">
                            <StaffHead name="SEN2Y" img='https://crafatar.com/avatars/a2bb5d3f-0fae-4dea-9019-001de88dfc19?size=100'/>
                            <StaffHead name="SHIRU" img='https://crafatar.com/avatars/a11c007b-a2c8-42c0-8959-5c154cd1bc9d?size=100'/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    function Discord (){
        return(
            <div className="w-full bg-cover bg-center inline-block relative" style={{backgroundImage: `url('../img/discord_bg.jpg')`}}>
                <div className="w-full h-full bg-black/50 py-28">
                    <div className="h-full w-1/3 relative z-20 mx-auto">
                        <div className="h-full w-full flex justify-center items-center">
                        <div className="h-fit w-fit">
                            <h1 className="text-4xl text-center mt-5">Join Our Discord!</h1>
                            <img className="mt-3 mx-auto" src="../img/discord.png" alt="DiscordLogo"></img>
                            <p className="mt-8 text-center">Here on MangoCube we think communication is the key to an amazing community. Because of that, we heavily value our Discord and the way it allows us to connect with our favourite people ever - you! Come join us, and let's create our origin - together!</p>
                            <div className="h-fit w-fit mx-auto">
                                <motion.button className="px-10 py-4 mt-8 bg-sky-500 hover:bg-sky-600 border-b-4 border-sky-800"
                                whileHover={{scale: 1.05}} whileTap={{scale:1}}
                                >Click me!</motion.button>
                            </div>
                        </div>   
                        </div>                
                    </div>
                </div>
            </div>
        )
    }
    function copyServerIP(){
        navigator.clipboard.writeText('play.mangocube.net');
        refServerIP.current.innerHTML = "Copied to clipboard!";
        setTimeout(()=>{refServerIP.current.innerHTML = "play.mangocube.net";},3000)
    }
    return(  
        <>
        {transitionTabAnimation ? <TransitionAnimation/> : null}
        <motion.div className="fixed top-0 h-screen w-full bg-black" style={{zIndex: 70}} initial={{opacity:1}} animate={{opacity:0,transitionEnd:{display:'none'} }} transition={{duration:0.4}}></motion.div>
        <div className="h-fit w-full">
            <Banner/>
            <div className="h-fit w-full">
                <div className="h-fit w-full">
                    <Introduce/>
                    {/* <SplitLiner/> */}
                    <Blogs/>
                    <Staff/>
                    <Discord/>
                    <Footer/>
                </div>
            </div>
        </div>
        </>
    );
}