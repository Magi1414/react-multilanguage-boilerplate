import React, { Component } from 'react';
import LanguageContext from './_languageSetting'

class LanguageProvider extends Component {


  state = {
    chosenLanguage: 'french'
  }

  updateLanguage = e => this.setState({ chosenLanguage: e.target.value });

  render () {


    return (
      <LanguageContext.Provider value={{
        chosenLanguage: this.state.chosenLanguage,
        languages: this.state.languages,
        updateLanguage: this.updateLanguage
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export default LanguageProvider;
 