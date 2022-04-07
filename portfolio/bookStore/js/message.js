// ------day and message-------
export function dayMessage(){
    const today = new Date();
    let dayOfWeek;
    dayOfWeek = today.getDay();
    let message1;
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        message1 = 'Cheer up!';
    }
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        message1 = 'Smile, Life is juicy!';
    } else {
        message1 = 'This is Week-end, Relax';
    }
    let message2;
    switch (dayOfWeek) {
        case 0:
            message2 = 'Sunday';
            break;
        case 1:
            message2 = 'Monday';
            break;
        case 2:
            message2 = 'Tuesday';
            break;
        case 3:
            message2 = 'Wednesday';
            break;
        case 4:
            message2 = 'Thursday';
            break;
        case 5:
            message2 = 'Friday';
            break;
        case 6:
            message2 = 'Saturday';
            break;
        default:
            message2 = 'Unknown - ' + dayOfWeek;
            break;
    }
    
    document.querySelector('#message1').textContent = message1;
    document.querySelector('#message2').textContent = message2;
    };
    dayMessage();