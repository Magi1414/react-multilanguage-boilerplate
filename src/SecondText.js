import changeLanguage from './changeLanguage';


const FirstText = props => {

  let language = props.language;

    let dictionary = {
    french: "J'habite à Paris",
    english: "I live in New York",
    german: "Ich wohne in Berlin"
  }
  return dictionary[language]
}

export default changeLanguage(FirstText)