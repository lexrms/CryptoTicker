function updateCoins(){
   
  // Crie uma planilha vazia com uma aba com nome Moedas
  // Clique no menu Ferramentas/Editor de Script
  // Copie este texto e cole no script aberto. Renomeie para updateCoins
  // Na URL da sua planilha copie o código $-Codigo_Da_Planilha_Sopa_De_Letras-$ e cole na variável sheet (linha 10 deste Script)
  // https://docs.google.com/spreadsheets/d/$-Codigo_Da_Planilha_Sopa_De_Letras-$  // https://docs.google.com/spreadsheets/d/

  // Coloque o código da planilha na var sheet
  var sheet = SpreadsheetApp.openById('$-Codigo_Da_Planilha_Sopa_De_Letras-$').getSheetByName("Moedas");

  // Lê os dados da Poloniex
  var responsePoloniex = UrlFetchApp.fetch("https://poloniex.com/public?command=returnTicker");
  var parsedPoloniex = JSON.parse(responsePoloniex.getContentText());

  // Limpa as células no intervalo B1 até CV2
  sheet.getRange('B1:CV5').clearContent();

  // Seta a data para futura referência dos dados
  var dataAtual = new Date();
  sheet.getRange(1, 2).setValue(dataAtual)

  // Valores da última cotação de todas as moedas da Poloniex
  sheet.getRange(2, 2).setValue("Poloniex");
  var i = 3;
  Object.keys(parsedPoloniex).forEach(function(key){
    sheet.getRange(1, i).setValue(key);
    sheet.getRange(2, i).setValue(parsedPoloniex[key]['last']);
    i++;  
  });

  // BITFINEX
  sheet.getRange(3, 2).setValue("Bitfinex");
  // BTC
  var responseBitfinexBTC = UrlFetchApp.fetch("https://api.bitfinex.com/v1/pubticker/BTCUSD");
  var parsedBitfinexBTC = JSON.parse(responseBitfinexBTC.getContentText());
  var rateBitfinexBTC = parsedBitfinexBTC.last_price;
  sheet.getRange(3, 3).setValue(rateBitfinexBTC);
  // ETH
  var responseBitfinexETH = UrlFetchApp.fetch("https://api.bitfinex.com/v1/pubticker/ETHUSD");
  var parsedBitfinexETH = JSON.parse(responseBitfinexETH.getContentText());
  var rateBitfinexETH = parsedBitfinexETH.last_price;
  sheet.getRange(3, 57).setValue(rateBitfinexETH);
  // XMR
  var responseBitfinexXMR = UrlFetchApp.fetch("https://api.bitfinex.com/v1/pubticker/XMRUSD");
  var parsedBitfinexXMR = JSON.parse(responseBitfinexXMR.getContentText());
  var rateBitfinexXMR = parsedBitfinexXMR.last_price;
  sheet.getRange(3, 40).setValue(rateBitfinexXMR);

  // Cotações em BRL
  // MERCADOBITCOIN
  sheet.getRange(4, 2).setValue("Mercado Bitcoin");
  // BTC
  var responseMbBTC = UrlFetchApp.fetch("https://www.mercadobitcoin.net/api/BTC/ticker/");
  var parsedMbBTC = JSON.parse(responseMbBTC.getContentText());
  var rateMbBTC = parsedMbBTC.ticker.last;
  sheet.getRange(4, 3).setValue(rateMbBTC);
  // LTC
  var responseMbLTC = UrlFetchApp.fetch("https://www.mercadobitcoin.net/api/LTC/ticker/");
  var parsedMbLTC = JSON.parse(responseMbLTC.getContentText());
  var rateMbLTC = parsedMbLTC.ticker.last;
  sheet.getRange(4, 20).setValue(rateMbLTC);
  // BCH
  var responseMbBCH = UrlFetchApp.fetch("https://www.mercadobitcoin.net/api/BCH/ticker/");
  var parsedMbBCH = JSON.parse(responseMbBCH.getContentText());
  var rateMbBCH = parsedMbBCH.ticker.last;
  sheet.getRange(4, 90).setValue(rateMbBCH);

  // FOXBIT
  sheet.getRange(5, 2).setValue("Foxbit");
  var responseFoxbitBTC = UrlFetchApp.fetch("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC");
  var parsedFoxbitBTC = JSON.parse(responseFoxbitBTC.getContentText());
  var rateFoxbitBTC = parsedFoxbitBTC.last;
  sheet.getRange(5, 3).setValue(rateFoxbitBTC);

}
