import Card from "./Card"

const CardList = ({Performers}) => {

    const cardArray = Performers.map(performer=>{
        return  <Card 
            key={performer.id} 
            name={performer.name} 
            url={performer.url} 
            imgSrc={performer.imgSrc}
        /> 
    }).sort(()=>Math.random()-0.5)


    return (
        <div>
            {
                cardArray
            }
        </div>
    ) 
  
}

export default CardList