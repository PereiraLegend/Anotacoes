package com.mycompany.av2Viewn;

import DAO.LivroDAO;
import DTO.LivroDTO;
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 
import java.util.ArrayList;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
/**
 *
 * @author Lucas Pereira
 */
public class CadastroLivro extends javax.swing.JFrame {

    /**
     * Creates new form CadastroLivro
     */
    public CadastroLivro() {
        initComponents();
        listarLivros();
        this.setLocationRelativeTo(null);
    }
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        txtEditora = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        txtAutor = new javax.swing.JTextField();
        txtId = new javax.swing.JTextField();
        btnCadastre = new javax.swing.JButton();
        btnAlterar = new javax.swing.JButton();
        lblStatusGeral = new javax.swing.JLabel();
        btnExcluirLivro = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        ListaLivro = new javax.swing.JTable();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        btnEmprestimo = new javax.swing.JButton();
        jLabel4 = new javax.swing.JLabel();
        btnMenu = new javax.swing.JButton();
        jLabel5 = new javax.swing.JLabel();
        btnAtualizarLivros = new javax.swing.JButton();
        txtTitulo = new javax.swing.JTextField();
        btnSelecionar = new javax.swing.JButton();
        txtAno = new javax.swing.JTextField();
        btnLimparCampos = new javax.swing.JButton();
        jLabel7 = new javax.swing.JLabel();
        rbGuardado = new javax.swing.JRadioButton();
        rbEmprestado = new javax.swing.JRadioButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        txtEditora.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        jLabel6.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel6.setText("Id:");

        txtAutor.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        txtId.setEditable(false);
        txtId.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        txtId.setText("---------------");

