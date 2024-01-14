function Clothes({clothes}){

    return(
        <div className="products">
            {clothes.map((item =>{
                const {id, name, searchTerm,price, image} = item;
                return(
                    <div  className="product-card" key={id}>
                          <img src = {image} alt='clothes' width='400px' height='500px'/>
                    <div className="card-info">
                        <h3>{name}</h3>
                        <h4>{searchTerm}</h4>
                        <h4>{price}</h4>
                    </div>
                    </div>
                   

                )
            }))}
        </div>
    )
}
export default Clothes;