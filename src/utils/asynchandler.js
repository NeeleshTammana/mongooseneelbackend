const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandler}



// const asyncHandler=(fn)=>async(req,resizeBy,next)={
// try{
//     await fn(req,res,next)
// }
// catch{

// }
//}