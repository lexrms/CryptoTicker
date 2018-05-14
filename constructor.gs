// Ainda não terminado, mas cria as planilhas necessárias
// A planilha Balance faltam alguns detalhes que dependem de updateCoins e updateBalance

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
  
  // Tenta ativar a planilha Coins se der erro cria a planilha
  try{
    sheet.getSheetByName('Coins').activate();
  }catch(erro){
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Coins');
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
    sheet.getRange('A1:AD1').setBackground('#c3c3c3');
    sheet.getRange('A2').setValue('Total em BRL');
    sheet.getRange('A2:AD2').setBackground('#c1cdcd');
    sheet.getRange('A3').setValue('Foxbit').setBackground('#c1cdcd');
    sheet.getRange('B3').setFormula('=B9*Coins!$C7');
    sheet.getRange('B3').copyTo(sheet.getRange('C3:T3'));
    sheet.getRange('A4').setValue('Mercado Bitcoin').setBackground('#c1cdcd');
    sheet.getRange('B4').setFormula('=B9*Coins!$C6');
    sheet.getRange('B4').copyTo(sheet.getRange('C4:T4'));
    sheet.getRange('A5').setValue('Total em USD');
    sheet.getRange('A5:AD5').setBackground('#c1cdcd');
    sheet.getRange('A6').setValue('Bitfinex').setBackground('#c1cdcd');
    sheet.getRange('B6').setFormula('=B9*Coins!$AQ3');
    sheet.getRange('B6').copyTo(sheet.getRange('C6:T6'));
    sheet.getRange('A7').setValue('Poloniex').setBackground('#c1cdcd');
    sheet.getRange('B7').setFormula('=B9*Coins!$AQ2');
    sheet.getRange('B7').copyTo(sheet.getRange('C7:T7'));
    sheet.getRange('A8').setValue('Total em BTC');
    sheet.getRange('A8:AD8').setBackground('#c1cdcd');
    sheet.getRange('A9').setValue('Poloniex').setBackground('#c1cdcd');
    sheet.getRange('B9').setValue('=B10');
    sheet.getRange('C9').setValue('=C10*Coins!BE2');
    sheet.getRange('A10').setValue('Total da moeda');
    sheet.getRange('A10:AD10').setBackground('#c1cdcd');
    sheet.getRange('B10').setFormula('=SUM(B11:B1000)');
    sheet.getRange('B10').copyTo(sheet.getRange('C10:T10'));
    sheet.getRange('B3:T4').setNumberFormat('#,##0.00');
    sheet.getRange('B6:T7').setNumberFormat('#,##0.00');
    sheet.getRange('B9:T1000').setNumberFormat('#,##0.00000000');
    // Total (esta parte é provisória)
    sheet.getRange('U1').setValue('Total Geral');
    sheet.getRange('U2').setValue('BRL');
    sheet.getRange('U3').setFormula('=sum(B3:T3)');
    sheet.getRange('U4').setFormula('=sum(B4:T4)');
    sheet.getRange('U5').setValue('USD');
    sheet.getRange('U6').setFormula('=sum(B6:T6)');
    sheet.getRange('U7').setFormula('=sum(B7:T7)');
    sheet.getRange('U8').setValue('BTC');
    sheet.getRange('U9').setFormula('=sum(B9:T9)');
  }  
}
