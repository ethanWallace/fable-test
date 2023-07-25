import React from 'react'

import { GcdsButton } from '@cdssnc/gcds-components-react'

const NotFound = () => {
  return (
    <section>
      <h1 className="mt-500 mb-400" tabIndex="-1" id="mc">Not found</h1>
      <GcdsButton type="link" href="#/">Return to home</GcdsButton>
    </section>
  );
};

export default NotFound;