const fetchData = (callback) => {
  setTimeout(() => {
    callback('Banana cakes are floppy')
  }, 100)
}


function fetchDataPromise () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Banana cakes are floppy')
  }, 100)});
}

function fetchDataPromiseWithErrorMessage () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('No Banana cakes')
  }, 100)});
}


function fetchDataPromiseWithError () {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('No Banana cakes'))
  }, 100)});
}


module.exports = { fetchData, fetchDataPromise, fetchDataPromiseWithError, fetchDataPromiseWithErrorMessage }