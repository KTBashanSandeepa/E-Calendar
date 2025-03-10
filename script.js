const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March","April", "May", "June", "July", "August", "September","October","November", "December"] ;

const renderCalendar = ()=> {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let liTag = "";

    for(let i = firstDayofMonth; i>0; i--){
        liTag += `<li>${i}</li>`;
    }

    for(let i=1; i<= lastDateofMonth; i++){
        liTag += `<li>${i}</li>`;
    }
    
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

}
renderCalendar();

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click",() =>{
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth+1;
        renderCalendar();
    })
} );