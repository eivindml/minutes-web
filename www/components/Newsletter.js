const Newsletter = () => {
  return (
    <>
      <div className='newsletter'>
        <form className='newsletter__form'>
          <input
            type='text'
            className='newsletter__input'
          />
          <input
            type='submit'
            value='Send'
            className='newsletter__button'
          />
        </form>
      </div>
      <style jsx>{`
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
