import * as React from 'react'
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails'

class ModelDetailsContainer extends React.Component {

    render() {
        if (!this.props.model) return null

        return (
            <div>
                {this.props.models.map((model, index) => {
                     return <ModelDetails key={index} model={model} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { models: state.selectedModels }
}

export default connect(mapStateToProps)(ModelDetailsContainer)