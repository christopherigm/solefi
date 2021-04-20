import '../scss/nav-bar.scss';

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {
    edge: 'right',
    draggable: true
  });
});
