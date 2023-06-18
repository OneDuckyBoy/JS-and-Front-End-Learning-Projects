function Ages(age){
    if(age>=0&&age<3){
        return "baby"
    }else if(age>=3&&age<14){
        return "child"
    }else if(age>=14&&age<20){
        return "teenager"
    }else if(age>=20&&age<66){
    return "adult"
    }else if(age>=66){
        return "elder"
    }else{
        return "out of bounds"
    }
}