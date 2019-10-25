import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const TodoForm = props => {

    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div  className='todoForm form'>
            <div className="row">
                <Grid cols="12 9 9">
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}></input>
                </Grid>

                <Grid cols="12 3 3">
                    <IconButton icon="plus"
                        styleCss="primary"
                        onClick={props.handleAdd}/>
                    <IconButton  icon='search'
                        styleCss='info'
                        onClick={props.handleSearch} />
                    <IconButton
                        styleCss='default' icon='close'
                        onClick={props.handleClear} />
                </Grid>
            </div>
        </div>
    )
}

export default TodoForm