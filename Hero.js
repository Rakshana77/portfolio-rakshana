// import HeroImg from '../assets/hero.png';
// import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

// export default function Hero() {
//     const config = {
//         subtitle: 'Full-stack developer',
//         social: {
//             linkedin: "https://www.linkedin.com/in/s-rakshana-089a66238/",
//             github: "https://github.com/Rakshana77"
//         }
//     }

//     return (
//         <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
//             <div className='md:w-1/2 flex flex-col'>
//                 <h1 className='text-white text-6xl font-hero-font'>
//                     Hi, <br/> I'm <span className='text-white'>S.</span>RAKSHANA 
//                     <p className='text-2xl'>{config.subtitle}</p>
//                 </h1>
//                 <div className='flex py-10'>
//                     <a
//                         href={config.social.github}
//                         className='pr-5 hover:text-white'
//                         target='_blank'
//                         rel='noopener noreferrer'
//                     >
//                         <AiOutlineGithub size={40}/>
//                     </a>
//                     <a
//                         href={config.social.linkedin}
//                         className='pr-5 hover:text-white'
//                         target='_blank'
//                         rel='noopener noreferrer'
//                     >
//                         <AiOutlineLinkedin size={40}/>
//                     </a>
//                 </div>
//             </div>
//             <img className='md:w-1/3' src={HeroImg} alt='hero'/>
//         </section>
//     );
// }
// Add your resume link here


import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
const resumeLink = "https://drive.google.com/file/d/195FQzVafGVLvzYj7VuTGMge4MLxgNuak/view?usp=sharing";
export default function Hero() {
    const config = {
        subtitle: 'Full-stack developer',
        social: {
            linkedin: "https://www.linkedin.com/in/s-rakshana-089a66238/",
            github: "https://github.com/Rakshana77"
        }
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi, <br/> I'm <span className='text-white'>S.</span>RAKSHANA 
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                
                {/* Resume Button */}
                <div className="mt-5">
                    <a 
                        href={resumeLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-secondary text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition duration-300"
                    >
                        View Resume
                    </a>
                </div>

                {/* Social Links */}
                <div className='flex py-10'>
                    <a
                        href={config.social.github}
                        className='pr-5 hover:text-white'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AiOutlineGithub size={40}/>
                    </a>
                    <a
                        href={config.social.linkedin}
                        className='pr-5 hover:text-white'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <AiOutlineLinkedin size={40}/>
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt='hero'/>
        </section>
    );
}
