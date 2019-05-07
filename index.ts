// // ตัวอย่างโจทย์ 1
// const example1 = {name:'ex1',status:1};
// // เฉลย
// const result1:{name:string,status:number}= {name:'ex1',status:1};

// // ตัวอย่างโจทย์ 2
// const example2 = {xn:10,yn:{hp:10,status:'1'}};
// // เฉลย
// const result2 :{xn:number,yn:{hp:number,status:string}} = {xn:10,yn:{hp:10,status:'1'}};

// //โจทย์ 1
// const pokemon = {hitpoint:10,name:'Suparai'};
// //คำตอบ
// const result3 : {hitpoint:number,name:string} = {hitpoint:10,name:'Suparai'};
// console.log(result3);


// //โจทย์ 2
// const akito = {nameWa:'Akito',secretNo:20,security:{key:100,code:'ASS10'},register:new Date()};
// // คำตอบ
// const result5 : {nameWa:string,secretNo:number,security:{key:number,code:string},register:Date} = {nameWa:'Akito',secretNo:20,security:{key:100,code:'ASS10'},register:new Date()};
// console.log(result5);

// //โจทย์ 3
// const myTest = {isValid:false};
// // คำตอบ
// const  result6 : {isValid:boolean} = {isValid:false};
// console.log(result6);


// const findArea = (x,y)=>x*y;
// const result7 : (x:number,y:number)=>number = (x,y)=> x*y;
// console.log(result7(2,3));
// // โจทย์ 2
// const xfindArea = (x,y,z) => {
//   console.log('Hello');
//   return x*y+2-10;
// }
// //คำตอบ
// const result8 : (x:number,y:number,z:number)=>number = (x,y,z)=>x*y+2-10;
// console.log(result8(2,3,4));
//  // โจทย์ 3
//const optimize:()=>string = () => 'xxxxx';

// //คำตอบ
// const result9 : ()=>string;

// // โจทย์ 4
// const opopo = (x,y)=> `${x} and ${y} is same`;
// //คำตอบ
// const result10 : (x:string,y:string)=>string = (x,y)=>`${x} and ${y} is same`;
// console.log(result10('nam','egg'));
// โจทย์ 5
const suruzu = (man:any)=>{
  console.log('test man');
  return {x:10,y:20};
}
//คำตอบ
const suruzu1:(man:any)=>{x:number,y:number} = (man:any)=>{
  console.log('test man');
  return {x:10,y:20};
}


// โจทย์ 6
const convertDateToTime = (date:Date)=>date.getTime();
//คำตอย
const convertDateToTime1:(date:Date)=>number = (date:Date)=>date.getTime();
// โจทย์ 7
const getMyDetailModule = ()=>{
  return {app:'module',detail:{operation:true}};
}
//คำตอบ
const getMyDetailModule1:()=>{app:string,detail:{operation:boolean}} = 
()=>({app:'module',detail:{operation:true}})
console.log(getMyDetailModule1);

