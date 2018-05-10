// Crie uma planilha vazia com uma aba com nome Moedas
// Clique no menu Ferramentas/Editor de Script
// Copie este texto e cole no script aberto. Renomeie para UpdateCoins

function updateCoins(){

  // Coloque o código da planilha na var sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Moedas");

  // Lê os dados da Poloniex
  var responsePoloniex = UrlFetchApp.fetch("https://poloniex.com/public?command=returnTicker");
  var parsedPoloniex = JSON.parse(responsePoloniex.getContentText());

  // Limpa as células no intervalo B1 até CV2
  sheet.getRange('B1:CV5').clearContent();
  
  // Seta a data para futura referência dos dados
  var dataAtual = new Date();
  sheet.getRange('B1').setValue(dataAtual)
  
  // Valores da última cotação de todas as moedas da Poloniex
  sheet.getRange('B2').setValue("Poloniex");
  var i = 3;
  Object.keys(parsedPoloniex).forEach(function(key){
    sheet.getRange(1, i).setValue(key);
    sheet.getRange(2, i).setValue(parseFloat(parsedPoloniex[key]['last'])).setNumberFormat('#,##0.00000000');
    i++;  
  });
  
  // BITFINEX
  sheet.getRange('B3').setValue("Bitfinex");
  // BTC
  var responseBitfinexUSDBTC = UrlFetchApp.fetch("https://api.bitfinex.com/v1/pubticker/BTCUSD");
  var parsedBitfinexUSDBTC = JSON.parse(responseBitfinexUSDBTC.getContentText());
  var rateBitfinexUSDBTC = parsedBitfinexUSDBTC.last_price;
  sheet.getRange('AQ3').setValue(rateBitfinexUSDBTC);
  // ETH
  var responseBitfinexUSDETH = UrlFetchApp.fetch("https://api.bitfinex.com/v1/pubticker/ETHUSD");
  var parsedBitfinexUSDETH = JSON.parse(responseBitfinexUSDETH.getContentText());
  var rateBitfinexUSDETH = parsedBitfinexUSDETH.last_price;
  sheet.getRange('BF3').setValue(rateBitfinexUSDETH);
  // XMR
  var responseBitfinexUSDXMR = UrlFetchApp.fetch("https://api.bitfinex.com/v1/pubticker/XMRUSD");
  var parsedBitfinexUSDXMR = JSON.parse(responseBitfinexUSDXMR.getContentText());
  var rateBitfinexUSDXMR = parsedBitfinexUSDXMR.last_price;
  sheet.getRange('AV3').setValue(rateBitfinexUSDXMR);
  
  // Cotações em BRL
  // MERCADOBITCOIN
  sheet.getRange('B4').setValue("Mercado Bitcoin");
  // BTC
  var responseMbBRLBTC = UrlFetchApp.fetch("https://www.mercadobitcoin.net/api/BTC/ticker/");
  var parsedMbBRLBTC = JSON.parse(responseMbBRLBTC.getContentText());
  var rateMbBRLBTC = parsedMbBRLBTC.ticker.last;
  sheet.getRange(4, 3).setValue(rateMbBRLBTC);
  // LTC
  var responseMbBRLLTC = UrlFetchApp.fetch("https://www.mercadobitcoin.net/api/LTC/ticker/");
  var parsedMbBRLLTC = JSON.parse(responseMbBRLLTC.getContentText());
  var rateMbBRLLTC = parsedMbBRLLTC.ticker.last;
  sheet.getRange(4, 20).setValue(rateMbBRLLTC);
  // BCH
  var responseMbBRLBCH = UrlFetchApp.fetch("https://www.mercadobitcoin.net/api/BCH/ticker/");
  var parsedMbBRLBCH = JSON.parse(responseMbBRLBCH.getContentText());
  var rateMbBRLBCH = parsedMbBRLBCH.ticker.last;
  sheet.getRange(4, 90).setValue(rateMbBRLBCH);
  
  // FOXBIT
  sheet.getRange(5, 2).setValue("Foxbit");
  var responseFoxbitBRLBTC = UrlFetchApp.fetch("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC");
  var parsedFoxbitBRLBTC = JSON.parse(responseFoxbitBRLBTC.getContentText());
  var rateFoxbitBRLBTC = parsedFoxbitBRLBTC.last;
  sheet.getRange(5, 3).setValue(rateFoxbitBRLBTC);

}
