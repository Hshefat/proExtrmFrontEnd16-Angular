import { IWorkOrder } from "./work-order.model";

export interface IStyle extends IWorkOrder {
    woOrderDto: IWorkOrder[]; 
    recid: any;
    companyid: any;
    inventorytype: any;
    inventorycode: any;
    inventoryname: any;
    groupid: any;
    categoryid: any;
    plucode: any;
    accesscode: any;
    isclass: any;
    parentid: any;
    unitid: any;
    taxid: any;
    vatid: any;
    retailvatid: any;
    retailreturnvatid: any;
    wholesalevatid: any;
    wholesalereturnvatid: any;
    hasvariant: any;
    hasrowvariant: any;
    hasseries: any;
    hasseparableseries: any;
    iswithholdable: any;
    withholdingfactor: any;
    withholdingdivisor: any;
    swithholdingfactor: any;
    swithholdingdivisor: any;
    producerinventorycode: any;
    currentaccountid: any;
    itemdepartmentid: any;
    ctspid: any;
    routeid: any;
    tracking: any;
    isqcrequried: any;
    istool: any;
    ispackagingmaterial: any;
    depreciationtype: any;
    depreciationrate: any;
    depreciationperiod: any;
    salvagevalue: any;
    revaluation: any;
    partialdepreciation: any;
    isbuilding: any;
    depreciationstartdate: any;
    depreciationenddate: any;
    purchasecost: any;
    purchasedate: any;
    purchasedocument: any;
    purchaseamount: any;
    solddate: any;
    solddocument: any;
    soldamount: any;
    shelflife: any;
    shelflifeunit: any;
    useforcommon: any;
    useforpurchase: any;
    useforsale: any;
    markid: any;
    modelid: any;
    seasoncode: any;
    campaigngroup: any;
    pricegroup: any;
    isodocumentno: any;
    webcontent: any;
    symbolid: any;
    stext: any;
    ctext: any;
    variant1typeid: any;
    variant2typeid: any;
    variant3typeid: any;
    variant4typeid: any;
    variant5typeid: any;
    variant1typecontroltype: any;
    variant2typecontroltype: any;
    variant3typecontroltype: any;
    variant4typecontroltype: any;
    variant5typecontroltype: any;
    inuse: any;
    islocked: any;
    specialcode: any;
    density: any;
    recipequantity: any;
    recipeunititemid: any;
    fcomposition: any;
    fwidth: any;
    fweight: any;
    frawwidth: any;
    frawweight: any;
    fpus: any;
    ffine: any;
    fproductionmethod: any;
    washcare: any;
    fabrictypeid: any;
    bholes: any;
    btype: any;
    bline: any;
    zsize: any;
    zlength: any;
    ztype1: any;
    ztype2: any;
    ztype3: any;
    cmtprice: any;
    stylecardid: any;
    workorderid: any;
    texarttype: any;
    employeeid: any;
    representativeid: any;
    technicianid: any;
    patterncutterid: any;
    productionmerchandiserid: any;
    fixedassetdepreciationid: any;
    deniertype: any;
    denier: any;
    isfinally: any;
    iswarp: any;
    productiontype: any;
    mastersize: any;
    masterweight: any;
    mastertime: any;
    machinegg: any;
    sizevariancetext: any;
    masterpiecetimetotal: any;
    masterpieceweighttotal: any;
    patternno: any;
    mainstylecardid: any;
    previousstylecardid: any;
    stylesampletypeid: any;
    stylesamplerevisionno: any;
    stylesizesetvariantcardid: any;
    isshoppingsample: any;
    issample: any;
    samplestatus: any;
    samplestatusat: any;
    samplestatusby: any;
    widthshrinkage: any;
    lengthshrinkage: any;
    washingcode: any;
    wiwashingsymbol: any;
    wibleachingsymbol: any;
    witumbledryingsymbol: any;
    winaturaldryingsymbol: any;
    wiironingsymbol: any;
    wichemicalcleaningsymbol: any;
    wiwetcleaningsymbol: any;
    styleweight: any;
    packagingweight: any;
    ischecked: any;
    isapproved: any;
    isprinted: any;
    printcount: any;
    lockedat: any;
    lockedby: any;
    insertedat: any;
    insertedby: any;
    updatedat: any;
    updatedby: any;
    isdeleted: any;
    deletedat: any;
    deletedby: any;
    uuid: any;
    ud_boardtype: any;
    ud_boardmeas: any;
    ud_width: any;
    ud_bmaterial: any;
    ud_buttonbrand: any;
    ud_hole: any;
    ud_badgetype: any;
    ud_lettering: any;
    ud_bracelettype: any;
    ud_braceletlettering: any;
    ud_braceletmeasurement: any;
    ud_rivettype: any;
    ud_rivetwidth: any;
    ud_suspendertype: any;
    ud_suspendersize: any;
    ud_belttype: any;
    ud_beltsize: any;
    ud_bucklesize: any;
    ud_zty: any;
    ud_zb: any;
    ud_zn: any;
    ud_zp: any;
    ud_zs: any;
    ud_bandanacomp: any;
    ud_bandanalogo: any;
    ud_zte: any;
    ud_bandanamea: any;
    ud_zta: any;
    ud_drawtype: any;
    ud_drawcomp: any;
    ud_drawsize: any;
    ud_ttype: any;
    ud_tcount: any;
    ud_ttex: any;
    ud_ttkt: any;
    ud_tcode: any;
    ud_gumtype: any;
    ud_cartonply: any;
    ud_gumbrand: any;
    ud_cartontype: any;
    ud_gumtmeas: any;
    ud_cartonmeas: any;
    ud_elastictype: any;
    ud_elasticend: any;
    ud_elasticwidth: any;
    ud_hangertype: any;
    ud_eyelettype: any;
    ud_hangersize: any;
    ud_eyeletmeas: any;
    ud_labeltype: any;
    ud_hanhooktype: any;
    ud_labelcomp: any;
    ud_labelcountry: any;
    ud_tissuetype: any;
    ud_tissuemeas: any;
    ud_interlingtype: any;
    ud_interwidth: any;
    ud_lacecomp: any;
    ud_lacetype: any;
    ud_lacewidth: any;
    ud_stickertype: any;
    ud_stickersize: any;
    ud_securitytype: any;
    ud_rhinetype: any;
    ud_rhinesize: any;
    ud_stringtype: any;
    ud_stringcomp: any;
    ud_foamtype: any;
    ud_foammes: any;
    ud_washname: any;
    ud_gender: any;
    ud_factory: any;
    ud_smv: any;
    ud_learningcurve: any;
    ud_fabtype: any;
    ud_fabcode: any;
    ud_fabcomposition: any;
    ud_fabconstruction: any;
    ud_fabweavedesign: any;
    ud_fabfinish: any; 
    

}
