var button = document.getElementById("button_select");

// function evaluate(question, answer){}

// function assign(){}

button.addEventListener("click", () => {
  var offenheit = 0;
  var gewissenhaftigkeit = 0;
  var extraversion = 0;
  var verträglichkeit = 0;
  var neurotizismus = 0;
  var direkteinstiega = 0;
  var ausbildunga = 0;
  var studiuma = 0;
  var selbstfindungsphasea = 0;
  var businessa = 0;

  for(i = 1; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("personality_" + i + "_" + j);
      var personality_i_j = document.getElementById(element);
      if(personality_i_j.checked == true){
        var offenheit = offenheit + j;
      }
    }
  }

  for(i = 2; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("personality_" + i + "_" + j);
      var personality_i_j = document.getElementById(element);
      if(personality_i_j.checked == true){
        var gewissenhaftigkeit = gewissenhaftigkeit + j;
      }
    }
  }

  for(i = 3; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("personality_" + i + "_" + j);
      var personality_i_j = document.getElementById(element);
      if(personality_i_j.checked == true){
        var extraversion = extraversion + j;
      }
    }
  }

  for(i = 4; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("personality_" + i + "_" + j);
      var personality_i_j = document.getElementById(element);
      if(personality_i_j.checked == true){
        var verträglichkeit = verträglichkeit + j;
      }
    }
  }

  for(i = 5; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("personality_" + i + "_" + j);
      var personality_i_j = document.getElementById(element);
      if(personality_i_j.checked == true){
        var neurotizismus = neurotizismus + j;
      }
    }
  }

  console.log("Offenheit: " + offenheit);
  console.log("Gewissenhaftigkeit: " + gewissenhaftigkeit);
  console.log("Extraversion: " + extraversion);
  console.log("Verträglichkeit: " + verträglichkeit);
  console.log("Neurotizismus: " + neurotizismus);

  for(i = 1; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("jobtype_" + i + "_" + j);
      var jobtype_i_j = document.getElementById(element);
      if(jobtype_i_j.checked == true){
        var direkteinstiega = direkteinstiega + j;
      }
    }
  }

  for(i = 2; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("jobtype_" + i + "_" + j);
      var jobtype_i_j = document.getElementById(element);
      if(jobtype_i_j.checked == true){
        var ausbildunga = ausbildunga + j;
      }
    }
  }

  for(i = 3; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("jobtype_" + i + "_" + j);
      var jobtype_i_j = document.getElementById(element);
      if(jobtype_i_j.checked == true){
        var studiuma = studiuma + j;
      }
    }
  }

  for(i = 4; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("jobtype_" + i + "_" + j);
      var jobtype_i_j = document.getElementById(element);
      if(jobtype_i_j.checked == true){
        var selbstfindungsphasea = selbstfindungsphasea + j;
      }
    }
  }

  for(i = 5; i <= 30; i = i + 5){
    for(j = 1; j <= 7; j ++){
      var element = ("jobtype_" + i + "_" + j);
      var jobtype_i_j = document.getElementById(element);
      if(jobtype_i_j.checked == true){
        var businessa = businessa + j;
      }
    }
  }

  console.log("Direkteinstieg: " + direkteinstiega);
  console.log("ausbildung: " + ausbildunga);
  console.log("studium: " + studiuma);
  console.log("selbstfindungsphase: " + selbstfindungsphasea);
  console.log("business: " + businessa);


  localStorage.setItem("offenheit-übergabe", offenheit);
  localStorage.setItem("gewissenhaftigkeit-übergabe", gewissenhaftigkeit);
  localStorage.setItem("extraversion-übergabe", extraversion);
  localStorage.setItem("verträglichkeit-übergabe", verträglichkeit);
  localStorage.setItem("neurotizismus-übergabe", neurotizismus);


  localStorage.setItem("direkteinstieg-übergabe", direkteinstiega);
  localStorage.setItem("ausbildung-übergabe", ausbildunga);
  localStorage.setItem("studium-übergabe", studiuma);
  localStorage.setItem("selbstfindungsphase-übergabe", selbstfindungsphasea);
  localStorage.setItem("business-übergabe", businessa);

window.location.assign("js/ergebnis/schülerin_hauptschulabschluss_ergebnis.html");

});