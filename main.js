let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color:#7a3b59;'>|</span>"
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #7a3b59;">Desarrollo sitios web y estudio Química .</span ')
  .pauseFor(200)
  .deleteChars(10)
  .start();
