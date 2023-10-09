
// 1
const getAllJobs = async(req,res)=>{
    res.send('get all jobs')
}


// 2
const getJob = async(req,res)=>{
    res.send("get job")
}


// 3
const createJob = async(req,res)=>{
    res.send('create job')
}

//  4
const updateJob = async(req,res)=>{
    res.send('update job')
}


//  5 
const deleteJob = async(req,res)=>{
    res.send('delete job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}