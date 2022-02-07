// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks

getInstruction('mashedPotatoes', 0, (step0) => {
  
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
          mashedPotatoes.push("Mashed potatoes are ready!")
          getInstruction('mashedPotatoes', 5, (step5) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
            

        }, (err) => console.log(err));
      }, (err) => console.log(err));
    }, (err) => console.log(err));
  }, (err) => console.log(err));
}, (err) => console.log(err));
});


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => { 
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
      obtainInstruction('steak', 1)
      .then( (step1) => { 
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
          obtainInstruction('steak', 2)
          .then( (step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
              obtainInstruction('steak', 3)
              .then( (step3) => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction('steak', 4)
                .then( (step4) => {
                  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                  obtainInstruction('steak', 5)
                  .then( (step5) => {
                    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                    obtainInstruction('steak', 6)
                    .then( (step6) => {
                      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                      obtainInstruction('steak', 7)
                      .then( (step7) => {
                        steak.pop();
                        steak.push("Stake is ready!")
                  
                        obtainInstruction('steak', 7)
                        .then( (step7) => {
                          document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                          document.querySelector("#steakImg").removeAttribute("hidden");
                          
                        }).catch((error) => console.log(error));
                      }).catch((error) => console.log(error));
                    }).catch((error) => console.log(error));    
                  }).catch((error) => console.log(error));
                }).catch((error) => console.log(error));
              }).catch((error) => console.log(error));
            }).catch((error) => console.log(error));
          }).catch((error) => console.log(error));
  })


// Iteration 3 using async/await
async function makeBroccoli() {
  try{
  const step1 = await obtainInstruction('broccoli', 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  const step2 = await obtainInstruction('broccoli', 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  const step3 = await obtainInstruction('broccoli', 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  const step4 = await obtainInstruction('broccoli', 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  const step5 = await obtainInstruction('broccoli', 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  const step6 = await obtainInstruction('broccoli', 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  const step7 =await obtainInstruction('broccoli', 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;
  document.querySelector("#broccoli").innerHTML += `<li>${`Broccoli is ready!`}</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
    
  }catch(err) {
    console.log(err)
  } 
}
makeBroccoli()


// Bonus 2 - Promise all

const elem1 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[0]}</li>`), 
  ),1000})
const elem2 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[1]}</li>`),
  ),1000})

const elem3 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[2]}</li>`),
  ),1000})

const elem4 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[3]}</li>`),
  ),1000})

const elem5 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[4]}</li>`),
  ),5000})
    
const elem6 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[5]}</li>`),
  ),6000})
  
const elem7 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[6]}</li>`),
  ),7000})

const elem8 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${brusselsSprouts[7]}</li>`),
  ),8000})

const elem9 = new Promise ((resolve, reject) => {
  setTimeout(() => resolve(document.querySelector("#brusselsSprouts").innerHTML += `<li>${`Brussels sprouts are ready!`}</li>`),
  ),9000}) 
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");


  Promise.all( [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9] )
  .then((values) => console.log("values", values))
  .catch((err)=> console.log("catch()", err));