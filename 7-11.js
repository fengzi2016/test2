/**
 * Created by root on 17-7-11.
 */
/*pos0*/
var collection=[
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }
];
function every_sum(collection){
    var every_sum=[];
    for(var i=0;i<collection.length;i++){
        every_sum.push(collection[i].price*collection[i].count);
    }
    return every_sum;
}
/*1:20*/
function all_sum(collection) {
    var all_sum=0;
    for(var i=0;i<collection.length;i++){
        all_sum+=collection[i];
    }
    return all_sum;
}
/*1:02*/
function print(collection,every_sum,all_sum) {
    var str="***<没钱赚商店>收据***";
    var str1="";
    for(var i=0;i<every_sum.length;i++){
        str1=str1+'名称：'+collection[i].name+','+'数量：'+collection[i].count+','+
            '单价：'+collection[i].price+'.00'+'(元),小计：'+every_sum[i]+'.00'+'(元)'+'\n';
    }
    str=str+'\n'+str1+'----------------------'+'\n'+'总计：'+all_sum+'.00'+'(元)'+'\n'+'**********************';
    return str;

}
/*8:42*/
var everySum=every_sum(collection);
var allSum=all_sum(everySum);
var after_print=print(collection,everySum,allSum);
console.log(after_print);
