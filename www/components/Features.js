const Features = () => {
  return (
    <>
      <div className='features'>
        <div className='features__illustration'>
          <img src='/static/macos-app-wireframe.png' />
        </div>
        <div className='features__description'>
          <div className='features__title'>
            What to expect from the first version of the app.
          </div>
          <ul className='features__list'>
            <li className='features__list-item'>
              List item
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .features__illustration {
          max-width: 833px;
        }
        .features__illustration img {
          width: 100%;
        }

        .features__title {
          font-size: var(--title-font-size);
          font-weight: var(--title-font-weight);
        }
      `}</style>
    </>
  )
}

export default Features
