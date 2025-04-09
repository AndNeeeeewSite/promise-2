console.log('         1.')
function delayedPromise(ms){
    randomTime =  Math.floor(Math.random() * 2000);
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve('Time skip')
        },ms)})}
promises = [delayedPromise(1000),delayedPromise(1500),delayedPromise(2000),delayedPromise(1200),delayedPromise(1)]
Promise.all(promises).then(data => console.log(data)).catch(error => console.log(error))
