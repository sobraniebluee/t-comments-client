export const timeHasPassed = (dateTime: string): string => {
    let date = new Date(dateTime).getTime()
    let passedTime = Date.now() - date
    let secondsPassed = Math.floor(passedTime / 1000)
    let minutesPassed = Math.floor(secondsPassed / 60)
    let hoursPassed = Math.floor(secondsPassed / (60 * 60))
    let daysPassed = Math.floor(secondsPassed / (60 * 60 * 24))
    let weeksPassed = Math.floor(secondsPassed / (60 * 60 * 24 * 7))
    let monthsPassed = Math.floor(secondsPassed / (60 * 60 * 24 * 30))

    if (secondsPassed < 60) {
        return checkIsSingleForm(secondsPassed, 'second')
    } else if (minutesPassed < 60) {
        return checkIsSingleForm(minutesPassed, 'minute')
    } else if (hoursPassed < 24) {
        return checkIsSingleForm(hoursPassed, 'hour')
    } else if (daysPassed < 7) {
        return checkIsSingleForm(daysPassed, 'day')
    } else if (weeksPassed <= 4) {
        return checkIsSingleForm(weeksPassed, 'week')
    } else if (monthsPassed < 12) {
        return checkIsSingleForm(monthsPassed, 'month')
    } else {
        return new Date(dateTime).toLocaleDateString()
    }
}

type typeTime = 'week' | 'second' | 'minute' | 'day' | 'hour' | 'month'
export const checkIsSingleForm = (num: number, type: typeTime) => (num == 1)? `${num} ${type} ago` :`${num} ${type}s ago`
