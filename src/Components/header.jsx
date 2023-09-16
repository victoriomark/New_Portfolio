import React,{useState} from "react";

 

const Header = () =>{
    const[active,setActive] = useState(false)
    function ToggleActive(){
        setActive(!active)
    }
let Navigation = active ?  ' Active' : null;



    return(
        <>
        <header>
        <h3><span>Port</span>folio</h3>
            <nav className={Navigation}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </nav>
            <div className="bars"><i onClick={ToggleActive} className="fa-solid fa-bars-staggered"></i></div>
        </header>
        
        </>
    )

}
export default Header;