# pt-xepelin-sqz
prueba técnica Xepelin

Para ambos problemas de lógica decidí usar JavaScript por simplicidad a pesar de que no tener mucha experencia con el lenguaje

1. El primer problema se encuentra resuelto en la función: Xepelin.js y al correr el script testea los 4 posibles casos:
divisible por 15, 3, niuno y 5

2. El segundo problema se encuentra en IesProductList.js y emplea 2 funciones, una para calcular la multiplicación de todo el arreglo y 
otra para calcular cada uno de los elementos del nuevo arreglo. Finalmente hace un test con un arreglo random. 

3. Para el MVP opté por algo sencillo, sin ningún tipo de validación seria para el login. Las credenciales son: 
```
 username = 'admin'
 password = '123'.
```
Una vez validadas las credenciales se oculta el login y se muestra el embed del google sheets. 
Finalmente cree una nueva planilla, la cual está en:
https://docs.google.com/spreadsheets/d/15Vd0foqFeLtIS__fmovkcAZKd80kbrICO561bSxwVLg/edit?usp=sharing
y es acá donde implementé la lógica para enviar los correos. Haciendo uso de Apps scripts de google, de sus activadores y dando los permisos
correspondientes, detecto cuando una entrada de tasa es modificada. Al gatillarse este evento genero un request http al endpoint facilitado por
ustedes y así se hace el envío automático del correo. El código en Apps Scripts es el siguiente:
```
function onEditon(e){
  let range = e.range; 
  let strange = e.range.getA1Notation()
  let sheet = range.getSheet()
  let email = sheet.getRange('C'+strange[1]).getValue()
  let idop = sheet.getRange('A'+strange[1]).getValue()

  if (strange[0] == 'B') {

      let formData = {
        'idOp': idop,
        'tasa': range.getValue(),
        'email': email,
       
      };
      let options = {
        'method' : 'post',
        'payload' : formData
      };

      let response = UrlFetchApp.fetch('https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/', options);
      Logger.log(response);

  } else if (strange[0] == 'C') {
    if (range.getValue != '') {
      Browser.msgBox('Email actualizado', Browser.Buttons.OK);
    } 
    Logger.log("El valor editado no corresponde a una tasa")
  } else {
  }
}
```
También restringí el acceso de la Spreadsheet para que solo pudieran editarse los correos y las tasas correspondientes. 
Finalmente agregué un botón de cerrar sesión para dejar todo como estaba.
