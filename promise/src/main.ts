import "isomorphic-fetch";

fetch('httpp://google.com')
.then((response) => {
    console.log(response.status);
})
.catch((reason) =>{
    console.log("ERROR", reason);
})
.finally(()=>{
    console.log("END");
});