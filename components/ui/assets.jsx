const WaveMd = ({ className }) => (
  <svg
    width="100%"
    height="50%"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    overflow="auto"
    shapeRendering="auto"
    fill="#ffffff"
    className={className}>
    <defs>
      <path
        id="wavepath"
        d="M 0 2000 0 500 Q 20.5 417 41 500 t 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0 41 0  v1000 z"
      />
    </defs>
    <g>
      <use href="#wavepath" y="-379" fill="#D3DEF4"></use>
    </g>
  </svg>
);

const WaveSm = ({ className }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    overflow="auto"
    shapeRendering="auto"
    fill="#ffffff"
    className={className}>
    <defs>
      <path id="wavepath" d="M 0 2000 0 500 Q 59 281 118 500 t 118 0 118 0 118 0 118 0 118 0 118 0 118 0 118 0 118 0 118 0  v1000 z" />
    </defs>
    <g>
      <use href="#wavepath" y="-371" fill="#d3def4"></use>
    </g>
  </svg>
);

const WaveLg = ({ className }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    overflow="auto"
    shapeRendering="auto"
    fill="#ffffff"
    className={className}>
    <defs>
      <path
        id="wavepath"
        d="M 0 2000 0 500 Q 14.5 281 29 500 t 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0 29 0  v1000 z"
      />
    </defs>
    <g>
      <use href="#wavepath" y="-371" fill="#d3def4"></use>
    </g>
  </svg>
);

export const Assets = {
  WaveMd,
  WaveSm,
  WaveLg,
};
