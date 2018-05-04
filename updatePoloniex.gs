function updatePoloniex(){
   
  // Crie uma planilha vazia com uma aba com nome Moedas
  // Clique no menu Ferramentas/Editor de Script
  // Copie este texto e cole no script aberto. Renomeie para updatePoloniex
  // Na URL da sua planilha copie o código $-Codigo_Da_Planilha_Sopa_De_Letras-$ e cole na variável sheet (linha 10 deste Script)
  // https://docs.google.com/spreadsheets/d/$-Codigo_Da_Planilha_Sopa_De_Letras-$  // https://docs.google.com/spreadsheets/d/

  // Coloque o código da planilha na var sheet
  var sheet = SpreadsheetApp.openById('$-Codigo_Da_Planilha_Sopa_De_Letras-$').getSheetByName("Moedas");
  
  
  // Lê os dados da Poloniex
  var response = UrlFetchApp.fetch("https://poloniex.com/public?command=returnTicker");
  var json = JSON.parse(response.getContentText());
 
  var i = 1;
  Object.keys(json).forEach(function(key){
    sheet.getRange(1, i).setValue(key);
    sheet.getRange(2, i).setValue(json[key]['last']);
    i++;  
  });
}
