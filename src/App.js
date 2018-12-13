import React from "react";
import LanguageProvider from './LanguageProvider'
import Header from './Header';
import FirstText from './FirstText';
import SecondText from './SecondText';


const App = () => (
  <LanguageProvider>
    <div>
      <Header />
      <h1>
        <FirstText />
      </h1>
      <p>
        <SecondText />
      </p>   
    </div>
  </LanguageProvider>
);

export default App;
