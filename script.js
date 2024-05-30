function toggleMode() {
  const html = document.documentElement
  // modelo 1 de codigo
  html.classList.toggle('light')

  // modelo 2 
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')

 // mudanca de avatar de dark para light 
 
  const img = document.querySelector("#profile img")
 
  if(html.classList.contains("light")){
   img.setAttribute("src", "./style/avatar-light.png")
   img.setAttribute("alt", "Clara olhando para camera e sorrindo, de oculos escuros.")
  } else {
   img.setAttribute("src", "./style/avatar-dark.png")
   img.setAttribute("alt","Clara olhando para camera sorrindo com roupas de inverno")
  }

}

  

