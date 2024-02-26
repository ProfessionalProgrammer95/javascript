    var users = [
        {
            id:1,
            name:'John',
            email:'john@gmail.com',
            age:24
        },
        {
            id:2,
            name:'Acchu',
            email:'acchu@gmail.com',
            age:28
        },{
            id:3,
            name:'chiru',
            email:'chiru@gmail.com',
            age:27
        },{
            id:4,
            name:'appi',
            email:'appi@gmail.com',
            age:16
        }
    ];

// traget the section
    var sec = document.querySelector('#container');

    users.forEach((item,index) => {

//create html tags

    let box = document.createElement('div');
    let na = document.createElement('h1');
    let em = document.createElement('h3');
    let ag = document.createElement('h5');

//add content
    na.textContent = `${item.id} ${item.name}`;
    em.textContent = `${item.email}`;
    ag.textContent = `${item.age}` + "years";

//append the child to parent tag
    box.appendChild(na);
    box.appendChild(em);
    box.appendChild(ag);
//add parent to main block
    sec.appendChild(box);

//adding css class to element
    box.classList.add('card');
});