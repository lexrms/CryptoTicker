// Este script é baseado neste trabalho: https://pastebin.com/TXB7Ed7W

// Antes de executar este script é necessário executar o script constructor
// Também é necessário criar criar a 'API KEY' na exchange Poloniex e colocar a 'Key' na célula B3 e a 'Secret' na célula C3
// A API deve ser usada SOMENTE para esta aplicação.

// Este script deve rodar apenas uma vez ao dia, sempre no mesmo horário. Ele vai manter o histórico dos saldos da sua conta na exchange Poloniex
// Para isso vamos setar um trigger para rodar uma ver por dia a meia-noite. Deve ser feito manualmente.

function updateBalance() {

  // É necessário um número qualquer para ser usado somente uma vez e ele deve ser sempre maior.
  // Acrescentamos a data completa e isso faz este número ser sempre maior
  var nonce = 1466952818896405 + new Date().getTime();

  // A váriavel p contém o comando para acessar a api acrescida da variável nonce
  var p = 'command=returnCompleteBalances&account=all&nonce='+nonce;
  
  // Aqui eu pego os valores da planilha Config e coloco em duas variáveis
  var configSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Config');
  var poloniexKey = configSheet.getRange('B3').getValue();
  var poloniexSecret = configSheet.getRange('C3').getValue();
  
  // Criamos a assinatura para acessar a API
  var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_SHA_512, p,poloniexSecret);
  
  // Conversão do resultado de array de bytes (que é uma resposta padrão) para Hexa
  signature = signature.map(function(byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
  
  // Criamos a variável headers e dentro os objetos Key e Sign que contem a chave e a assinatura criada anteriormente
  var headers = {
    'Key' : poloniexKey,
    'Sign' : signature
  };
  
  // Definimos 'options' com o metodo POST, especificando 'headers' (cabeçalho) e 'payload' (carga útil)
  var options = {
    'method' : 'POST',
    'headers': headers,
    'payload': p
  };

  // Lemos a URL com os dados para obter a resposta do servidor Poloniex
  var response2 = UrlFetchApp.fetch('https://poloniex.com/tradingApi', options);

  // Aqui é definida a aba da planilha onde vamos popular os dados
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Historical');

  // Objeto JSON para objeto javascript parsedPoloniexBalances
  var parsedPoloniexBalances = JSON.parse(response2.getContentText());

  // Populando a planilha com o montante total de cada Altcoin
  var lin = 1, col = 1;
  var dataAtual = new Date();
  Object.keys(parsedPoloniexBalances).forEach(function(key){
    if(parseFloat(parsedPoloniexBalances[key]['onOrders']) >= 0 &&
       parseFloat(parsedPoloniexBalances[key]['avaliable']) >= 0 || 
       parseFloat(parsedPoloniexBalances[key]['btcValue']) > 0){ 
      sheet.getRange(2, 1).setValue(dataAtual);
      sheet.getRange(lin, col+1).setValue(key);
      sheet.getRange(lin+1, col+1).setValue(Number(parsedPoloniexBalances[key]['onOrders'])+Number((parsedPoloniexBalances[key]['available']))).setNumberFormat('#,##0.00000000');
         col++; 
       }//fim IF
  }); //fim FOREACH 
  
  // Vamos mandar a linha 2 inteira para a linha 3.
  sheet.insertRowsAfter(1, 1)

};
