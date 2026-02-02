import fs from "fs"

const logger = (req, res, next)=>{
    const today = new Date();
    const timeStamp = `${today.getFullYear} - ${today.getMonth} 
    - ${today.getDate + 1} - ${today.getHours} - ${today.getMinutes} 
    - ${today.getSeconds}`
    // console.log(req.method, req.url);
    const start = Date.now()

    res.on("finish", ()=>{
        const end = Date.now()
        console.log(`${timeStamp} :: ${req.method} ${req.originalUrl} 
            ${res.statusCode} ${ start - end} ms`)
    })

    const data = (`${timeStamp} :: ${req.method} ${req.originalUrl} 
            ${res.statusCode} ${ start - end} ms`)
    fs.appendFile(data)

    next();
}

export default logger