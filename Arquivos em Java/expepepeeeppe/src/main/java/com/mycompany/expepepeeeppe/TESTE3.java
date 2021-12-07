/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.expepepeeeppe;

/**
 *
 * @author Lucas
 */
public class TESTE3 {
    public static void main(String[] args){
        int[] NOMECURSO = {'S','I','S','T','E','M','A'};
        char[] CODCURSO = new char[4];
        System.arraycopy(NOMECURSO,0,CODCURSO,0,4);
        System.out.println(new String(CODCURSO));
        System.arraycopy(args, 0, args, 0, 0);
    }
}
