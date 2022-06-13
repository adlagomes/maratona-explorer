let response = document.getElementById("response")
let question = document.querySelector("#query")

function generateResponse() {
  const phrases = ["ACOOORDA PEDRO, rsrsrs", "Os sinais dizem que SIM!", "Uma voz me disse que NÃO!", "Os sinais dizem que NÃO!", "Uma voz me disse que SIM!", "O destino não está claro..", "Com certeza!"]
  const r_Total = phrases.length
  let randomPhrases = Math.floor(r_Total*Math.random())

  if (question.value != "") {
    response.innerHTML = phrases[randomPhrases]
    question.value = ""
  } else {
    response.innerHTML = "Escreva sua pergunta!"
  }
}

function clean() {
  response.innerHTML = ""
}
