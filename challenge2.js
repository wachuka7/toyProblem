function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed-speedLimit)/5);
    const licenseSuspensionPoints = 12;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        
        if (demeritPoints > licenseSuspensionPoints) {
            return ("License suspended");
        } else {
            return (demeritPoints);
        }
    }
}
checkSpeed();
console.log(checkSpeed(135))
