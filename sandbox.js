const now = new Date()

console.log(now)
console.log(typeof now)

console.log('get full year', now.getFullYear())
console.log('get full month', now.getMonth())
console.log('get full day', now.getDay())
console.log('get hour', now.getHours())
console.log('get minutes', now.getMinutes())
console.log('get seconds', now.getSeconds())

//timestamps
console.log('timestamp:', now.getTime())

//date strings
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())