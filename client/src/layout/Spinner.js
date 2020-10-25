import React,{Fragment} from 'react'
import spinner from './spinner.gif'
 const Spinner= () => {
    return (
        <Fragment>
            <img alt="loading" src={spinner} style={{width:"200px", margin:"auto",display:"block"}}/>
        </Fragment>
    )
}
 export default Spinner
