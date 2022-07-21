iframe=document.getElementById('player')
let input= document.getElementById('url')
let select =document.getElementById('jk')
function redirect(){
    let pre_url=select[select.selectedIndex].value
    let url=input.value
    iframe.src=pre_url+url
}

