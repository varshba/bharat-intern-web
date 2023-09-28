convert= ()=>{
    let inp=document.getElementById("deg").value;
    console.log(inp);
    if(inp == null || inp == ''){
    alert("Enter temperature");
    return;
    }
    if(isNaN(inp))
    alert("Enter an Integer Value");
    const type=document.getElementById("temp_scale").value;
    console.log(type);

    const result1=document.getElementById("output_res1");
    const result2=document.getElementById("output_res2");
    if(type == 'Fah'){
        const res1=5*(inp-32)/9;
        // console.log(res);
        result1.value=`${res1} °C`;
        const res2=Number(res1)+273;
        result2.value=`${res2} K`;
    }
    else if(type == 'Cel'){
        const res1=1.8*inp + 32;
        // console.log(res);
        result1.value=`${res1} °F`;
        const res2=Number(inp)+273;
        result2.value=`${res2} K`;
    }
    else if(type == 'Kel'){
        const res1=Number(inp)-273;
        // console.log(res);
        result1.value=`${res1} °C`;
        const res2=Number(res1) * 1.8 +32;
        result2.value=`${res2} °F`;
    }
    else if(type =='Sel')
    alert("Select a Temperature Scale");
}