let getId = x => document.getElementById(x);
let sel = y => document.querySelector(y);

let signIn = document.forms['signIn'];
let signIn2 = document.forms=['signIn2']

signIn.button.addEventListener('click', function(){
    let text1 = signIn.textOne.value;
    if(text1!=''){
        signIn.inputTwo.placeholder = text1;
    }
    signIn.reset();
})

// sel('.text0').onfocus = function(){
//     sel('.box').style.background = 'red';
// }
// sel('.text0').onblur = function(){
//     sel('.box').style.background = 'gray';
//     let text0 = signIn2.textNone.value;
//     signIn2.textNone.placeholder = text0;
//     if(text0!=''){
//         signIn2.textNone.placeholder = text0;
//     }
// }

// window.addEventListener('keydown', function(event){
//     if(event.keyCode === 13){
//         sel('.box').style.background = 'gray';
//         let text0 = signIn2.textNone.value;
//         if(text0!=''){
//             signIn2.textNone.placeholder = text0;
//         }
//     }
// })
let person = document.forms['person'];

sel('.inputPlaceholder').onfocus = function() {
    document.body.style.background = 'red';
}

sel('.inputPlaceholder').onblur = function() {
    let inputPlaceholder2 = person2.inputPlaceholder.value;
    document.body.style.background = 'gray';
    person2.inputPlaceholder.placeholder = inputPlaceholder2;
    person2.inputPlaceholder.value = ''
}
