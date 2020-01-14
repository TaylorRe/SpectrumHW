import React, * as react from 'react'
import './index.css'

class TableComponent extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          data: [
             { day: 1, spent: arrayOfRandomNum[0] , bonus: arrayOfBonus[0]},
             { day: 2, spent: arrayOfRandomNum[1], bonus: arrayOfBonus[1]},
             { day: 3, spent: arrayOfRandomNum[2], bonus: arrayOfBonus[2]},
             { day: 4, spent: arrayOfRandomNum[3], bonus: arrayOfBonus[3]},
             { day: 5, spent: arrayOfRandomNum[4] , bonus: arrayOfBonus[4]},
             { day: 6, spent: arrayOfRandomNum[5], bonus: arrayOfBonus[5]},
             { day: 7, spent: arrayOfRandomNum[6], bonus: arrayOfBonus[6]},
             { day: 8, spent: arrayOfRandomNum[7], bonus: arrayOfBonus[7]},
             { day: 9, spent: arrayOfRandomNum[8] , bonus: arrayOfBonus[8]},
             { day: 10, spent: arrayOfRandomNum[9], bonus: arrayOfBonus[9]},
             { day: 11, spent: arrayOfRandomNum[10], bonus: arrayOfBonus[10]},
             { day: 12, spent: arrayOfRandomNum[11], bonus: arrayOfBonus[11]},
             { day: 13, spent: arrayOfRandomNum[12] , bonus: arrayOfBonus[12]},
             { day: 14, spent: arrayOfRandomNum[13], bonus: arrayOfBonus[13]},
             { day: 15, spent: arrayOfRandomNum[14], bonus: arrayOfBonus[14]},
             { day: 16, spent: arrayOfRandomNum[15], bonus: arrayOfBonus[15]},
             { day: 17, spent: arrayOfRandomNum[16] , bonus: arrayOfBonus[16]},
             { day: 18, spent: arrayOfRandomNum[17], bonus: arrayOfBonus[17]},
             { day: 19, spent: arrayOfRandomNum[18], bonus: arrayOfBonus[18]},
             { day: 20, spent: arrayOfRandomNum[19], bonus: arrayOfBonus[19]},
             { day: 21, spent: arrayOfRandomNum[20] , bonus: arrayOfBonus[20]},
             { day: 22, spent: arrayOfRandomNum[21], bonus: arrayOfBonus[21]},
             { day: 23, spent: arrayOfRandomNum[22], bonus: arrayOfBonus[22]},
             { day: 24, spent: arrayOfRandomNum[23], bonus: arrayOfBonus[23]},
             { day: 25, spent: arrayOfRandomNum[24], bonus: arrayOfBonus[24]},
             { day: 26, spent: arrayOfRandomNum[25], bonus: arrayOfBonus[25]},
             { day: 27, spent: arrayOfRandomNum[26], bonus: arrayOfBonus[26]},
             { day: 28, spent: arrayOfRandomNum[27], bonus: arrayOfBonus[27]},
             { day: 29, spent: arrayOfRandomNum[28], bonus: arrayOfBonus[28]},
             { day: 30, spent: arrayOfRandomNum[29], bonus: arrayOfBonus[29]},
          ],


          data2: [
            { day: 1, spent: arrayOfRandomNum2[0] , bonus: arrayOfBonus2[0]},
            { day: 2, spent: arrayOfRandomNum2[1], bonus: arrayOfBonus2[1]},
            { day: 3, spent: arrayOfRandomNum2[2], bonus: arrayOfBonus2[2]},
            { day: 4, spent: arrayOfRandomNum2[3], bonus: arrayOfBonus2[3]},
            { day: 5, spent: arrayOfRandomNum2[4] , bonus: arrayOfBonus2[4]},
            { day: 6, spent: arrayOfRandomNum2[5], bonus: arrayOfBonus2[5]},
            { day: 7, spent: arrayOfRandomNum2[6], bonus: arrayOfBonus2[6]},
            { day: 8, spent: arrayOfRandomNum2[7], bonus: arrayOfBonus2[7]},
            { day: 9, spent: arrayOfRandomNum2[8] , bonus: arrayOfBonus2[8]},
            { day: 10, spent: arrayOfRandomNum2[9], bonus: arrayOfBonus2[9]},
            { day: 11, spent: arrayOfRandomNum2[10], bonus: arrayOfBonus2[10]},
            { day: 12, spent: arrayOfRandomNum2[11], bonus: arrayOfBonus2[11]},
            { day: 13, spent: arrayOfRandomNum2[12] , bonus: arrayOfBonus2[12]},
            { day: 14, spent: arrayOfRandomNum2[13], bonus: arrayOfBonus2[13]},
            { day: 15, spent: arrayOfRandomNum2[14], bonus: arrayOfBonus2[14]},
            { day: 16, spent: arrayOfRandomNum2[15], bonus: arrayOfBonus2[15]},
            { day: 17, spent: arrayOfRandomNum2[16] , bonus: arrayOfBonus2[16]},
            { day: 18, spent: arrayOfRandomNum2[17], bonus: arrayOfBonus2[17]},
            { day: 19, spent: arrayOfRandomNum2[18], bonus: arrayOfBonus2[18]},
            { day: 20, spent: arrayOfRandomNum2[19], bonus: arrayOfBonus2[19]},
            { day: 21, spent: arrayOfRandomNum2[20] , bonus: arrayOfBonus2[20]},
            { day: 22, spent: arrayOfRandomNum2[21], bonus: arrayOfBonus2[21]},
            { day: 23, spent: arrayOfRandomNum2[22], bonus: arrayOfBonus2[22]},
            { day: 24, spent: arrayOfRandomNum2[23], bonus: arrayOfBonus2[23]},
            { day: 25, spent: arrayOfRandomNum2[24], bonus: arrayOfBonus2[24]},
            { day: 26, spent: arrayOfRandomNum2[25], bonus: arrayOfBonus2[25]},
            { day: 27, spent: arrayOfRandomNum2[26], bonus: arrayOfBonus2[26]},
            { day: 28, spent: arrayOfRandomNum2[27], bonus: arrayOfBonus2[27]},
            { day: 29, spent: arrayOfRandomNum2[28], bonus: arrayOfBonus2[28]},
            { day: 30, spent: arrayOfRandomNum2[29], bonus: arrayOfBonus2[29]},
         ], 

         data3: [
            { day: 1, spent: arrayOfRandomNum3[0] , bonus: arrayOfBonus3[0]},
            { day: 2, spent: arrayOfRandomNum3[1], bonus: arrayOfBonus3[1]},
            { day: 3, spent: arrayOfRandomNum3[2], bonus: arrayOfBonus3[2]},
            { day: 4, spent: arrayOfRandomNum3[3], bonus: arrayOfBonus3[3]},
            { day: 5, spent: arrayOfRandomNum3[4] , bonus: arrayOfBonus3[4]},
            { day: 6, spent: arrayOfRandomNum3[5], bonus: arrayOfBonus3[5]},
            { day: 7, spent: arrayOfRandomNum3[6], bonus: arrayOfBonus3[6]},
            { day: 8, spent: arrayOfRandomNum3[7], bonus: arrayOfBonus3[7]},
            { day: 9, spent: arrayOfRandomNum3[8] , bonus: arrayOfBonus3[8]},
            { day: 10, spent: arrayOfRandomNum3[9], bonus: arrayOfBonus3[9]},
            { day: 11, spent: arrayOfRandomNum3[10], bonus: arrayOfBonus3[10]},
            { day: 12, spent: arrayOfRandomNum3[11], bonus: arrayOfBonus3[11]},
            { day: 13, spent: arrayOfRandomNum3[12] , bonus: arrayOfBonus3[12]},
            { day: 14, spent: arrayOfRandomNum3[13], bonus: arrayOfBonus3[13]},
            { day: 15, spent: arrayOfRandomNum3[14], bonus: arrayOfBonus3[14]},
            { day: 16, spent: arrayOfRandomNum3[15], bonus: arrayOfBonus3[15]},
            { day: 17, spent: arrayOfRandomNum3[16] , bonus: arrayOfBonus3[16]},
            { day: 18, spent: arrayOfRandomNum3[17], bonus: arrayOfBonus3[17]},
            { day: 19, spent: arrayOfRandomNum3[18], bonus: arrayOfBonus3[18]},
            { day: 20, spent: arrayOfRandomNum3[19], bonus: arrayOfBonus3[19]},
            { day: 21, spent: arrayOfRandomNum3[20] , bonus: arrayOfBonus3[20]},
            { day: 22, spent: arrayOfRandomNum3[21], bonus: arrayOfBonus3[21]},
            { day: 23, spent: arrayOfRandomNum3[22], bonus: arrayOfBonus3[22]},
            { day: 24, spent: arrayOfRandomNum3[23], bonus: arrayOfBonus3[23]},
            { day: 25, spent: arrayOfRandomNum3[24], bonus: arrayOfBonus3[24]},
            { day: 26, spent: arrayOfRandomNum3[25], bonus: arrayOfBonus3[25]},
            { day: 27, spent: arrayOfRandomNum3[26], bonus: arrayOfBonus3[26]},
            { day: 28, spent: arrayOfRandomNum3[27], bonus: arrayOfBonus3[27]},
            { day: 29, spent: arrayOfRandomNum3[28], bonus: arrayOfBonus3[28]},
            { day: 30, spent: arrayOfRandomNum3[29], bonus: arrayOfBonus3[29]},
         ]

       }
    }
 
    
    renderTableHeader() {
       let header = Object.keys(this.state.data[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 

    renderTableData() {
       return this.state.data.map((data, index) => {
          const { day, spent, bonus} = data
          return (
             <tr key={day}>
                <td>{day}</td>
                <td>{spent}</td>
                <td>{bonus}</td>
             </tr>
          )
       })
    }

    renderTableData2() {
      return this.state.data2.map((data, index) => {
         const { day, spent, bonus} = data
         return (
            <tr key={day}>
               <td>{day}</td>
               <td>{spent}</td>
               <td>{bonus}</td>
            </tr>
         )
      })
   }

   renderTableData3() {
      return this.state.data3.map((data, index) => {
         const { day, spent, bonus} = data
         return (
            <tr key={day}>
               <td>{day}</td>
               <td>{spent}</td>
               <td>{bonus}</td>
            </tr>
         )
      })
   }
 
    render() {
       return (
          <div>
             <h1 id='title'>Month #1 Bonus Report</h1>
             <table id='data'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
       <h2> Total bonus points for Month #1 = {totalBonus1} </h2> 

         <div> 
            <h3 id='title'> Month #2 Bonus Report</h3>
             <table id='data'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData2()}
                </tbody>
             </table>
            <h2> Total bonus points for Month #2 = {totalBonus2}</h2>
         </div>
             
         <div> 
            <h4 id='title'> Month #3 Bonus Report</h4>
             <table id='data'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData3()}
                </tbody>
             </table>
             <h2> Total bonus points for Month #3 = {totalBonus3} </h2>
         </div>
         

          </div>

         

       )
    }
 }

 // Month 1's variables and creatiing its table 
 var totalBonus1 = 0;
 var arrayOfRandomNum = []; 
