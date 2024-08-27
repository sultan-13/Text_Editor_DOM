document.getElementById('bold-btn').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    if(textField.style.fontWeight === "bold"){
        textField.style.fontWeight = "normal";
    }
    else{
        textField.style.fontWeight = "bold";
    }
    
})
document.getElementById('italic-btn').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    if(textField.style.fontStyle === "italic"){
        textField.style.fontStyle = "normal";
    }
    else{
        textField.style.fontStyle = "italic";
    }
    
})
document.getElementById('underline-btn').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    if(textField.style.textDecoration === "underline"){
        textField.style.textDecoration = "none";
    }
    else{
        textField.style.textDecoration = "underline";
    }
    
})
document.getElementById('left-btn').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    textField.style.textAlign = "left";
    
})
document.getElementById('center-btn').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    textField.style.textAlign = "center";
    
})
document.getElementById('right-btn').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    textField.style.textAlign = "right";
    
})
document.getElementById('number-field').addEventListener('click',function(event){

    let target = event.target.value;
    const textField = document.getElementById('text-field');
    textField.style.fontSize = target+"px";  
})

document.getElementById('text-transform').addEventListener('click',function(){
    const textField = document.getElementById('text-field');
    if(textField.style.textTransform === "uppercase"){
        textField.style.textTransform = "none";
    }
    else{
        textField.style.textTransform = "uppercase";
    }
    
})

document.getElementById('color-btn').addEventListener('click',function(){

    const textField = document.getElementById('text-field');
    textField.style.color = this.value;
    
     
})
