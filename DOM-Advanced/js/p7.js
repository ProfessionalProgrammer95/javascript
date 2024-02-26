let random = document.querySelector('#random');
let image = document.querySelector("img");

let imgArr = [
    "https://picsum.photos/id/230/400/400",
    "https://picsum.photos/id/234/400/400",
    "https://picsum.photos/id/235/400/400",
    "https://picsum.photos/id/266/400/400",
    "https://picsum.photos/id/236/400/400",
    "https://picsum.photos/id/268/400/400",
    "https://picsum.photos/id/213/400/400",
    "https://picsum.photos/id/237/400/400",
    "https://picsum.photos/id/254/400/400",
    "https://picsum.photos/id/238/400/400",
    "https://picsum.photos/id/256/400/400",
    "https://picsum.photos/id/245/400/400",
    "https://picsum.photos/id/276/400/400",
    "https://picsum.photos/id/275/400/400",
    "https://picsum.photos/id/212/400/400"
];

// random.addEventListener('click', function(){
//     let res = imgArr[Math.floor(Math.random() * imgArr.length)]
//     image.setAttribute("src", res);
// });


setInterval(function() {
    let res = imgArr[Math.floor(Math.random() * imgArr.length)]
    image.setAttribute("src", res);
}, 2000);
