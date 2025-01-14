/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "../components/ProjectCard.jsx";


const works = [
    {
      imgSrc: 'images/project-1.png',
      title: 'Visual Saliency API',
      tags: ['API', 'Human Visual Attention'],
      projectLink: 'https://github.com/amahdi83/VSAPI'
    },
    {
      imgSrc: 'images/project-2.png',
      title: 'Tetris Game',
      tags: ['Game', 'Reinforcement Learning'],
      projectLink: 'https://github.com/amahdi83/Tetris'
    },
    {
      imgSrc: 'images/project-3.png',
      title: 'Pneumonia Analysis',
      tags: ['Classification', 'Computer Vision'],
      projectLink: 'https://github.com/amahdi83/Pneumonia-Classification'
    },
    {
      imgSrc: 'images/project-4.png',
      title: 'VQVAE MNIST',
      tags: ['Compputer Vision', 'GenAI'],
      projectLink: 'https://github.com/amahdi83/VQVAE_mnist'
    },
    {
      imgSrc: 'images/project-5.png',
      title: 'Cards Detector',
      tags: ['Computer Vision', 'YOLO'],
      projectLink: 'https://github.com/amahdi83/playing_cards_detecter'
    },
    {
      imgSrc: 'images/project-6.png',
      title: 'VQVAE Celeb-A',
      tags: ['Computer Vision', 'GenAI'],
      projectLink: 'https://github.com/amahdi83/VQVAE_CelebA'
    },
    {
      imgSrc: 'images/project-7.png',
      title: 'VAE Celeb-A',
      tags: ['Computer Vision', 'GenAI'],
      projectLink: 'https://github.com/amahdi83/VAE_CelebA'
    },
    {
      imgSrc: 'images/project-8.png',
      title: 'DCGAN Celeb-A',
      tags: ['Computer Vision', 'GenAI'],
      projectLink: 'https://github.com/amahdi83/DCGAN-CelebA'
    },
  ];


const Work = () => {
    return (
        <section 
            id="work"
            className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My projects
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Work
