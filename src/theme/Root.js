import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default function Root({ children }) {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const start = () => NProgress.start();
    const done = () => NProgress.done();

    window.addEventListener('beforeunload', start);
    window.addEventListener('load', done);

    return () => {
      window.removeEventListener('beforeunload', start);
      window.removeEventListener('load', done);
    };
  }, []);

  return <>{children}</>;
}
