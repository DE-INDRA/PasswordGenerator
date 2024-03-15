
const stock=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","@#$%&*/()?><"];
 //Enter the length of thwe password to be generated...
 const trigger=document.getElementById("trigger");
 const rangeval=document.getElementById("size");
 rangeval.addEventListener("input", ()=>{
    document.getElementById("lengthvalue").textContent=rangeval.value;
 });
function generate(){
    let answer="";
    const length=parseInt(document.getElementById("size").value);
    const islowercase=document.getElementById("lowercase").checked;
    const isuppercase=document.getElementById("uppercase").checked;
    const isnumber=document.getElementById("numbers").checked;
    const ischaracter=document.getElementById("characters").checked;
    if (!islowercase && !isuppercase && !isnumber && !ischaracter) {
        alert("Please select options for all criteria.");
        return;
    }
    let cnt=0;
    while(cnt<length){
        let domain=Math.floor(Math.random()*4)+1;
        let char;
        if(domain==1) char=find(islowercase,domain);
        else if(domain==2) char=find(isuppercase,domain);
        else if(domain==3) char=find(isnumber,domain);
        else char=find(ischaracter,domain);
        
        if(char!=-1){
            cnt++;
            answer+=char;
        }
    }
    document.getElementById("result").textContent=answer;
}
function find(flag,num){
    if(flag){
        let max=stock[num-1].length;
        let random=Math.floor(Math.random()*max);
        return stock[num-1].charAt(random);
    }
    else{
        return -1;
    }
}
trigger.addEventListener("click",generate);


const copyButton = document.getElementById("copy");
copyButton.addEventListener("click", function() {
    
    const resultSpan = document.getElementById("result");
    // Create a temporary textarea element
    const tempTextarea = document.createElement("textarea");

    // Set the value of the textarea to the text content of the result span
    tempTextarea.value = resultSpan.textContent;

    // Append the textarea to the document body
    document.body.appendChild(tempTextarea);

    // Select the content of the textarea
    tempTextarea.select();

    // Execute the copy command to copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea from the document body
    document.body.removeChild(tempTextarea);

    // Alert the user that the content has been copied
    alert("Copied to clipboard!");
});
