const output = document.getElementById("output");

let time = prompt('Enter a time\nFormats:\nDD MON YYYY HH:MM:SS {AM/PM}(12 hours or 24 hours format)\nMON DD YYYY\nDD/MM/YYY\nDD-MM-YYYY\nYYYY-MM-DD')
if (!time) time = '2020-01-01 10:11:55';

output.innerHTML = getLastSeen(time) + '...'

// function to get the last seen
// accept time as argument
// returns a string of the last seen
function getLastSeen(time) {
    let result = "";
    const today = new Date()
    const givenTime = new Date(time)

    if (isNaN(givenTime)) {
        result = givenTime.toString();
        return result;
    }

    if ((today - givenTime) < 0) {
        result = "We haven't invented future time machine yet. Please enter a past date !!"
        throw new Error("We haven't invented future time machine yet. Please enter a past date !!")
    }

    const now = getHands(today)
    const req = getHands(givenTime)

    if ((now.year - req.year) > 0) {
        if ((now.year - req.year) === 1) {
            result = `Last seen an year ago`;
        } else {
            result = `Last seen ${now.year - req.year} years ago`;
        }
    } else {
        if ((now.month - req.month) > 0) {
            if ((now.month - req.month) === 1) {
                result = `Last seen a month ago`;
            }
            else {
                result = `Last seen ${now.month - req.month} months ago`
            }
        } else {
            if ((now.day - req.day) > 0) {
                if ((now.day - req.day) === 1) {
                    const diff = req.hours > 12 ? `${req.hours - 12}:${req.min} PM` : `${req.hours}:${req.min} AM`;
                    result = `Last seen yesterday at ${diff}`;
                } else {
                    result = `Last seen ${now.day - req.day} days ago`;
                }
            } else if ((now.day - req.day) === 0 && (now.hours - req.hours > 10)) {
                const diff = req.hours > 12 ? `${req.hours - 12}:${req.min} PM` : `${req.hours}:${req.min} AM`;
                result = `Last seen today at ${diff}`;
            } else {
                if ((now.hours - req.hours) > 0) {
                    const diff = req.hours > 12 ? `${req.hours - 12}:${req.min} PM` : `${req.hours}:${req.min} AM`;
                    if ((now.hours - req.hours) === 1) {
                        result = `Last seen an hour ago at ${diff}`;
                    } else {
                        result = `Last seen ${now.hours - req.hours} hours ago`;
                    }
                } else {
                    if ((now.min - req.min) > 0) {
                        if ((now.min - req.min) === 1) {
                            result = `Last seen a minute ago`
                        } else {
                            result = `Last seen ${now.min - req.min} minutes ago`;
                        }
                    } else {
                        if ((now.sec - req.sec) > 0) {
                            if ((now.sec - req.sec) === 1) {
                                result = `Last seen a sec ago`
                            } else {
                                result = `Last seen ${now.sec - req.sec} seconds ago`;
                            }
                        }
                    }
                }
            }
        }
    }

    function getHands(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const hours = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        return { year, month, day, hours, min, sec }
    }

    return result;
}