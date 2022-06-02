using hc450.officesupplies as officesupplies from '../db/schema';
   
   service CatalogService {
    @odata.draft.enabled :true      
    entity Suppliers @(restrict : [
     { grant : [ 'READ' ], to : [ 'Vendor' ] },
     { grant : [ '*' ], to : [ 'ProcurementManager' ] }
     ])as projection on officesupplies.Suppliers;
    entity Products @(restrict : [
     { grant : [ 'READ' ], to : [ 'Vendor' ] },
     { grant : [ '*' ], to : [ 'ProcurementManager' ] } 
     ])as projection on officesupplies.Products;

       function get_supplier_info() returns array of Suppliers;
   };
