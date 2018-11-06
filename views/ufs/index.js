extends ../layout

block content
  h1= title
  p Welcome to #{title}
  
  ul
  	for estado in estados
  	li=estado.Nome
  	else
  	li Nenhum registro encontrado
