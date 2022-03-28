// Registering component in log-component.js
AFRAME.registerComponent("log",{
    schema:{
        message : {type : "string", default : "Hello World!"}
    },
    init : function(){
        console.log(this.data.message)
    },
    update : function(){
          //do somethign when component's data is updated
    },
    remove : function(){

    },
    tick : function(){

    }

})