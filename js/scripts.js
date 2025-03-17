//*Ejercicio 1
//1️⃣ Camila atiende 120 llamadas en 4 horas. ¿Cuántas llamadas atiende por hora?

function llamadasDeCamila (calls,hours){
    const result=calls/hours;
    console.log("Las llamadas que Camila atiende por hora son " + result)
}

llamadasDeCamila(120,4);

//*Ejercicio 2
//2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

function lapicesBego (box){
    const pencils=12;
    let result=pencils*box;
    console.log ("El total de lápices que Bego tiene es "+ result)
}

lapicesBego(5)

//*Ejercicio 3
//3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

function caramelosCamila (groups){
    const totalCaramels=25;
    let result= totalCaramels%groups;
    console.log ( "El resto de caramelos de Camila será "+result)
}
caramelosCamila (4)

//*Ejercicio 4
//4️⃣ Sabrina recorre 90 kilómetros en 3 horas. ¿Cuántos kilómetros recorre en 2 horas?

function distanciaRecorrida(distanciaTotal, tiempoTotal, tiempoConsulta) {
    let velocidad = (distanciaTotal / tiempoTotal)*tiempoConsulta; 
    console.log("En dos horas Sabrina recorre "+ velocidad)
}

distanciaRecorrida(90,3,2)

//*Ejercicio 5
//5️⃣ Macarena cosechó 240 manzanas y las quiere repartir en 8 cajas. ¿Cuántas manzanas tendrá cada caja?

function manzanasMacarena(boxes){
    const apples=240;
    let result=apples/boxes;
    console.log ('El número de manzanas que tendrá cada caja es '+result)
}

manzanasMacarena(8)

//*Ejercicio 6
//6️⃣ Bego tiene 57 tornillos y quiere guardarlos en cajitas de 10 tornillos cada una. ¿Cuántos tornillos quedarán fuera?

function tornillosBego (screwsPerBox){
    const totalScrews=57;
    let result= totalScrews%screwsPerBox;
    console.log ( "El total de tornillos que queda fuera es "+result)
}
tornillosBego (10)


//*Ejercicio 7
//7️⃣ Abby cobra 35 euros por misión. Si hizo 5 misiones en un día, ¿cuánto dinero ganó?

function dineroAbby (totalMissions){
    const missionRate=35;
    let result=missionRate*totalMissions;
    console.log ('El total de euros que Abby ganó es '+result)
}
dineroAbby (5)

//*Ejercicio 8
//8️⃣ Sabrina horneó 92 galletas y las quiere empaquetar en bolsas de 8 galletas cada una. ¿Cuántas galletas sobrarán?

function galletasSabrina (cookiesPerBag){
    const totalCookies=92;
    let result= totalCookies%cookiesPerBag;
    console.log ( "El total de galletas que cada bolsa tendrá es "+result)
}
galletasSabrina (8)

//*Ejercicio 9
//9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

function librosCamila (newBooks,existingBooks){
    const books=newBooks+existingBooks;
    console.log ('El total de libros que Camila tienes es de '+books)

}
librosCamila(23,45)

//*Ejercicio 10
//🔟 Macarena tiene 123 monedas antiguas y quiere exhibirlas en vitrinas con capacidad para 5 monedas cada una. ¿Cuántas monedas no cabrán?

function monedasRestantes (coinsPerShelve){
    const totalCoins=123;
    let result= totalCoins%coinsPerShelve;
    console.log ( "El total de monedas que a Macarena le sobrarán es "+result)
}
monedasRestantes (5)

//*Ejercicio 11
//1️⃣1️⃣ El coche de Bego consume 7 litros de gasolina por cada 100 kilómetros. Si el tanque tiene 42 litros, ¿cuántos kilómetros podrá recorrer?

function kilometrosParaRecorrer (gasolinLeft,kilometersDriven,gasolinSpent){
    let result = (gasolinLeft*kilometersDriven)/gasolinSpent;
    console.log ('El total de kilometros que Bego podrá recorrer es '+result)
}
kilometrosParaRecorrer (42,100,7)

//*Ejercicio 12
//1️⃣2️⃣ Sabrina tiene 6 gallineros, y en cada gallinero hay 25 gallinas. ¿Cuántas gallinas tiene en total?

function gallinasSabrina (roost){
    const hensPerRoost=25;
    let result= hensPerRoost*roost;
    console.log ('El total de gallinas que Sabrina tiene es de '+result)
}

gallinasSabrina (6)

//*Ejercicio 13
//1️⃣3️⃣ Abby tiene 48 balas y cada cargador de su pistola tiene espacio para 7 balas. ¿Cuántas balas le sobrarán sin cargar?

function balasAbby(totalBullets) {
    const bulletsPerCharger=7;
    let result=bulletsPerCharger%totalBullets;
    console.log('El número de balas restantes de Abby es '+result)
}

balasAbby(48)

//*Ejercicio 14
//1️⃣4️⃣ Bego corrió 3 kilómetros por la mañana y 4 kilómetros por la tarde. ¿Cuántos kilómetros corrió en total?

function kilometrosBego (morningKm,eveningKm){
    const kilometrosTotales=morningKm+eveningKm;
    console.log ('El total de kilometros que Bego corrió es de '+kilometrosTotales)

}
kilometrosBego(3,4)


//*Ejercicio 15
//1️⃣5️⃣ Camila tiene 100 hojas y quiere agruparlas en pilas de 6. ¿Cuántas hojas quedarán fuera?

function hojasCamila (pagesPerStack,totalPages){
    let result= totalPages%pagesPerStack;
    console.log ('El número de hojas restante es de '+result)
}

hojasCamila (6,100)

