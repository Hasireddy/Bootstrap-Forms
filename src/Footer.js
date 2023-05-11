import React from 'react'

function Footer() {
  return (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-6">
            <p>Copyright &copy; 2021 Tutorial Republic</p>
            </div>
            <div className = "col-6 text-md-end">
            <span class="text-muted mx-2">|</span> 
                <a href="/#" class="text-dark">Privacy Policy</a>
            </div>
        </div>
      </div>  
  )
}

export default Footer;