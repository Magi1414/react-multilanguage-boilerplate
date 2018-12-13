import React from 'react';
import LanguageContext from './_languageSetting';

const changeLanguage = Component =>
  class ChangeLanguage extends React.Component {
    render() {
      return (
        <LanguageContext.Consumer>
          {(language) =>
            <Component
              { ...this.props }
              language={language.language}
              updateLanguage={language.updateLanguage}
            />
          }
        </LanguageContext.Consumer>
      );
    }
  }

export default changeLanguage;