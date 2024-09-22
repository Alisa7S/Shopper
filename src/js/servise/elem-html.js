export default class ElemHTL{
    //elem = document.createElement('div')
    constructor(tag ='div'){
        this.elem = document.createElement(tag)
    }

    setClasses(className = ''){
        this.elem.classList.add(className)
    }
    removeClasses(className = ''){
        this.elem.classList.remove(className)
    }
    render(container = 'body'){
        if(!container){
            return
        }
        document. querySelector (container).append(htis.elem)
    }
    addInnerHTL(content){
        if(!content){
            return
        }
        this.elem.insertAdjacentHTML('beforebegin',content)
    }
}