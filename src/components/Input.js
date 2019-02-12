import React, { Component } from 'react';
class Input extends React.Component {
   
    constructor(props)
    {
      super(props);
      this.state = {
          fields: {},
          errors: {}
      }
    }
    handleChange(field, e)
    {         
      localStorage.setItem(field,e.target.value)
    }  
    
    render() {
      return <div className='Input'>
                <input name={ this.props.name } onChange={this.handleChange.bind(this,  this.props.name)} type={ this.props.type }  placeholder={ this.props.placeholder } required autocomplete='false'/>
                <label for={ this.props.name }  ></label>
        </div>
    }
  }
  export default Input;