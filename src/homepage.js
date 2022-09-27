import ReactPlayer from "react-player";
import {motion} from "framer-motion";
import { useRef, useState } from "react";

export default function Homepage(){
    const refServerIP = useRef(null);
    function Header(){
        function Tab(props){
            return(
                props.name === "STORE" ? <div className="h-fit w-fit mx-6 px-4 py-2 text-xl bg-amber-700 hover:bg-amber-600 transition-all duration-300 cursor-pointer">{props.name}</div>
                : <div className="h-fit w-fit mx-6 px-4 py-2 text-xl hover:bg-amber-700 transition-all duration-300 cursor-pointer">{props.name}</div>
            );
        }
        return(
            <motion.div className="h-20 w-full absolute top-0 z-50" 
                initial={{y:-200}}
                animate={{y:0}}
                transition={{duration: 1, ease:'easeInOut'}}
            >
                <nav className="h-full w-2/3 mx-auto text-center grid grid-cols-2">
                    <div className="h-full w-full">
                        <div className="h-full w-1/2 bg-cover bg-center cursor-pointer" style={{backgroundImage: `url('./img/mangocube_word.png')`}}></div>
                    </div>
                    <div className="h-full w-full flex justify-end items-center">
                        <Tab name="HOME"/>
                        <Tab name="BLOG"/>
                        <Tab name="RULES"/>
                        <Tab name="STORE"/>
                    </div>
                </nav>
            </motion.div>
        );
    }
    function Introduce(){
        return(
            <div className="h-fit w-2/3 mx-auto grid grid-cols-2 gap-14 pb-20 pt-20">
                <div className="h-full w-full">
                    <ReactPlayer url={'https://www.youtube.com/embed/jMe3tdyjouM'} controls={true}></ReactPlayer>    
                </div>
                <div className="h-full w-full flex items-center">
                    <div className="h-fit w-full">
                        <h1 className="text-4xl">What is MangoCube?</h1>
                        <p className="mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>
        );
    }
    function Blogs (){
        function SingleBlog(){
            return(
                <div className="h-fit w-full">
                    <motion.img className="border-2 border-slate-300 hover:border-green-600 cursor-pointer" src="./img/homepage.png" alt="BlogImage"
                        whileHover={{scale: 1.02}} whileTap={{scale:1}}
                    ></motion.img>
                    <h1 className="mt-3 text-2xl font-bold text-center">Blogs</h1>
                    <p className="mt-1 text-center">September 27th, 2022</p>
                </div>
            );
        }
        return(
            <div className="h-fit w-full bg-cover bg-center inline-block pb-20 pt-20 relative" style={{backgroundImage: `url('./img/parallax.webp')`,backgroundAttachment: 'fixed'}}>
                <div className="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
                <div className="h-full w-2/3 relative z-20 mx-auto">
                    <div className="h-fit w-fit mx-auto">
                        <h1 className="text-4xl text-center mt-5">Blogs</h1>
                        <p className="mt-3 text-center">Stay up to date with the latest blog posts!</p>
                    </div>
                    <div className="h-fit w-full mx-auto grid grid-cols-3 gap-8 mt-12">
                        <SingleBlog/>
                        <SingleBlog/>
                        <SingleBlog/>
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
            <div className="h-fit w-full inline-block pb-20 pt-20">
                <div className="h-full w-2/3 grid grid-cols-1 mx-auto">
                    <div className="h-fit w-full mx-auto">
                        <h1 className="text-4xl text-center mt-5">Meet The Team</h1>
                        <p className="mt-3 text-center">Learn about the people who make MangoCube amazing!</p>
                    </div>
                    <div className="h-fit w-full mt-12">                       
                        <StaffWholeContent/>
                    </div>
                    <div className="h-fit w-full flex justify-center items-center mt-20">
                        <StaffHead name="SEN2Y" img='https://crafatar.com/avatars/a2bb5d3f-0fae-4dea-9019-001de88dfc19?size=100'/>
                        <StaffHead name="SHIRU" img='https://crafatar.com/avatars/a11c007b-a2c8-42c0-8959-5c154cd1bc9d?size=100'/>                     
                    </div>
                </div>
            </div>
        )
    }
    function Discord (){
        return(
            <div className="h-fit w-full bg-cover bg-center inline-block pb-20 pt-10 relative" style={{backgroundImage: `url('./img/parallax.jpg')`,backgroundAttachment: 'fixed'}}>
                <div className="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/70"></div>
                <div className="h-full w-1/3 relative z-20 mx-auto">
                    <div className="h-fit w-full mx-auto">
                        <h1 className="text-4xl text-center mt-5">Join Our Discord!</h1>
                        <img className="mt-3 mx-auto" src="./img/discord.png" alt="DiscordLogo"></img>
                        <p className="mt-3 text-center">Here on MangoCube we think communication is the key to an amazing community. Because of that, we heavily value our Discord and the way it allows us to connect with our favourite people ever - you! Come join us, and let's create our origin - together!</p>
                        <div className="h-fit w-fit mx-auto">
                            <motion.button className="px-10 py-4 mt-4 bg-sky-800 hover:bg-sky-700 border-b-2 border-r-2 border-sky-400"
                             whileHover={{scale: 1.05}} whileTap={{scale:1}}
                            >Click me!</motion.button>
                        </div>
                    </div>                   
                </div>
            </div>
        )
    }
    function Footer(){
        return(
            <div className="h-fit w-full inline-block bg-black">
                <div className="h-full w-3/4 grid grid-cols-3 mx-auto pb-20">
                    <div className="h-full w-full">
                        <h1 className="text-4xl text-start mt-20">Play Now</h1>
                        <p className="mt-1 text-start text-lg">Join and start your journey today!</p>
                        <p className="mt-1 text-start text-lg">play.mangocube.net</p>
                    </div>
                    <div className="h-full w-full">
                        <h1 className="text-4xl text-start mt-20">Links</h1>
                        <p className="mt-1 text-start text-lg">Home</p>
                        <p className="mt-1 text-start text-lg">Blog</p>
                        <p className="mt-1 text-start text-lg">Rules</p>
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
    function copyServerIP(){
        navigator.clipboard.writeText('play.mangocube.net');
        refServerIP.current.innerHTML = "Copied to clipboard!";
        setTimeout(()=>{refServerIP.current.innerHTML = "play.mangocube.net";},3000)
    }
    return(
        <div className="h-fit w-full">
            <motion.div className="w-full bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: `url('./img/homepage.png')`,height: '40rem'}}
                animate={{backgroundSize: ['100%','102%','100%']}}
                transition={{duration: 10, repeat:'Infinity'}}
            >               
                <div className="h-full w-full absolute top-0 z-10 backdrop-blur-sm"></div>
                <div className="h-full w-full absolute top-0 z-20 bg-gradient-to-b from-transparent to-black">
                    <div className="h-full w-full flex justify-center items-center">
                        <div className="h-fit w-fit mx-auto">
                            <motion.img className="cursor-pointer mx-auto" src="./img/mangocube_logo.webp" alt="MangoCube Logo"
                                initial={{scale:1.2}}
                                animate={{y: [0,-15,0]}}
                                transition={{duration:1.5, repeat:'Infinity'}}
                                drag
                                dragConstraints={{top: 0, bottom:0, left: 0, right: 0}}
                            ></motion.img>
                            <motion.div className="h-fit w-fit flex justify-center items-center px-5 py-2 bg-amber-900 border-2 border-amber-700 mt-5"
                                initial={{y:50, opacity: 0}}
                                animate={{y:0, opacity: 1}}
                                transition={{duration:1}}
                                >
                                <motion.p ref={refServerIP} className="text-3xl text-center cursor-pointer" onClick={copyServerIP}>play.mangocube.net</motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Header/>
            </motion.div>
            <div className="h-fit w-full">
                <div className="h-fit w-full">
                    <Introduce/>
                    <Blogs/>
                    <Staff/>
                    <Discord/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}