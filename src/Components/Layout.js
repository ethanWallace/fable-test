import { Outlet, Link, useLocation } from "react-router-dom"
import { useRef, useEffect } from "react";
import {
  GcdsBreadcrumbs,
  GcdsBreadcrumbsItem,
  GcdsContainer,
  GcdsDateModified,
  GcdsHeader,
  GcdsIcon,
  GcdsNavLink,
  GcdsPhaseBanner,
  GcdsTopNav
} from '@cdssnc/gcds-components-react'

import Logo from '../img/logo.png'
import { Helmet } from "react-helmet";

function Layout() {
  const location = useLocation();
  const mainNav = useRef();

  const readableName = {
    "/": "Home",
    "/submit-recipe": "Submit your own recipe",
    "/recipes": "Recipes",
    "/cupcake-delivery": "Cupcake delivery",
    "/recipe/lemon-cupcake": "Lemon cupcake",
    "/recipe/chocolate-cupcake": "Chocolate cupcake",
    "/recipe/strawberry-cupcake": "Strawberry cupcake",
    "/recipe/vanilla-classic-cupcake": "Vanilla classic cupcake",
    "/recipe/red-velvet-cupcake": "Red velvet cupcake",
    "/recipe/carrot-cake-cupcake": "Carrot cake cupcake",
    "/recipe/smores-cupcake": "Smores cupcake",
    "/recipe/coconut-cream-cupcake": "Coconut cream cupcake",
    "/recipe/ice-cream-stuffed-cupcake": "Ice cream stuffed cupcake",
    "/recipe/pavlova-cupcake": "Pavlova cupcake",
    "/recipe/frappuccino-cupcake": "Frappuccino cupcake",
    "/recipe/cannoli-cupcake": "Cannoli cupcake",
  }

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash).focus();
    }
  })

  return (
    <>
      <Helmet>
        <title>{`${readableName[location.pathname]} - Cupcake heroes`}</title>
      </Helmet>
      <GcdsHeader
        lang="en"
        signatureVariant="colour"
        skipToHref={`#${location.pathname}#mc`}
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
          <p>Cupcake heroes</p>
        </Link>

        <GcdsTopNav slot="menu" label="Site" alignment="right" lang="en" ref={mainNav}>
          <GcdsNavLink href="#/" current={location.pathname === "/"} onClick={() => {mainNav.current.updateNavItemQueue(mainNav.current);}}>
            Home
          </GcdsNavLink>
          <GcdsNavLink href="#/recipes" current={location.pathname === "/recipes"} onClick={() => {mainNav.current.updateNavItemQueue(mainNav.current);}}>
            Recipes
          </GcdsNavLink>
          <GcdsNavLink href="#/submit-recipe" current={location.pathname === "/submit-recipe"} onClick={() => {mainNav.current.updateNavItemQueue(mainNav.current);}}>
              Submit recipe
          </GcdsNavLink>
          <GcdsNavLink href="#/cupcake-delivery" current={location.pathname === "/cupcake-delivery"} onClick={() => {mainNav.current.updateNavItemQueue(mainNav.current);}}>
            Cupcake delivery
          </GcdsNavLink>
        </GcdsTopNav>

        {location.pathname !== '/' &&
          <GcdsBreadcrumbs slot="breadcrumb" hide-canada-link>
            <GcdsBreadcrumbsItem href="#/">
              Home
            </GcdsBreadcrumbsItem>
            {location.pathname.includes('/recipe/') &&
                <GcdsBreadcrumbsItem href="#/recipes">
                  Recipes
                </GcdsBreadcrumbsItem>
            }

          </GcdsBreadcrumbs>
        }
      </GcdsHeader>

      <GcdsContainer id="main-content" tag="main" size="xl" centered padding="400">
        <Outlet />
        <GcdsDateModified>2023-07-15</GcdsDateModified>
      </GcdsContainer>

      <div className="bg-light px-200 py-400">
        <GcdsContainer tag="footer" size="xl" centered>
          <p><small>&copy;2023 Cupcake heroes</small></p>
        </GcdsContainer>
      </div>
    </>
  )
}

export default Layout;