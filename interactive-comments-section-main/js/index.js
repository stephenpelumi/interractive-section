let ReplyDisplayOne = document.getElementById('reply_display_one')

let ReplyDisplayTwo = document.getElementById('reply_display_two')

let FourthContent = document.getElementById('fourth_content')

let FifthContent = document.getElementById('fifthcontent')

let FourthComment = document.getElementById('fourth_comment')

let FifthComment = document.getElementById('fifth_comment')

let NewComment = document.getElementById('Fresh_Comment')

let Update = document.getElementById('update')

let UpdateNew = document.getElementById('updateNew')

let Twelve = document.getElementById('Twelve')

let OverlayEffect = document.getElementById('overlay')

let ConfirmFunction = document.getElementById('confirm')

function Editability(){
   Update.style.display = "block"
   FourthContent.style.border = "1px solid black"
   FourthContent.style.borderRadius = "5px"
   FourthContent.style.padding = "11px"
}
function NewEditability(){
   UpdateNew.style.display = "block"
   FifthContent.style.border = "1px solid black"
   FifthContent.style.borderRadius = "5px"
   FifthContent.style.padding = "10px"
}

function reflect(){
   ReplyDisplayOne.style.display = 'block'
   ReplyDisplayOne.style.display = 'flex'
}

function reflectTwo(){
   ReplyDisplayTwo.style.display = 'block'
   ReplyDisplayTwo.style.display = 'flex'
}

function UpDate(){
   Update.style.display = "none"
   FourthContent.style.border = "none"
}
function NewUpDate(){
   UpdateNew.style.display = "none"
   FifthContent.style.border = "none"
}

    Twelve.innerHTML = 12
function PlusTwelve(){
   for(let i=0; i<2; i++){
      Twelve.innerHTML = 12+i
   }
}
function MinusTwelve(){
   for(let i=0; i<2; i++){
      Twelve.innerHTML = 12-i
   }
}
let FirstAcceptButton = document.getElementById('first_accept_button');
let SecondAcceptButton = document.getElementById('second_accept_button');
function Deleted(){
   ConfirmFunction.style.display = 'block';
   OverlayEffect.style.display = 'block';
   FirstAcceptButton.style.display = 'block';
   SecondAcceptButton.style.display = 'none'
}

function NewDeleted(){
   FirstAcceptButton.style.display = 'none';
   ConfirmFunction.style.display = 'block';
   OverlayEffect.style.display = 'block';
   SecondAcceptButton.style.display = 'block'
}
function NewAccept(){
   FifthComment.style.display = 'none'
   ConfirmFunction.style.display = 'none';
   OverlayEffect.style.display = 'none';
}

function Cancel(){
   ConfirmFunction.style.display = 'none';
   OverlayEffect.style.display = 'none';
}

function SendIt(){
    FifthContent.innerHTML = NewComment.value
    FifthComment.style.display = 'block'
    FifthComment.style.display = 'Flex'
}
function Cancel(){
   ConfirmFunction.style.display = 'none';
   OverlayEffect.style.display = 'none';
}
function Accept(){
   FourthComment.style.display = 'none'
   ConfirmFunction.style.display = 'none';
   OverlayEffect.style.display = 'none';
}
