function selectApartments() {
    let buildingForm = document.getElementById("form").buildingForm.value;
    let buildingTo = document.getElementById("form").buildingTo.value;
   let powOd = Number(document.getElementById("form").powOd.value);
   let powDo = Number(document.getElementById("form").powDo.value);
   let floorsOd = Number(document.getElementById("form").floorsOd.value);
   let floorsDo = Number(document.getElementById("form").floorsDo.value);
   let sortMostSurfaceCheckbox = document.getElementById("sort-most-surface-checkbox");
   let sortLeastSurfaceCheckbox = document.getElementById("sort-least-surface-checkbox");
   let sortfreeCheckbox = document.getElementById("sort-free-checkbox");
   let sortsoccupiedeCheckbox = document.getElementById("sort-soccupied-checkbox");
   let result = document.getElementById("result");
   result.innerHTML = "";
   let found = false;
   let sortBySurfaceAsc = function(a, b) {
   return a.surface - b.surface;
   };
   let sortBySurfaceDesc = function(a, b) {
   return b.surface - a.surface;
   };
   if (sortMostSurfaceCheckbox.checked) {
    apartments.sort(sortBySurfaceDesc);
   } else if (sortMostSurfaceCheckbox.checked) {
    apartments.sort(sortBySurfaceDesc);
   } else if (sortLeastSurfaceCheckbox.checked) {
    apartments.sort(sortBySurfaceAsc);
   } else if (sortLeastSurfaceCheckbox.checked) {
   apartments.sort(sortBySurfaceAsc);
   }
   apartments.forEach(function(apartment) {  
   if ((buildingForm === "" || apartment.building >= buildingForm) &&
   (buildingTo === "" || apartment.building <= buildingTo) &&
        (powOd === "" || apartment.surface >= powOd) &&
        (powDo === "" || apartment.surface <= powDo) &&
        (floorsDo === "" || apartment.floors <= floorsDo) &&
        (floorsOd === "" || apartment.floors >= floorsOd)&&
        (!sortfreeCheckbox.checked || apartment.status === "Wolny") &&
        (!sortsoccupiedeCheckbox.checked || apartment.status === "Zajety")) {
      let apartmentElement = document.createElement("div");
      apartmentElement.innerHTML = "  Budynek: " + 
      apartment.building + " | Numer mieszkania: " +
      apartment.numebrBuilding + " | Imie i Nazwisko: " + 
      apartment.firstNameAndLastName + " | " + "Powierzchnia: "+ 
      apartment.surface + " m<sup>2</sup> | " + " Piętro: " + apartment.floors +  "  | Status Mieszkania: " + apartment.status;
      found = true;
      result.appendChild(apartmentElement);
        }
  });
  if (!found) {
    let noResultsElement = document.createElement("div");
    noResultsElement.innerHTML = "Nie znaleziono żadnych apartamentów spełniających podane kryteria.";
    result.appendChild(noResultsElement);
  }
  };
  function updateFloors() {
  let floors = Number(document.getElementById("form").floors.value);
  document.getElementById("form").floorsDo.min = floors;
  
  if (Number(document.getElementById("form").floorsDo.value) < floors) {
    document.getElementById("form").floorsDo.value = floors;
  }
  };
  function updatePow() {
  let pow = Number(document.getElementById("form").pow.value);
  document.getElementById("form").powDo.min = pow;
  if (Number(document.getElementById("form").powDo.value) < pow) {
    document.getElementById("form").powDo.value = pow;
  }
  };
  function updatePow() {
  let pow = Number(document.getElementById("form").pow.value);
  document.getElementById("form").powDo.min = pow;
  if (Number(document.getElementById("form").powDo.value) < pow) {
    document.getElementById("form").powDo.value = pow;
  }  
  };
   function numberOfVacantApartments(array, status, building) {
    let numbersApartments = array.filter(function(apartment) {
      return apartment.status === status && apartment.building === building;
    });
    return numbersApartments.length;
  };
   let bAapartmentsFree = numberOfVacantApartments(apartments, "Wolny", "B");
   let bApartmentsBooked = numberOfVacantApartments(apartments, "Zajety", "B");
   let cAapartmentsFree = numberOfVacantApartments(apartments, "Wolny", "C");
   let cApartmentsBooked = numberOfVacantApartments(apartments, "Zajety", "C");
   let bapartmentsFree = document.getElementById('bapartmentsFree');
   let bapartmentsBooked = document.getElementById('bapartmentsBooked');
   let capartmentsFree = document.getElementById('capartmentsFree');
   let capartmentsBooked = document.getElementById('capartmentsBooked');
   bapartmentsBooked.innerHTML =  bApartmentsBooked;
   bapartmentsFree.innerHTML =  bAapartmentsFree;
   capartmentsFree.innerHTML =  cAapartmentsFree;
   capartmentsBooked.innerHTML =  cApartmentsBooked;
   let freeBContainer = document.getElementById('free-bContainer');
   let bookedBContainer = document.getElementById('booked-bContainer');
   let freeCContainer = document.getElementById('free-cContainer');
   let bookedCContainer = document.getElementById('booked-cContainer');
   let freeBContainerResult = document.getElementById('free-bContainer-result');
   let bookedBContainerResult = document.getElementById('booked-bContainer-result');
   let freeCContainerResult = document.getElementById('free-cContainer-result');
   let bookedCContainerResult = document.getElementById('booked-cContainer-result');
   let availableApartmentsb = apartments.filter(function(apartment) {
    return apartment.status === "Wolny" && apartment.building === "B";
  });
  let occupiedApartmentsb = apartments.filter(function(apartment) {
    return apartment.status === "Zajety" && apartment.building === "B";
  });
  let resultFromTheListOfavailableApartmentsb = "";
  for (let i = 0; i < availableApartmentsb.length; i++) {
    let apartment = availableApartmentsb[i];
    resultFromTheListOfavailableApartmentsb += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
  let resultFromTheListOfoccupiedApartmentsb = "";
  for (let i = 0; i < occupiedApartmentsb.length; i++) {
    let apartment = occupiedApartmentsb[i];
    resultFromTheListOfoccupiedApartmentsb += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors + " | Imie i Nazwisko: " + apartment.firstNameAndLastName +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
  let availableApartmentsc = apartments.filter(function(apartment) {
    return apartment.status === "Wolny" && apartment.building === "C";
    
  });
  let occupiedApartmentsc = apartments.filter(function(apartment) {
    return apartment.status === "Zajety" && apartment.building === "C";
  });
  let resultFromTheListOfavailableApartmentsc = "";
  for (let i = 0; i < availableApartmentsc.length; i++) {
    let apartment = availableApartmentsc[i];
    resultFromTheListOfavailableApartmentsc += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
  let resultFromTheListOfoccupiedApartmentsc = "";
  for (let i = 0; i < occupiedApartmentsc.length; i++) {
    let apartment = occupiedApartmentsc[i];
    resultFromTheListOfoccupiedApartmentsc += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors + " | Imie i Nazwisko: " + apartment.firstNameAndLastName  +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
   let isClicked = false;
   freeBContainer.addEventListener('click', (event) => {
     event.preventDefault();
     if (!isClicked) {
       freeBContainerResult.innerHTML = resultFromTheListOfavailableApartmentsb;
       isClicked = true;
     } else {
       freeBContainerResult.innerHTML = null;
       isClicked = false;
     }
   });
  bookedBContainer.addEventListener('click', ( event) => {
    event.preventDefault();
    if (!isClicked){
    bookedBContainerResult.innerHTML = resultFromTheListOfoccupiedApartmentsb;
    isClicked = true;
  } else
  {
    bookedBContainerResult.innerHTML = null;
    isClicked = false;
  }
  });
  freeCContainer.addEventListener('click', ( event) => {
    event.preventDefault();
    if (!isClicked)
    {
      freeCContainerResult.innerHTML = resultFromTheListOfavailableApartmentsc;
      isClicked = true;
    }
    else
    {
      freeCContainerResult.innerHTML = null;
      isClicked = false;
    }
  });
  bookedCContainer.addEventListener('click', ( event) => {
    event.preventDefault();
    if (!isClicked){
    bookedCContainerResult.innerHTML = resultFromTheListOfoccupiedApartmentsc;
    isClicked = true;
    }
    else
    {
      bookedCContainerResult.innerHTML = null;
      isClicked = false;
    }
  });
    function transformToUppercase() {
      let inputElementBuilbingInput = document.getElementById('buildingInput');
      let inputElementBuildingForm = document.getElementById('buildingForm');
      let inputElement = document.getElementById('buildingTo');
      inputElementBuilbingInput.value = inputElementBuilbingInput.value.toUpperCase();
      inputElementBuildingForm.value = inputElementBuildingForm.value.toUpperCase();
      inputElement.value = inputElement.value.toUpperCase();
    }
