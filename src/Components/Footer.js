import './Footer.css';
export default function footer()
{
    const quicklinks=[
        "About us",
        "Destinations",
        "Latest Blog",
        "Our Team",
        "Contact US",
    ];
    const supportlinks=[
        "Customer Support",
        "Privacy policy",
        "Terms & Conditions",
        "Forum",
        "Tour guide",
    ];
    return(
        <div className="mainfooter">
        <div className="footer">
            <div className="brand">
                <h2 className="description">
                    Dreams do come true!
                </h2>

            </div>
<ul>
    <li>+9079336366636</li>
    <li>
              <span>abc21@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="footer">
<h2>Quick Links</h2>
<ul>
{
    quicklinks.map((link)=>{
        return(
        <li key={link}>{link}</li>)
    })
}
</ul>
        </div>
        <div className="footer">
<h2>About us</h2>
<ul>{
    supportlinks.map((link)=>{
return(
    <li key={link}>{link}</li>
)}
)}
</ul>
        </div>
        <div className="footer">
            <div className='newsletter'>
<input type="text" placeholder='Your e-mail'/>
<button>Subscribe now</button>
</div>
        </div>
        <div className="lowerfooter">
<span>
Copyright &copy; Bible. Designed by <a href="#">Eric</a>
</span>
        </div>
        </div>
    )
}