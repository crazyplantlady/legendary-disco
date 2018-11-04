var html = '';
var red;
var green;
var blue;
var rgbColor;
for (var i = 0; i <100; i += 1) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
   setInterval('window.location.reload()', 500); 
  }
  document.write(html);