//*Ejercicio 16
//1️⃣6️⃣ Macarena tiene 30000 euros y quiere repartirlos en 4 cuentas iguales. ¿Cuánto dinero recibirá cada cuenta?

function dineroMacarena (totalEuros){
    const accounts=4;
    let result=totalEuros/accounts;
    console.log ('Cada cuenta tendrá un total de euros de '+ result)
}

dineroMacarena(30000)

//Ejercicio 17
//Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?
function asesinatosAbby (days,murdersPerWeek){
    let result=murdersPerWeek/days;
    console.log('El total de asesinatos que Abby hace al día es de '+result)
}

asesinatosAbby(7,5201)

//Ejercicio 18
//1️⃣8️⃣ Bego tiene 3 paquetes de canicas, cada paquete contiene 24 canicas. ¿Cuántas canicas tiene en total?

function canicasBego (totalBags, marblesPerBag){
    let result=totalBags*marblesPerBag;
    console.log('El total de canicas que Bego tiene es de '+result)
}

canicasBego (3,24)

//Ejercicio 19
//1️⃣9️⃣ Camila y su hermano juntaron 135 monedas. Si Camila aportó 78 monedas, ¿cuántas monedas puso su hermano?
function monedasCamila (totalCoins,coinsCamila){
    let coinsBrother=totalCoins-coinsCamila;
    console.log('El numero de monedas que el hermano de Camila aportó es '+coinsBrother)
}

monedasCamila(135,78)

//Ejercicio 20
//2️⃣0️⃣ Sabrina tiene 500 piezas de lego y quiere dividirlas en lotes de 80 para construir maquetas. ¿Cuántas piezas le quedarán fuera?

function legosSabrina (totalLegos,legosPerBunch){
    let result=totalLegos%legosPerBunch;
    console.log ('El número de legos que le restarán a Sabrina es '+result)
}

legosSabrina(500,80)

//Ejercicio 21
//2️⃣1️⃣ Macarena quiere repartir 72 galletas entre 9 perros. ¿Cuántas galletas recibirá cada perro?
function galletasPerros(totalCookies,totalDogs){
    let result=totalCookies/totalDogs;
    console.log('El número de galletas que le tocará a cada perro es de '+result)
}

galletasPerros(72,9)

//Ejercicio22
//2️⃣2️⃣ Abby quiere comprar 5 cuchillos. Si cada uno cuesta 18 euros, ¿cuánto pagará en total?
function cuchillosAbby(knivesPrice,totalKnives){
    let result=knivesPrice*totalKnives;
    console.log('El total que Abby tendrá que pagar por los cuchillos es de '+result)
}

cuchillosAbby(18,5)

//Ejercicio23
//2️⃣3️⃣ Bego tiene 480 galletas y quiere ponerlas en bolsas de 40 galletas cada una. ¿Cuántas bolsas llenará?
function galletasBego (totalCookies,cookiesPerBag){
    let result=totalCookies/cookiesPerBag;
    console.log('El número de bolsas que bego tendrá es de '+result)
}

galletasBego(480,40)

//Ejercicio24
//2️⃣4️⃣ Camila recorrió 1.200 km en un viaje de 4 días. ¿Cuántos kilómetros recorrió por día?
function kilometrosCamila(totalKm,totalDays){
    let result=totalKm/totalDays;
    console.log('El número de kilometros que recorrió Camila cada día de su viaje es '+result)
}

kilometrosCamila(1200,4)

//Ejercicio25
//2️⃣5️⃣ Sabrina ahorró 120 euros en enero y 85 euros en febrero. ¿Cuánto dinero ha ahorrado en total?
function ahorrosSabrina(moneyJanuary,moneyFebruary){
    let result=moneyJanuary+moneyFebruary;
    console.log('La cantidad final de euros que Sabrina ahorró es de '+result)
}

ahorrosSabrina(120,85)

//Ejercicio26
//2️⃣6️⃣ Macarena tiene 73 caramelos y quiere repartirlos entre sus amigos en grupos de 6. ¿Cuántos caramelos le sobrarán?
function caramelosMacarena (totalCandies,groups){
    let result=totalCandies%groups;
    console.log('El número de caramelos que a Macarena le sobrarán es de '+result)
}

caramelosMacarena(73,6)

//Ejercicio27
//2️⃣7️⃣ Abby registró 17 casas por la mañana y 8 por la tarde. ¿Cuántas casas registró en total?
function casasAbby (housesMorning,housesEvening){
    let result=housesEvening+housesMorning;
    console.log('El número total de casas que Abby registro es '+result)
}

casasAbby(17,8)

//Ejercicio28
//2️⃣8️⃣ Bego tiene 95 fotos y quiere hacer álbumes donde caben 12 fotos en cada uno. ¿Cuántas fotos no podrá guardar en los álbumes?
function albumsBego (totalPhotos,photosPerAlbum){
    let result= totalPhotos%photosPerAlbum;
    console.log('El total de fotos que le restarán a Bego es '+result)
}

albumsBego(95,12)

//Ejercicio29
//2️⃣9️⃣ Camila tiene un descuento de 15 euros en un producto que cuesta 120 euros. ¿Cuánto cuesta el producto después del descuento?
function descuentoCamila (originalPrice,discount){
    let result=originalPrice-discount;
    console.log('El precio final del producto es '+result)
}

descuentoCamila(120,15)

//Ejercicio30
//3️⃣0️⃣ Sabrina tiene 500 gramos de harina y quiere hacer porciones de 24 gramos cada una para preparar galletas. ¿Cuánta harina le sobrará después de hacer todas las porciones completas?
function harinaSabrina (totalFlour,flourPerPortion){
    let result= totalFlour%flourPerPortion;
    console.log('Al final a Sabrina le restará un total de harina de '+result)
}

harinaSabrina(500,24)