import React, { useState, Fragment, useRef } from 'react'
import { Helmet } from 'react-helmet'
import {useNavigate} from 'react-router-dom';

import { GcdsInput, GcdsButton, GcdsStepper, GcdsFileUploader, GcdsTextarea, GcdsIcon } from '@cdssnc/gcds-components-react';

export default function MultiTest() {
  const [step, setStep ] = useState(0);
  const [name, setName ] = useState('');
  const [recipe, setRecipe ] = useState('');
  const [picture, setPicture ] = useState([]);
  const [file, setFile ] = useState([]);

  const nameRef = useRef(null);
  const recipeRef = useRef(null);
  const pictureRef = useRef(null);
  const stepRef = useRef();

  const navigate = useNavigate();

  const start = () => {
    setStep(step + 1);
    setTimeout(() => {
      stepRef.current.focus();
    }, 50);
  }

  const back = () => {
    setStep(step - 1);
    setTimeout(() => {
      stepRef.current.focus();
    }, 50);
  }

  const formSubmit = (e) => {
    e.preventDefault();

    // Step 1
    if (step === 1 && name.trim() !== '') {
      setStep(step + 1);
      setTimeout(() => {
        stepRef.current.focus();
      }, 50);
    } else if (step === 1) {
      nameRef.current.querySelector('input').focus();
    }
    
    // Step 2
    if (step === 2 && recipe.trim() !== '') {
      setStep(step + 1);
      setTimeout(() => {
        stepRef.current.focus();
      }, 50);
    } else if (step === 2) {
      recipeRef.current.querySelector('textarea').focus();
    }

    // Step 3
    if (step === 3 && picture.length > 0) {
      setStep(step + 1);
      setTimeout(() => {
        stepRef.current.focus();
      }, 50);
    } else if (step === 3) {
      pictureRef.current.querySelector('input').focus();
    }

    if (step === 4) {
      navigate("/",
        {state: {success: 'recipe'}}
      );
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
              <GcdsIcon marginRight="200" name="arrow-left"></GcdsIcon>
              Previous
            </GcdsButton>
          }
          <GcdsButton
            type="submit"
          >
            {step !== 4 ?
              <Fragment>
                Next
                <GcdsIcon marginLeft="200" name="arrow-right"></GcdsIcon>
              </Fragment>
            :
              "Submit"
            }
          </GcdsButton>
        </Fragment>
      )
    }
  }

  const currentStep = () => {
    switch(step) {
      case 1: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4}></GcdsStepper>
          <h1 tabIndex="-1" ref={stepRef} id="step-name" aria-describedby='step'>Name of recipe</h1>

          <form noValidate onSubmit={formSubmit}>
            <GcdsInput
              inputId="name"
              label="Recipe name"
              required
              value={name}
              validateOn="submit"
              autocomplete="off"
              onGcdsChange={(e) => setName(e.target.value)}
              ref={nameRef}
            ></GcdsInput>

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 2: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4}></GcdsStepper>
          <h1 tabIndex="-1" ref={stepRef} id="step-name" aria-describedby='step'>Recipe instructions</h1>

          <form noValidate onSubmit={formSubmit}>
            <GcdsTextarea
              textareaId="name"
              label="Recipe"
              required
              value={recipe}
              onGcdsChange={(e) => setRecipe(e.target.value)}
              ref={recipeRef}
            ></GcdsTextarea>

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 3: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4}></GcdsStepper>
          <h1 tabIndex="-1" ref={stepRef} id="step-name" aria-describedby='step'>Picture of recipe</h1>

          <form noValidate onSubmit={formSubmit}>
            <GcdsFileUploader
              uploaderId='picture'
              label="Picture of recipe"
              required
              value={picture}
              onGcdsFileUploaderChange={(e) => {setPicture(e.target.value); setFile(e.target.querySelector("#picture").files)}}
              ref={pictureRef}
            ></GcdsFileUploader>

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 4: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4}></GcdsStepper>
          <h1 tabIndex="-1" ref={stepRef} id="step-name" aria-describedby='step'>Confirmation</h1>

          <p>Please confirm the details of your submission below.</p>

          <form noValidate onSubmit={formSubmit}>

            <p><strong>Name of recipe:</strong> {name}</p>
            <p><strong>Recipe:</strong> {recipe}</p>
            <p><strong>Picture of recipe:</strong></p>
            <img src={URL.createObjectURL(file[0])} alt="" />

            {nextButtons()}
          </form>
        </Fragment>
      );
      default: return (
        <div ref={stepRef}>
          <h1>Submit your own recipe</h1>

          <p>Intro to submit your own recipe</p>

          <GcdsButton
            type='link'
            onClick={start}
            href="javascript:void(0);"
          >
            Start
          </GcdsButton>
        </div>
      );
    }
  }

  return (
    <div>
      <Helmet>
        <title>Submit your own recipe</title>
      </Helmet>

      {currentStep()}

    </div>
  )
}