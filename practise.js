
const stock=["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","@#$%&*/()?><"];
 //Enter the length of thwe password to be generated...
function generate(){
    let answer="";
    const length=parseInt(document.getElementById("length").value);
    const islowercase=document.getElementById("lower-select").value;
    const isuppercase=document.getElementById("upper-select").value;
    const isnumber=document.getElementById("number-select").value;
    const ischaracter=document.getElementById("character-select").value;
    if (islowercase === "Select" || isuppercase === "Select" || isnumber === "Select" || ischaracter === "Select") {
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
    document.getElementById("screen").value=answer;
}
function find(flag,num){
    if(flag=="True"){
        let max=stock[num-1].length;
        let random=Math.floor(Math.random()*max);
        return stock[num-1].charAt(random);
    }
    else{
        return -1;
    }
}