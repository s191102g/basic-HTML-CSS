function checkMenu() {
   document.querySelector('#menu-respon').addEventListener('click', function () {
          document.querySelector('.menu').style.display= 'block';
          document.querySelector('#menu-respon').style.display= 'none';
          document.querySelector('#menu-close').style.display= 'block';
   });
}
function closeMenu() {
   document.querySelector('#menu-close').addEventListener('click', function () {
          document.querySelector('.menu').style.display= 'none';
          document.querySelector('#menu-respon').style.display= 'block';
          document.querySelector('#menu-close').style.display= 'none';
   });
}


// XU LY ORDER



   document.querySelector('.soup').addEventListener('click', function () {
      document.querySelector('.betwen3').style.display = 'none';
      document.querySelector('.betwen2').style.display = 'none';
      document.querySelector('.betwen').style.display = 'block';
     
});


   document.querySelector('.noodle').addEventListener('click', function () {
      document.querySelector('.betwen').style.display = 'none';
      document.querySelector('.betwen3').style.display = 'none';
      document.querySelector('.betwen2').style.display = 'block';

    
});


   document.querySelector('.dumpling').addEventListener('click', function () {
      document.querySelector('.betwen').style.display = 'none';
      document.querySelector('.betwen2').style.display = 'none';
      document.querySelector('.betwen3').style.display = 'block';
    
});

document.querySelector('#bt').addEventListener('click', function () {
  
   document.querySelector('.success').style.display = 'block';
 
});


var i = 1;


function add(n) {
   namesp = 'name' + n;
   tensp = document.getElementById(namesp).innerHTML;
   var node = document.createElement('LI');
   item = 'item' + 1;
   node.setAttribute('id', item);
  var textnode = document.createTextNode(tensp+'');
  i += 1;
  node.appendChild(textnode);
  document.getElementById('items').appendChild(node);

}