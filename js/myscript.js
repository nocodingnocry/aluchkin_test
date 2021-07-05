let str = '';
for (let i = 1; i <= 30; i++){
    if (i%3 == 0){ 
        str += (`Buzz`);
    }
    if (i%5 == 0) { 
        str += (`Feed`);
    }
    alert(str, i);
    str ='';
}