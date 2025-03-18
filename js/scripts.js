

//DIVISION
function divideNumbers(numberA,numberB){
    const getDivision= numberA/numberB;
    return getDivision;
}

//MULTIPLY
function multiplyNumbers(numberA,numberB){
    const getMultiply= numberA*numberB;
    return getMultiply;
}

//SUMA
function sumNumbers(numberA,numberB){
    const getSum=numberA+numberB;
    return getSum;
}

//MODULO
function moduleNumbers(numberA,numberB){
    const getModule=numberA%numberB;
    return getModule;
}

//REGLA DE TRES
function ruleOfThree(numberA,numberB,numberC){
    const getRule=(numberA*numberB)/numberC;
    return getRule;
}

//RESTA
function substractNumbers(numberA,numberB){
    const getSub=numberA-numberB;
    return getSub;
}

//*Ejercicio 1
//1️⃣ Camila atiende 120 llamadas en 4 horas. ¿Cuántas llamadas atiende por hora?

function callsMadeByCamila (calls,hours){
    const totalCalls=divideNumbers(calls,hours);
    console.log("Las llamadas que Camila atiende por hora son " + totalCalls)
}

callsMadeByCamila(120,4);

//*Ejercicio 2
//2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

function totalPencilLeft (box,pencils){
    const totalPencils=multiplyNumbers(box,pencils);
    console.log ("El total de lápices que Bego tiene es "+ totalPencils)
}

totalPencilLeft(5,12)

//*Ejercicio 3
//3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

function caramelsLeft (totalCaramels,groups){
    const caramelsLeft=moduleNumbers(totalCaramels,groups);
    console.log ( "El resto de caramelos de Camila será "+caramelsLeft)
}
caramelsLeft (25,4)

//*Ejercicio 4
//4️⃣ Sabrina recorre 90 kilómetros en 3 horas. ¿Cuántos kilómetros recorre en 2 horas?

function kilometersInHours(totalDistance, totalTime, requestedTime) {
    const kilometersDriven= ruleOfThree(totalDistance,totalTime,requestedTime);
    console.log("En dos horas Sabrina recorre "+ kilometersDriven)
}

kilometersInHours(90,3,2)

//*Ejercicio 5
//5️⃣ Macarena cosechó 240 manzanas y las quiere repartir en 8 cajas. ¿Cuántas manzanas tendrá cada caja?

function applesPerBox(apples,boxes){
    const applesPerBox= divideNumbers(apples,boxes);
    console.log ('El número de manzanas que tendrá cada caja es '+applesPerBox)
}

applesPerBox(240,8)

//*Ejercicio 6
//6️⃣ Bego tiene 57 tornillos y quiere guardarlos en cajitas de 10 tornillos cada una. ¿Cuántos tornillos quedarán fuera?

function screwsOutsideTheBox (totalScrews,screwsPerBox){
    const screwsOutsideTheBox= moduleNumbers(totalScrews,screwsPerBox);
    console.log ( "El total de tornillos que queda fuera es "+screwsOutsideTheBox)
}
screwsOutsideTheBox (57,10)

//*Ejercicio 7
//7️⃣ Abby cobra 35 euros por misión. Si hizo 5 misiones en un día, ¿cuánto dinero ganó?

function moneyEarned (totalMissions,missionRate){
    const abbysMoney= multiplyNumbers(missionRate,totalMissions);
    console.log ('El total de euros que Abby ganó es '+abbysMoney)
}
moneyEarned (5,35)

//*Ejercicio 8
//8️⃣ Sabrina horneó 92 galletas y las quiere empaquetar en bolsas de 8 galletas cada una. ¿Cuántas galletas sobrarán?

function remainingCookiesForSabrina (totalCookies,cookiesPerBag){
    const remaining= moduleNumbers(totalCookies,cookiesPerBag);
    console.log ( "El total de galletas que cada bolsa tendrá es "+remaining)
}
remainingCookiesForSabrina (92,8)

//*Ejercicio 9
//9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

function camilasBooks (newBooks,existingBooks){
    const books=sumNumbers(newBooks,existingBooks);
    console.log ('El total de libros que Camila tienes es de '+books)

}
camilasBooks(23,45)

//*Ejercicio 10
//🔟 Macarena tiene 123 monedas antiguas y quiere exhibirlas en vitrinas con capacidad para 5 monedas cada una. ¿Cuántas monedas no cabrán?

