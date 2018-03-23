import React, { Component } from 'react'
import FaClose from 'react-icons/lib/fa/close'
import FaCheck from 'react-icons/lib/fa/check'

class Item extends Component {
    constructor(props) {
        super(props)
        
        this.doneTask = this.doneTask.bind(this)
        this.remove = this.remove.bind(this)
    }
    doneTask(){
       console.log('item : deon'); 
       this.props.onDone(this.props.index);
    }
    remove() {
        console.log(this.props.index)
        this.props.onRemove(this.props.index)
    }
    render() {
        return (
            <div className={ this.props.status ? 'itemDone' : 'item'}>
                <FaClose className="close" onClick={this.remove}/>
                <input type="checkbox" default="false" onChange={this.doneTask}/>
                {this.props.children}
            </div>
        )
    }
}


export default Item;