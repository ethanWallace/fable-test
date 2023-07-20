import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

import { GcdsButton, GcdsGrid } from '@cdssnc/gcds-components-react'

import Intro from '../img/home/intro.jpg'
import Order from '../img/home/order-cupcakes.jpg'
import Submit from '../img/home/submit-recipe.jpg'

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <GcdsGrid columns="1fr" columnsTablet="2fr 1fr" gap="500">
        <article className="pb-600">
          <h1 className="mt-500 mb-400">All the Cupcakes</h1>
          <p className="mb-400">If there's one thing that we all love, it's cupcakes. The look of it, the smell and of course eating it. And we all need a little love. So let's dive into it.</p>
          <p className="mb-400">The earliest description of what we call cupcake was found in 1796, within a recipe written by Amelia Simmons, describing a light cake to bake in small cups. And this is it. A website with only light and good things in it. Take a look at this list of beautiful cupcake recipes. Even better, let us know which cupcake recipe you enjoy best, upload your own, and treat yourself with an order of your favorite ones.</p>
          <GcdsButton>
            <Link className="text-light link-no-underline" to="recipes">Check out recipes</Link>
          </GcdsButton>
        </article>
        <article className="d-flex justify-content-end pb-600">
          <img
            src={Intro}
            alt="Aerial view of an assortment of cupcakes displayed in a box. There are 3 columns with 4 cupcakes in each row. The cupcakes come in various flavors, adding to the visual appeal."
          />
        </article>
      </GcdsGrid>

      <GcdsGrid columns="1fr" columnsTablet="1fr 1fr" gap="450">
        <article className="p-400 b-sm">
          <img
            className="mb-400"
            src={Submit}
            alt="Kitchen counter with kitchen utensils from above. The countertop displays 3 eggs, a jar of honey, a container of water, and an open bag of flour with a small amount of flour spilled around it. The setup suggests a baking activity in progress, adding a sense of warmth and homey ambiance to the scene."
          />
          <h2 className="mb-250">Submit your recipe</h2>
          <p className="mb-400">Do you think there is something missing here? Share your own cupcake recipe with us.</p>
          <Link className="link-default" to="submit-recipe">Upload recipe</Link>
        </article>
        <article className="p-400 b-sm">
          <img
            className="mb-400"
            src={Order}
            alt="An open box of cupcakes showcasing various flavors, captured from a side view."
          />
          <h2 className="mb-250">Cupcake delivery</h2>
          <p className="mb-400">Curious what or cupcakes taste like? Order your favourite cupcakes today.</p>
          <Link className="link-default" to="cupcake-delivery">Order cupcakes</Link>
        </article>
      </GcdsGrid>
    </section>
  )
}