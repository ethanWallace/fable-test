import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import {
  GcdsInput,
  GcdsTextarea,
  GcdsSelect,
  GcdsCheckbox,
  GcdsRadio,
  GcdsFieldset,
  GcdsButton,
  GcdsErrorSummary
} from '@cdssnc/gcds-components-react'

const sharedAttributes = {
  required: true,
  validateOn: "submit"
};

export default function LargeForm() {
  const [text, setText] = useState('');
  const [longtext, setLongText] = useState('');
  const [select, setSelect] = useState('');
  const [check, setCheck] = useState(0);
  const [radio, setRadio] = useState('');

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (text.trim() !== '' && longtext.trim !== '' && select !== "" && check > 0 && radio !== '') {
      navigate('/page1');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Large form</title>
      </Helmet>
      
      <h1>Large form test</h1>

      <p>Text talking about form</p>

      <form noValidate onSubmit={submit}>
        <GcdsErrorSummary></GcdsErrorSummary>

        <GcdsInput
          inputId='input'
          label='Text input'
          {...sharedAttributes}
          value={text}
          onGcdsChange={(e) => setText(e.target.value)}
        ></GcdsInput>

        <GcdsTextarea
          textareaId='textarea'
          label='Textarea'
          {...sharedAttributes}
          value={longtext}
          onGcdsChange={(e) => setLongText(e.target.value)}
        ></GcdsTextarea>

        <GcdsSelect
          selectId='select'
          label='Select'
          defaultValue='Select an option'
          {...sharedAttributes}
          value={select}
          onGcdsSelectChange={(e) => setSelect(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </GcdsSelect>

        <GcdsFieldset
          legend='Checkboxes'
          fieldsetId='fieldset1'
          hint="Select at least one"
          {...sharedAttributes}
        >
          <GcdsCheckbox
            checkboxId='box1'
            label='Box 1'
            name='check'
            value='box1'
            onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
          ></GcdsCheckbox>
          <GcdsCheckbox
            checkboxId='box2'
            label='Box 2'
            name='check'
            value='box2'
            onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
          ></GcdsCheckbox>
          <GcdsCheckbox
            checkboxId='box3'
            label='Box 3'
            name='check'
            value='box3'
            onGcdsChange={(e) => {e.target.checked ? setCheck(oldValue => oldValue + 1) : setCheck(oldValue => oldValue - 1);}}
          ></GcdsCheckbox>
        </GcdsFieldset>

        <GcdsFieldset
          legend='Radio buttons'
          fieldsetId='fieldset2'
          {...sharedAttributes}
        >
          <GcdsRadio
            radioId='radio1'
            label='Radio 1'
            name='radio'
            value='radio1'
            onGcdsRadioChange={(e) => setRadio(e.target.value)}
          ></GcdsRadio>
          <GcdsRadio
            radioId='radio2'
            label='Radio 2'
            name='radio'
            value='radio2'
            onGcdsRadioChange={(e) => setRadio(e.target.value)}
          ></GcdsRadio>
          <GcdsRadio
            radioId='radio3'
            label='Radio 3'
            name='radio'
            value='radio3'
            onGcdsRadioChange={(e) => setRadio(e.target.value)}
          ></GcdsRadio>
        </GcdsFieldset>

        <GcdsButton
          type='submit'
        >
          Submit
        </GcdsButton>


      </form>
    </div>
  )
}