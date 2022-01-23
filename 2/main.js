let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y);

sel('.box2').style.display = 'none';
sel('.box').style.display = 'flex';

let form = document.forms['form'];
let form2 = document.forms['form2'];

form.button.addEventListener('click',  function(){
    sel('.box2').style.display = 'block';
    sel('.box').style.display = 'none';

    let nameYou= form.first.value;
    let emailYou= form.email.value;
    sel('.name').innerHTML = nameYou;
    sel('.email').innerHTML = emailYou;
    form.reset();
})  

form2.button2.addEventListener('click',  function(){
    sel('.box2').style.display = 'none';
    sel('.box').style.display = 'flex';
})

sel('.cltwo').addEventListener('click', function(){
    sel('.work').innerHTML = this.value;
})

// sel('.radio').addEventListener('click', function(){
//     let v = sel('.radio').value;
//     console.log(v);
//     sel('.kolo').style.backgroundImage =  `url(${v})` ;

//     console.log(8);
// })

form.button.addEventListener('click',  function(){
    let v = sel('.radio').value;
    console.log(v);
    sel('.kolo').style.background=  `url(${v})` ;

    console.log(8);
}) 