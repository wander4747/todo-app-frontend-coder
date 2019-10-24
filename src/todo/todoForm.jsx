import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

const TodoForm = props => {

    return (
        <form  className='todoForm form'>
            <div className="row">
                <Grid cols="12 9 10">
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={props.handleChange}
                        value={props.description}></input>
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton styleCss="primary" icon="plus" onClick={props.handleAdd}/>
                </Grid>
            </div>
        </form>
    )
}

export default TodoForm