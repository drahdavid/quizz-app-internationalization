
import { FormattedMessage } from 'react-intl'
const Button = ({ setLanguage, language }) => {


    const handleSetLanguage = () => {
        setLanguage('en-US')
        if (language === 'en-US') setLanguage('es-AR')
    }


    return (
        <FormattedMessage id="button.lenguaje">
            {message => <button onClick={handleSetLanguage} className="ui inverted green button">{message}</button>}
        </FormattedMessage>

    )

};

export default Button;


