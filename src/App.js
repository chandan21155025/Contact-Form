import React from 'react';
import ContactPage from './contactpage';

function App() {
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://docs.google.com/spreadsheets/d/1eDaPmtxWOzrG5PmFK0Q6FuFWgNrvnRgyk6dozySgiiI/edit#gid=0",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <ContactPage handleSubmit={Submit} />
    </div>
  );
}
export default App;
