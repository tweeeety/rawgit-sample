// console
for(var i=0; i<10; i++){
  console.log("サンプルだよ : " + i);
}

// ノード追加
var elm = document.createElement('div');
for(var i=0; i<5; i++){
  var e = elm.cloneNode();
  e.textContent = 'サンプルノード' + i;
  document.body.appendChild(e);
}