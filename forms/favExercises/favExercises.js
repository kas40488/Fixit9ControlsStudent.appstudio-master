var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()   
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
}

btnSubmit.onclick=function(){
  if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
      lblMsg2.value = `You chose ${selExercises.text[0]} and ${selExercises.text[1]} - those are the two core exercises.`
}  else {
      lblMsg2.value = "You did not pick the two core exercises."
    }
}

btnChangeMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}


/*
  for (i = 0; i < coreExercises.length; i++)
    selExercises.addItem(coreExercises[i])
    
    
      
  else if (choice.length == 2) {
    for (i = 0; i < 2; i++)
      choice.includes(coreExercises)

}  else {

  }
}

  if (typeof(choice) == "object")
    return
if (coreExercises.includes(choice[0]))
# boolean for second one
    */