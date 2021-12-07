/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/File.java to edit this template
 */
package com.mycompany.metodosswingpretest;

import com.mycompany.metodosswingpretest.Calculos;

/**
 *
 * @author Lucas
 */
public class TesteClasse {

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        // TODO code application logic here
        Calculos f = new Calculos();
        f.setValor(5);
        System.out.print(f.getFormula());
        System.out.println(f.getFatorial());
        //Obs.: Aqui ele mostraria 5*4*3*2*1 = 120 omo resultado
    }
}
