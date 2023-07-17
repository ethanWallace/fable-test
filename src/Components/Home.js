import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import {useLocation} from 'react-router-dom';

import { GcdsAlert } from '@cdssnc/gcds-components-react';

export default function Home() {


  const location = useLocation();

  const successMsg = () => {
    if (location.state && location.state.success) {
      return <Alert msg={location.state.success}></Alert>;
    }
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {successMsg()}

      <h1>Home</h1>

      <p>Nice text about what this is</p>
    </div>
  )
}

const Alert = (props) => {
  const alertRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      alertRef.current.focus();
    }, 50);
  }, []);

  return (<GcdsAlert
    ref={alertRef}
    alertRole='success'
    heading={props.msg === 'recipe' ? 'Recipe submitted' : 'Delivery submitted'}
    tabIndex={-1}
  >
    <p>
      {props.msg === 'recipe' ? 
        'Thank you. Your recipe has been submitted. It should be published after 1 business day.'
      :
        'Thank you. Your delivery information has been submitted.'
      }
      </p>
  </GcdsAlert>);
}