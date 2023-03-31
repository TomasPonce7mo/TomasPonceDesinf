function antivirusout(t, c1, c2){
    let f = "";
    for(let i=0;i<t.length;i++){
        if(!(t.charAt(i-1) == c1 && t.charAt(i) == c2 && t.charAt(i+1) == c1)){
           f += t.charAt(i);
        }
    }
    return f;
}