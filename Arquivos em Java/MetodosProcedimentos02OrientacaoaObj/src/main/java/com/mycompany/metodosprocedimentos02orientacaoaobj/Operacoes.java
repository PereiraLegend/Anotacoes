/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.metodosprocedimentos02orientacaoaobj;

/**
 *
 * @author Lucas
 */
public class Operacoes {
    //obs.: visibilidade public
    /*
    public static String contador(int i, int f){
        String s = " ";
        for(int c = i; c<=f;c++){
            s += c + " ";
        }
        return s;
    }
    */
    //Se eu quiser alterar a visibilidade de public para private, o contador do outro codigo na linha 20 não vai deixar executar
    private static String contador(int i, int f){
        String s = " ";
        for(int c = i; c<=f;c++){
            s += c + " ";
        }
        return s;
    }
}
