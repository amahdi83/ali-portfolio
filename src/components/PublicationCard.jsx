/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */

/**
 * Node modules
 */



import PropTypes from "prop-types";

const PublicationCard = ({ imgSrc, title, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-4 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors flex flex-col sm:flex-row items-center " +
        classes
      }
    >
      <figure className="img-box w-full sm:w-1/5 aspect-square rounded-lg overflow-hidden mb-4 sm:mb-0 sm:order-2">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex-1 sm:pl-4 sm:order-1">
        <h3 className="title-1 mb-3 text-white sm:text-left w-full sm:w-5/6">{title}</h3>
        
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 underline hover:text-sky-300 block sm:text-left"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

PublicationCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

PublicationCard.defaultProps = {
  classes: "",
};

export default PublicationCard;