import './list.css'
import {Label,List} from './label'

function ListItems1(props){
  const {title,des,isActive,onDelete,onLabelClick}=props
    return( <div className='list-item1'>
      <h1>{title}</h1>
      <h3>{des}</h3>

      <Label  /> <br /><br />

      <List onDelete={onDelete} isActive={isActive} onAction={onLabelClick} />
    </div>)
  }
  
  export default ListItems1;