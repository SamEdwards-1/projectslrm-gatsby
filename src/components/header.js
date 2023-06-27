import * as React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { navClassNames, activeNavClassNames } from './styles';
import LogoSVG from './logo-svg';
import PropTypes from 'prop-types';

function Header ({ siteTitle }) {
  let [isScrolled, setIsScrolled] = React.useState(false);

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

  return (
    <nav className={clsx(' bg-white',
     
      'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 shadow-md shadow-slate-100/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
      isScrolled
        ? 'dark:bg-slate-100/95 h-20 pb-10 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'
        : 'dark:bg-transparent h-16  pb-0'
    )
    }>
      <div className={clsx('w-full h-8 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8')}>
        <div className={clsx('flex h-8 justify-between')}>
          <div className={clsx('flex justify-self-start')}>
          
            <div className={clsx('hidden sm:flex sm:space-x-8 h-8')}>
              {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
              {/* <Link activeClassName={activeNavClassNames} className={navClassNames} to="/">Projects</Link> */}
              <Link activeClassName={activeNavClassNames} className={navClassNames} to="/about">About</Link>
              <Link activeClassName={activeNavClassNames} className={navClassNames} to="/contact">Contact</Link>
              
            </div>
           
          </div>
          <div className={clsx('flex flex-shrink-0 items-center justify-items-end')}>
            <LogoSVG className={clsx('block h-8 w-auto')} />
          
          </div>
       
          <div className={clsx('mr-2 flex items-center sm:hidden')}>
            {/* <!-- Mobile menu button --> */}
            <button type="button" className={clsx('inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')} aria-controls="mobile-menu" aria-expanded="false">
              <span className={clsx('sr-only')}>Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg className={clsx('block h-6 w-6')} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className={'sm:hidden'} id="mobile-menu">
        <div className={'space-y-1 pb-3 pt-2'}>
          {/* <!-- Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" --> */}
         
          {/* <Link activeClassName={activeNavClassNames} className={navClassNames} to="/">Projects</Link> */}
          <Link activeClassName={activeNavClassNames} className={navClassNames} to="/about">About</Link>
          <Link activeClassName={activeNavClassNames} className={navClassNames} to="/contact">Contact</Link>
         
         
        </div>
        
      </div>
    </nav>);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
