/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "../components/SkillCard";


const skillItem = [
    {
      imgSrc: './images/Python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/TensorFlow.svg',
      label: 'TensorFlow',
      desc: 'Deep Learning'
    },
    {
      imgSrc: './images/PyTorch.svg',
      label: 'PyTorch',
      desc: 'Deep Learning'
    },
    {
      imgSrc: './images/Keras.svg',
      label: 'Keras',
      desc: 'Deep Learning'
    },
    {
      imgSrc: './images/scikit-learn.svg',
      label: 'Scikit-learn',
      desc: 'Machine Learning'
    },
    {
      imgSrc: './images/OpenCV.svg',
      label: 'OpenCV',
      desc: 'Computer Vision'
    },
    {
      imgSrc: './images/NumPy.svg',
      label: 'NumPy',
      desc: 'Numerical Computing'
    },
    {
      imgSrc: './images/Pandas.svg',
      label: 'Pandas',
      desc: 'Data Manipulation'
    },
    {
      imgSrc: './images/pillow.svg',
      label: 'Pillow',
      desc: 'Image Processing'
    },
    {
      imgSrc: './images/scipy.svg',
      label: 'SciPy',
      desc: 'Scientific Computing'
    },
    {
      imgSrc: './images/Matplotlib.svg',
      label: 'Matplotlib',
      desc: 'Data Visualization'
    },
    {
      imgSrc: './images/seaborn.svg',
      label: 'Seaborn',
      desc: 'Data Visualization'
    },
    {
      imgSrc: './images/tensorrt.svg',
      label: 'TensorRT',
      desc: 'Inference Optimization'
    },
    {
      imgSrc: './images/Jupyter.svg',
      label: 'Jupyter Notebook',
      desc: 'Interactive Notebooks'
    },
    {
      imgSrc: './images/MATLAB.svg',
      label: 'MATLAB',
      desc: 'Numerical Computing'
    },
    {
      imgSrc: './images/R.svg',
      label: 'R',
      desc: 'Statistical Computing'
    },
    {
      imgSrc: './images/aws.svg',
      label: 'Amazon Web Service',
      desc: 'Cloud Service'
    },
    {
      imgSrc: './images/Google Cloud.svg',
      label: 'Google Cloud Platform',
      desc: 'Cloud Platform'
    },
    {
      imgSrc: './images/Docker.svg',
      label: 'Docker',
      desc: 'Containerization Platform'
    },
    {
      imgSrc: './images/Git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: './images/github.svg',
      label: 'Github',
      desc: 'Script Hosting'
    },
    {
      imgSrc: './images/GitLab.svg',
      label: 'GitLab',
      desc: 'DevOps Platform'
    },
    {
      imgSrc: './images/FastAPI.svg',
      label: 'FastAPI',
      desc: 'Deployment Tool'
    },
    {
      imgSrc: './images/Flask.svg',
      label: 'Flask',
      desc: 'Deployment Tool'
    },
    {
      imgSrc: './images/onnx_runtime.svg',
      label: 'ONNX Runtime',
      desc: 'Inference Engine'
    },
    {
      imgSrc: './images/onnx.svg',
      label: 'ONNX',
      desc: 'Open Model Format'
    },
    {
      imgSrc: './images/gym.svg',
      label: 'OpenAI Gym',
      desc: 'Reinforcement Learning'
    },
    {
      imgSrc: './images/C++.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/C.svg',
      label: 'C',
      desc: 'Programming Language'
    },
    {
      imgSrc: './images/huggingface.svg',
      label: 'HuggingFace API',
      desc: 'NLP library'
    },
    {
      imgSrc: './images/Kaggle.svg',
      label: 'Kaggle API',
      desc: 'Data Science Platform'
    },
    {
      imgSrc: './images/Heroku.svg',
      label: 'Heroku',
      desc: 'Cloud Platform'
    },
    {
      imgSrc: './images/SPSS.svg',
      label: 'SPSS',
      desc: 'Statistical Analysis'
    },
    {
      imgSrc: './images/Swift.svg',
      label: 'SwiftUI',
      desc: 'App Development'
    },
    {
      imgSrc: './images/HTML5.svg',
      label: 'HTML',
      desc: 'Web Development'
    },
    {
      imgSrc: './images/css3.svg',
      label: 'CSS',
      desc: 'Web Development'
    },
    {
      imgSrc: './images/JavaScript.svg',
      label: 'Java Script',
      desc: 'Web Development'
    },
    {
      imgSrc: './images/NPM.svg',
      label: 'NPM',
      desc: 'Package Manager'
    },
    {
      imgSrc: './images/React.svg',
      label: 'React',
      desc: 'App Development'
    },
    {
      imgSrc: './images/TailwindCSS.svg',
      label: 'Tailwind CSS',
      desc: 'Style Design'
    },
  ];


const Skill = () => {
    return (
        <section id="skills" className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential tools I use
                </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I 
                use to develop and deploy Machine Learning models.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

            </div>
        </section>
    )
}

export default Skill;
