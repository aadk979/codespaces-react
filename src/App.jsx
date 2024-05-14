"use client";
import React, { useState , useEffect } from 'react';
import Core from "/src/Core.jsx";

function Nav(){

  const nav = {
    width: '100vd',
    background: 'rgba(255,255,255,0.1)',
    //background: 'linear-gradient(to right,  violet, indigo, blue, green, yellow, orange, red)',
    paddingTop: '10px',
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    opacity: '1',
    //animation: 'fade 2s ease-in-out'
  }

  const nav_btn = {
    //border: '1px solid grey',
    background: 'linear-gradient(180deg , white , grey , white)',
    color: 'transparent',
    padding: '4px',
    borderRadius: '10px',
    backgroundClip: 'text',
    fontSize: '20px'
  }

  return(
    <>
      <div style={nav}>
        <button className='nav_btn' style={nav_btn}>About Me</button>
        <button className='nav_btn' style={nav_btn}>Acheivment's</button>
        <button className='nav_btn' style={nav_btn}>Project's</button>
        <button className='nav_btn' style={nav_btn}>Skill's</button>
      </div>
    </>
  )
}

function Header(){

  const styles = {
    fontSize: '80px',
    color: 'transparent',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    background: 'linear-gradient(180deg , white , grey , white)',
    backgroundClip: 'text',
    overflow: 'scroll',
    //animation: 'header ease-in-out infinite',
    opacity: 1
  }

  return(
    <>
      <h1 style={styles}>Kalivaradhan Aadharsh</h1>
    </>
  )
}

function Line(){
  const coverline = {
    background: 'linear-gradient(to right , grey , skyblue , grey)',
    filter: 'blur(10px)',
    height: '4px',
    width: '90%',
    position: 'relative',
    left: '5%',
    borderRadius: '50%',
    opacity: '1'
  }

  const mainline = {
    background: 'linear-gradient(to right , purple , pink , grey , skyblue , grey , pink , purple)',
    height: '3px',
    borderRadius: '100%',
    width: '95%',
    position: 'relative',
    left: '2.5%',
    opacity: '1'
  }

  return(
    <>
      <div style={coverline}></div>
      <div style={mainline}></div>
      <div style={coverline}></div>
    </>
  )
}

function isPortraitMode() {
  return window.innerWidth < window.innerHeight;
}

function X() {
  const device = isPortraitMode();

  const styles = {
    padding: '20px',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexAlign: 'center',
    opacity: '1',
    animation: 'fade 2s ease-in-out',
    border: '2px solid red'
    
  }

  return (
    
    <div>
        <Nav />
        <div style={styles}>
        <Header />
        <Line />
        <Core style={{height: '2vh' , width: '100vd'}} particleStyle={{height: '20vh' , width: '94%' , position: 'relative' , left: '3%' , borderBottomLeftRadius: '20%' , borderBottomRightRadius: '20%'}} density={'1200'} />
        {/*<div className="relative inset-0 bg-black [mask-image:radial-gradient(transparent_20%,white)]"></div>*/}
        {/*<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>*/}
        </div>
      {/*<h1>Rotate device to landscape</h1>*/}
    </div>
      
    
  );
}

function Acheivments(){
  const card_style = {
    //height: '80%',
    background: 'pink',
    border: '1px solid red',
    padding: '10px'
  }

  const clicked = {
    //height: '80%',
    color: 'blue' , 
    scale: '4',
    //zIndex: '99999',
    background: 'pink',
    border: '1px solid red',
    padding: '10px'
  }

  function handle(id){
    const array = ['first' , 'second' , 'third'];
    array.forEach((name) => {
      document.getElementById(name).style = card_style;
    });

    document.getElementById(id).style = clicked;
  }

  const sample = 'This is a certificate.'

  return(
    <>
      <div style={{padding: '20px'  , display: 'flex' , flexDirection: 'row' , justifyContent: 'space-around' , alignItems: 'center' , border: '2px solid red' }}>
        <div id='first' style={card_style} onClick={() => handle('first')}>
          <img src='images/IMG_0156.jpg' />
          <p style={{textAlign: 'center' , color:'white'}}>This is a certificate.</p>
          <p style={{textAlign: 'center'}}>This is a certificate.</p>
        </div>
        <div id='second' style={card_style} onClick={() => handle('second')}>
          <img src='images/IMG_0157.jpg'/>
          <p style={{textAlign: 'center'}}>This is a certificate.</p>
          <p style={{textAlign: 'center'}}>This is a certificate.</p>
        </div>
        <div id='third' style={card_style} onClick={() => handle('third')}>
          <img src='images/certificate-cpraed-online-y2023-63ae8cdb56ca2c6d47013849_page-0001 2.jpg' />
          <p style={{textAlign: 'center'}}>{sample}</p>
          <p style={{textAlign: 'center'}}>{sample}</p>
        </div>
      </div>
    </>
  )
}

function App(){
  //const [device , SetDevice] = useState(isPortraitMode());
  //SetDevice(isPortraitMode());
  //let device2 = isPortraitMode();
  const [showApp, setShowApp] = useState(isPortraitMode());

  useEffect(() => {
    // Update the state when the result of the external function changes
    const interval = setInterval(() => {
      setShowApp(isPortraitMode());
    }, 100); // Check every milisecond

    return () => clearInterval(interval);
  }, []);

  return(
    <>
      {!showApp ? <X /> : <h1 style={{color: 'red' , textAlign: 'center' , marginTop: '300px'}}>Please rotate your device to landscape mode</h1>}
    </>
  )
}


export {App , Acheivments} ;

