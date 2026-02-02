const notFoundHandler = (req, res, next) =>{
    let err = new Error (`Cannot ${req.method} on ${req.originalUrl}`)
    res.status(404);
    next(err);
}

const errorHandler = (error, req, res, next)=>{

}