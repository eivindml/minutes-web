const Button = () => {
  return (
    <>
      <div className='button'>
        <div className='button__title'>
          Notify me
        </div>
      </div>
      <style jsx>{`
        .button {
          height: 52px;
          background-color: var(--positive-color);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 39px;
          border-radius: 4px;
          transition-property: filter, border;
          transition-duration: 250ms;
          transition-timing-function: ease-out;
          filter: brightness(100%);
          cursor: pointer;
        }
        .button:hover {
          filter: brightness(106%);
        }

        .button__title {
          color: white;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}

export default Button
