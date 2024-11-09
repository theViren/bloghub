import React from "react";

const WavyFooter = () => {
  return (
    <svg viewBox="0 0 120 18">
      <defs>
        <mask id="xxx">
          <circle cx="7" cy="12" r="40" fill="#fff" />
        </mask>

        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 13 -9"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <path
          id="wave"
          d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
        />
      </defs>
      <style>
        {`
    
    
    
    .wave {
        animation: wave 3s linear;
        animation-iteration-count: infinite;
        fill: #fc4a1a;
    }
    
    .drop {
        fill: transparent;
        animation: drop 5s ease infinite normal;
        stroke: #fc4a1a;
        stroke-width: 0.5;
        opacity: .6;
        transform: translateY(80%);
    }
    
    .drop1 {
        transform-origin: 20px 3px;
    }
    
    .drop2 {
        animation-delay: 3s;
        animation-duration: 3s;
        transform-origin: 25px 3px;
    }
    
    .drop3 {
        animation-delay: -2s;
        animation-duration: 3.4s;
        transform-origin: 16px 3px;
    }
    
    .gooeff {
        filter: url(#goo);
    }
    
    #wave2 {
        animation-duration: 5s;
        animation-direction: reverse;
        opacity: .6
    }
    
    #wave3 {
        animation-duration: 7s;
        opacity: .3;
    }
    
    @keyframes drop {
        0% {
            transform: translateY(80%);
            opacity: .6;
        }
    
        80% {
            transform: translateY(80%);
            opacity: .6;
        }
    
        90% {
            transform: translateY(10%);
            opacity: .6;
        }
    
        100% {
            transform: translateY(0%) scale(1.5);
            stroke-width: 0.2;
            opacity: 0;
        }
    }
    
    @keyframes wave {
        to {
            transform: translateX(-100%);
        }
    }
    
    @keyframes ball {
        to {
            transform: translateY(20%);
        }
    }
    `}
      </style>
      <use id="wave3" className="wave" href="#wave" x="0" y="-2"></use>
      <use id="wave2" className="wave" href="#wave" x="0" y="0"></use>

      <g className="gooeff">
        <circle className="drop drop1" cx="20" cy="2" r="1.8" />
        <circle className="drop drop2" cx="25" cy="2.5" r="1.5" />
        <circle className="drop drop3" cx="16" cy="2.8" r="1.2" />
        <use id="wave1" className="wave" href="#wave" x="0" y="1" />
      </g>
    </svg>
  );
};

export default WavyFooter;
