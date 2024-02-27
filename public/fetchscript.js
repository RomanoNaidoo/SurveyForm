const form = document.querySelector(".form");
  form.addEventListener("submit", event =>{
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
   
    fetch('http://localhost:3000/user',{
      method: 'POST',
      headers:{
        Accept: 'application.json',
        'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }); 