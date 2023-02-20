import './Header.css';
export default function Header()
{
    return(
        <section className='Header'>
        <div className="background">
            <img className="image" src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="bible-img"/>
            </div>
            <div className='info'>
            <h1>“Do not fear, for I am with you"</h1>
            <button>Read Now</button>
            </div>
            </section>
      
    )

}