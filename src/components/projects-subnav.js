import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { navClassNames, activeNavClassNames } from './styles';
import clsx from 'clsx';

const ProjectsSubnav = ({  projects }) => {
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

      'max-w-7xl sticky px-2 mb-7 sm:px-0 top-0 z-50 sm:space-x-8 flex items-center justify-start  bg-transparent shadow-md shadow-slate-100/5 transition duration-200 dark:shadow-none ',
      isScrolled
        //? 'dark:bg-slate-100/85 translate-y-8 h-10 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'
        ? 'bg-transparent dark:bg-transparent translate-y-10 h-8 '
        : 'dark:bg-transparent translate-y-0 h-8'
    )
    }>

      {projects.map((project, index) => (
        <div className={clsx('flex h-8 justify-between')} key={`project-subnav-${project.slug}`}>
          <div className={clsx('flex h-8 justify-self-start')}>

            <div className={clsx('hidden h-8 sm:flex sm:space-x-6 md:space-x-8')}>

              <Link key={index} activeClassName={activeNavClassNames} className={navClassNames} to={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
};

ProjectsSubnav.propTypes = {
  projects: PropTypes.array,
};

export default ProjectsSubnav;
