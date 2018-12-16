import React from 'react';
import changeLanguage from './changeLanguage';


class MultipleTexts extends React.Component {

  render() {
   
    const chosenLanguage = this.props.chosenLanguage 
    const {french, english, german } = this.props
    
  
    let mainText = { 
      french,
      english,
      german
     }
 
    return mainText[chosenLanguage]
  }
}

export default changeLanguage(MultipleTexts)