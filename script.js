function selectApartments() {
    var buildingForm = document.getElementById("form").buildingForm.value;
    var buildingTo = document.getElementById("form").buildingTo.value;
   var powOd = Number(document.getElementById("form").powOd.value);
   var powDo = Number(document.getElementById("form").powDo.value);
   var floorsOd = Number(document.getElementById("form").floorsOd.value);
   var floorsDo = Number(document.getElementById("form").floorsDo.value);
   var sortMostSurfaceCheckbox = document.getElementById("sort-most-surface-checkbox");
   var sortLeastSurfaceCheckbox = document.getElementById("sort-least-surface-checkbox");
   var sortfreeCheckbox = document.getElementById("sort-free-checkbox");
   var sortsoccupiedeCheckbox = document.getElementById("sort-soccupied-checkbox");
   var result = document.getElementById("result");
   result.innerHTML = "";
   var found = false;
   var sortBySurfaceAsc = function(a, b) {
   return a.surface - b.surface;
   };
   var sortBySurfaceDesc = function(a, b) {
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
      var apartmentElement = document.createElement("div");
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
    var noResultsElement = document.createElement("div");
    noResultsElement.innerHTML = "Nie znaleziono żadnych apartamentów spełniających podane kryteria.";
    result.appendChild(noResultsElement);
  }
  };
  function updateFloors() {
  var floors = Number(document.getElementById("form").floors.value);
  document.getElementById("form").floorsDo.min = floors;
  
  if (Number(document.getElementById("form").floorsDo.value) < floors) {
    document.getElementById("form").floorsDo.value = floors;
  }
  };
  function updatePow() {
  var pow = Number(document.getElementById("form").pow.value);
  document.getElementById("form").powDo.min = pow;
  if (Number(document.getElementById("form").powDo.value) < pow) {
    document.getElementById("form").powDo.value = pow;
  }
  };
  function updatePow() {
  var pow = Number(document.getElementById("form").pow.value);
  document.getElementById("form").powDo.min = pow;
  if (Number(document.getElementById("form").powDo.value) < pow) {
    document.getElementById("form").powDo.value = pow;
  }  
  };
   function numberOfVacantApartments(array, status, building) {
    var numbersApartments = array.filter(function(apartment) {
      return apartment.status === status && apartment.building === building;
    });
    return numbersApartments.length;
  };
   var bAapartmentsFree = numberOfVacantApartments(apartments, "Wolny", "B");
   var bApartmentsBooked = numberOfVacantApartments(apartments, "Zajety", "B");
   var cAapartmentsFree = numberOfVacantApartments(apartments, "Wolny", "C");
   var cApartmentsBooked = numberOfVacantApartments(apartments, "Zajety", "C");
   var bapartmentsFree = document.getElementById('bapartmentsFree');
   var bapartmentsBooked = document.getElementById('bapartmentsBooked');
   var capartmentsFree = document.getElementById('capartmentsFree');
   var capartmentsBooked = document.getElementById('capartmentsBooked');
   bapartmentsBooked.innerHTML =  bApartmentsBooked;
   bapartmentsFree.innerHTML =  bAapartmentsFree;
   capartmentsFree.innerHTML =  cAapartmentsFree;
   capartmentsBooked.innerHTML =  cApartmentsBooked;
   var freeBContainer = document.getElementById('free-bContainer');
   var bookedBContainer = document.getElementById('booked-bContainer');
   var freeCContainer = document.getElementById('free-cContainer');
   var bookedCContainer = document.getElementById('booked-cContainer');
   var freeBContainerResult = document.getElementById('free-bContainer-result');
   var bookedBContainerResult = document.getElementById('booked-bContainer-result');
   var freeCContainerResult = document.getElementById('free-cContainer-result');
   var bookedCContainerResult = document.getElementById('booked-cContainer-result');
   var availableApartmentsb = apartments.filter(function(apartment) {
    return apartment.status === "Wolny" && apartment.building === "B";
  });
  var occupiedApartmentsb = apartments.filter(function(apartment) {
    return apartment.status === "Zajety" && apartment.building === "B";
  });
  var resultFromTheListOfavailableApartmentsb = "";
  for (var i = 0; i < availableApartmentsb.length; i++) {
    var apartment = availableApartmentsb[i];
    resultFromTheListOfavailableApartmentsb += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
  var resultFromTheListOfoccupiedApartmentsb = "";
  for (var i = 0; i < occupiedApartmentsb.length; i++) {
    var apartment = occupiedApartmentsb[i];
    resultFromTheListOfoccupiedApartmentsb += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors + " | Imie i Nazwisko: " + apartment.firstNameAndLastName +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
  var availableApartmentsc = apartments.filter(function(apartment) {
    return apartment.status === "Wolny" && apartment.building === "C";
    
  });
  var occupiedApartmentsc = apartments.filter(function(apartment) {
    return apartment.status === "Zajety" && apartment.building === "C";
  });
  var resultFromTheListOfavailableApartmentsc = "";
  for (var i = 0; i < availableApartmentsc.length; i++) {
    var apartment = availableApartmentsc[i];
    resultFromTheListOfavailableApartmentsc += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
  var resultFromTheListOfoccupiedApartmentsc = "";
  for (var i = 0; i < occupiedApartmentsc.length; i++) {
    var apartment = occupiedApartmentsc[i];
    resultFromTheListOfoccupiedApartmentsc += "Numer mieszkania: " + apartment.numebrBuilding + " |  Piętro: " + apartment.floors + " | Imie i Nazwisko: " + apartment.firstNameAndLastName  +" | Powieszchnia " +  apartment.surface +"m<sup>2</sup>"  + "; " + "<br>" + "<br>";
  };
   var isClicked = false;
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
      var inputElementBuilbingInput = document.getElementById('buildingInput');
      var inputElementBuildingForm = document.getElementById('buildingForm');
      var inputElement = document.getElementById('buildingTo');
      inputElementBuilbingInput.value = inputElementBuilbingInput.value.toUpperCase();
      inputElementBuildingForm.value = inputElementBuildingForm.value.toUpperCase();
      inputElement.value = inputElement.value.toUpperCase();
    }