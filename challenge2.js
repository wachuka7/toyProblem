function checkSpeed() {
    const speed = parseInt(prompt("Speed:"));
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed-speedLimit)/5);
    const licenseSuspensionPoints = 12;

    if (speed < speedLimit) {
        return alert("Ok");
    } else {
        
        if (demeritPoints > licenseSuspensionPoints) {
            return alert("License suspended");
        } else {
            return alert(demeritPoints);
        }
    }
}
checkSpeed();