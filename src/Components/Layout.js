import { Outlet, Link } from "react-router-dom";
import {
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsContainer,
  GcdsDateModified,
  GcdsHeader,
  GcdsIcon,
  GcdsPhaseBanner
} from '@cdssnc/gcds-components-react';

import Logo from '../img/logo.png';

function Layout() {
  return (
    <>
      <GcdsHeader
        lang="en"
        langHref="en"
        signatureVariant="colour"
        skipToHref="#main-content"
      >
        <GcdsPhaseBanner slot="banner">
          <GcdsIcon
            slot="banner-icon-left"
            name="play-circle"
            size="text"
            label="Play icon featuring a right-facing triangle within a circle with a rightward arrowhead. It signifies the action of starting or resuming audio or video playback."
          />
          <p slot="banner-text">Stay tuned for our new baking series coming out soon.</p>
        </GcdsPhaseBanner>
        <Link  slot="signature" className="d-flex align-items-center link-default" to="/">
          <img
            src={Logo}
            alt="The logo features a cupcake with a determined facial expression and a superhero cape, exuding an enthusiastic and adventurous personality."
            className="header__logo me-300"
          />
          <p>Cupcake heros</p>
        </Link>
        <GcdsContainer tag="div" container="xl" centered slot="menu">
          <nav className="d-flex justify-content-end">
            <ul className="d-flex py-200">
              <li className="mx-300">
                <Link className="link-default" to="/">Home</Link>
              </li>
              <li className="mx-300">
                <Link className="link-default" to="recipes">Recipes</Link>
              </li>
              <li className="mx-300">
                <Link className="link-default" to="submit-recipe">Submit recipe</Link>
              </li>
              <li className="mx-300">
                <Link className="link-default" to="cupcake-delivery">Cupcake delivery</Link>
              </li>
            </ul>
          </nav>
        </GcdsContainer>

        <GcdsBreadcrumbs slot="breadcrumb" hide-canada-link>
          <GcdsBreadcrumbsItem href="/">Home</GcdsBreadcrumbsItem>
          <GcdsBreadcrumbsItem href="/recipes">Recipes</GcdsBreadcrumbsItem>
        </GcdsBreadcrumbs>
      </GcdsHeader>

      <GcdsContainer id="main-content" tag="main" container="xl" centered padding="400">
        <Outlet />
        <GcdsDateModified>2023-07-15</GcdsDateModified>
      </GcdsContainer>

      <div className="bg-light px-200 py-400">
        <GcdsContainer tag="footer" container="xl" centered>
          &copy;2023
        </GcdsContainer>
      </div>
    </>
  )
}

export default Layout;