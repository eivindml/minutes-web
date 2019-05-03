const Icon = () => {
  return (
    <>
      <div className='icon'>
        <picture className='watch'>
          <source srcSet='/static/minutes-macos-icon.webp 2x' type='image/webp' />
          <source srcSet='/static/minutes-macos-icon.png 2x' type='image/png' />
          <img src='/static/minutes-macos-icon.png' alt='Stop watch macOS icon' />
        </picture>
        <picture className='arm'>
          <source srcSet='/static/watch-arm.webp 2x' type='image/webp' />
          <source srcSet='/static/watch-arm.png 2x' type='image/png' />
          <img src='/static/watch-arm.png' alt='Arm of the stop watch macOS icon' />
        </picture>
      </div>
      <style jsx>{`
        .icon {
          position: relative;
          width: 100%;
        }

        .watch {
          width: 100%;
        }

        .arm {
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          animation: spin 60s linear infinite;
          transform-origin: 53.1% 52.3%;
        }

        @keyframes spin {
          100% { transform:rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default Icon
