
function createDate(date){
    if(date.length != 8) throw Exception("Invalid date");

    const year = date.substring(0,4);
    const month = date.substring(4,6);
    const day = date.substring(6,8);

    return new Date(year, month-1, day)
}

function checkIsValidDate(date){
    try{
        createDate(date);
        return true;
    } catch(_){
        return false;
    }
}

function generateStrDate(date, split="-"){
    let month = `${date.getUTCMonth() + 1}`.padStart(2, "0");
    const day = `${date.getUTCDate()}`.padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${year}${split}${month}${split}${day}`;
}