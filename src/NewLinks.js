import React, {Component} from 'react'
import NewLink1 from './NewLink1'
import NewLink2 from './NewLink2'
import NewLink3 from './NewLink3'
import NewLink4 from './NewLink4'

class NewLinks extends Component{
    render(){
        return(
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
            
                <NewLink1 />

                <NewLink2 />

                <NewLink3 />

                <NewLink4 />
            
            </div>
        )
    }

}

export default NewLinks