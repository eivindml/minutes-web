const Header = () => {
  return (
    <>
      <div className='header'>
        <h1 className='header__title'>
          Minutes
        </h1>
        <div className='header__navigation'>
          <div className='header__navigation-item'>
            Notify me
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header__title {
          font-size: var(--medium-title-font-size);
          font-weight: var(--medium-title-font-weight);
        }

        .header__navigation {}

        .header__navigation-item {
          color: var(--light-text-color);
        }
      `}</style>
    </>
  )
}

export default Header
