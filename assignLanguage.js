//FUNCTION    : assignLanguage
//PARAMETERS  : [1] outputLanguage  => language that the user must be greeted in
//                # Type : String
//              [2] name            => the user's name that was input
//                # Type : String
//RETURN      : Type  => String
//DESCRIPTION : Takes a value representing a language, and a name string
//              and builds the greeting string that will be displayed to the user

function assignLanguage(outputLanguage, name){
  switch (outputLanguage) {
    case 'fr':
      return 'Bonjour, ' + name;
      break;
    case 'es':
      return 'Hola, ' + name;
      break;
    case 'en':
      return 'Hello, ' + name;
      break;
  };
};
