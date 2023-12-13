import { IWorkOrder } from "./work-order.model";

export interface IStyle extends IWorkOrder{
    recId: any;
    id: any;
    categoryId: any;
    ctext: any;
    currentAccountId: any;
    employeeId: any;
    inUse: any; 
    producerInventoryCode: any; 
    inventoryType: any; 
    seasonCode: any; 
    itemDepartmentId: any; 
    markId: any; 
    patternCutterId: any; 
    productionMerchandiserId: any; 
    representativeId: any; 
    routeId: any; 
    woOrderDto:IWorkOrder[];



    inventoryCode: any; 
    inventoryName: any; 
    protoTypeStyle: any; 
    
    accessCode: any; 
    customer: any; 
    department: any; 
   
    gender: any; 
    
    specialCode: any; 
    technicianId: any; 
    brand: any; 

    category: any; 
    
    udPcertification: any; 
    customerStyleNo: any; 
    styleDeal: any; 
    factory:any; 

    udSmv: any; 
    print: any; 
    emprodery:any; 
    udOldCode: any; 
    complexityMatrix:any; 
    route: any; 
    udLearningCurve: any;  
    nonWash: any; 



    washColorName: any; 
    styleDescription: any; 


    buyersContract: any; 
    
    technician: any; 
  
    gpq: any; 
    teamLeader: any; 


}
