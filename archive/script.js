let arraySelect = document.getElementsByTagName('select');
console.log(typeof arraySelect);

let element = document.getElementById('content');

function dropdownStyles() {
  console.log(this);
  let style = this.id;
  let value = this.value;
  element.style[style] = value;
}

for (let i = 0 ; i < arraySelect.length ; i ++ ) {
  arraySelect[i].addEventListener('change', dropdownStyles);
}
