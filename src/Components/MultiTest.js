import React, { useState, Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { GcdsInput, GcdsButton, GcdsStepper, GcdsFileUploader, GcdsTextarea } from '@cdssnc/gcds-components-react';

export default function MultiTest() {
  const [step, setStep ] = useState(0);
  const [name, setName ] = useState('');
  const [recipe, setRecipe ] = useState('');
  const [picture, setPicture ] = useState([]);

  const start = () => {
    setStep(step + 1)
  }

  const back = () => {
    setStep(step - 1)
  }

  const formSubmit = (e) => {
    e.preventDefault();

    if (step === 1 && name.trim() !== '') {
      setStep(step + 1)
    }
    if (step === 2 && recipe.trim() !== '') {
      setStep(step + 1)
    }
  }

  const nextButtons = () => {
    if (step > 0) {
      return (
        <Fragment>
          {step > 1 &&
            <GcdsButton
              type="button"
              buttonRole='secondary'
              onClick={back}
            >
              Previous
            </GcdsButton>
          }
          <GcdsButton
            type="submit"
          >
            Next
          </GcdsButton>
        </Fragment>
      )
    }
  }

  const currentStep = () => {
    switch(step) {
      case 0: return (
        <Fragment>
          <h1>Multi-step form test</h1>

          <p>Intro to multi step</p>

          <GcdsButton
            type='link'
            onClick={start}
          >
            Start
          </GcdsButton>
        </Fragment>
      );
      case 1: return (
        <Fragment>
          <GcdsStepper currentStep={step} totalSteps={4}></GcdsStepper>
          <h1>Name</h1>

          <form noValidate onSubmit={formSubmit}>
            <GcdsInput
              inputId="name"
              label="Recipe name"
              required
              value={name}
              onGcdsChange={(e) => setName(e.target.value)}
            ></GcdsInput>

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 2: return (
        <Fragment>
          <GcdsStepper currentStep={step} totalSteps={4}></GcdsStepper>
          <h1>Recipe</h1>

          <form noValidate onSubmit={formSubmit}>
            <GcdsTextarea
              textareaId="name"
              label="Recipe"
              required
              value={recipe}
              onGcdsChange={(e) => setRecipe(e.target.value)}
            ></GcdsTextarea>

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 3: return (
        <Fragment>
          <GcdsStepper currentStep={step} totalSteps={4}></GcdsStepper>
          <h1>Picture</h1>

          <GcdsFileUploader
            uploaderId='picture'
            label="Picture of recipe"
            required
            value={picture}
            onGcdsFileUploaderChange={(e) => setPicture(e.target.value)}
          ></GcdsFileUploader>

          {nextButtons()}
        </Fragment>
      );
      case 3: return (
        <Fragment>
          <GcdsStepper currentStep={step} totalSteps={4}></GcdsStepper>
          <h1>Confirmation</h1>

          <GcdsFileUploader
            uploaderId='picture'
            label="Picture of recipe"
            required
            value={picture}
            onGcdsFileUploaderChange={(e) => setPicture(e.target.value)}
          ></GcdsFileUploader>

          {nextButtons()}
        </Fragment>
      );
    }
  }
  return (
    <div>
      <Helmet>
        <title>Multi-step</title>
      </Helmet>

      {currentStep()}

    </div>
  )
}