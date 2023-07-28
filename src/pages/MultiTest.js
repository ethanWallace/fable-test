import React, { useState, Fragment, useRef, useEffect } from 'react'
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
  const heading = useRef();

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
    if (step === 3 && (file.length > 0 && file[0].size < 1000000)) {
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

  useEffect(() => {
    if (step === 0) {
      heading.current.focus();
    }
  }, [])

  function fileValidator() {
    let errorMessage = {
      "en": "Submitted file is too large",
      "fr": "Submitted file is too large"
    };
    
    return {
        validate: (value) => {
            if (value.length > 0) {
              setFile(value);

              return value[0].size < 100000;
            }
            return true;
        },
        errorMessage
    };
  }

  const nextButtons = () => {
    if (step > 0) {
      return (
        <div className="d-flex justify-content-between container-xs mt-500 xs:pe-500">
          {step > 1 &&
            <GcdsButton
              type="button"
              buttonRole='secondary'
              onClick={back}
            >
              <GcdsIcon marginRight="200" name="arrow-left" />
              Previous
            </GcdsButton>
          }
          <GcdsButton
            type="submit"
          >
            {step !== 4 ?
              <Fragment>
                Next
                <GcdsIcon marginLeft="200" name="arrow-right" />
              </Fragment>
            :
              "Submit"
            }
          </GcdsButton>
        </div>
      )
    }
  }

  const currentStep = () => {
    switch(step) {
      case 1: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4}/>
          <h1
            className="mb-500"
            tabIndex="-1"
            ref={stepRef}
            id="step-name"
            aria-describedby='step'
          >
            Name of recipe
          </h1>

          <form className="mb-800" noValidate onSubmit={formSubmit}>
            <GcdsInput
              inputId="name"
              label="Recipe name"
              required
              value={name}
              validateOn="submit"
              autocomplete="off"
              onGcdsChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 2: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4}/>
          <h1
            className="mb-500"
            tabIndex="-1"
            ref={stepRef}
            id="step-name"
            aria-describedby='step'
          >
            Recipe instructions
          </h1>

          <form className="mb-800" noValidate onSubmit={formSubmit}>
            <GcdsTextarea
              textareaId="name"
              label="Recipe"
              required
              value={recipe}
              onGcdsChange={(e) => setRecipe(e.target.value)}
              ref={recipeRef}
            />

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 3: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4} />
          <h1
            className="mb-500"
            tabIndex="-1"
            ref={stepRef}
            id="step-name"
            aria-describedby='step'
          >
            Picture of recipe
          </h1>

          <form className="mb-800" noValidate onSubmit={formSubmit}>
            <GcdsFileUploader
              uploaderId='picture'
              label="Picture of recipe"
              hint="Upload a picture for your recipe."
              required
              value={picture}
              validator={[fileValidator()]}
              onGcdsFileUploaderChange={(e) => {setPicture(e.target.value);}}
              onGcdsRemoveFile={(e) => {setFile([]); setPicture([]); }}
              accept="image/png, image/jpeg"
              ref={pictureRef}
            />

            {nextButtons()}
          </form>
        </Fragment>
      );
      case 4: return (
        <Fragment>
          <GcdsStepper id="step" currentStep={step} totalSteps={4} />
          <h1
            className="mb-400"
            tabIndex="-1"
            ref={stepRef}
            id="step-name"
            aria-describedby='step'
          >
            Confirmation
          </h1>
          <p className="mb-500">Please confirm the details of your submission below.</p>

          <form className="container-md mb-800" noValidate onSubmit={formSubmit}>
            <fieldset className="bt-sm py-400">
              <p className="mb-200"><strong>Name of recipe:</strong></p>
              <p>{name}</p>
            </fieldset>
            <fieldset className="bt-sm py-400">
              <p className="mb-200"><strong>Recipe instructions:</strong></p>
              <p>{recipe}</p>
            </fieldset>
            <fieldset className="by-sm py-400">
              <p className="mb-200"><strong>Picture of recipe:</strong></p>
              <img className="d-block" src={URL.createObjectURL(file[0])} alt="" />
            </fieldset>

            {nextButtons()}
          </form>
        </Fragment>
      );
      default: return (
        <div className="mb-800">
          <h1 className="mt-500 mb-400" id="mc" tabIndex="-1" ref={heading}>Submit your own recipe</h1>
          <p className="mb-400">Have your recipe added to Cupcake heroes. Submit a name, instructions and a picture to us and we will look to add the recipe as soon as possible.</p>

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
      {currentStep()}
    </div>
  )
}