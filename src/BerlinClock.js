export class BerlinClock {

    getSingleMinutes(minutes) {
    const lamps = ['0', '0', '0', '0'];
    if (minutes % 5 >= 1) lamps[0] = 'Y';
    if (minutes % 5 >= 2) lamps[1] = 'Y';
    return lamps.join('');
    
    }
}    
