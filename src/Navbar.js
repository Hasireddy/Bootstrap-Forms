import "./Navbar.css";
 import img1 from "./assets/digilogo.png";

const Navbar = () => {
    return(
        <div>
        <nav className = "navbar navbar-expand-lg sticky top bg-light">
            <div className = "container-fluid">
            <div class="navbar-header">
             <a href = "/#" className = "navbar-brand">
             {/* <img src = {img1} style = {{"height":"70px"}}  alt = "digital-logo" className = "img-fluid"/>  */}
            PROJECTVERBUND ForCYCLE Technikum
            </a> 
            <button type = "button" className = "navbar-toggler" data-bs-toggle = "collapse" data-bs-target = "#navbarCollapse" autoComplete = "off">
            <span class="navbar-toggler-icon"></span>   
            </button>
            </div>

            <div className = "collapse navbar-collapse" id = "navbarCollapse">   {/* By deafault navs are left aligned. To align right we can use justify-content-end  */}
            <ul className = "navbar-nav ms-auto">
                <li className = "nav-item">
                <a href = "/#" className = "nav-link active">HOME</a> 
                </li> 
                 {/* To align items to the right we can also use ms-auto  */}
                 <li className = "nav-item">
                <a href = "/#" className = "nav-link active">SIGNUP</a>
                </li>
                <li className = "nav-item">
                <a href = "/#" className = "nav-link active">LOGIN</a>
                </li>
            </ul>
           </div>       
           </div>
        </nav>
        </div>
        
    )
}

export default Navbar;