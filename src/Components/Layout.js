import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom";
import { GcdsContainer } from '@cdssnc/gcds-components-react';

function Layout() {
  return (
    <Fragment>
      <GcdsContainer tag="header" container="lg" centered>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </nav>
      </GcdsContainer>
      
      <GcdsContainer tag="main" container="lg" centered>
        <Outlet />
      </GcdsContainer>
      

      <GcdsContainer tag="footer" container="lg" centered>

      </GcdsContainer>
    </Fragment>
  )
}

export default Layout;