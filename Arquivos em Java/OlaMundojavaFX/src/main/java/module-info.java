module com.mycompany.olamundojavafx {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.base;

    opens com.mycompany.olamundojavafx to javafx.fxml;
    exports com.mycompany.olamundojavafx;
}
