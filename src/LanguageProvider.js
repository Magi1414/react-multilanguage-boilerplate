import React, { Component } from 'react';
import LanguageContext from './_languageSetting'

class LanguageProvider extends Component {


  state = {
    language: 'french'
  }

  updateLanguage = e => this.setState({ language: e.target.value });

  render () {


    return (
      <LanguageContext.Provider value={{
        language: this.state.language,
        updateLanguage: this.updateLanguage
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export default LanguageProvider;
 