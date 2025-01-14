/**
 * @copyright 2024 AliMahdi
 * @license Apache-2.0
 */


/**
 * Components
 */
import { ButtonPrimary } from "../components/Button"

const BASE_PATH = process.env.NODE_ENV === "production" ? "/ali-portfolio" : "";

const sitemap = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Skills',
      href: '${BASE_PATH}/skills'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Publications',
      href: '/publications'
    },
    {
      label: 'Contact me',
      href: '/contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/amahdi83'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ali-mahdi-04180789/'
    },
  ];


const Footer = () => {

    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h6 className="headline-3 mb-8 reveal-up">
                            Where passion meets purpose, great things happen!
                        </h6>

                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, Key) => (
                                    <li key={Key}>
                                        
                                        <a 
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                        
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, Key) => (
                                    <li key={Key}>
                                        <a 
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="flex items-center justify-between pt-10 mb-8">

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-200">AliMahdi</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
