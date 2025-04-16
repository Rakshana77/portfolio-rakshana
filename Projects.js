// import websiteImg1 from '../assets/ecommerce-websites.jpg'

// import websiteImg2 from '../assets/website4.jpg';
// import websiteImg3 from '../assets/employee.jpg';
// import websiteImg4 from '../assets/youtube.jpg';

// export default function Projects() {

//     const config = {
//         projects: [
//          {
//                image: websiteImg1,
//               description: 'A Ecommerce Website. Built with MERN Stack.',
//              link: 'https://github.com/Rakshana77/ecom-fe-u',
//              deploy:"https://mellow-rugelach-9f1a79.netlify.app/"
//           },
         
//             {
//                 image: websiteImg2,
//                 description: 'Movie Ticket Booking website. Built with MERN stack.',
//                 link: 'https://github.com/Rakshana77/frontend-movies',
//                 deploy: "https://reliable-malabi-02bcc8.netlify.app/",
//             },
//             {
//                 image: websiteImg3,
//                 description: 'Employee Management app. Built with MERN STACK.',
//                 link: 'https://github.com/Rakshana77/employee',
//                 deploy: "https://starlit-banoffee-347939.netlify.app/",
//             },
//             {
//                 image: websiteImg4,
//                 description: 'Youtube clone.',
//                 link: 'https://github.com/Rakshana77/youtube-clone',
//                 deploy: "https://reliable-belekoy-3f1c96.netlify.app/",
//             }
//         ]
//     };

//     return (
//         <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
//             <div className="w-full">
//                 <div className="flex flex-col px-10 py-5">
//                     <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
//                     <p>These are some of my best projects. I have built these with React, MERN stack. Check them out.</p>
//                 </div>
//             </div>
//             <div className="w-full">
//                 <div className='flex flex-col md:flex-row px-10 gap-5'>
//                     {config.projects.map((project, index) => (
//                         <div key={index} className='relative'>
//                             <img className='h-[200px] w-[500px]' src={project.image} alt='project'/>
//                             <div className='project-desc'>
//                                 <p className='text-center px-5 py-5'>{project.description}</p>
//                                 <div className='flex justify-center gap-3'>
//                                     <a className='btn' target='_blank' href={project.link} rel="noreferrer">View Project</a>
//                                     <a className='btn' target='_blank' href={project.deploy} rel="noreferrer">View Live</a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/website4.jpg';
import websiteImg3 from '../assets/employee.jpg';
import websiteImg4 from '../assets/youtube.jpg';
import websiteImg5 from '../assets/food-ecommerce.jpg'

export default function Projects() {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'An Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/Rakshana77/ecom-fe-u',
                backend: 'https://github.com/Rakshana77/ecom-be-u',
                deploy: "https://mellow-rugelach-9f1a79.netlify.app/"
            },
            {
                image: websiteImg2,
                description: 'Movie Ticket Booking website. Built with MERN Stack.',
                link: 'https://github.com/Rakshana77/frontend-movies',
                backend: 'https://github.com/Rakshana77/backend-movies',
                deploy: "https://reliable-malabi-02bcc8.netlify.app/"
            },
            {
                image: websiteImg3,
                description: 'Employee Management app. Built with MERN Stack.',
                link: 'https://github.com/Rakshana77/employee-management-fe',
                backend: 'https://github.com/Rakshana77/employee-management-be',
                deploy: "https://starlit-banoffee-347939.netlify.app/"
            },
            {
                image: websiteImg4,
                description: 'YouTube clone. Built with MERN Stack.',
                link: 'https://github.com/Rakshana77/youtube-clone',
                backend: 'https://github.com/Rakshana77/youtube-clone-be',
                deploy: "https://reliable-belekoy-3f1c96.netlify.app/"
            },
            {
                image: websiteImg5,
                description: 'food delivery app.built with MERN stack',
                link: 'https://github.com/Rakshana77/food-del-fe',
                backend: 'https://food-del-be-1.onrender.com/',
                deploy: "https://fancy-palmier-5a04cc.netlify.app/"
            }

        ]
    };

    return (
        <section id="projects" className="flex flex-col py-20 px-5 bg-primary text-white">
            <div className="w-full text-center">
                <h1 className="text-4xl font-bold border-b-4 border-secondary inline-block mb-5">
                    Projects
                </h1>
                <p className="text-lg">These are some of my best projects. I have built these with React and the MERN Stack.</p>
            </div>

            <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10">
                {config.projects.map((project, index) => (
                    <div key={index} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <img className="h-56 w-full object-cover" src={project.image} alt="Project" />
                        
                        <div className="p-6">
                            <p className="text-lg font-semibold text-center mb-4">{project.description}</p>
                            <div className="flex justify-center gap-4">
                                <a className="btn" target="_blank" href={project.link} rel="noreferrer">
                                    Frontend Code
                                </a>
                                <a className="btn" target="_blank" href={project.backend} rel="noreferrer">
                                    Backend Code
                                </a>
                                <a className="btn" target="_blank" href={project.deploy} rel="noreferrer">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
