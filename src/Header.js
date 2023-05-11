const Header = () =>
{
  return( 
  <div className = "container-fluid py-3">
    <div className = "bg-img" style = {{"background-image":"url('./assets/nature.jpg')"}}></div>
        <h1 className = "text-center">Header</h1>
          <div className = "p-5 my-8 mx-2 bg-light rounded-3">       {/*/* my-margin top&bottom mx-margin left&right */ }
        <h1 className = "mb-5 text-center">DigiACT Abfall</h1>
        <p className = "lead">
           " Resourcenschutz durch Abfallvermeidung und Abfallverwertung"
        </p>
        <button type="button" className = "btn btn-info btn-lg btn-block mt-5"> Bootstrap Button</button>
    </div>

    <div className = "row">
        <div className = "col-lg-4">
        <h2 className = "mb-3">HTML</h2>
            <p>HTML is the standard markup language for describing the structure of the web pages. Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own web pages or website.</p>
        </div>

        <div className = "col-lg-4">
        <h2 className = "mb-3">CSS</h2>
            <p>CSS is used for describing the presentation of web pages. CSS can save a lot of time and effort. Our CSS tutorials will help you to learn the essentials of latest CSS3, so that you can control the style and layout of your website.</p>
        </div>
        
        <div className = "col-lg-4">
        <h2 className = "mb-3">Bootstrap</h2>
            <p>Bootstrap is a powerful front-end framework for faster and easier web development. Our Bootstrap tutorials will help you to learn all the features of latest Bootstrap 4 framework so that you can easily create responsive websites.</p>
        </div>
    </div>

    <div className = "row">
        <div className = "col-lg-4">
        <h2 className = "mb-3">HTML</h2>
            <p>HTML is the standard markup language for describing the structure of the web pages. Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own web pages or website.</p>
        </div>

        <div className = "col-lg-4">
        <h2 className = "mb-3">CSS</h2>
            <p>CSS is used for describing the presentation of web pages. CSS can save a lot of time and effort. Our CSS tutorials will help you to learn the essentials of latest CSS3, so that you can control the style and layout of your website.</p>
        </div>
        
        <div className = "col-lg-4" >
        <h2 className = "mb-3">Bootstrap</h2>
            <p>Bootstrap is a powerful front-end framework for faster and easier web development. Our Bootstrap tutorials will help you to learn all the features of latest Bootstrap 4 framework so that you can easily create responsive websites.</p>
        </div>
    </div>
    </div>
  );
}

export default Header;