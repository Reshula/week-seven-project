function Buttons({filtredClothes}){
    return(
        <div className="cont">
            <button className="change" onClick={()=>filtredClothes("dress")}>DRESSES</button>
            <button className="change" onClick={()=>filtredClothes("pants")}>PANTS</button>
            <button className="change"onClick={()=>filtredClothes("shoes")}>SHOES</button>
            <button className="change" onClick={()=>filtredClothes("skirt")}>SKIRTS</button>
            <button className="change"onClick={()=>filtredClothes("shirt")}>SHIRTS</button>
        </div>
    )
}
export default Buttons;