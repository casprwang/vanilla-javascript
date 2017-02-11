// const $dipper = $('.dipper');
//
// $dipper.waypoint(()=> {
//   console.log('waypoint');
// });

const waypoint = new Waypoint(
element: document.getElementById('thing'),
handler: function(direction) {
  alert('You have scrolled to a thing');
}
});
