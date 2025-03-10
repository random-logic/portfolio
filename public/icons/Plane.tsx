export default function Plane() {
  return <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_25_10046)">
      <path d="M25 2.5L14 13.5" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25 2.5L18 22.5L14 13.5L5 9.5L25 2.5Z" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
    </g>
    <defs>
      <filter id="filter0_d_25_10046" x="-1" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_10046"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_10046" result="shape"/>
      </filter>
    </defs>
  </svg>;
}
