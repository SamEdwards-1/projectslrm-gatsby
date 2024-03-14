import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => {
    // Redirect to the first project page
    navigate('/projects/central-park-west', { replace: true });
  }, []);

  return (
    <div>
      Redirecting...
    </div>
  );
};

export default IndexPage;
