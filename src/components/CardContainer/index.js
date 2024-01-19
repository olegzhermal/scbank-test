import { connect } from 'react-redux'

import { CardContainer as Component} from './CardContainer';

const mapStateToProps = (state) => {
    return {
        cards: state.cards.data
    }
}

export const CardContainer = connect(mapStateToProps)(Component)