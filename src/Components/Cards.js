import "./Cards.css";
export default function Cards()
{
    const data=[
        {
            name:"Joy",
            image:"https://images.unsplash.com/photo-1464446066817-4116494586bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name:"Anxiety",
            image:"https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            name:"Hope",
            image:"https://images.unsplash.com/photo-1610733376381-010db4468779?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        },
        {
            name:"Peace",
            image:"https://images.unsplash.com/photo-1527380992061-b126c88cbb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        }
    ]
    return(
        <div className="article">
           {data.map((tab)=>{
                return(
                    <div className="cards">
                    <img src={tab.image} alt={tab.name}/>
<p>{tab.name}</p>
<button>Read More</button>
                    </div>
                )
            })}

        </div>
    )
}