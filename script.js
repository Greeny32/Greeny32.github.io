const date = new Date();
const txt_date = document.getElementById("date");

updateDate();

function updateDate(){
    const txtmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = date.getDate();
    let month = txtmonths[date.getMonth()];
    let yr = date.getFullYear();
    txt_date.innerHTML = day+", "+month+" "+yr;
}