        btnCadastre.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnCadastre.setText("Salvar/Cadastrar");
        btnCadastre.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastreActionPerformed(evt);
            }
        });

        btnAlterar.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnAlterar.setText("Alterar");
        btnAlterar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAlterarActionPerformed(evt);
            }
        });

        lblStatusGeral.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        lblStatusGeral.setText("------------------");

        btnExcluirLivro.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnExcluirLivro.setText("Excluir Livro");
        btnExcluirLivro.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnExcluirLivroActionPerformed(evt);
            }
        });

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        jLabel1.setText("Cadastro de Novo Livro");

        ListaLivro.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        ListaLivro.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null},
                {null, null, null, null, null, null, null, null}
            },
            new String [] {
                "Id", "Titulo", "Ano", "Autor", "Editora", "Situacao", "DataDevolucao", "CodigoLeitorEmprestado"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.Integer.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class, java.lang.String.class
            };
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane1.setViewportView(ListaLivro);

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel2.setText("Título:");

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel3.setText("Ano:");

        btnEmprestimo.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnEmprestimo.setText("Ir Para Emprestimos");
        btnEmprestimo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEmprestimoActionPerformed(evt);
            }
        });

        jLabel4.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel4.setText("Editora:");

        btnMenu.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnMenu.setText("Ir Para o Menu");
        btnMenu.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnMenuActionPerformed(evt);
            }
        });

        jLabel5.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel5.setText("Autor:");

        btnAtualizarLivros.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnAtualizarLivros.setText("Atualizar Tabela");
        btnAtualizarLivros.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAtualizarLivrosActionPerformed(evt);
            }
        });

        txtTitulo.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        txtTitulo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtTituloActionPerformed(evt);
            }
        });

        btnSelecionar.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnSelecionar.setText("Selecionar Livro");
        btnSelecionar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSelecionarActionPerformed(evt);
            }
        });

        txtAno.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        btnLimparCampos.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnLimparCampos.setText("Limpar Campos");
        btnLimparCampos.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnLimparCamposActionPerformed(evt);
            }
        });

        jLabel7.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel7.setText("Situacao:");

        buttonGroup1.add(rbGuardado);
        rbGuardado.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        rbGuardado.setText("Guardado");
        rbGuardado.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                rbGuardadoActionPerformed(evt);
            }
        });

        buttonGroup1.add(rbEmprestado);
        rbEmprestado.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        rbEmprestado.setText("Emprestado");
        rbEmprestado.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                rbEmprestadoActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(btnCadastre, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnLimparCampos, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnAlterar, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(btnExcluirLivro, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(139, 139, 139))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(52, 52, 52)
                .addComponent(btnMenu, javax.swing.GroupLayout.PREFERRED_SIZE, 129, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(btnEmprestimo)
                .addGap(39, 39, 39))
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addContainerGap()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addGroup(layout.createSequentialGroup()
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                                .addComponent(jLabel4, javax.swing.GroupLayout.Alignment.TRAILING)
                                                .addComponent(jLabel7, javax.swing.GroupLayout.Alignment.TRAILING))
                                            .addComponent(jLabel5, javax.swing.GroupLayout.Alignment.TRAILING)
                                            .addComponent(jLabel3, javax.swing.GroupLayout.Alignment.TRAILING)
                                            .addComponent(jLabel2, javax.swing.GroupLayout.Alignment.TRAILING))
                                        .addGap(18, 18, 18)
                                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                            .addComponent(txtAutor, javax.swing.GroupLayout.Alignment.LEADING)
                                            .addComponent(txtAno, javax.swing.GroupLayout.Alignment.LEADING)
                                            .addComponent(txtTitulo, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 277, Short.MAX_VALUE)
                                            .addComponent(txtEditora)
                                            .addGroup(javax.swing.GroupLayout.Alignment.LEADING, layout.createSequentialGroup()
                                                .addComponent(rbGuardado)
                                                .addGap(18, 18, 18)
                                                .addComponent(rbEmprestado))))
                                    .addGroup(layout.createSequentialGroup()
                                        .addGap(128, 128, 128)
                                        .addComponent(jLabel1)))
                                .addGap(129, 129, 129)
                                .addComponent(lblStatusGeral)
                                .addGap(9, 9, 9))
                            .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 580, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 18, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btnAtualizarLivros, javax.swing.GroupLayout.PREFERRED_SIZE, 143, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnSelecionar, javax.swing.GroupLayout.PREFERRED_SIZE, 143, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(144, 144, 144)
                        .addComponent(jLabel6)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtTitulo, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel2))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtAno, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel3))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtAutor, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel5))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtEditora, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel4))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(jLabel7)
                            .addComponent(rbGuardado)
                            .addComponent(rbEmprestado))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(btnCadastre)
                        .addGap(18, 18, 18)
                        .addComponent(btnLimparCampos)
                        .addGap(18, 18, 18)
                        .addComponent(btnAlterar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(btnExcluirLivro)
                        .addGap(18, 18, 18)
                        .addComponent(lblStatusGeral)))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel6))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 139, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(btnAtualizarLivros)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(btnSelecionar)
                        .addGap(59, 59, 59)))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnMenu)
                    .addComponent(btnEmprestimo))
                .addContainerGap())
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void btnCadastreActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCadastreActionPerformed
        lblStatusGeral.setText("Cadastro Salvo!");
        cadastroLivro();
        listarLivros();
        LimparLinhas();

    }//GEN-LAST:event_btnCadastreActionPerformed

    private void btnAlterarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAlterarActionPerformed
        lblStatusGeral.setText("Campos Alterados!");
        AlterarLivro();
        listarLivros();
        LimparLinhas();
    }//GEN-LAST:event_btnAlterarActionPerformed

    private void btnExcluirLivroActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnExcluirLivroActionPerformed
        lblStatusGeral.setText("Livro Excluido!");
        ExcluirLivro();
        listarLivros();
        LimparLinhas();
    }//GEN-LAST:event_btnExcluirLivroActionPerformed

    private void btnEmprestimoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEmprestimoActionPerformed
        new Emprestimodelivro().setVisible(true);
        this.dispose();
    }//GEN-LAST:event_btnEmprestimoActionPerformed

    private void btnMenuActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnMenuActionPerformed
        new Menu().setVisible(true);
        this.dispose();
    }//GEN-LAST:event_btnMenuActionPerformed

    private void btnAtualizarLivrosActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAtualizarLivrosActionPerformed
        lblStatusGeral.setText("Lista Atualizada!");
        listarLivros();
    }//GEN-LAST:event_btnAtualizarLivrosActionPerformed

    private void txtTituloActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtTituloActionPerformed

    }//GEN-LAST:event_txtTituloActionPerformed

    private void btnSelecionarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSelecionarActionPerformed
        lblStatusGeral.setText("Linha Carregada!");
        CarregarNaslinhas();
    }//GEN-LAST:event_btnSelecionarActionPerformed

    private void btnLimparCamposActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnLimparCamposActionPerformed
        lblStatusGeral.setText("Campos Limpos!");
        LimparLinhas();
    }//GEN-LAST:event_btnLimparCamposActionPerformed

    private void rbEmprestadoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_rbEmprestadoActionPerformed
        Situacao = "Emprestado";
    }//GEN-LAST:event_rbEmprestadoActionPerformed

    private void rbGuardadoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_rbGuardadoActionPerformed
        Situacao = "Guardado";
    }//GEN-LAST:event_rbGuardadoActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(CadastroLivro.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(CadastroLivro.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(CadastroLivro.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(CadastroLivro.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new CadastroLivro().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTable ListaLivro;
    private javax.swing.JButton btnAlterar;
    private javax.swing.JButton btnAtualizarLivros;
    private javax.swing.JButton btnCadastre;
    private javax.swing.JButton btnEmprestimo;
    private javax.swing.JButton btnExcluirLivro;
    private javax.swing.JButton btnLimparCampos;
    private javax.swing.JButton btnMenu;
    private javax.swing.JButton btnSelecionar;
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel lblStatusGeral;
    private javax.swing.JRadioButton rbEmprestado;
    private javax.swing.JRadioButton rbGuardado;
    private javax.swing.JTextField txtAno;
    private javax.swing.JTextField txtAutor;
    private javax.swing.JTextField txtEditora;
    private javax.swing.JTextField txtId;
    private javax.swing.JTextField txtTitulo;
    // End of variables declaration//GEN-END:variables
    private String Situacao;
    private void cadastroLivro(){
        String Titulo, Autor, Editora,Ano;
        Titulo = txtTitulo.getText();
        Autor = txtTitulo.getText();
        Editora = txtEditora.getText();
        Ano = txtAno.getText();
        Situacao = Situacao;
        LivroDTO objlivrodto = new LivroDTO();
        objlivrodto.setTitulo(Titulo);
        objlivrodto.setAutor(Autor);
        objlivrodto.setEditora(Editora);
        objlivrodto.setAno(Ano);
        objlivrodto.setSituacao(Situacao);
        LivroDAO objlivrodao = new LivroDAO();
        objlivrodao.CCadastroLivro(objlivrodto);
    }
    private void listarLivros(){
        try {
            LivroDAO objlivrodao = new LivroDAO();
            DefaultTableModel model = (DefaultTableModel) ListaLivro.getModel();
            model.setNumRows(0);
            ArrayList<LivroDTO> Lista = objlivrodao.PesquisaLivros();
            for(int num=0; num <Lista.size(); num++){
                model.addRow(new Object[]{
                    Lista.get(num).getId(),
                    Lista.get(num).getTitulo(),
                    Lista.get(num).getAno(),
                    Lista.get(num).getAutor(),
                    Lista.get(num).getEditora(),
                    Lista.get(num).getSituacao(),
                    Lista.get(num).getDataDevolucao(),
                    Lista.get(num).getCodigoLeitorEmprestado(),
                });
            }
        } catch (Exception erro){
            JOptionPane.showMessageDialog(null, "ListarLivros"+erro);
        }
    }
    private void CarregarNaslinhas(){
        int setar = ListaLivro.getSelectedRow();
        txtId.setText(ListaLivro.getModel().getValueAt(setar, 0).toString());
        txtTitulo.setText(ListaLivro.getModel().getValueAt(setar, 1).toString());
        txtAno.setText(ListaLivro.getModel().getValueAt(setar, 2).toString());
        txtAutor.setText(ListaLivro.getModel().getValueAt(setar, 3).toString());
        txtEditora.setText(ListaLivro.getModel().getValueAt(setar, 4).toString());
        buttonGroup1.getSelection().getActionCommand();
    }
    private void LimparLinhas(){
        txtId.setText("");
        txtTitulo.setText("");
        txtAno.setText("");
        txtAutor.setText("");
        txtEditora.setText("");  
    }
    private void AlterarLivro(){
        int Id;
        String Titulo,Ano,Autor,Editora;
        Id = Integer.parseInt(txtId.getText());
        Titulo = txtTitulo.getText();
        Ano = txtAno.getText();
        Autor = txtAutor.getText();
        Editora = txtEditora.getText();
        Situacao = Situacao;
        LivroDTO objlivrodto = new LivroDTO();
        objlivrodto.setId(Id);
        objlivrodto.setTitulo(Titulo);
        objlivrodto.setAno(Ano);
        objlivrodto.setAutor(Autor);
        objlivrodto.setEditora(Editora);
        objlivrodto.setSituacao(Situacao);
        LivroDAO objlivrodao = new LivroDAO();
        objlivrodao.AlterarLivro(objlivrodto);
    }
    private void ExcluirLivro(){
        int Id;
        String Titulo,Ano,Autor,Editora;
        Id = Integer.parseInt(txtId.getText());
        Titulo = txtTitulo.getText();
        Ano = txtAno.getText();
        Autor = txtAutor.getText();
        Editora = txtEditora.getText();
        Situacao = Situacao;
        LivroDTO objlivrodto = new LivroDTO();
        objlivrodto.setId(Id);
        objlivrodto.setTitulo(Titulo);
        objlivrodto.setAno(Ano);
        objlivrodto.setAutor(Autor);
        objlivrodto.setEditora(Editora);
        objlivrodto.setSituacao(Situacao);
        LivroDAO objlivrodao = new LivroDAO();
        objlivrodao.ExcluirLivro(objlivrodto);
    }
}
