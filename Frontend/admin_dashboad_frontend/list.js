function resizefunc() {
  $(window).on("load resize ", function () {
    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
  }).resize();
}

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://chatbot-data-xzcj.onrender.com/get-all-users", requestOptions)
  .then(response => response.json())
  .then((res) => {
    let e = document.getElementById('data')
    res.forEach(user => {
      const newRow = e.insertRow(e.rows.length);

      // Create and populate cells in the new row
      const cell1 = newRow.insertCell(0);
      cell1.innerHTML = user.user_name;

      const cell2 = newRow.insertCell(1);
      cell2.innerHTML = user.phone_no;

      const cell3 = newRow.insertCell(2);
      cell3.innerHTML = user.email_id;
    });
    resizefunc();
  })
  .catch(error => console.log('error', error));