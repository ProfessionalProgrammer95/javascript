let onBtn = document.querySelector('#on');
let offBtn = document.querySelector('#off');
 let blk = document.querySelector('#container');
onBtn.addEventListener('click', function(){
    blk.classList.add('green');
 });
offBtn.addEventListener('click', function(){
   blk.classList.remove('green');
});