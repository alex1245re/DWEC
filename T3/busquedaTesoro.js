/*       
                  +-------------------------+
                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
                  +----+----+----+----+-----¦
                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
                  +----+----+----+----+-----¦
                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
                  +----+----+----+----+-----¦
                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
                  +----+----+----+----+-----¦
                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
                  +-------------------------+
*/

    const matriz = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
    ];
    
    let fila = 1;
    let columna = 1;
    let encontrado = false;
        
    while (!encontrado) {
    // Sacamos el numero almacenado en esa posicion y las guardamos en valor
    let valor = matriz[fila -1][columna -1];
    console.log(`Estoy en (${fila}, ${columna}) → ${valor}`);

    // Sacamos el valor del primer digito, la fila, y lo multiplicamos por 10 y le sumamos el segundo valor,
    //por ejemplo si tenemos 4 * 10 + 2 = 42;
    if (valor === fila * 10 + columna) {
        console.log(`¡Tesoro encontrado en (${fila}, ${columna})!`);
        encontrado = true;
    }

    // Calculamos la siguiente posición
    //ej 34
    fila = Math.floor(valor / 10); // 34/10, fila = 3 
    columna = valor % 10; // 34 % 10, columa = 4
    }