interface IBasePrescriptionObj {
    label : string,
    value : string
}

interface IDose {

}

interface IBasePrescription {
    complaints ?: Array<IBasePrescriptionObj>,
    diagnosis ?: Array<IBasePrescriptionObj>,
    tests ?: Array<IBasePrescriptionObj>,
    testTiming ?: IBasePrescriptionObj,
    medicines ?: Array<IMedicine>,
}


interface IPrescription {

}

interface IMedicine {
    name : string,
    type : EMedType,
    dose ?: string,
    duration ?: string,
    frequency ?: string,
    instructions ?: string,
    
}

enum EMedType {
    tablet = "tablet",
    capsule = "capsule",
    syrup = "syrup",
    injection = "injection",
    ointment = "ointment",
    drop = "drop",
    inhaler = "inhaler",
    spray = "spray",
    cream = "cream",
    gel = "gel",
    lotion = "lotion",
    suppository = "suppository",
    suspension = "suspension",
    solution = "solution",
    powder = "powder",
    shampoo = "shampoo",
    mouthwash = "mouthwash",
    lozenge = "lozenge",
    patch = "patch",
    aerosol = "aerosol",
    paste = "paste",
    rinse = "rinse",
    gargle = "gargle",
    enema = "enema",
    foam = "foam",
    tape = "tape",
    film = "film",
    strip = "strip",
    sponge = "sponge",
    troche = "troche",
    wafer = "wafer",
    chew = "chew",
    gum = "gum",
    implant = "implant",
    sprinkle = "sprinkle",
    cream = "cream",
    ointment = "ointment",
    lotion = "lotion",
    shampoo = "shampoo",
    solution = "solution",
    suspension = "suspension"

}