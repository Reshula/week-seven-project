import { useState } from "react";
import { data } from './data';
import Clothes from './Clothes';
import Buttons from "./Buttons";


function Home(){
    const [clothes,setClothes] = useState(data);

  const choosenClothes = (searchTerm)=> {
    const newClothes =data.filter(item =>
    item.searchTerm === searchTerm );
    setClothes(newClothes)
  }

  return(
    <div>
      <div className="cont">
        <h2 className="back">FREE STANDART SHEEPING</h2>
      </div>
      <Buttons filtredClothes={choosenClothes}/>
      <Clothes clothes={clothes} />

    </div>
  )
}
export default Home;