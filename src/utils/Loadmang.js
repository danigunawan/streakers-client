import React from 'react';
import Loadable from 'react-loadable';

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
}

const Loadmang = func => Loadable({
  loading: Loading,
  loader: func,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
});

export default Loadmang;
