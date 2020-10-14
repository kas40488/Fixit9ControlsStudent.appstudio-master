var dessertList = ['Chocolate Cake','Cream Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
    drpDesserts.clear()   
  for (i = 0; i < dessertList.length; i++)
    drpDesserts.addItem(dessertList[i])
}


drpDesserts.onclick=function(choice){
   // this 'if' kicks user out if they  just clicked on control 
 // but not on one item in the list.
    if (typeof(choice) == "object")   
      return                    
    else {  // the user picked something
      drpDesserts.value = choice
      lblPrompt.value = (`The user chose ${choice} and .selection is ${drpDesserts.selection}.`)
    }
}

btnNextPage.onclick=function(){
  ChangeForm(describeYou)
}
