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

  // Setar formato (linha, coluna); Exemplo: A2=(1,2) , B2=(2,2)
  sheet.getRange(2, 2).setValue(json.BTC_BCN.last);
  sheet.getRange(2, 3).setValue(json.BTC_BELA.last);
  sheet.getRange(2, 4).setValue(json.BTC_BLK.last);
  sheet.getRange(2, 5).setValue(json.BTC_BLK.last);
  sheet.getRange(2, 6).setValue(json.BTC_BTCD.last);
  sheet.getRange(2, 7).setValue(json.BTC_BTM.last);
  sheet.getRange(2, 8).setValue(json.BTC_BTS.last);
  sheet.getRange(2, 9).setValue(json.BTC_BURST.last);
  sheet.getRange(2, 10).setValue(json.BTC_CLAM.last);
  sheet.getRange(2, 11).setValue(json.BTC_DASH.last);
  sheet.getRange(2, 12).setValue(json.BTC_DGB.last);
  sheet.getRange(2, 13).setValue(json.BTC_DOGE.last);
  sheet.getRange(2, 14).setValue(json.BTC_EMC2.last);
  sheet.getRange(2, 15).setValue(json.BTC_FLDC.last);
  sheet.getRange(2, 16).setValue(json.BTC_FLO.last);
  sheet.getRange(2, 17).setValue(json.BTC_GAME.last);
  sheet.getRange(2, 18).setValue(json.BTC_GRC.last);
  sheet.getRange(2, 19).setValue(json.BTC_HUC.last);
  sheet.getRange(2, 20).setValue(json.BTC_LTC.last);
  sheet.getRange(2, 21).setValue(json.BTC_MAID.last);
  sheet.getRange(2, 22).setValue(json.BTC_OMNI.last);
  sheet.getRange(2, 23).setValue(json.BTC_NAV.last);
  sheet.getRange(2, 24).setValue(json.BTC_NEOS.last);
  sheet.getRange(2, 25).setValue(json.BTC_NMC.last);
  sheet.getRange(2, 26).setValue(json.BTC_NXT.last);
  sheet.getRange(2, 27).setValue(json.BTC_PINK.last);
  sheet.getRange(2, 28).setValue(json.BTC_POT.last);
  sheet.getRange(2, 29).setValue(json.BTC_PPC.last);
  sheet.getRange(2, 30).setValue(json.BTC_RIC.last);
  sheet.getRange(2, 31).setValue(json.BTC_STR.last);
  sheet.getRange(2, 32).setValue(json.BTC_SYS.last);
  sheet.getRange(2, 33).setValue(json.BTC_VIA.last);
  sheet.getRange(2, 34).setValue(json.BTC_XVC.last);
  sheet.getRange(2, 35).setValue(json.BTC_VRC.last);
  sheet.getRange(2, 36).setValue(json.BTC_VTC.last);
  sheet.getRange(2, 37).setValue(json.BTC_XBC.last);
  sheet.getRange(2, 38).setValue(json.BTC_XCP.last);
  sheet.getRange(2, 39).setValue(json.BTC_XEM.last);
  sheet.getRange(2, 40).setValue(json.BTC_XMR.last);
  sheet.getRange(2, 41).setValue(json.BTC_XPM.last);
  sheet.getRange(2, 42).setValue(json.BTC_XRP.last);
  sheet.getRange(2, 43).setValue(json.USDT_BTC.last);
  sheet.getRange(2, 44).setValue(json.USDT_DASH.last);
  sheet.getRange(2, 45).setValue(json.USDT_LTC.last);
  sheet.getRange(2, 46).setValue(json.USDT_NXT.last);
  sheet.getRange(2, 47).setValue(json.USDT_STR.last);
  sheet.getRange(2, 48).setValue(json.USDT_XMR.last);
  sheet.getRange(2, 49).setValue(json.USDT_XRP.last);
  sheet.getRange(2, 50).setValue(json.XMR_BCN.last);
  sheet.getRange(2, 51).setValue(json.XMR_BLK.last);
  sheet.getRange(2, 52).setValue(json.XMR_BTCD.last);
  sheet.getRange(2, 53).setValue(json.XMR_DASH.last);
  sheet.getRange(2, 54).setValue(json.XMR_LTC.last);
  sheet.getRange(2, 55).setValue(json.XMR_MAID.last);
  sheet.getRange(2, 56).setValue(json.XMR_NXT.last);
  sheet.getRange(2, 57).setValue(json.BTC_ETH.last);
  sheet.getRange(2, 58).setValue(json.USDT_ETH.last);
  sheet.getRange(2, 59).setValue(json.BTC_SC.last);
  sheet.getRange(2, 60).setValue(json.BTC_BCY.last);
  sheet.getRange(2, 61).setValue(json.BTC_EXP.last);
  sheet.getRange(2, 62).setValue(json.BTC_FCT.last);
  sheet.getRange(2, 63).setValue(json.BTC_RADS.last);
  sheet.getRange(2, 64).setValue(json.BTC_AMP.last);
  sheet.getRange(2, 65).setValue(json.BTC_DCR.last);
  sheet.getRange(2, 66).setValue(json.BTC_LSK.last);
  sheet.getRange(2, 67).setValue(json.ETH_LSK.last);
  sheet.getRange(2, 68).setValue(json.BTC_LBC.last);
  sheet.getRange(2, 69).setValue(json.BTC_STEEM.last);
  sheet.getRange(2, 70).setValue(json.ETH_STEEM.last);
  sheet.getRange(2, 71).setValue(json.BTC_SBD.last);
  sheet.getRange(2, 72).setValue(json.BTC_ETC.last);
  sheet.getRange(2, 73).setValue(json.ETH_ETC.last);
  sheet.getRange(2, 74).setValue(json.USDT_ETC.last);
  sheet.getRange(2, 75).setValue(json.BTC_REP.last);
  sheet.getRange(2, 76).setValue(json.USDT_REP.last);
  sheet.getRange(2, 77).setValue(json.ETH_REP.last);
  sheet.getRange(2, 78).setValue(json.BTC_ARDR.last);
  sheet.getRange(2, 79).setValue(json.BTC_ZEC.last);
  sheet.getRange(2, 80).setValue(json.ETH_ZEC.last);
  sheet.getRange(2, 81).setValue(json.USDT_ZEC.last);
  sheet.getRange(2, 82).setValue(json.XMR_ZEC.last);
  sheet.getRange(2, 83).setValue(json.BTC_STRAT.last);
  sheet.getRange(2, 84).setValue(json.BTC_NXC.last);
  sheet.getRange(2, 85).setValue(json.BTC_PASC.last);
  sheet.getRange(2, 86).setValue(json.BTC_GNT.last);
  sheet.getRange(2, 87).setValue(json.ETH_GNT.last);
  sheet.getRange(2, 88).setValue(json.BTC_GNO.last);
  sheet.getRange(2, 89).setValue(json.ETH_GNO.last);
  sheet.getRange(2, 90).setValue(json.BTC_BCH.last);
  sheet.getRange(2, 91).setValue(json.ETH_BCH.last);
  sheet.getRange(2, 92).setValue(json.USDT_BCH.last);
  sheet.getRange(2, 93).setValue(json.BTC_ZRX.last);
  sheet.getRange(2, 94).setValue(json.ETH_ZRX.last);
  sheet.getRange(2, 95).setValue(json.BTC_CVC.last);
  sheet.getRange(2, 96).setValue(json.ETH_CVC.last);
  sheet.getRange(2, 97).setValue(json.BTC_OMG.last);
  sheet.getRange(2, 98).setValue(json.ETH_OMG.last);
  sheet.getRange(2, 99).setValue(json.BTC_GAS.last);
  sheet.getRange(2, 100).setValue(json.ETH_GAS.last);
  sheet.getRange(2, 101).setValue(json.BTC_STORJ.last);
  }
