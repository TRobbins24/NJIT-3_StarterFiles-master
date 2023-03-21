const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getMonthText(dateArray){

for(var i = 0; i < months.length; i++){
    switch(dateArray) {
          case 1:
                dateArray[1] = months[i];
                break;
          default:
                break;
    }

    return dateArray;
    }
}


getMonthText(1987, 12, 10);