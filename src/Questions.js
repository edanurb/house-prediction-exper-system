import * as React from 'react';
import deneme from './deneme.json'


export default function Questions(){
    
    const dataJSON={
  
        id:"1",
        rule:"Rules",
        child:[
          {
            id:"2",
            rule:"Ilce == \"Çankaya\"",
            result:"20",
            child:[]
          },
          {
            id:"3",
            rule:"sema",
            child:[
              {
                id:"8",
                rule:"blaa",
                child:[]
              },
              {
                id:"10",
                rule:"blaa",
                child:[
                  {
                    id:"18",
                    rule:"blaa",
                    child:[]
                  },
                  {
                    id:"110",
                    rule:"blaa",
                    child:[]
                  }
          
                ]
              }
      
            ]
          },
          {
            id:"4",
            rule:"gaye",
            child:[
              {
                id:"5",
                rule:"bla"
              }
      
            ]
      
          }
        ]
        
    };

    dataJSON.child.forEach(function(element){
        element=element.split(" ")
        
        console.log("is")
    })
    

}