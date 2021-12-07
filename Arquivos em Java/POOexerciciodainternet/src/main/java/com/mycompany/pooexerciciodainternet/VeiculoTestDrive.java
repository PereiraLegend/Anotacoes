/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
/*
O exercicio é o seguinte, devem ser criadas duas classes, uma chamada “Veiculos” e outra “VeiculosTestDrive”…

Na Classe “Veiculos” devem conter a "Cor, Marca, Modelo, Numero de passageiro (npass), Quantidade de Litros (qtlitros).

Nesta classe deve ser aplicado os “Metodos”(não sei se chama-se de metodo) “Get e Set”, deve haver um construtor,
um inicializador, todos os atributos, Mostrar a quantidade de litros, e quanto ele abastece.
Na Classe “VeiculosTestDrive” deve conter 2 tipos de veiculos,
o 1° é Branco, da Marca Volks, do Tipo Fox, com 5 passageiros e “zero” de combustivel.

o 2° é Azul da Marca GM, Tipo Spin, tem 7 passageiros e “zero” de combustivel.

o Veiculo Numero 1, deve abastecer 30 litros e mostra-los.

o Veiculo Numero 2, deve abastecer 40 litros e mostra-los.
*/
package com.mycompany.pooexerciciodainternet;

/**
 *
 * @author Lucas
 */
public class VeiculoTestDrive {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Veiculo c1 = new Veiculo();
        c1.setcor("vermelho");
        c1.setmarca("Audi");
        c1.setmodelo("A8");
        c1.setconcerto(false);
        c1.setnpassageiros(4);
        c1.setlitros(40);
        c1.StatusG();
        c1.Cor();
        c1.Luxo();
        c1.Viagens();
        c1.Concerto();
        System.out.println("----------------------------------------------------");
        Veiculo c2 = new Veiculo();
        c2.setcor("azul");
        c2.setmarca("Ford");
        c2.setmodelo("s10");
        c2.setconcerto(true);
        c2.setnpassageiros(2);
        c2.setlitros(10);
        c2.StatusG();
        c2.Cor();
        c2.Luxo();
        c2.Viagens();
        c2.Concerto();
    }
}
