class Database{
    connection;

    settings = {
        name: "todo_list_cv",
        version: "1.0",
        describe:"Database about todo list",
        size: 2 * 1024 * 1024
    }

    constructor() {
        this.connection = this.connect();
        this.createTable();
    }

    connect() {
        return openDatabase(this.settings.name, this.settings.version,
                                 this.settings.describe, this.settings.size)
    }

    createTable() {
        this.connection.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS LIST(id unique, task, done)');
        });
    }
}   