import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (
      <li  className="list-group-item">
          <input type="checkbox" checked={this.props.item.isSelected} onChange={() => this.props.changeSelectd(this.props.item.id)}/>
          {this.props.item.title}
          <button className="btn btn-xs pull-right" onClick={() => this.props.deleteTodo(this.props.item.id)}>&times;</button>
      </li>
      )
  }
}