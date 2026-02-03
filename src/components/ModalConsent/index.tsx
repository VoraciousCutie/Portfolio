import { useEffect, useState } from 'react'
import './styles.css'

const LOCAL_STORE_CONSENT = 'SiteConsentVerified'

export default function ModalConsent() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem(LOCAL_STORE_CONSENT)
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const AcceptConsent = () => {
    localStorage.setItem(LOCAL_STORE_CONSENT, 'true')
    setShow(false)
  }

  
  if (!show) return null

  return (
    <div className="modal-overlay">
      <div className="modal-box cloud">
        <h1>Hey!</h1>
        <h2>This site contains NSFW content</h2>
        <p>Before continuing, please confirm that you are an adult and would like to view the site.</p>

        <h3>Content Warning:</h3>
        <div className='content-warning-list'>
          <p>/) Lots of My Little Pony (\</p>
          <p>/) Some explicit images (\</p>
          <p>/) Vore and various fetish art (\</p>
          
        </div>
        <br/>
        <button 
          className='accept-button'
          onClick={AcceptConsent}
        >
          I am 18+ and wish to continue!
        </button>
      </div>
    </div>
  )


}





