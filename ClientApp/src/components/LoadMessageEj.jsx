import React, { useCallback, useEffect, useState } from 'react'
import { formatMessage, loadMessages, locale } from 'devextreme/localization';
import { ButtonGroup } from 'devextreme-react';

const LoadMessageEj = () => {

  const [message, setMessage] = useState()
  
  const handleChangeLanguage = useCallback((e) => {
    locale(e.itemData.lang)
    setMessage(formatMessage('greetingMessage'))
  }, [])

  useEffect(() => {
   
    loadMessages({
      'en': {
        'greetingMessage': 'Good morning!'
      },
      'de': {
        'greetingMessage': 'Guten morgen!'
      },
      'es': {
        'greetingMessage' : 'Buen día!'
      }
    });
    // locale('es')
    setMessage(formatMessage('greetingMessage'))
  }, [])

  // console.log(locale());

  return (
    <div>
      <ButtonGroup items={buttons} onItemClick={handleChangeLanguage} />
      <div>
        { message }
      </div>
    </div>
  )
}

const buttons = [
  {
    text: 'Español',
    lang: 'es'
  },
  {
    text: 'English',
    lang: 'en'
  },
  {
    text: 'Deutsch',
    lang: 'de'
  },
]

export default LoadMessageEj