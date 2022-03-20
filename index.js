const inputDate = document.querySelector("input");
const startCounter = document.querySelector("a");

(() => {
    const date = new Date();

    date.setDate(date.getDate() + 1);
    const minValidDate = generateStrDate(date);

    date.setDate(date.getDate() + 364 * 10);
    const maxValidDate = generateStrDate(date);

    inputDate.setAttribute("min", minValidDate);
    inputDate.setAttribute("max", maxValidDate);
})();

startCounter.addEventListener("click", (event) => {
    event.preventDefault();
    const regex = /-/ig;

    try{
        const valueDate = inputDate.value;
        const valueWithoutBars = valueDate.replace(regex, "");
        
        if(checkIsValidDate(valueWithoutBars)){
            window.location.href = `/contador.html?date=${valueWithoutBars}`;
            return;
        } else {
            displayInvalidDate();
        }
    }catch(err){
        displayInvalidDate();
    }
});

function displayInvalidDate() {
    inputDate.focus();
}