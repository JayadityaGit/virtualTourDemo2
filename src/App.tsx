import { useMemo, useState } from "react";
import View360, { ControlBar, EquirectProjection } from "@egjs/react-view360";


 const App = () => {

  const [index, setIndex] = useState(0)

  const images= ["https://l13.alamy.com/360/2A307C4/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-with-high-sandy-cliff-near-the-riverbank-in-a-pine-forest-in-equirectangular-projection-2A307C4.jpg", "https://l13.alamy.com/360/2A62K6T/full-seamless-spherical-hdri-panorama-360-degrees-angle-view-on-wooden-pier-among-the-bushes-of-forest-near-river-or-lake-in-equirectangular-projectio-2A62K6T.jpg", "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FUs4VqiIMChlTduO6_0avQ.jpeg"]  

  const projection = useMemo(() => new EquirectProjection({
    src: images[index],
  }), [index, images]);

  return (
  <div>

      <button onClick={()=>{

      if(index === images.length-1){
        return;
      }

      setIndex((index + 1))

      }}>next</button>
      <button onClick={()=>{

      if(index === 0){
        return;
      }

      setIndex((index - 1))

      }}>before</button>


  <View360 style={{width:"100%", height:"70vh"}} plugins={[new ControlBar()]}  projection={projection} />

 
  </div>
  )
}

export default App;