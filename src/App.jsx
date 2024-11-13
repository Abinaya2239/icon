import { useState } from 'react'
import { Pictures } from './picture'
import Info from './Info'

import './App.css'
function App(){
  const [favicon, setfavicon] = useState(1);
   
  document.querySelector ('link[rel="icon"]').href = Pictures[favicon -1].image
   const transferIcon=(images, id)=>{
   const icon=document.querySelector ('link[rel="icon"]');
   icon.href=images;
   setfavicon(id);
   


  }
  

  return(
    <div  className="alignment">
      {Pictures.map((imageItem)=>(
        <Info
        name={imageItem.button}
        curId={imageItem.imageid}
        buttonclick={()=>transferIcon(imageItem.image,imageItem.imageid)}
        faviIcon={favicon}
        
        ></Info>
      ))}
    </div>
    );
}
export default App;


