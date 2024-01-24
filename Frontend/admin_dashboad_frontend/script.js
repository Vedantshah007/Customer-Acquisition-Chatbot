var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
async function fet1() {
  fetch("https://chatbot-data-xzcj.onrender.com/total-users", requestOptions)
    .then(response => response.json())
    .then((res) => {
      let e = document.getElementById('nou')
      e.innerHTML = res.count;
      let e1 = document.getElementById('Use')
      e1.innerHTML = 'Users';
      let ab = document.getElementById("ld1");
      ab.remove();
    })
    .catch(error => console.log('error', error));
}
async function fet2() {
  fetch("https://chatbot-data-xzcj.onrender.com/total-tw-users", requestOptions)
    .then(response => response.json())
    .then((res) => {
      let e = document.getElementById('twi')
      e.innerHTML = res.count;
      let e1 = document.getElementById('Use')
      e1.innerHTML = 'Users';
    })
    .catch(error => console.log('error', error));
}
async function fet3() {
  fetch("https://chatbot-data-xzcj.onrender.com/total-fw-users", requestOptions)
    .then(response => response.json())
    .then((res) => {
      let e = document.getElementById('fwi')
      e.innerHTML = res.count;
      let e1 = document.getElementById('Use')
      e1.innerHTML = 'Users';
    })
    .catch(error => console.log('error', error));
}
fet1();
fet2();
fet3();