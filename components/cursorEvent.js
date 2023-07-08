AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"}
    },
    init:function(){
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },
    handleMouseEnterEvent:function(){
        this.el.addEventListener("mouseenter",()=>{
            const id=this.el.getAttribute("id")
            console.log(id)
            const comicsId=["alpha-flight","darling","excalibur","unknown"]
            if(comicsId.includes(id)){
                const comicsContainer=document.querySelector("#comics-container")
                comicsContainer.setAttribute("cursor-listener",{selectedItemId:id})
                this.el.setAttribute("material",{color:"blue"})
            }
        })
    },
    handleMouseLeaveEvent:function(){
        this.el.addEventListener("mouseleave",()=>{
            if(this.data.selectedItemId){
                const el=document.querySelector(`#${this.data.selectedItemId}`)
                const id=el.getAttribute("id")
                if(id==this.data.selectedItemId){
                    el.setAttribute("material",{color:"white"})
                }
            }
        })
    },
})