


class Database{
    connection;

    settings = {
        name: "todo_list_cv",
        version: "1.0",
        describe:"Database about todo list",
        size: 2 * 1024 * 1024
    }

    constructor() { //Acontecen sempre, não so quando é chamado
        this.connection = this.connect();
        this.createTable();
        this.readRows();
    }

    connect() {
        return openDatabase(this.settings.name, this.settings.version,
                                 this.settings.describe, this.settings.size)
    }

    createTable() {
        this.connection.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS LIST(id unique, task, done, data)');
        });
    }

    insertRow(task){

        var id = new Date().getTime();

        this.connection.transaction(function(tx){

            var query = 'INSERT INTO LIST(id, task, done) VALUES (';

            query += id + ',';
            query += '"' + task + '",';
            query += '0)';

            tx.executeSql(query);
        });
    }

    readRows() {
        this.connection.transaction(function(tx){
            
            tx.executeSql('SELECT * FROM LIST', [], function(tx, result){
                
                var currentItem = 0;
                var totalItems = result.rows.length;

                while(currentItem< totalItems){

                    var row = result.rows[currentItem];
                    
                    console.log(row);

                    currentItem++;

                }

            }, null);
        });
    }

    writeRowInHtml(target, row){

        target.attr('data-id', row);
    }


    updateRow(id, status){
        this.connection.transaction(function(tx){

            var query = 'INSERT INTO LIST(id, task, done) VALUES (';

            query += id + ',';
            query += '"' + task + '",';
            query += '0)';

            tx.executeSql(query);
        });
    }
}   