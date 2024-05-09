"use client";
import { CardStack } from "./ui-prestyled-components/cards.js";
import { cn } from "/src/utils/cn";
import WaterDropGrid from "./dots.jsx";
import { useState , useEffect } from "react";

function isPortraitMode() {
  return window.innerWidth < window.innerHeight;
}

function isMobile(userAgent) {
  // List of common keywords in mobile user agents excluding iPad
  const mobileKeywords = [
    "mobile", "iphone", "ipod", "android", "blackberry", "windows phone", "nokia", "opera mini", "mobile safari"
  ];

  // Convert user agent to lowercase for case-insensitive comparison
  const lowercaseUserAgent = userAgent.toLowerCase();

  // Check if any of the mobile keywords are present in the user agent
  for (let i = 0; i < mobileKeywords.length; i++) {
    if (lowercaseUserAgent.includes(mobileKeywords[i])) {
      // Check if it's an iPad specifically, if so, return false
      if (lowercaseUserAgent.includes("ipad")) {
        return false;
      }
      return true; // If any other mobile keyword matches, it's likely a mobile device
    }
  }

  return false; // If none of the keywords match, it's not a mobile device
}

export function CardStackDemo() {
  //const device = isPortraitMode();
  const [showApp, setShowApp] = useState(isPortraitMode());
  
  useEffect(() => {
    // Update the state when the result of the external function changes
    const interval = setInterval(() => {
      setShowApp(isPortraitMode());
    }, 100); // Check every milisecond

    return () => clearInterval(interval);
  }, []);

  let height;
  const type = isMobile(navigator.userAgent);

  if (type){
    height = '70vh'
    localStorage.setItem('device' , 'mobile')
  }else{
    height = '40vh'
    localStorage.setItem('device' , 'laptop')
  }

  return (
    <>
    { !showApp ? 
    <div style={{animation: 'fade 2s ease-in-out' , position: 'relative' , top: '2%' , zIndex: '9999' , textAlign: 'center' , overflow: 'hidden' , height: height , border: '2px solid red' , padding: '20px'}}>
    <h2 style={{color: 'white' , paddingLeft: '20px' , fontSize: '40px' , marginBottom: '10px'}}>About Me</h2>
    {/*<div style={{marginTop: '10px' , padding: '20px'}}>*/}
      {/*<WaterDropGrid />*/}
      <CardStack style={{marginTop: '10px'}}items={rearrangeArray(CARDS , [4 , 3 , 1 ,2])} />
    </div> : (<h1 style={{color:'red' , textAlign: 'center', marginTop: '10px'}}>Landscape mode offers a better experience</h1>)}
    
    </>
  );
}

function rearrangeArray(initialArrangement, desiredArrangement) {
  let newArr = [];
  for (let i = 0; i < desiredArrangement.length; i++) {
      newArr.push(initialArrangement[desiredArrangement[i] - 1]);
  }
  return newArr;
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 1,
    name: null,
    designation: null ,
    content: (
      <>
      {/* <Highlight> TEXT <Highlight>*/}
      <h3 style={{color: 'white'}}>1</h3>
      <br/>
      <p>
        I pride myself on being <Highlight>self-disciplined</Highlight>, a trait I've cultivated through my involvement in the National Cadet Corps (NCC). NCC demands unwavering <Highlight>commitment</Highlight>, requiring <Highlight>attendance without fail</Highlight> and strict adherence to <Highlight>discipline</Highlight>, such as maintaining composure and focus during drills. This experience has instilled in me a strong sense of <Highlight>responsibility</Highlight> and the ability to thrive under pressure.
      </p>
      </>
    ),
  },
  {
    id: 2,
    name: null,
    designation: null,
    content: (
      <>
      <h3 style={{color: 'white'}}>2</h3>
      <br/>
      <p>
        In addition to my NCC responsibilities, I pursue coding as a hobby. Coding often presents challenges, but my <Highlight>resilience</Highlight> allows me to persevere through setbacks. When faced with bugs or errors in my code, I approach each problem with <Highlight>determination</Highlight>, learning from my mistakes and iterating until I achieve the desired outcome. This <Highlight>resilience</Highlight> not only fuels my personal growth as a programmer but also reflects my mindset of <Highlight>continuous improvement</Highlight>.
      </p>
      </>
    ),
  },
  {
    id: 3,
    name: null,
    designation: null,
    content: (
      <>
      <h3 style={{color: 'white'}}>3</h3>
      <br/>
      <p>
        I firmly believe in ACJC's value of <Highlight>tenacity</Highlight>. My relentless pursuit of solutions mirrors this ethos—I refuse to be deterred by obstacles and persist until I succeed. This <Highlight>tenacity</Highlight> extends beyond coding to all aspects of my life, driving me to overcome challenges and strive for excellence.
      </p>
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
      <h3 style={{color: 'white'}}>4</h3>
      <br/>
      <p>
        Given my <Highlight>self-discipline</Highlight>, <Highlight>resilience</Highlight>, and alignment with ACJC's values, I am confident in my ability to contribute meaningfully to the school community. I am eager to leverage my skills and experiences to support initiatives, foster a culture of <Highlight>perseverance</Highlight>, and contribute to ACJC's ongoing success.
      </p>
      </>
    )
  }
];
