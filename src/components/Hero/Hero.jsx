import { SocialMedia } from "./SocialMedia";

export const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="hero_content">
                <h3 className="text-grey">My name is:</h3>
                <h1 className="hero_name text-grey"><span className="titles text-accent">D</span>aniel <span className="titles text-accent">P</span>erdomo</h1>
                <h3 className="text-grey">I am a <span className="hero_jobs text-accent">Developer</span></h3>
                <button className="hero_btn">Hire me</button>
            </div>
            <div className="hero_social">
                <SocialMedia />
            </div>
       </div>
   );
};