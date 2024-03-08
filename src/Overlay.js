import React from 'react'

export default function Overlay() {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
      <h1
        style={{
          background: 'radial-gradient(ellipse farthest-corner at center center, #b6c3f5 0%, #6c86ec 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '30px'
        }}>
        Welcome to my portfolio
      </h1>
      <a href="https://replit.com/@carlnorwoodk">
        <h2
          style={{
            background: 'radial-gradient(ellipse farthest-corner at center center, #F26200 0%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '20px'
          }}>
          Replit
        </h2>
      </a>
      <a href="linkedin.com/in/carlnorwoodk/">
        <h2
          style={{
            background: 'radial-gradient(ellipse farthest-corner at center center, #0B65C2 0%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '20px'
          }}>
          Linkedin
        </h2>
      </a>
      <a href="https://github.com/carlnorwood12">
        <h2
          style={{
            background: 'radial-gradient(ellipse farthest-corner at center center, #2DBA4E 0%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '20px'
          }}>
          Github
        </h2>
      </a>
    </div>
  )
}
