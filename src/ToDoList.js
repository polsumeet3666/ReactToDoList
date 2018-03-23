import React,{Component} from 'react'
import Item from './Item'
import FaPlus from 'react-icons/lib/fa/plus';

class ToDoList extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            items : []
        }
        this.addItem = this.addItem.bind(this)
        this.getId = this.getId.bind(this)
        this.remove = this.remove.bind(this)
        this.eachItem = this.eachItem.bind(this)
        this.done = this.done.bind(this)
    }

    done(id){
        this.setState(prevState => ({
            items: prevState.items.map(
                item => (item.id !== id) ? item : { ...item, status: !item.status }
            )
        }))
    }

  
    eachItem(item,i){
        return (
            <Item key={item.id}
                index = {item.id}
                onRemove={this.remove}
                onDone={this.done}
                status={item.status}>
           {item.task}
            </Item>
        )
    }
    getId() {

        if (this.state.items.length > 0){
            return this.state.items.length+1;
        }else {
            return 1;
        }
        
    }
    addItem(){
       // alert(this.task.value)
       let text = this.task.value
       if (text === ""){
           return;
       }
       this.setState( prevState => ({
            items : [
                ...prevState.items,
                {
                    id:this.getId(),
                    task:text,
                    status:false
                }
            ]
        }))
        
        this.task.value = ""
    }

   
    remove(id){
        this.setState(prevState => ({
            items : prevState.items.filter(item => item.id!=id)
        }))

    }
    
    render(){
        return (
            <div>
                <input id="input"  ref={input => this.task =input} defaultValue=""/>
                
                <button id="add" onClick={this.addItem }>Add Task</button>
                <div id="itemList">
                    {this.state.items.map(this.eachItem)}
                </div>    
            </div>
        )
    }
}

export default ToDoList;