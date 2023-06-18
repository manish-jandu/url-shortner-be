const { ToadScheduler, SimpleIntervalJob, Task, AsyncTask } = require('toad-scheduler')
const UrlSchema = require("../models/urlModel");

const scheduler = new ToadScheduler()

const millisecondsInAnHour = (1000 * 60 * 60);
const signedUserTimeThreshold = 24 * 5
const userTimeThreshold = 24

let executingtask = false

const task = new AsyncTask(
    'simple task', 
    async() => { 
        if(executingtask){
            return
        }
        executingtask = true;
        const urls = await UrlSchema.find();
        console.log("got all urls")
        urls.forEach( async element => {
            await checkIfUrlExpired(element._id,false,element.createdAt);
        });
        executingtask = false;
    },
    (err)=>{
    console.log(err)
    }
)

//userLoggedIn -> userSignedup
async function checkIfUrlExpired(_id,userLoggedIn,createdAt){
    const createdAtDate = new Date(createdAt);
    const currentDate = new Date(); 
    
    //diference in milli seconds
    const timeDifference = currentDate - createdAtDate;
    // Convert the time difference to hours
    const hoursDifference = timeDifference / millisecondsInAnHour;
    
    if(userLoggedIn && hoursDifference > signedUserTimeThreshold){
        //delete the user, as signedup but added Data hour value greater then threshold
        await UrlSchema.deleteOne({ _id:_id });//Todo: check: should we be using urlRoutes instead of deleting here, coz of single responsibility ?
    } else if(!userLoggedIn && hoursDifference > userTimeThreshold){
        //delete the user, as not signed up and hoursDifference > userTimeThreshold
        console.log("deleting this with id:",_id);
        await UrlSchema.deleteOne({ _id:_id });
    } else{
        console.log("do nothing for id: ",_id);
      //do nothing
    }
}

function startSheduler(){
    const job = new SimpleIntervalJob({ seconds:20,}, task)

    scheduler.addSimpleIntervalJob(job)
}


module.exports = {startSheduler}