const sourceObject ={
    traits : {
        first_name : {
        value : 'Bob',
        source_id : 1 ,
        updated_at : 1623238587468
        },
        emails_opened_last_30_days : {
        value :33,
        source_id: 2,
        updated_at: 1623238601089
        },
    },
    cursor : {
        url : '/v1/spaces/lgJ4AAjFN4',
        has_more : false,
        next : ''
    }
};
//deep copy
const newObject1 = JSON.parse(JSON.stringify(sourceObject));
//sheallow copy
const newObject2 = Object.assign({}, sourceObject);
const newObject3 = {...sourceObject};
console.log(sourceObject.traits.first_name.source_id); //1

newObject1.traits.first_name.source_id = 100;
console.log(sourceObject.traits.first_name.source_id); //1

newObject2.traits.first_name.source_id = 200;
console.log(sourceObject.traits.first_name.source_id); //100

newObject3.traits.first_name.source_id = 300;
console.log(sourceObject.traits.first_name.source_id); //300

function deepCopyObject(obj){
    const clone = {};
    for(const key in obj){
        if(typeof obj[key] == "object" && obj[key] !=null){
            clone[key] = deepCopyObject(obj[key]);
        }else{
            clone[key] = obj[key];
        }
    }
    return clone;
}