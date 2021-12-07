package com.mycompany.av2Viewn;

import DAO.LeitorDAO;
import DTO.LeitorDTO;
import java.sql.Connection; 
import java.sql.DriverManager; 
import java.sql.SQLException; 
import java.util.ArrayList;
import javax.swing.DefaultComboBoxModel;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
/**
 *
 * @author Lucas Pereira Dos Santos(202002552051) & Alexandre Lucas Carvalho Souza(202002120991) & João Lucas de Sousa Santos (201802367462) 
 */
public class CadastroLeitor extends javax.swing.JFrame {
    /**
     * Creates new form CadastroLeitor 
     */
    
    public CadastroLeitor() {
        initComponents();
        listarLeitores();
        this.setLocationRelativeTo(null);
    }
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        txtNome = new javax.swing.JTextField();
        txtCpf = new javax.swing.JTextField();
        txtTelefone = new javax.swing.JTextField();
        txtEmail = new javax.swing.JTextField();
        btnCadastre = new javax.swing.JButton();
        lblStatusGeral = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        ListaLeitor = new javax.swing.JTable();
        btnEmprestimo = new javax.swing.JButton();
        btnMenu = new javax.swing.JButton();
        btnAtualizarLeitores = new javax.swing.JButton();
        btnSelecionar = new javax.swing.JButton();
        btnLimparCampos = new javax.swing.JButton();
        jLabel6 = new javax.swing.JLabel();
        txtId = new javax.swing.JTextField();
        btnAlterar = new javax.swing.JButton();
        btnExcluirLeitor = new javax.swing.JButton();
        jLabel7 = new javax.swing.JLabel();
        rbApto = new javax.swing.JRadioButton();
        rbPendente = new javax.swing.JRadioButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 18)); // NOI18N
        jLabel1.setText("Cadastro de Novo Leitor");

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel2.setText("Nome:");

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel3.setText("Cpf:");

        jLabel4.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel4.setText("Telefone:");

        jLabel5.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel5.setText("Email:");

        txtNome.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        txtNome.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                txtNomeActionPerformed(evt);
            }
        });

        txtCpf.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        txtTelefone.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        txtEmail.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        btnCadastre.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnCadastre.setText("Salvar/Cadastrar");
        btnCadastre.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnCadastreActionPerformed(evt);
            }
        });

        lblStatusGeral.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        lblStatusGeral.setText("------------------");

        ListaLeitor.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        ListaLeitor.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null}
            },
            new String [] {
                "Id", "Nome", "Cpf", "Emaill", "Telefone", "Situacao"
            }
        ) {
            Class[] types = new Class [] {
                java.lang.Integer.class, java.lang.String.class, java.lang.Integer.class, java.lang.String.class, java.lang.Integer.class, java.lang.String.class
            };
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false
            };

            public Class getColumnClass(int columnIndex) {
                return types [columnIndex];
            }

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        jScrollPane1.setViewportView(ListaLeitor);

        btnEmprestimo.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnEmprestimo.setText("Ir Para Emprestimos");
        btnEmprestimo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnEmprestimoActionPerformed(evt);
            }
        });

        btnMenu.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnMenu.setText("Ir Para o Menu");
        btnMenu.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnMenuActionPerformed(evt);
            }
        });

        btnAtualizarLeitores.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnAtualizarLeitores.setText("Atualizar Tabela");
        btnAtualizarLeitores.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAtualizarLeitoresActionPerformed(evt);
            }
        });

        btnSelecionar.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnSelecionar.setText("Selecionar Leitor");
        btnSelecionar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSelecionarActionPerformed(evt);
            }
        });

        btnLimparCampos.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnLimparCampos.setText("Limpar Campos");
        btnLimparCampos.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnLimparCamposActionPerformed(evt);
            }
        });

        jLabel6.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel6.setText("Id:");

        txtId.setEditable(false);
        txtId.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        txtId.setText("---------------");

        btnAlterar.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnAlterar.setText("Alterar dados do leitor");
        btnAlterar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnAlterarActionPerformed(evt);
            }
        });

        btnExcluirLeitor.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        btnExcluirLeitor.setText("Excluir Leitor");
        btnExcluirLeitor.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnExcluirLeitorActionPerformed(evt);
            }
        });

        jLabel7.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        jLabel7.setText("Situação:");

        buttonGroup1.add(rbApto);
        rbApto.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        rbApto.setText("Apto");
        rbApto.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                rbAptoActionPerformed(evt);
            }
        });

        buttonGroup1.add(rbPendente);
        rbPendente.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        rbPendente.setText("Pendente");
        rbPendente.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                rbPendenteActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(jLabel4)
                                        .addComponent(jLabel5, javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(jLabel3, javax.swing.GroupLayout.Alignment.TRAILING)
                                        .addComponent(jLabel2, javax.swing.GroupLayout.Alignment.TRAILING))
                                    .addGap(18, 18, 18)
                                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addComponent(txtEmail, javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(txtCpf, javax.swing.GroupLayout.Alignment.LEADING)
                                        .addComponent(txtNome, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, 277, Short.MAX_VALUE)
                                        .addComponent(txtTelefone)))
                                .addGroup(layout.createSequentialGroup()
                                    .addGap(128, 128, 128)
                                    .addComponent(jLabel1)))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel7)
                                .addGap(18, 18, 18)
                                .addComponent(rbApto)
                                .addGap(18, 18, 18)
                                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(layout.createSequentialGroup()
                                        .addComponent(jLabel6)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                        .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, 70, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addComponent(rbPendente))))
                        .addGap(92, 92, 92)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                .addComponent(btnExcluirLeitor, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(btnLimparCampos, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(btnAlterar)
                                .addGroup(layout.createSequentialGroup()
                                    .addComponent(lblStatusGeral)
                                    .addGap(37, 37, 37)))
                            .addComponent(btnCadastre, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 165, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(42, 42, 42)
                        .addComponent(btnMenu, javax.swing.GroupLayout.PREFERRED_SIZE, 129, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(313, 313, 313)
                        .addComponent(btnEmprestimo))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 553, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(btnSelecionar, javax.swing.GroupLayout.PREFERRED_SIZE, 143, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(btnAtualizarLeitores, javax.swing.GroupLayout.PREFERRED_SIZE, 143, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addGap(16, 16, Short.MAX_VALUE))
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
                            .addComponent(txtNome, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel2))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(txtCpf, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel3))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtEmail, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel5))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtTelefone, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel4))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(jLabel7)
                            .addComponent(rbApto)
                            .addComponent(rbPendente))
                        .addGap(18, 18, 18)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(txtId, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel6))
                        .addGap(0, 9, Short.MAX_VALUE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(btnCadastre)
                        .addGap(18, 18, 18)
                        .addComponent(btnLimparCampos)
                        .addGap(18, 18, 18)
                        .addComponent(btnAlterar)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(btnExcluirLeitor)
                        .addGap(29, 29, 29)
                        .addComponent(lblStatusGeral)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 139, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(38, 38, 38)
                        .addComponent(btnAtualizarLeitores)
                        .addGap(18, 18, 18)
                        .addComponent(btnSelecionar)))
                .addGap(53, 53, 53)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(btnMenu)
                        .addGap(16, 16, 16))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addComponent(btnEmprestimo)
                        .addGap(19, 19, 19))))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void txtNomeActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_txtNomeActionPerformed

    }//GEN-LAST:event_txtNomeActionPerformed

    private void btnCadastreActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnCadastreActionPerformed
        lblStatusGeral.setText("Cadastro Salvo!");
        JOptionPane.showMessageDialog(this, "Cadastrado com Sucesso!");
        cadastroleitores();
        listarLeitores();
        LimparLinhas();
        
    }//GEN-LAST:event_btnCadastreActionPerformed

    private void btnEmprestimoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnEmprestimoActionPerformed
        new Emprestimodelivro().setVisible(true);
        this.dispose();
    }//GEN-LAST:event_btnEmprestimoActionPerformed

    private void btnMenuActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnMenuActionPerformed
        new Menu().setVisible(true);
        this.dispose();
    }//GEN-LAST:event_btnMenuActionPerformed

    private void btnAtualizarLeitoresActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAtualizarLeitoresActionPerformed
        lblStatusGeral.setText("Lista Atualizada!");
        listarLeitores();
    }//GEN-LAST:event_btnAtualizarLeitoresActionPerformed

    private void btnSelecionarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSelecionarActionPerformed
        lblStatusGeral.setText("Leitor Selecionado!");
        CarregarNaslinhas();
    }//GEN-LAST:event_btnSelecionarActionPerformed

    private void btnLimparCamposActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnLimparCamposActionPerformed
        lblStatusGeral.setText("Campos Limpos!");
        LimparLinhas();
    }//GEN-LAST:event_btnLimparCamposActionPerformed

    private void btnAlterarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnAlterarActionPerformed
        lblStatusGeral.setText("Campos Alterados!");
        AlterarLeitor();
        listarLeitores();
        LimparLinhas();
    }//GEN-LAST:event_btnAlterarActionPerformed

    private void btnExcluirLeitorActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnExcluirLeitorActionPerformed
        lblStatusGeral.setText("Leitor Excluido!");
        ExcluirLeitor();
        listarLeitores();
        LimparLinhas();
    }//GEN-LAST:event_btnExcluirLeitorActionPerformed

    private void rbAptoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_rbAptoActionPerformed
        Situacao = "Apto";
    }//GEN-LAST:event_rbAptoActionPerformed

    private void rbPendenteActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_rbPendenteActionPerformed
        Situacao = "Pendente";
    }//GEN-LAST:event_rbPendenteActionPerformed

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
            java.util.logging.Logger.getLogger(CadastroLeitor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(CadastroLeitor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(CadastroLeitor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(CadastroLeitor.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new CadastroLeitor().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTable ListaLeitor;
    private javax.swing.JButton btnAlterar;
    private javax.swing.JButton btnAtualizarLeitores;
    private javax.swing.JButton btnCadastre;
    private javax.swing.JButton btnEmprestimo;
    private javax.swing.JButton btnExcluirLeitor;
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
    private javax.swing.JRadioButton rbApto;
    private javax.swing.JRadioButton rbPendente;
    private javax.swing.JTextField txtCpf;
    private javax.swing.JTextField txtEmail;
    private javax.swing.JTextField txtId;
    private javax.swing.JTextField txtNome;
    private javax.swing.JTextField txtTelefone;
    // End of variables declaration//GEN-END:variables
    private String Situacao;
    private void cadastroleitores(){
        String nome, email;
        int cpf, telefone;
        nome = txtNome.getText();
        cpf = Integer.parseInt(txtCpf.getText());
        email = txtEmail.getText();
        telefone = Integer.parseInt(txtTelefone.getText());
        Situacao = Situacao;
        
        LeitorDTO objLeitordto = new LeitorDTO();
        objLeitordto.setNome(nome);
        objLeitordto.setCpf(cpf);
        objLeitordto.setEmail(email);
        objLeitordto.setTelefone(telefone);
        objLeitordto.setSituacao(Situacao);
        
        LeitorDAO objLeitordao = new LeitorDAO();
        objLeitordao.cadastroLeitor(objLeitordto);
    }
    private void listarLeitores(){
        try {
            LeitorDAO objleitordao = new LeitorDAO();
            DefaultTableModel model = (DefaultTableModel) ListaLeitor.getModel();
            model.setNumRows(0);
            ArrayList<LeitorDTO> Lista = objleitordao.PesquisaLeitor();
            for(int num=0; num <Lista.size(); num++){
                model.addRow(new Object[]{
                    Lista.get(num).getId(),
                    Lista.get(num).getNome(),
                    Lista.get(num).getCpf(),
                    Lista.get(num).getEmail(),
                    Lista.get(num).getTelefone(),//aqui  
                    Lista.get(num).getSituacao(),
                });
            }
        } catch (Exception erro){
            JOptionPane.showMessageDialog(null, "ListarLeitores"+erro);
        }
        
    }
    private void CarregarNaslinhas(){
        int setar = ListaLeitor.getSelectedRow();
        txtId.setText(ListaLeitor.getModel().getValueAt(setar, 0).toString());
        txtNome.setText(ListaLeitor.getModel().getValueAt(setar, 1).toString());
        txtCpf.setText(ListaLeitor.getModel().getValueAt(setar, 2).toString());
        txtEmail.setText(ListaLeitor.getModel().getValueAt(setar, 3).toString());
        txtTelefone.setText(ListaLeitor.getModel().getValueAt(setar, 4).toString());
    }
    private void LimparLinhas(){
        txtId.setText("");
        txtNome.setText("");
        txtCpf.setText("");
        txtEmail.setText("");
        txtTelefone.setText("");
        
    }
    private void AlterarLeitor(){
        int Id, Cpf,Telefone;
        
        String Nome,Email;
        Id = Integer.parseInt(txtId.getText());
        Nome = txtNome.getText();
        Cpf = Integer.parseInt(txtCpf.getText());
        Email = txtEmail.getText();
        Telefone = Integer.parseInt(txtTelefone.getText());
        Situacao = Situacao;
        LeitorDTO objleitordto = new LeitorDTO();
        objleitordto.setId(Id);
        objleitordto.setNome(Nome);
        objleitordto.setCpf(Cpf);
        objleitordto.setEmail(Email);
        objleitordto.setTelefone(Telefone);
        objleitordto.setSituacao(Situacao);
        LeitorDAO objleitordao = new LeitorDAO();
        objleitordao.AlterarLeitor(objleitordto);
    }
    private void ExcluirLeitor(){
        int Id, Cpf,Telefone;
        String Nome,Email;
        Id = Integer.parseInt(txtId.getText());
        Nome = txtNome.getText();
        Cpf = Integer.parseInt(txtCpf.getText());
        Email = txtEmail.getText();
        Telefone = Integer.parseInt(txtTelefone.getText());
        Situacao = Situacao;
        LeitorDTO objleitordto = new LeitorDTO();
        objleitordto.setId(Id);
        objleitordto.setNome(Nome);
        objleitordto.setCpf(Cpf);
        objleitordto.setEmail(Email);
        objleitordto.setTelefone(Telefone);
        objleitordto.setSituacao(Situacao);
        LeitorDAO objleitordao = new LeitorDAO();
        objleitordao.ExcluirLeitor(objleitordto);
    }
}
