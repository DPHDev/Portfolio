import { GitIcon, GithubIcon, InstagramIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from '../utils/Svg';


export const SocialMedia = () => {
    return (
        <ul className='social'>
            <li className='social_item'>
                <InstagramIcon style="hero_icon" />
            </li>
            <li className='social_item'>
                <TelegramIcon style="hero_icon"/>
            </li>
            <li className='social_item'>
                <GithubIcon style="hero_icon"/>
            </li>
            <li className='social_item'>
                <TwitterIcon style="hero_icon"/>
            </li>
            <li className='social_item'>
                <LinkedinIcon style="hero_icon"/>
            </li>
        </ul>
    );
};