chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    var html = request.source
    //Obtener el FBid
    if(html.indexOf('fb://profile/')>0){
      var ini = html.substring(html.indexOf('fb://profile/')+13);
      fbid = ini.substring(0,ini.indexOf('"'));
      if(isNumber(fbid)){
        //Obtenemos Lenguaje
        var ini2 = html.substring(html.indexOf('language')+11);
        var lang = ini2.substring(0,ini2.indexOf('"'));
        if(lang = "English (US)"){

          //Obtenemos nombre
          var ini3 = html.substring(html.indexOf('pageTitle')+11);
          var nombre = ini3.substring(0,ini3.indexOf(' '));

          var lista = document.querySelector('#links');
          lista.setAttribute('align','right');
          lista.setAttribute('style','color:white');

          //Fotos con Etiqueta
          var aP1 = document.createElement('h2');
          aP1.innerHTML = 'Fotos con Etiqueta de ' + nombre + '     ';
          var aTag = document.createElement('a');
          aTag.setAttribute('href','https://www.facebook.com/search/'+fbid+'/photos-of');
          aTag.setAttribute('target','_blank');

          aTag.innerHTML = '<img alt="Comentadas" src="ver.png">'; 
          aP1.appendChild(aTag);
          lista.appendChild(aP1);

          //Fotos Subidas por
          var aP2 = document.createElement('h2');
          aP2.innerHTML = 'Fotos subidas por ' + nombre; + '     '
          var aTag2 = document.createElement('a');
          aTag2.setAttribute('href','https://www.facebook.com/search/'+fbid+'/photos-by');
          aTag2.setAttribute('target','_blank');
          aTag2.innerHTML = '<img alt="Comentadas" src="ver.png">'; 
          aP2.appendChild(aTag2);
          lista.appendChild(aP2);

          //Fotos Comentadas por
          var aP3 = document.createElement('h2');
          aP3.innerHTML = 'Fotos comentadas por ' + nombre + '     ';
          var aTag3 = document.createElement('a');
          aTag3.setAttribute('href','https://www.facebook.com/search/'+fbid+'/photos-commented');
          aTag3.setAttribute('target','_blank');
          aTag3.innerHTML = '<img alt="Comentadas" src="ver.png">'; 
          aP3.appendChild(aTag3);
          lista.appendChild(aP3);

          //Fotos Comentadas por
          var aP4 = document.createElement('h2');
          aP4.innerHTML = 'Fotos con Me Gusta de ' + nombre + '     ';
          var aTag4 = document.createElement('a');
          aTag4.setAttribute('href','https://www.facebook.com/search/'+fbid+'/photos-liked');
          aTag4.setAttribute('target','_blank');
          aTag4.innerHTML = '<img alt="Comentadas" src="ver.png">'; 
          aP4.appendChild(aTag4);
          lista.appendChild(aP4);

          //Grupos de
          var aP5 = document.createElement('h2');
          aP5.innerHTML = 'Grupos de ' + nombre + '     ';
          var aTag5 = document.createElement('a');
          aTag5.setAttribute('href','https://www.facebook.com/search/'+fbid+'/groups');
          aTag5.setAttribute('target','_blank');
          aTag5.innerHTML = '<img alt="Comentadas" src="ver.png">'; 
          aP5.appendChild(aTag5);
          lista.appendChild(aP5);

          //Apps de
          var aP6 = document.createElement('h2');
          aP6.innerHTML = 'Apps de ' + nombre + '     ';
          var aTag6 = document.createElement('a');
          aTag6.setAttribute('href','https://www.facebook.com/search/'+fbid+'/apps');
          aTag6.setAttribute('target','_blank');
          aTag6.innerHTML = '<img alt="Comentadas" src="ver.png">'; 
          aP6.appendChild(aTag6);
          lista.appendChild(aP6);

          var aP7 = document.createElement('h3');
          var todas = document.createElement('img');
          todas.setAttribute('src','todo.png');
          aP7.setAttribute('align','center');
          todas.addEventListener('click',func);
          aP7.appendChild(todas);
          lista.appendChild(aP7);

        }else{
          nn.innerText = 'Tu perfil debe estar configurado en English (US), para poder usar esta extención';
        }

      }else{
        nn.innerText = 'Esta pagina parece no ser un perfil';
      }
    }else{
      nn.innerText = 'Esta pagina parece no ser un perfil';
    }
    
  }
});
function func(){
    chrome.tabs.create({url: 'https://www.facebook.com/search/'+fbid+'/photos-of'});
    chrome.tabs.create({url: 'https://www.facebook.com/search/'+fbid+'/photos-by'});
    chrome.tabs.create({url: 'https://www.facebook.com/search/'+fbid+'/photos-commented'});
    chrome.tabs.create({url: 'https://www.facebook.com/search/'+fbid+'/photos-liked'});
    chrome.tabs.create({url: 'https://www.facebook.com/search/'+fbid+'/groups'});
    chrome.tabs.create({url: 'https://www.facebook.com/search/'+fbid+'/apps'});
}
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
function onWindowLoad() {
  var nn = document.querySelector('#nn');
  nn.setAttribute('style','color:white');
  var fbid = 0;
  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      nn.innerText = 'Esta pagina parece no ser un perfil';
    }
  });

}

window.onload = onWindowLoad;