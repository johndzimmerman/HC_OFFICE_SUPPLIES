const cds = require('@sap/cds')
module.exports = function (){
    
    this.on ('get_supplier_info', async() =>{
        try{
            const db = await cds.connect.to('db')
            const dbClass = require("sap-hdb-promisfied")
            let dbConn = new dbClass(await dbClass.createConnection(db.operations.credentials))
            const hdbext = require("@sap/hdbext")
            console.log(hdbext)
            const sp = await dbConn.loadProcedurePromisified(hdbext,null,'get_supplier_info')
            const output = await dbConn.callProcedurePromisified(sp,[])
            console.log(output.results)
            return output.results
        } catch(error) {
            console.error(error)
            return
        }

    }) //> custom actions

  }