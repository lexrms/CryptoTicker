// Antes de executar este Script execute o Script Constructor para criar as planilhas e preencher as configurações necessárias
// na planilha config

function updateMarkets(){

  // Coloque o código da planilha na var sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Markets');

  // Lê os dados da Poloniex
  var responsePoloniex = UrlFetchApp.fetch('https://poloniex.com/public?command=returnTicker');
  var parsedPoloniex = JSON.parse(responsePoloniex.getContentText());

  // Limpa as células no intervalo B1 até CV4
  sheet.getRange('C1:CV4').clearContent();
  
  // Seta a data para futura referência dos dados
  var dataAtual = new Date();
  sheet.getRange('B1').setValue(dataAtual)
  
  // Valores da última cotação de todas as moedas da Poloniex
  var i = 3;
  Object.keys(parsedPoloniex).forEach(function(key){
    sheet.getRange(1, i).setValue(key);
    //sheet.getRange(2, i).setValue(parsedPoloniex[key]['last']);
    sheet.getRange(2, i).setValue(parseFloat(parsedPoloniex[key]['last'])).setNumberFormat('#,##0.00000000');
    i++;  
  });
  
  // BITFINEX
  // BTC
  var responseBitfinexUSDBTC = UrlFetchApp.fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD');
  var parsedBitfinexUSDBTC = JSON.parse(responseBitfinexUSDBTC.getContentText());
  var rateBitfinexUSDBTC = parsedBitfinexUSDBTC[0][7];
    sheet.getRange('AB3').setValue(rateBitfinexUSDBTC);
  // ETH
  var responseBitfinexUSDETH = UrlFetchApp.fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=tETHUSD');
  var parsedBitfinexUSDETH = JSON.parse(responseBitfinexUSDETH.getContentText());
  var rateBitfinexUSDETH = parsedBitfinexUSDETH[0][7];
  sheet.getRange('AO3').setValue(rateBitfinexUSDETH);
  // XMR
  var responseBitfinexUSDXMR = UrlFetchApp.fetch('https://api-pub.bitfinex.com/v2/tickers?symbols=tXMRUSD');
  var parsedBitfinexUSDXMR = JSON.parse(responseBitfinexUSDXMR.getContentText());
  var rateBitfinexUSDXMR = parsedBitfinexUSDXMR[0][7];
  sheet.getRange('AG3').setValue(rateBitfinexUSDXMR);
    
  // Cotações em BRL
  // MERCADOBITCOIN
  // BTC
  var responseMbBRLBTC = UrlFetchApp.fetch('https://www.mercadobitcoin.net/api/BTC/ticker/');
  var parsedMbBRLBTC = JSON.parse(responseMbBRLBTC.getContentText());
  var rateMbBRLBTC = parsedMbBRLBTC.ticker.last;
  sheet.getRange('C6').setValue(rateMbBRLBTC).setNumberFormat('#,##0.00');
  // BCH
  var responseMbBRLBCH = UrlFetchApp.fetch('https://www.mercadobitcoin.net/api/BCH/ticker/');
  var parsedMbBRLBCH = JSON.parse(responseMbBRLBCH.getContentText());
  var rateMbBRLBCH = parsedMbBRLBCH.ticker.last;
  sheet.getRange('D6').setValue(rateMbBRLBCH).setNumberFormat('#,##0.00');
  // LTC
  var responseMbBRLLTC = UrlFetchApp.fetch('https://www.mercadobitcoin.net/api/LTC/ticker/');
  var parsedMbBRLLTC = JSON.parse(responseMbBRLLTC.getContentText());
  var rateMbBRLLTC = parsedMbBRLLTC.ticker.last;
  sheet.getRange('E6').setValue(rateMbBRLLTC).setNumberFormat('#,##0.00'); 
  
  // FOXBIT
  var responseFoxbitBRLBTC = UrlFetchApp.fetch('https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC');
  var parsedFoxbitBRLBTC = JSON.parse(responseFoxbitBRLBTC.getContentText());
  var rateFoxbitBRLBTC = parsedFoxbitBRLBTC.last;
  sheet.getRange('C7').setValue(rateFoxbitBRLBTC).setNumberFormat('#,##0.00');
}
