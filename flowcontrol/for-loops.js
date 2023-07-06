let num = [10,20,3,8,7,9,12];
for( let i =0; i< num.length;i++){
 console.log(i);
 console.log(num[i]);
}
//for ..of
//Used to iterste over different 
//break
for(let i = 0; i< num.length; i++){
    console.log({"continue":i});
    if(i===3){  
        continue;
    }
}

