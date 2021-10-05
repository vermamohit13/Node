const os=require('os')

const user=os.userInfo()
console.log(user)
console.log(`The sys is ${os.uptime()}`)

const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentos)