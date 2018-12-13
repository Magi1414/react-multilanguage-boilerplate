import changeLanguage from './changeLanguage';


const FirstText = props => {

  let language = props.language;

    let dictionary = {
    french: "Bonjour, je m'appele Claude",
    english: "Hello, my name is Claude",
    german: "Hallo, mein Name ist Claude"
  }
  return dictionary[language]
}

export default changeLanguage(FirstText)