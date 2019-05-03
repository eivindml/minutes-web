import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Minutes</title>
        <meta charset='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Minutes is a native macOS app for tracking your time.' />
      </Head>
      {children}
      <style jsx global>{`
        :root {
          --positive-color: #27CA41;
          --black-color: #1A1A1A;
          --light-text-color: #595959;
          --light-gray-stroke-color: #D6D6D6;
          --light-gray-color: #F2F2F2;
          --blue-color: #007ED3;
          --body-font-size: 16px;
          --large-title-font-size: 36px;
          --large-title-font-weight: 700;
          --medium-title-font-size: 29px;
          --medium-title-font-weight: 700;
          --title-font-size: 23px;
          --title-font-weight: 600;
          --mobile-break-point: 600px;
        }
        /* TODO: How to specify media query width, without hardcoded width? */
        @media (min-width: 800px) {
          :root {
            --large-title-font-size: 52px;
            --medium-title-font-size: 39px;
            --title-font-size: 33px;
          }
        }

        * {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          color: var(--black-color);
          font-size: 16px;
          font-weight: normal;
          line-height: 1.3em;
          padding: 0;
          margin: 0;
          list-style: none;
        }
      `}</style>
    </>
  )
}

export default Layout
