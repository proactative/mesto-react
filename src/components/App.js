import React from 'react';

//import all components
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
        <PopupWithForm />
      </div>
    </div> 
  );
}

export default App;