for( var i = 0; i < 30; i ++){
      arrayOfRandomNum.push(Math.floor(Math.random()*1000)+1); 
   }
var arrayOfBonus = [];

for( var i = 0; i <arrayOfRandomNum.length; i++){
   if(arrayOfRandomNum[i] >= 100){
      arrayOfBonus[i] = ((arrayOfRandomNum[i]-100) * 2 ) + 50;
   }

   if(arrayOfRandomNum[i]>= 50 && arrayOfRandomNum[i] < 100){
      arrayOfBonus[i] = arrayOfRandomNum[i] - 50;
   }

   if(arrayOfRandomNum[i] < 50){
      arrayOfBonus[i] = 0;
   }
}

for(var i = 0; i < arrayOfBonus.length; i++){
   totalBonus1 = totalBonus1 + arrayOfBonus[i];
}



//Month 2's variables and making its table 
var totalBonus2 = 0;
var arrayOfRandomNum2 = []; 
for( var i = 0; i < 30; i ++){
   arrayOfRandomNum2.push(Math.floor(Math.random()*1000)+1); 
}

var arrayOfBonus2 = [];
for( var i = 0; i <arrayOfRandomNum2.length; i++){
if(arrayOfRandomNum2[i] >= 100){
   arrayOfBonus2[i] = ((arrayOfRandomNum2[i]-100) * 2 ) + 50;
}

if(arrayOfRandomNum2[i]>= 50 && arrayOfRandomNum2[i] < 100){
   arrayOfBonus2[i] = arrayOfRandomNum2[i] - 50;
}

if(arrayOfRandomNum2[i] < 50){
   arrayOfBonus2[i] = 0;
}
}

for(var i = 0; i < arrayOfBonus2.length; i++){
totalBonus2 = totalBonus2 + arrayOfBonus2[i];
}




//Month 3's variables and making its table 
var totalBonus3 = 0;
var arrayOfRandomNum3 = []; 
for( var i = 0; i < 30; i ++){
   arrayOfRandomNum3.push(Math.floor(Math.random()*1000)+1); 
}

var arrayOfBonus3 = [];
for( var i = 0; i <arrayOfRandomNum3.length; i++){
   if(arrayOfRandomNum3[i] >= 100){
      arrayOfBonus3[i] = ((arrayOfRandomNum3[i]-100) * 2 ) + 50;
   }

   if(arrayOfRandomNum3[i]>= 50 && arrayOfRandomNum3[i] < 100){
      arrayOfBonus3[i] = arrayOfRandomNum3[i] - 50;   
   }  

   if(arrayOfRandomNum3[i] < 50){
      arrayOfBonus3[i] = 0;
  }
}

for(var i = 0; i < arrayOfBonus3.length; i++){
      totalBonus3 = totalBonus3 + arrayOfBonus3[i];
   }

 
 export default TableComponent;

 