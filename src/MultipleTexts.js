import React from 'react';
import changeLanguage from './changeLanguage';


const MultipleTexts = props => {

  let language = props.language;
  const {frenchT, englishT, germanT} = props;

  let mainText = {
        french: frenchT,
        english: englishT,
        german: germanT
      }
  return mainText[language]
}

export default changeLanguage(MultipleTexts)