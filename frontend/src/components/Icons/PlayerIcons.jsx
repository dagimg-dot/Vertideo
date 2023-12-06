export const Heart = (props) => (
  <svg
    width={40}
    height={40}
    viewBox='8 8 40 40'
    fill='none'
    {...props}
  >
    <path fillRule='evenodd' clipRule='evenodd' d='M20.5 11.75C25.5 11.75 28 15.0833 28 15.0833C28 15.0833 30.5 11.75 35.5 11.75C41.3333 11.75 45.5 16.3333 45.5 22.1667C45.5 28.8333 40.0518 34.7762 35.0833 39.25C32.0159 42.012 29.6667 43.8333 28 43.8333C26.3333 43.8333 23.9175 41.9982 20.9167 39.25C16.0325 34.7771 10.5 28.8333 10.5 22.1667C10.5 16.3333 14.6667 11.75 20.5 11.75Z' />
  </svg>
)

export const Comment = (props) => (
  <svg
    width={40}
    height={40}
    viewBox='0 0 48 48'
    fill='none'
    {...props}
  >
    <g opacity={0.9} filter='url(#a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38.494 35.313C42.6 31.2 45 26.916 45 21.928 45 11.806 35.733 3.6 24.3 3.6S3.6 11.806 3.6 21.928C3.6 32.051 13.167 39 24.6 39v3.357c0 1.063 1.103 1.748 2.038 1.241 2.922-1.583 8.336-4.759 11.856-8.285Zm-24.25-15.857c1.635 0 2.96 1.315 2.96 2.935a2.948 2.948 0 0 1-2.96 2.938 2.947 2.947 0 0 1-2.955-2.938c0-1.62 1.324-2.935 2.956-2.935Zm13.013 2.935c0-1.62-1.324-2.935-2.957-2.935-1.633 0-2.957 1.315-2.957 2.935A2.947 2.947 0 0 0 24.3 25.33a2.947 2.947 0 0 0 2.957-2.938Zm7.098-2.935a2.945 2.945 0 0 1 2.956 2.935 2.946 2.946 0 0 1-2.956 2.938 2.948 2.948 0 0 1-2.958-2.938c0-1.62 1.324-2.935 2.958-2.935Z'
        fill='#fff'
      />
    </g>
    <path
      opacity={0.1}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24.6 39s11.467-.886 16.26-7.024c-4.793 6.752-9.586 10.434-13.78 11.662C22.886 44.865 24.6 39 24.6 39Z'
      fill='url(#b)'
    />
    <defs>
      <linearGradient
        id='b'
        x1={20.41}
        y1={37.67}
        x2={22.308}
        y2={43.633}
        gradientUnits='userSpaceOnUse'
      >
        <stop />
        <stop offset={1} stopOpacity={0.01} />
      </linearGradient>
      <filter
        id='a'
        x={1.2}
        y={2.4}
        width={46.2}
        height={44.969}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1.2} />
        <feGaussianBlur stdDeviation={1.2} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
      </filter>
    </defs>
  </svg>
)

export const Share = (props) => (
  <svg
    width={40}
    height={40}
    viewBox='0 0 48 48'
    fill='none'
    {...props}
  >
    <g opacity={0.9} filter='url(#a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.8 10.309c0-1.267 1.516-1.916 2.433-1.043l13.952 13.286a2.88 2.88 0 0 1-.093 4.256L28.187 38.94c-.932.813-2.387.152-2.387-1.085v-5.498s-14.93-2.69-19.72 6.101c-.446.82-2.187 1.107-1.833-2.983C5.727 27.95 8.75 16.2 25.8 16.2v-5.891Z'
        fill='#fff'
      />
    </g>
    <path
      opacity={0.03}
      fillRule='evenodd'
      clipRule='evenodd'
      d='m36.096 16.8 2.768 5.536a2.4 2.4 0 0 1-.572 2.885L25.896 36s-.6 3 1.2 3c1.8 0 16.2-13.2 16.2-13.2s.6-1.8-1.2-3.6c-1.8-1.8-6-5.4-6-5.4Z'
      fill='#161823'
    />
    <path
      opacity={0}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M25.8 16.839v15.6s-14.289-2.014-18.764 4.8c-4.306 6.556-3.91-7.404 2.572-14.356S25.8 16.839 25.8 16.839Z'
      fill='#fff'
    />
    <defs>
      <radialGradient
        id='b'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='rotate(-113.046 27.23 12.569) scale(19.0955 18.771)'
      >
        <stop />
        <stop offset={0.995} stopOpacity={0.01} />
        <stop offset={1} stopOpacity={0.01} />
      </radialGradient>
      <filter
        id='a'
        x={1.8}
        y={7.666}
        width={43.679}
        height={35.233}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1.2} />
        <feGaussianBlur stdDeviation={1.2} />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
      </filter>
    </defs>
  </svg>
)