function coinsThatWontFit (totalCoins,coinsPerShelve){
    const coins= moduleNumbers(totalCoins,coinsPerShelve);
    console.log ( "El total de monedas que a Macarena le sobrarán es "+coins)
}
coinsThatWontFit (123,5)

//*Ejercicio 11
//1️⃣1️⃣ El coche de Bego consume 7 litros de gasolina por cada 100 kilómetros. Si el tanque tiene 42 litros, ¿cuántos kilómetros podrá recorrer?

function kilometersAvailableToDrive (gasolinLeft,kilometersDriven,gasolinSpent){
    const kilometers = ruleOfThree(gasolinLeft,kilometersDriven,gasolinSpent);
    console.log ('El total de kilometros que Bego podrá recorrer es '+kilometers)
}
kilometersAvailableToDrive (42,100,7)

//*Ejercicio 12
//1️⃣2️⃣ Sabrina tiene 6 gallineros, y en cada gallinero hay 25 gallinas. ¿Cuántas gallinas tiene en total?

function totalHens (hensPerRoost,roost){
    const hens= multiplyNumbers(hensPerRoost,roost);
    console.log ('El total de gallinas que Sabrina tiene es de '+hens)
}

totalHens (25,6)

//*Ejercicio 13
//1️⃣3️⃣ Abby tiene 48 balas y cada cargador de su pistola tiene espacio para 7 balas. ¿Cuántas balas le sobrarán sin cargar?

function remainingBullets(bulletsPerCharger,totalBullets) {
    const bullets=moduleNumbers(bulletsPerCharger,totalBullets);
    console.log('El número de balas restantes de Abby es '+bullets)
}

remainingBullets(7,48)

//*Ejercicio 14
//1️⃣4️⃣ Bego corrió 3 kilómetros por la mañana y 4 kilómetros por la tarde. ¿Cuántos kilómetros corrió en total?

function kilometersRan (morningKm,eveningKm){
    const kilometers=sumNumbers(morningKm,eveningKm);
    console.log ('El total de kilometros que Bego corrió es de '+kilometers)

}
kilometersRan(3,4)


//*Ejercicio 15
//1️⃣5️⃣ Camila tiene 100 hojas y quiere agruparlas en pilas de 6. ¿Cuántas hojas quedarán fuera?

function remainingPages (pagesPerStack,totalPages){
    const pages= moduleNumbers(totalPages,pagesPerStack);
    console.log ('El número de hojas restante es de '+pages)
}

remainingPages (6,100)

//*Ejercicio 16
//1️⃣6️⃣ Macarena tiene 30000 euros y quiere repartirlos en 4 cuentas iguales. ¿Cuánto dinero recibirá cada cuenta?

function moneyPerAccount (totalEuros,accounts){
    const moneyPerAccount=divideNumbers(totalEuros,accounts);
    console.log ('Cada cuenta tendrá un total de euros de '+ moneyPerAccount)
}

moneyPerAccount(30000,4)

//Ejercicio 17
//1️⃣7️⃣Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?
function abbysKills (days,murdersPerWeek){
    const dailyKills=divideNumbers(murdersPerWeek,days);
    console.log('El total de asesinatos que Abby hace al día es de '+dailyKills)
}

abbysKills(7,5201)

//Ejercicio 18
//1️⃣8️⃣ Bego tiene 3 paquetes de canicas, cada paquete contiene 24 canicas. ¿Cuántas canicas tiene en total?

function totalMarbles (totalBags, marblesPerBag){
    const marbles=multiplyNumbers(totalBags,marblesPerBag);
    console.log('El total de canicas que Bego tiene es de '+marbles)
}

totalMarbles (3,24)

//Ejercicio 19
//1️⃣9️⃣ Camila y su hermano juntaron 135 monedas. Si Camila aportó 78 monedas, ¿cuántas monedas puso su hermano?
function coinsCamilasBrotherGave (totalCoins,coinsCamila){
    const coinsBrother=substractNumbers(totalCoins,coinsCamila);
    console.log('El numero de monedas que el hermano de Camila aportó es '+coinsBrother)
}

coinsCamilasBrotherGave(135,78)

//Ejercicio 20
//2️⃣0️⃣ Sabrina tiene 500 piezas de lego y quiere dividirlas en lotes de 80 para construir maquetas. ¿Cuántas piezas le quedarán fuera?

