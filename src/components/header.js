import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import clsx from 'clsx';
import { navClassNames, activeNavClassNames } from './styles';
import LogoSVG from './logo-svg';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Header ({ siteTitle }) {
  const data = useStaticQuery(graphql`
    query {
    allProjectsJson {
      nodes {
        title
        slug
      }
    }
  }
  `);
  const projects = data.allProjectsJson.nodes;
  let [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (<>
    <div className={clsx(' bg-white',
     
      'sticky top-0 z-20 flex flex-wrap items-center justify-between bg-white px-2 sm:px-6 lg:px-8 sshadow-md shadow-slate-100/5 transition duration-500 dark:shadow-none',
      isScrolled
        ? 'dark:bg-slate-100/95 h-10 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'
        : 'dark:bg-transparent h-16  pb-0'
    )
    }>
      <div className={clsx('w-full h-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8')}>
        <div className={clsx('flex h-8 justify-between')}>
          <div className={clsx('flex flex-shrink-0 sm:mr-14')}>
            <div className={clsx('flex h-10 sm:h-8')}>
              <LogoSVG className={clsx('block h-8 w-auto')} />
            </div>
          </div>

          <div className={clsx('hidden lg:flex')}>
            <nav className={clsx(' bg-white',

              'max-w-7xl sticky px-2 mb-7 sm:px-0 top-0 z-20 sm:space-x-8 flex items-center justify-start  bg-transparent shadow-md shadow-slate-100/5 transition duration-200 dark:shadow-none ',
              // isScrolled
              //   //? 'dark:bg-slate-100/85 translate-y-8 h-10 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'
              //   ? 'bg-transparent dark:bg-transparent translate-y-10 h-8 '
              //   : 'dark:bg-transparent translate-y-0 h-8'
              'dark:bg-transparent translate-y-0 h-8'
            )
            }>
              {projects.map((project, index) => (
                <div className={clsx('flex h-8 justify-between')} key={`project-subnav-${project.slug}`}>
                  <div className={clsx('flex h-8 justify-self-start')}>
                    <div className={clsx('h-8 flex sm:space-x-6 md:space-x-8')}>
                      <Link key={index} activeClassName={activeNavClassNames} className={navClassNames} to={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>

          <div className={clsx('hidden lg:flex flex-shrink-0 items-center justify-items-center'
           
          )}>
            
            {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
            {/* <Link activeClassName={activeNavClassNames} className={navClassNames} to="/">Projects</Link> */}
            {/* <Link activeClassName={activeNavClassNames} className={navClassNames} to="/about">About</Link> */}
            <Link activeClassName={activeNavClassNames} className={navClassNames} to="/contact">Contact</Link>

          </div>

          <div className={clsx('mr-2 flex items-center lg:hidden')}>
            {/* <!-- Mobile menu button --> */}
            <button type="button" className={clsx('inline-flex z-50 items-center justify-center bg-white p-2', 
              'text-gray-400 hover:bg-gray-100 hover:text-gray-500', 
              'focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2')} aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}>
              <span className={clsx('sr-only')}>Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <Bars3Icon className={clsx('h-6 w-6', isMobileMenuOpen ? 'hidden' : 'block')} aria-hidden={isMobileMenuOpen} />

              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <XMarkIcon className={clsx('h-6 w-6', !isMobileMenuOpen ? 'hidden' : 'block')} aria-hidden={!isMobileMenuOpen} />
            </button>
          </div>
        </div>
      </div>

     
     
    </div>
    <Dialog as="div" className="lg:hidden" open={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
      <div className="fixed inset-0 " />
      <Dialog.Panel className="fixed inset-y-0 right-10 z-20 w-full h-80 overflow-y-auto bg-white px-8 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-end">
          {/* <Link to="/" >
            <div className={clsx('flex h-10 sm:h-8')}>
              <LogoSVG className={clsx('block h-8 w-auto')} />

            </div>
          </Link> */}
          <button
            type="button"
            className={clsx('inline-flex items-center justify-center bg-white p-2',
              'text-gray-400 hover:bg-gray-100 hover:text-gray-500',
              'focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 block')}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6 block" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-0 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6 flex flex-col items-start">
              
                {projects.map((project, index) => (

                  <Link key={index} activeClassName={` ${activeNavClassNames} `} key={`project-subnav-${project.slug}-b`} className={` ${navClassNames} inline-block`} to={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                ))}
            </div>
            <div className="py-6">
              <a href="mailto:leo@projectslrm.com" className={` ${navClassNames} inline-block`}>Contact</a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </>);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
