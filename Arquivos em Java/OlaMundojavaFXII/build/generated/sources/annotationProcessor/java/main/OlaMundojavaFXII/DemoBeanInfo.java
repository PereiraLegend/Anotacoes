package OlaMundojavaFXII;
/** @see Demo */
abstract class DemoBeanInfo implements com.dukescript.api.javafx.beans.FXBeanInfo.Provider {
    private com.dukescript.api.javafx.beans.FXBeanInfo info;
    protected DemoBeanInfo() {
        com.dukescript.api.javafx.beans.FXBeanInfo.newBuilder(this).build();
    }

    @java.lang.Override
    public com.dukescript.api.javafx.beans.FXBeanInfo getFXBeanInfo() {
      if (info == null) {
        Demo obj = (Demo) this;
        com.dukescript.api.javafx.beans.FXBeanInfo.Builder b = com.dukescript.api.javafx.beans.FXBeanInfo.newBuilder(obj);
        b.property("desc", obj.desc);
        b.property("todos", obj.todos);
        b.property("numTodos", obj.numTodos);
        b.action("addTodo", obj::addTodo);
        this.info = b.build();
      }
      return info;
    }
}
