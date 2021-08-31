function caseUpper(value){
    return new Promise((resolve, reject)=>{
        resolve(value.toLowerCase());
    })
}

async function msg(x){
    try{
        const msg = await caseUpper(x);
        console.log("");
        console.log(msg);
        console.log("");
    }catch(err){
        console.log("");
        console.log("Message can't be a proper number.");
        console.log(err);
        console.log("");
    }
}

msg("RAVINA")