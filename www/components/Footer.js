// TODO: Not high enough contrast between white text and green background
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer__wrapper'>
          <p className='footer__contact'>
            Visit the <a href='https://madebymist.com' title='Link to main company website'>company website</a>, <a href='mailto:eivindml@icloud.com' title='Send us an email'>send an email</a> or <a href='https://twitter.com/eivindml' title='Link to Twitter profile'>follow on Twitter</a>.
          </p>
          <hr />
        </div>
      </div>
      <style jsx>{`
        .footer {
          background-color: var(--light-gray-color);
          padding: 64px 0 32px;
        }

        .footer__wrapper {
          max-width: 1248px;
          padding: 0 16px;
          margin: 0 auto;
        }

        .footer hr {
          border-top: solid 1px var(--light-gray-stroke-color);
        }

        .footer__contact {
          margin-bottom: 16px;
          text-align: center;
        }

        .footer a {
          color: var(--blue-color);
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default Footer
