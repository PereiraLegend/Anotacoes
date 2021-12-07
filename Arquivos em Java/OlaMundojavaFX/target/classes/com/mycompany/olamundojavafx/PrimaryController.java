/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/javafx/FXMLController.java to edit this template
 */
package com.mycompany.olamundojavafx;

import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.Initializable;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.label;


/**
 * FXML Controller class
 *
 * @author Lucas
 */
public class PrimaryController implements Initializable {

    /**
     * Initializes the controller class.
     */
    @FXML
    private Label lblMensagem;
    private Button btnClique;
    @FXML
    private void clicouBotao(ActionEvent event){
        lblMensagem.setText("Olá Mundo!");
    }
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }    
    
}
