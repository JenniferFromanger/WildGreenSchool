  const articles = document.querySelectorAll(".storeitem");
  const plantBtn = document.getElementById("plantBtn");
  const breedBtn = document.getElementById("breedBtn");
  const garbageBtn = document.getElementById("garbageBtn");
  const allBtn = document.getElementById("allBtn");


  const display = category => {
    for (let i = 0; i < articles.length; i++) {
      const art = articles[i];
      if (art.classList.contains(category)) {
        art.style.display = "block";
      } else {
        art.style.display = "none";
      }
    }
  };


  
plantBtn.addEventListener("click", () => {
    display("plantes");
  });
breedBtn.addEventListener("click", () => {
    display("elevage");
  });
garbageBtn.addEventListener("click", () => {
    display("dechet");
  });
allBtn.addEventListener("click", () => {
    display("storeitem");
  });



/* CI-DESSOUS, ANCIEN CODE, NN REVU AVEC LOIC */


/* const itemsArray = []
let items = document.getElementsByClassName('storeitem')



for(let i = 0; i < items.length; i++) {
    itemsArray.push(items[i]);
}

console.log(itemsArray)



const plantesArray = []
items = document.getElementsByClassName('plantes')

for(let i = 0; i < items.length; i++) {
    plantesArray.push(items[i]);
}


console.log(plantesArray)




const elevageArray = []
items = document.getElementsByClassName('elevage')

for(let i = 0; i < items.length; i++) {
    elevageArray.push(items[i]);
}


console.log(elevageArray)



const dechetArray = []
items = document.getElementsByClassName('dechet')

for(let i = 0; i < items.length; i++) {
    dechetArray.push(items[i]);
}


console.log(dechetArray)







function elevageshow() {
    for (let i = 0; i< dechetArray.length; i++) {
        dechetArray[i].style.display = "none";
    }
    for (let i = 0; i< plantesArray.length; i++) {
        plantesArray[i].style.display = "none";
    }
    for (let i = 0; i< elevageArray.length; i++) {
        if (elevageArray[i].style.display = "none") {
            elevageArray[i].style.display = "block"
        }
    }

  }

  function planteshow() {
    for (let i = 0; i< dechetArray.length; i++) {
        dechetArray[i].style.display = "none";
    }
    for (let i = 0; i< elevageArray.length; i++) {
        elevageArray[i].style.display = "none";
    }
    for (let i = 0; i< plantesArray.length; i++) {
        if (plantesArray[i].style.display = "none") {
            plantesArray[i].style.display = "block"
        }
    }

  }

  function dechetshow() {
    for (let i = 0; i< elevageArray.length; i++) {
        elevageArray[i].style.display = "none";
    }
    for (let i = 0; i< plantesArray.length; i++) {
        plantesArray[i].style.display = "none";
    }
    for (let i = 0; i< dechetArray.length; i++) {
        if (dechetArray[i].style.display = "none") {
            dechetArray[i].style.display = "block"
        }
    }

  }

  function allshow() {
    for (let i = 0; i< dechetArray.length; i++) {
        if (dechetArray[i].style.display = "none") {
            dechetArray[i].style.display = "block"
        }
    }
    for (let i = 0; i< plantesArray.length; i++) {
        if (plantesArray[i].style.display = "none") {
            plantesArray[i].style.display = "block"
        }
    }
    for (let i = 0; i< elevageArray.length; i++) {
        if (elevageArray[i].style.display = "none") {
            elevageArray[i].style.display = "block"
        }
    }

  }

*/




