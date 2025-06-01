# AnimationSnippet
This Repo is for animation Snippet In this Repo You will get every type of Animation. That I have Used in my past Projects. 
# How to use
1. You can write In this formate for ImageTrail Animation.
2. Use This Code Formate.<br>
bash`import ImageTrail from './ImageTrailAnimation'
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