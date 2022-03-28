AFRAME.registerComponent("move-box",{
    schema:{
        moveX : {type : "number", default : "1"}
    },
    tick : function(){
        this.data.moveX = this.data.moveX + 0.01

        //this.el.getAttribute(): get the current values of position attribute.
     //this.el -- gives reference to the entity as an HTML element.
     
     var pos = this.el.getAttribute("position")
     pos.x = this.data.moveX

     // Used to set the updated value of the position attribute.
     this.el.setAttribute("position", {x:pos.x, y:pos.y, z:pos.z})


    }
})