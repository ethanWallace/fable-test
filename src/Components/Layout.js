import { Fragment, useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { GcdsContainer, GcdsAlert } from '@cdssnc/gcds-components-react';

function Layout() {
  const [success, setSuccess ] = useState('');


  const successMsg = () => {
    if (success === 'recipe') {
      <GcdsAlert
        alertRole='success'
        heading='Recipe submitted'
      >
        <p>Thank. You have submitted your recipe. It should be published after 1 business day.</p>
      </GcdsAlert>
    }
  }

  return (
    <Fragment>
      <GcdsContainer tag="header" container="lg" centered>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="submit-recipe">Submit recipe</Link></li>
            <li><Link to="largeform">Large form</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </nav>
      </GcdsContainer>
      
      <GcdsContainer tag="main" container="lg" centered>
        {success}
        <Outlet />
      </GcdsContainer>
      

      <GcdsContainer tag="footer" container="lg" centered>
    This is a footer
      </GcdsContainer>
    </Fragment>
  )
}

export default Layout;