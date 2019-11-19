import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description, clear } = this.props

        return (
            <div  className='todoForm form'>
                <div className="row">
                    <Grid cols="12 9 9">
                        <input id='description' className='form-control'
                            placeholder='Adicione uma tarefa'
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description}></input>
                    </Grid>
    
                    <Grid cols="12 3 3">
                        <IconButton icon="plus"
                            styleCss="primary"
                            onClick={() => add(description)}/>
                        <IconButton  icon='search'
                            styleCss='info'
                            onClick={() => search()} />
                        <IconButton
                            styleCss='default' icon='close'
                            onClick={() => clear()} />
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ 
        changeDescription,
        search,
        add,
        clear 
    }, 
        dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)