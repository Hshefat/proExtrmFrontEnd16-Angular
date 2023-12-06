import { IWorkOrder } from "./work-order.model";

export interface IStyle extends IWorkOrder{
    recId: any;
    id: any;
    categoryId: any;
    ctext: any;
    currentAccountId: any;
    employeeId: any;
    inUse: any;
    inventoryCode: any; 
    inventoryName: any; 
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
}
