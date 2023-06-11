import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myElement = (
//     <>
//       <p>I am a paragraph.</p>
//       <p>I am a paragraph too.</p>
//     </>
//   );

//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//export default function Contact() {
    function Contact() {
    return (
      <div>
        <h1>Contact Page</h1>
        
        <p>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Aenean pellentesque placerat lacus imperdiet
          efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
          mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
          posuere, eget tristique dui dapibus. Maecenas fermentum elementum
          faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
          ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
          dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
          rhoncus. Etiam vel condimentum magna, quis tempor nulla.



        </p>
        
        <h2>Contact form</h2>
        <form>
            <label for="name">Name: </label><br></br>
            <input type="text" id="fname" name="fname" value="John Doe"></input>
            <br></br>
            <br></br>
            <label for="email">Email Address: </label><br></br>
            <input type="text" id="email" name="email" value="jdoe@gatech.edu"></input>
            <br></br>
            <br></br>
            <textarea id="w3review" name="w3review" rows="4" cols="100">Please enter info</textarea>
            <br></br>
            <br></br>
            <input type="submit" id="submit" value="Submit"></input>
            
        </form>

        
        
        
        </div>
      
    );

    
    
  }
//   document.querySelector('#submit').addEventListener('click', 
//     console.log("Hello")
//   )
  export default Contact;