function legosRemaining (totalLegos,legosPerBunch){
    const legos=moduleNumbers(totalLegos,legosPerBunch);
    console.log ('El número de legos que le restarán a Sabrina es '+legos)
}

legosRemaining(500,80)

//Ejercicio 21
//2️⃣1️⃣ Macarena quiere repartir 72 galletas entre 9 perros. ¿Cuántas galletas recibirá cada perro?
function cookiesForEachDog(totalCookies,totalDogs){
    const cookies=divideNumbers(totalCookies,totalDogs);
    console.log('El número de galletas que le tocará a cada perro es de '+cookies)
}

cookiesForEachDog(72,9)

//Ejercicio22
//2️⃣2️⃣ Abby quiere comprar 5 cuchillos. Si cada uno cuesta 18 euros, ¿cuánto pagará en total?
function abbysKnives(knivesPrice,totalKnives){
    const knives=multiplyNumbers(knivesPrice,totalKnives);
    console.log('El total que Abby tendrá que pagar por los cuchillos es de '+knives)
}

abbysKnives(18,5)

//Ejercicio23
//2️⃣3️⃣ Bego tiene 480 galletas y quiere ponerlas en bolsas de 40 galletas cada una. ¿Cuántas bolsas llenará?
function filledBags (totalCookies,cookiesPerBag){
    const bags=divideNumbers(totalCookies,cookiesPerBag);
    console.log('El número de bolsas que bego tendrá es de '+bags)
}

filledBags(480,40)

//Ejercicio24
//2️⃣4️⃣ Camila recorrió 1.200 km en un viaje de 4 días. ¿Cuántos kilómetros recorrió por día?
function totalKilometersCamilaDrove(totalKm,totalDays){
    const kilometers=totalKm/totalDays;
    console.log('El número de kilometros que recorrió Camila cada día de su viaje es '+kilometers)
}

totalKilometersCamilaDrove(1200,4)

//Ejercicio25
//2️⃣5️⃣ Sabrina ahorró 120 euros en enero y 85 euros en febrero. ¿Cuánto dinero ha ahorrado en total?
function totalMoneySabrinaSaved(moneyJanuary,moneyFebruary){
    const moneySaved=sumNumbers(moneyJanuary,moneyFebruary);
    console.log('La cantidad final de euros que Sabrina ahorró es de '+moneySaved)
}

totalMoneySabrinaSaved(120,85)

//Ejercicio26
//2️⃣6️⃣ Macarena tiene 73 caramelos y quiere repartirlos entre sus amigos en grupos de 6. ¿Cuántos caramelos le sobrarán?
function remainingCandies (totalCandies,groups){
    const candies=moduleNumbers(totalCandies,groups);
    console.log('El número de caramelos que a Macarena le sobrarán es de '+candies)
}

remainingCandies(73,6)

//Ejercicio27
//2️⃣7️⃣ Abby registró 17 casas por la mañana y 8 por la tarde. ¿Cuántas casas registró en total?
function totalHousesAbbyChecked (housesMorning,housesEvening){
    const houses=housesEvening+housesMorning;
    console.log('El número total de casas que Abby registro es '+houses)
}

totalHousesAbbyChecked(17,8)

//Ejercicio28
//2️⃣8️⃣ Bego tiene 95 fotos y quiere hacer álbumes donde caben 12 fotos en cada uno. ¿Cuántas fotos no podrá guardar en los álbumes?
function remainingPictures (totalPhotos,photosPerAlbum){
    const pictures= moduleNumbers(totalPhotos,photosPerAlbum);
    console.log('El total de fotos que le restarán a Bego es '+pictures)
}

remainingPictures(95,12)

//Ejercicio29
//2️⃣9️⃣ Camila tiene un descuento de 15 euros en un producto que cuesta 120 euros. ¿Cuánto cuesta el producto después del descuento?
function finalPrice (originalPrice,discount){
    const finalPrice=substractNumbers(originalPrice,discount);
    console.log('El precio final del producto es '+finalPrice)
}

finalPrice(120,15)

//Ejercicio30
//3️⃣0️⃣ Sabrina tiene 500 gramos de harina y quiere hacer porciones de 24 gramos cada una para preparar galletas. ¿Cuánta harina le sobrará después de hacer todas las porciones completas?
function remainingFlour (totalFlour,flourPerPortion){
    const flour= moduleNumbers(totalFlour,flourPerPortion);
    console.log('Al final a Sabrina le restará un total de harina de '+flour)
}

remainingFlour(500,24)