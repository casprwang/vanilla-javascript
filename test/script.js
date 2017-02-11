function myFunction () {
  let x
  if (confirm('Press a button!') == true) {
    x = 'You pressed OK!'
  } else {
    x = 'You pressed Cancel!'
  }
  // document.getElementsByTagName('p').innerHTML = x
  document.getElementById('de').innerHTML = x
}

