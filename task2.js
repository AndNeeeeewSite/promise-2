console.log('         2.')
function randomDelay(title){
    randomTime =  Math.random() * (5000 - 1000) + 1000;
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(title)
        },randomTime)})}
promises = [randomDelay(1),randomDelay(2),randomDelay(3),randomDelay(4),randomDelay(5)]
Promise.race(promises).then(data => console.log(data)).catch(error => console.log(error))
