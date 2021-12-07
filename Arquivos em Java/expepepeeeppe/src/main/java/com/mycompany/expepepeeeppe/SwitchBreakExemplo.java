/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.expepepeeeppe;

/**
 *
 * @author Lucas
 */
public class SwitchBreakExemplo {
    public static void main(String argas[]){
        int indice = 'b';
        var resultado = " ";
        switch(indice){
            case 'a': resultado+='a';break;
            case 'b': resultado+='b';break;
            case 'c': resultado+='c';break;
            default: resultado+='d';
                System.out.println(resultado);
        }
    }
}
