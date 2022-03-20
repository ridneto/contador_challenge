const mainContainer = document.querySelector("main");
const paragraphContainer = document.querySelector(".description-grid");
const restartButton = document.querySelector("a");

const counterContainer = document.querySelector(".container-counter");
const DaysDifferenceElement = document.querySelector(".days h1");
const HoursDifferenceElement = document.querySelector(".hours h1");
const MinutesDifferenceElement = document.querySelector(".minutes h1");
const SecondsDifferenceElement = document.querySelector(".seconds h1");

(() => {
    try{
        const dateParamStr = new URL(window.location.href).searchParams.get("date");
        
        if(!checkIsValidDate(dateParamStr)){
            displayInvalidDate();    
            return;
        }

        createInvertal(createDate(dateParamStr));
    } catch (_) {
        displayInvalidDate();
    }
})();

function displayInvalidDate(){
    paragraphContainer.innerHTML = "Data inválida :/";
    counterContainer.style.display = "none";
    paragraphContainer.style.color = getDefaultMainColor();
    restartButton.innerHTML = "Voltar";
}

function getDefaultMainColor(){
    return getComputedStyle(document.documentElement).getPropertyValue('--main-color');
}

function createInvertal(targetDate){
    setInterval(() => {
        let difference = targetDate.getTime() - new Date().getTime();

        const daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24;
    
        const hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60;
    
        const minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60;
    
        const secondsDifference = Math.floor(difference/1000);

        upateCounter(
            secondsDifference, 
            minutesDifference, 
            hoursDifference, 
            daysDifference
        );
    }, 1000);
}

function upateCounter(seconds, minutes, hours, days){
    DaysDifferenceElement.innerHTML = days;
    HoursDifferenceElement.innerHTML = hours;
    MinutesDifferenceElement.innerHTML = minutes;
    SecondsDifferenceElement.innerHTML = seconds;
}