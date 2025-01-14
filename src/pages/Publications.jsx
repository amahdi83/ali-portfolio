/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */


/**
 * Components
 */

import PublicationCard from "../components/PublicationCard";

const publications = [
  {
    imgSrc: './images/publication-1.png',
    title: 'Can consumers’ visual attention be predictable? A saliency modelling-based approach on fashion advertisements',
    projectLink: 'https://www.tandfonline.com/doi/abs/10.1080/17543266.2021.1925354'
  },
  {
    imgSrc: './images/publication-2.png',
    title: 'Where Do Consumers Look When Viewing Fashion Advertisements? Saliency Based Models for Visual Attention Prediction',
    projectLink: 'https://www.iastatedigitalpress.com/itaa/article/id/12054/'
  },
  {
    imgSrc: './images/publication-3.png',
    title: 'Minimizing data requirements for soldier-interactive AI/ML applications through opportunistic sensing',
    projectLink: 'https://www.researchgate.net/profile/Jonathan-Touryan/publication/340878249_Minimizing_data_requirements_for_soldier-interactive_AIML_applications_through_opportunistic_sensing/links/632dacef165ca2278769b200/Minimizing-data-requirements-for-soldier-interactive-AI-ML-applications-through-opportunistic-sensing.pdf?__cf_chl_f_tk=gFcnQcUKt4_PR7iqFUvXiNU2jXpaC8Dyk3UIqj_6_IQ-1735636237-1.0.1.1-HViVBxShaYLFkdcL5.pJYZeC0nShhc8km3dsDqMfxQQ'
  },
  {
    imgSrc: './images/publication-4.png',
    title: 'An extensive evaluation of deep featuresof convolutional neural networks for saliency prediction of human visual attention',
    projectLink: 'https://www.sciencedirect.com/science/article/abs/pii/S1047320319302834'
  },
  {
    imgSrc: './images/publication-5.png',
    title: 'Evaluation of bottom-up saliency model using deep features pretrained by deep convolutional neural networks',
    projectLink: 'https://www.spiedigitallibrary.org/journals/Journal-of-Electronic-Imaging/volume-28/issue-3/033033/Evaluation-of-bottom-up-saliency-model-using-deep-features-pretrained/10.1117/1.JEI.28.3.033033.short'
  },
  {
    imgSrc: './images/publication-6.png',
    title: 'DeepFeat: A Bottom Up and Top Down Saliency Model Based on Deep Features of Convolutional Neural Nets',
    projectLink: 'https://arxiv.org/pdf/1709.02495'
  },
  {
    imgSrc: './images/publication-7.png',
    title: 'Speech enhancement in spectral envelope and details subspaces',
    projectLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0167639317304326'
  },
  {
    imgSrc: './images/publication-8.png',
    title: 'Bottom up saliency evaluation via deep features of state-of-the-art convolutional neural networks',
    projectLink: 'https://www.researchgate.net/profile/Ali-Mahdi-23/publication/324379176_Bottom_up_saliency_evaluation_via_deep_features_of_state-of-the-art_convolutional_neural_networks/links/5cca6229299bf120978f5066/Bottom-up-saliency-evaluation-via-deep-features-of-state-of-the-art-convolutional-neural-networks.pdf'
  },
  {
    imgSrc: './images/publication-9.png',
    title: 'A Comparison Study of Saliency Models for Fixation Prediction on Infants and Adults',
    projectLink: 'https://opensiuc.lib.siu.edu/cgi/viewcontent.cgi?article=1078&&context=ece_articles&&sei-redir=1&referer=https%253A%252F%252Fscholar.google.com%252Fscholar%253Fhl%253Den%2526as_sdt%253D0%25252C14%2526q%253DA%252Bcomparison%252Bstudy%252Bof%252Bsaliency%252Bmodels%252Bfor%252Bfixation%252Bprediction%252Bon%252Binfants%252Band%252Badults.%2526btnG%253D#search=%22comparison%20study%20saliency%20models%20fixation%20prediction%20infants%20adults.%22'
  },
  {
    imgSrc: './images/publication-10.png',
    title: 'Infants Gaze Pattern Analyzing Using Contrast Entropy Minimization',
    projectLink: 'https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=1456d78a68166b13351816ba643096c7f499fef6'
  },
  {
    imgSrc: './images/publication-11.png',
    title: 'Recent Developments on Noise Induced Hearing Loss for Military and Industrial Applications',
    projectLink: 'https://www.researchgate.net/profile/Jun-Qin-8/publication/269632216_Recent_Developments_on_Noise_Induced_Hearing_Loss_for_Military_and_Industrial_Applications/links/5605b7a208ae5e8e3f3319e7/Recent-Developments-on-Noise-Induced-Hearing-Loss-for-Military-and-Industrial-Applications.pdf'
  },
  {
    imgSrc: './images/publication-12.png',
    title: 'Line Profile Based Segmentation Algorithm for Touching Corn Kernels',
    projectLink: 'https://d1wqtxts1xzle7.cloudfront.net/97651112/1706.00396v1-libre.pdf?1674420348=&response-content-disposition=inline%3B+filename%3DLine_Profile_Based_Segmentation_Algorith.pdf&Expires=1736766718&Signature=apBX29Yxu5rjSMky~DvWexvvoJ7eDN0HXpP8I9017E2w1uDgc7mcOfvsssK3U4iiJk2dAr1qy-bbM3W8dtTs3eHB018Yx0KIJPaYgx1g~bz36tc3uPgzTm1J9FQLsUc3RImDKsa0kyr9l5lz801mndSg8PSiP~~Ewi0f20SedMofFAxOad1gWBJbJNCW9edT9zjGnG7Z6bKHYMOVDDiFQ7eUQvE2FLiwhGcYM3e9Zx7~lOI-8ZfNc~TI5BjOGppLD65iTB19MbmlhP~2eHmCVr0dbwIQBxNaI8-6VI9wj1F7gMVA8aEzxj6GOR4UH4qfOMLrzJed2~a6Ytv4lWYF8w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA'
  },
];

const Publications = () => {
  return (
    <section id="publications" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My publications</h2>
        <div className="flex flex-col gap-4">
          {publications.map(({ imgSrc, title, projectLink }, key) => (
            <PublicationCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;