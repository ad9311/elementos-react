import React from 'react';
import Sad from '../../img/sad.svg';

const NoMatch = () => (
  <main>
    <div className="con-1 text-center pt-3">
      <h2>Page Not found - 404</h2>
      <div className="pt-3">
        <img src={Sad} alt="NotFound" />
      </div>
    </div>
  </main>
);

export default NoMatch;
