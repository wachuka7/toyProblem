//function to check speed
function checkSpeed() {
    // sending a prompt to the user for them to input speed
    const speed = parseInt(prompt("Speed:"));
    //the speedlimit is set 70KM
    const speedLimit = 70;
    
    //to get the demerit points rounded off

    const demeritPoints = Math.floor((speed-speedLimit)/5);
    //license is suspended when the demerit points reach 12
    const licenseSuspensionPoints = 12;
//an alert is sent to the user according to the speed
    if (speed < speedLimit) {
        return alert("Ok");
        //an 'Ok' alert if speed is below 70 
    } else {
        
        if (demeritPoints > licenseSuspensionPoints) {
            return alert("License suspended");
            //license suspension alert if the demerit points are more than 12
        } else {
            //if the demerit points are less than 12, an alert shows the demerit points
            return alert(demeritPoints);
        }
    }
}
//invoking the checkspeed function
checkSpeed();