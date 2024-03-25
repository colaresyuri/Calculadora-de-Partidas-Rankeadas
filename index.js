// Função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador;
function calcularVitorias(vitorias, derrotas){
    // Calcula o saldo de Rankeadas considerando vitórias e derrotas
    let saldoRankeadas = vitorias - derrotas
    
    // Determina o nível com base no saldo de vitórias e derrotas
    let nivel;
    if (saldoRankeadas < 10){
        nivel = "Ferro"
    } else if (saldoRankeadas <=20){
        nivel = "Bronze"
    } else if (saldoRankeadas <=50){
        nivel = "Prata"
    } else if (saldoRankeadas <=80){
        nivel = "Ouro"
    } else if (saldoRankeadas <=90){
        nivel = "Diamante"
    } else if (saldoRankeadas <=100){
        nivel = "Lendário"
    } else {
        // Se saldoRankeado for maior que 100, então é "Imortal"
        nivel = "Imortal"
    }
    
    // Exibe a mensagem
    console.log("O herói tem um saldo de " + saldoRankeadas + " vitórias e está no Rank " + nivel)
    }
    
    calcularVitorias(91, 9)