import { useState } from 'react'
import fetch from 'isomorphic-unfetch'

const Newsletter = () => {
  const [email, setEmail] = useState()

  const handleEmailChange = event => {
    const email = event.target.value
    setEmail(email)
  }

  const handleSubmit = event => {
    event.preventDefault()

    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
      .then(r => r.text())
      .then(data => console.log(data))
  }

  return (
    <>
      <div className='newsletter'>
        <form
          className='newsletter__form'
          onSubmit={handleSubmit}
        >
          <input
            type='email'
            placeholder='Email address'
            aria-label='E-mail'
            className='newsletter__input'
            onChange={handleEmailChange}
          />
          <input
            type='submit'
            value='Send'
            className='newsletter__button'
          />
        </form>
      </div>
      <style jsx>{`
        .newsletter {
          width: 100%;
          max-width: 700px;
        }

        .newsletter__form {
          display: flex;
        }

        .newsletter__input {
          height: 52px;
          margin-right: 13px;
          box-sizing: border-box;
          border-radius: 4px;
          border: none;
          background-color: var(--light-gray-color);
          outline: none;
          padding: 0 16px;
          flex: 1;
        }

        /* TODO: Use regular Button component, so we don't duplicate? */
        .newsletter__button {
          background-color: var(--positive-color);
          color: white;
          font-weight: 500;
          height: 52px;
          padding: 0 39px;
          border-radius: 4px;
          border: none;
          transition-property: filter, border;
          transition-duration: 250ms;
          transition-timing-function: ease-out;
          filter: brightness(100%);
          cursor: pointer;
        }
        .newsletter__button:hover {
          filter: brightness(106%);
        }
      `}</style>
    </>
  )
}

export default Newsletter
