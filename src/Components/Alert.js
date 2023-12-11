import React from 'react'

export default function Alert(props) {
    const capitilize=(word)=>{
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    // this will evaluate first if this is null then it can't go further to evaluate next
    props.alert &&<div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">
  <strong className='center'>{capitilize(props.alert.type)}</strong>:{props.alert.msg} 
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}
