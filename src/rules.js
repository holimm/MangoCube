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

export default function Rules(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const transitionTabAnimation = useSelector((state)=>state.counter.transitionTabAnimation);
    const currentPage = useSelector((state)=>state.counter.currentPage);
    useEffect(()=>{
        dispatch(setHeaderCancelAnimation(-200));
        dispatch(setCurrentPage('Rules'));
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
    function Rules (){
        const [tab,setTab] = useState('Home');
        function RuleSelect(){
            function selectTab(name){
                setTab(name);
            }
            function RuleTab(props){
                let $class = `h-20 w-full flex justify-center items-center text-2xl cursor-pointer`;
                if(props.name === tab){$class+=' border-l-8 border-amber-600 bg-neutral-500/80 text-amber-500'} else{$class+=' bg-black/80 hover:bg-neutral-900/90'}
                return(
                    <div onClick={()=>selectTab(props.name)} className={$class}>{props.name}</div>
                );
            }
            return(
                <div className="h-fit w-11/12">
                    <RuleTab name="Home"/>
                    <RuleTab name="General"/>
                    <RuleTab name="SMP"/>
                    <RuleTab name="Discord"/>
                </div>
            )
        }
        function RuleContent(){
            function Paragraph_Title(props){
                return(
                    <p className="text-xl font-bold mt-2 text-start">{props.content}</p>
                )
            }
            function Paragraph_Line(props){  
                let $class = '';
                switch(props.color){
                    case 'red':
                        $class+=' text-red-500';
                        break;
                    default:
                        $class+=' text-white'
                }
                if(props.size){$class += ` text-${props.size}`;} else {$class += ' text-lg';}
                if(props.align){$class += ` text-${props.align}`;} else {$class += ' text-start';}
                if(props.underline){$class+=' underline';}
                if(props.bold){$class+=' font-bold';}
                if(props.italic){$class+=' italic';}
                if(props.margin){$class += ` mt-${props.margin}`;} else {$class += ' mt-2';}
                

                return <p className={$class}>{props.content}</p>;
            }
            function Paragraph_Numbering(props){
                return(
                    <li className="text-lg mt-2 text-start">{props.content}</li>
                )
            }
            function Button_Useful_Links(props){
                return(
                    <button className="h-full w-full bg-amber-600 rounded-xl cursor-pointer hover:bg-amber-500">{props.name}</button>
                )
            }
            return(
                <div className="h-fit w-full bg-black/80 inline-block relative py-20">   
                    <div className="h-full w-full flex justify-center items-center">                   
                        <div className="h-fit w-11/12">
                            <div className="h-fit w-full">
                                {tab === 'Home' ? 
                                <>
                                <h1 className="text-4xl text-center">MangoCube's Rules</h1>
                                <Paragraph_Line content={`Click the tabs on the left to see specific rules for each section of MangoCube.`} align={'center'}/>
                                <Paragraph_Line content={`Rules are made to keep the community safe. Any violations of the rules listed will be punished accordingly depending on the violation.`} align={'center'} margin={'10'}/>
                                <Paragraph_Line content={`Please beware that your account is your responsibility.`} align={'center'} margin={'1'} underline={true}/>
                                <Paragraph_Line content={`We reserve the right to modify these rules and guidelines at staff's discretion. These rules are immediately effective whenever they are updated, which will be notified on our Discord server. It is the player's responsibility to stay up-to-date with our rules and guidelines. By joining our community, you are subject to these rules.`} align={'center'} margin={'10'} italic={true}/>
                                <div className="h-fit w-full">
                                    <p className="text-lg mt-10 text-center">Useful links:</p>
                                    <div className="h-14 w-2/3 mx-auto grid grid-cols-3 gap-10 mt-2">
                                        <Button_Useful_Links name={`Player Report`}/>
                                        <Button_Useful_Links name={`Banned List`}/>
                                        <Button_Useful_Links name={`Ban Appeal`}/>
                                    </div>
                                </div>
                                </> : 
                                tab === 'General' ? 
                                <>
                                <h1 className="text-2xl text-center">MangoCube General Rules</h1>
                                <Paragraph_Line content={'These rules apply to the whole of MangoCube community'} align={'center'}/>
                                <hr className="my-5"></hr>
                                <Paragraph_Title content={'Client modifications'}/>
                                <Paragraph_Line content={'Client modifications are heavily advised against. Many clients have unintentional bugs that can affect server functions. And many lesser known clients could have malicious code.'}/>
                                <Paragraph_Line content={'That said, client mods that only offer you performance boost or cosmetics are allowed. Clients that offer a clear advantage over other players will not be allowed.'}/>
                                <Paragraph_Line content={'To see more, check our list of allowed mods to ensure you are not breaking the rules.'}/>
                                <Paragraph_Line content={`All mods are still considered use at your own risk.`} color="red" underline={true}/>
                                
                                <hr className="my-5"></hr>
                                <p className="text-xl font-bold mt-2 text-start">Advertising</p>
                                <Paragraph_Line content={'Advertising not allowed in any form. Below are the only exceptions:'}/>
                                    <Paragraph_Numbering content={'Advertise streaming/Youtube if you are playing on MangoCube'}/>
                                    <Paragraph_Numbering content={`Advertise streaming/Youtube if you are playing other games (not Minecraft)`}/>
                                    <Paragraph_Numbering content={'Mentioning the names of other servers*'}/>
                                <Paragraph_Line content={'*Mentioning other servers in conversations are allowed. But inviting others, putting their IPs in chat are not allowed.'}/>
                                <hr className="my-5"></hr>
                                <Paragraph_Title content={'Alternative Accounts/Ban Evasion'}/>
                                <Paragraph_Line content={'Playing on alternative accounts are allowed as long as you are not breaking any other rules.'}/>
                                <Paragraph_Line content={'But using alternative accounts to evade bans/punishment will be punished.'}/>
                                <Paragraph_Line content={'If you are found to violate the rules on one of your accounts, all your alts will also be punished.'}/>
                                <hr className="my-5"></hr>
                                <Paragraph_Title content={'Behavior Expectation'}/>
                                <Paragraph_Line content={'To summarize, be respectful to everyone.'}/>
                                <Paragraph_Line content={'Violations of this rule include:'}/>
                                    <Paragraph_Numbering content={'Harassment'}/>
                                    <Paragraph_Numbering content={'Threats'}/>
                                    <Paragraph_Numbering content={'Discrimination'}/>
                                <Paragraph_Line content={'And generally behavior that intentionally inflict harm or make others uncomfortable.'}/>
                                <Paragraph_Line content={'Common sense is expected. Mild jokes, banter and swearing are allowed as long as it is not excessive. However, there are a couple topics that we recommend avoiding:'}/>
                                    <Paragraph_Numbering content={'Sexual, explicit, gory content'}/>
                                    <Paragraph_Numbering content={'Substance use, drinking related topics'}/>
                                    <Paragraph_Numbering content={'Political debates/issues'}/>
                                    <Paragraph_Numbering content={'Religious debates/topics'}/>
                                    <Paragraph_Numbering content={'Begging'}/>
                                <Paragraph_Line content={'Finally, please keep any messages that can be read publicly in English. This helps with our staff team to moderate the community and let everyone understand you.'}/>
                                <hr className="my-5"></hr>
                                <Paragraph_Title content={'Exploits & Bugs'}/>
                                <Paragraph_Line content={'If you found bugs or exploits, please report them staff members as soon as possible as it allows us to improve the experience for all players.'}/>
                                <Paragraph_Line content={'However, if you are found to be taking advantage of such bugs or exploits, it will be considered a violation.'}/>
                                </> : 
                                tab === 'SMP' ? 
                                <>
                                <h1 className="text-2xl text-center">MangoCube's SMP Rules</h1>
                                <Paragraph_Line content={'These rules apply to our SMP server'} align={'center'}/>
                                <Paragraph_Line content={'Please remember general rules also apply on all of our servers.'} align={'center'}/>
                                <hr className="my-5"></hr>                           
                                <Paragraph_Title content={'Exploits/Bypass'}/>
                                <Paragraph_Line content={'Any kind of exploits and attempts at bypassing the intended working gameplay of the server is considered a violation.'}/>
                                <hr className="my-5"></hr>                           
                                <Paragraph_Title content={'Lag Machine'}/>
                                <Paragraph_Line content={'This rule is not limited to lag machine but also causing massive lag to either the server or client-side.'}/>
                                <hr className="my-5"></hr>                           
                                <Paragraph_Title content={'Griefing'}/>
                                <Paragraph_Line content={'To be more specific, griefing includes but not limited to these acts below:'}/>
                                    <Paragraph_Numbering content={'Stealing in a claimed area regardless of method'}/>
                                    <Paragraph_Numbering content={'Teleporting Traps'}/>
                                    <Paragraph_Numbering content={'Claiming near another claim area without permission'}/>
                                    <Paragraph_Numbering content={'Placing random blocks, breaking random blocks around a claimed area'}/>
                                <hr className="my-5"></hr>                           
                                <Paragraph_Title content={'Automatic Farms'}/>
                                <Paragraph_Line content={'Although automatic farms are not forbidden on the server, we highly discourage players to make these types of farms as they can cause lag to the server, which would fall under the Lag Machine rule.'}/>
                                <Paragraph_Line content={'Any automatic farms found to be too big, causing lag to the server would be deleted without prior notice.'}/>
                                <Paragraph_Line content={'There is no specific guidelines to avoid this, but you can follow these general guidelines:'}/>
                                    <Paragraph_Numbering content={'Your automatic farm machine should not require more than a 2x2 chunks area (32 x 32 blocks)'}/>
                                    <Paragraph_Numbering content={'Your automatic farm should not involve villagers/raid farming'}/>
                                    <Paragraph_Numbering content={'Your automatic farm should not be higher than 16 blocks vertically'}/>
                                    <Paragraph_Numbering content={'Your automatic farm should not include moving entities such as minecarts'}/>
                                <Paragraph_Line content={'Feel free to ask us about your automatic machine design beforehand on Discord.'}/>                                
                                </> : tab === 'Discord' ? <>
                                <h1 className="text-2xl text-center">MangoCube's Discord Rules</h1>
                                <Paragraph_Line content={'These rules apply to our Discord server, it is listed in more details here'} align={'center'}/>
                                <hr className="my-5"></hr>                           
                                <Paragraph_Title content={`Follow Discord's TOS and Guidelines`}/>
                                <Paragraph_Line content={`Since we are operating on Discord as a platform, it is expected that members are following Discord's TOS and Guidelines.`}/>
                                <Paragraph_Line content={`To summarize it, below are some bullet points:`}/>
                                <Paragraph_Line content={`- You need to be at least 13 years old to join Discord as a platform (unless you have parental approval)`}/>
                                <Paragraph_Line content={`- Be respectful:`}/>
                                    <Paragraph_Numbering content={'No harassment or promoting it'}/>
                                    <Paragraph_Numbering content={'No promoting threats of harm'}/>
                                    <Paragraph_Numbering content={'No promoting violent extremism'}/>
                                    <Paragraph_Numbering content={'No sexualizing minors'}/>
                                    <Paragraph_Numbering content={'No making adult content available for minors'}/>
                                    <Paragraph_Numbering content={'No promoting content about self-harm or suicide'}/>
                                    <Paragraph_Numbering content={'Respect intellectual property rights'}/>
                                    <Paragraph_Numbering content={'No sharing media of gore, excessive violence, animal harm especially with the intention to harass or shock others.'}/>
                                <Paragraph_Line content={`- Be Honest:`}/>
                                    <Paragraph_Numbering content={'No sharing misinformation'}/>
                                    <Paragraph_Numbering content={'No coordinating or participating malicious impersonation of an individual or an organization'}/>
                                    <Paragraph_Numbering content={`No engaging in activities intended to cause damage, or unauthorized access to another person's account, network, system`}/>
                                    <Paragraph_Numbering content={'No distributing or providing content involving hacking, cracking, stolen goods, pirated content or accounts.'}/>
                                <Paragraph_Line content={`If you need more clarification, check Discord's own website for more details.`}/>
                                <hr className="my-5"></hr>                           
                                <Paragraph_Title content={'Chat Guidelines & Rules'}/>
                                <Paragraph_Line content={'Here are some general guidelines for chatting on our Discord'}/>
                                <Paragraph_Line content={'1. English only'} bold={true}/>
                                <Paragraph_Line content={'This is not meant to stop everyone from speaking other languages. But to keep moderation easier for our staff as we may not speak other languages. Any public messages should only be written in English.'}/>
                                <Paragraph_Line content={'2. No phishing, scam, advertising'} bold={true}/>
                                <Paragraph_Line content={'This is certainly going against the Discord guidelines and potentially TOS. With advertising however, you are not allowed to do so on our Discord server. Any invite links will be immediately deleted. If you need to invite your friends/other players to your own private Discord, please do so through Direct Messages instead.'}/>
                                <Paragraph_Line content={'You are only allowed to advertise the following:'}/>
                                    <Paragraph_Numbering content={'Your Youtube/Streaming channel where you post content about MangoCube'}/>
                                    <Paragraph_Numbering content={'Your MangoCube related content'}/>
                                <Paragraph_Line content={'3. No political/religious topics'} bold={true}/>
                                <Paragraph_Line content={'Please keep these topics out of our Discord as this is not the right place for such discussions.'}/>
                                <Paragraph_Line content={'4. No discrimination/slurs'} bold={true}/>
                                <Paragraph_Line content={'It goes without saying, do not discriminate or harass anyone for their race, sexuality, gender and background. We also have a zero-tolerance policy against slurs. Any use of slurs will automatically be notified/warned as a violation.'}/>
                                <Paragraph_Line content={'5. No offensive, inappropriate content'} bold={true}/>
                                <Paragraph_Line content={'Adult content and overly "edgy" memes are prime examples. Again, we do not welcome these type of content on our Discord.'}/>
                                </> : null}
                            </div>
                        </div>
                    </div>            
                </div>
            );
        }
        return(
            <>
            <div className="h-fit w-3/12">
                <RuleSelect/>
            </div>
            <div className="h-fit w-8/12">
                <RuleContent/>                   
            </div> 
            </>
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
                    <Splitter/>   
                    <div className="h-fit w-full flex justify-center">
                        <Rules/>
                    </div>   
                    <Footer/>               
                </div>
            </div>       
        </div>
        </>
    );
}