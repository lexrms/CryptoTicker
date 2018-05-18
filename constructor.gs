// Ainda não terminado, mas cria as planilhas necessárias
// A planilha Balance faltam alguns detalhes que dependem de updateMarkets e updateBalance

function constructor(){
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Tenta ativar a planilha Config se der erro cria a planilha
  try {
    sheet.getSheetByName('Config').activate();
  }catch(erro){
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Config'); 
    sheet.getRange('A1').setValue('Planilha de configuração').setBackground('#c1cdcd').setHorizontalAlignment('center');
    sheet.getRange('A1:C1').mergeAcross();
    sheet.getRange('B2').setValue('Key').setHorizontalAlignment('center');
    sheet.getRange('C2').setValue('Secret').setHorizontalAlignment('center');
    sheet.getRange('A2:C2').setBackground('#c1cdcd');
    sheet.getRange('A3').setValue('Poloniex').setBackground('#c1cdcd');
  }
  
  // Tenta ativar a planilha Markets se der erro cria a planilha
  try{
    sheet.getSheetByName('Markets').activate();
  }catch(erro){
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Markets');
    sheet.getRange('A1:CW1').setBackground('#c1cdcd');
    sheet.getRange('A5:CW5').setBackground('#c1cdcd');
    sheet.getRange('B2:B3').setBackground('#c1cdcd');
    sheet.getRange('B6:B7').setBackground('#c1cdcd');
    sheet.getRange('B2').setValue('Poloniex');
    sheet.getRange('B3').setValue('Bitfinex');
    sheet.getRange('C5:E5').setValues([['BRL_BTC', 'BRL_BCH', 'BRL_LTC']]);
    sheet.getRange('B6').setValue('Mercado Bitcoin');
    sheet.getRange('B7').setValue('Foxbit');
  }
  
  try{
    //Cria planilha Historical, se a planilha existe dá erro no scrypt
    sheet.getSheetByName('Historical').activate();
  }catch(erro){
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Historical');
  }

// Tenta ativar a planilha Balance se der erro cria a planilha
  try{
    sheet.getSheetByName('Balance').activate();
  }catch(erro){
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Balance');
    sheet.getRange('A1').setValue('Moeda');
    sheet.getRange('B1').setValue('BTC');
    sheet.getRange('A1:AD1').setBackground('#c3c3c3');
    sheet.getRange('A2').setValue('Total em BRL');
    sheet.getRange('A2:AD2').setBackground('#c1cdcd');
    sheet.getRange('A3').setValue('Foxbit').setBackground('#c1cdcd');
    sheet.getRange('B3').setFormula('=B9*Markets!$C7');
    sheet.getRange('B3').copyTo(sheet.getRange('C3:W3'));
    sheet.getRange('A4').setValue('Mercado Bitcoin').setBackground('#c1cdcd');
    sheet.getRange('B4').setFormula('=B9*Markets!$C6');
    sheet.getRange('B4').copyTo(sheet.getRange('C4:W4'));
    sheet.getRange('A5').setValue('Total em USD');
    sheet.getRange('A5:AD5').setBackground('#c1cdcd');
    sheet.getRange('A6').setValue('Bitfinex').setBackground('#c1cdcd');
    sheet.getRange('B6').setFormula('=IFERROR(B9*HLOOKUP("USDT_BTC",Markets!$C$1:$CW$3,3,false))');
    sheet.getRange('B6').copyTo(sheet.getRange('C6:W6'));
    sheet.getRange('A7').setValue('Poloniex').setBackground('#c1cdcd');
    sheet.getRange('B7').setFormula('=IFERROR(B9*HLOOKUP("USDT_BTC",Markets!$C$1:$CW$2,2,false))');
    sheet.getRange('B7').copyTo(sheet.getRange('C7:W7'));
    sheet.getRange('A8').setValue('Total em BTC');
    sheet.getRange('A8:AD8').setBackground('#c1cdcd');
    sheet.getRange('A9').setValue('Poloniex').setBackground('#c1cdcd');
    sheet.getRange('B9').setValue('=B10');
    // Pega os valores da Polo em Markets
    sheet.getRange('C9:W9').setValue('=IFERROR(C10*HLOOKUP(CONCAT("BTC_",C1),Markets!$C$1:$CW$2,2,false))');
    sheet.getRange('A10').setValue('Total da moeda');
    sheet.getRange('A10:AD10').setBackground('#c1cdcd');
    sheet.getRange('B10').setFormula('=SUM(B11:B1000)');
    sheet.getRange('B10').copyTo(sheet.getRange('C10:W10'));
    sheet.getRange('B3:W4').setNumberFormat('#,##0.00');
    sheet.getRange('B6:W7').setNumberFormat('#,##0.00');
    sheet.getRange('B9:T1000').setNumberFormat('#,##0.00000000');
    
    // Pega os valores da Polo em Historical
    sheet.getRange('A11').setValue('Poloniex');
    sheet.getRange('B11:W11').setValue('=IFERROR(HLOOKUP(B1,Historical!$B$1:$Z$3,3,false))');
    
    // Total (esta parte é provisória)
    sheet.getRange('X1').setValue('Total Geral');
    sheet.getRange('X2').setValue('BRL');
    sheet.getRange('X3').setFormula('=sum(B3:W3)');
    sheet.getRange('X4').setFormula('=sum(B4:W4)');
    sheet.getRange('X5').setValue('USD');
    sheet.getRange('X6').setFormula('=sum(B6:W6)');
    sheet.getRange('X7').setFormula('=sum(B7:W7)');
    sheet.getRange('X8').setValue('BTC');
    sheet.getRange('X9').setFormula('=sum(B9:W9)');
  }  
}
