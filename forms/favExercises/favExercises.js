var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()   
  for (i = 0; i < exercises.length; i++)
    selExercises.addItem(exercises[i])
  for (i = 0; i < coreExercises.length; i++)
    selExercises.addItem(coreExercises[i])
}

btnSubmit.onclick=function(choice){
  if (typeof(choice) == "object")
    return
  else if (choice.length == 2) {
    for (i = 0; i < 2; i++)
      choice.includes(coreExercises)
    lblMsg.value = (`You chose situps and planks - those are the two core exercises.`)
}  else {
    lblMsg.value = (`You did not pick the two core exercises.`)
  }
}


btnChangeMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}

if (coreExercises.includes(choice[0]))
# boolean for second one

