import React from 'react'
import ImageTrail from './ImageTrailAnimation'
function App() {

 const ImageArray = ['Src/1.jpg','Src/2.jpg','Src/3.jpg']
  return (
    <div>
      <ImageTrail
      images={ImageArray}
      style={{
        height:'100vh',
        width:'100%' 
      }}
      />
    </div>
  )
}

export default App
