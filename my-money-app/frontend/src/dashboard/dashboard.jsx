import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'
import ValueBox from '../common/widget/value-box'
import Row from '../common/layout/row'

import {getSummary} from './dashboard-actions'

class Dashboard extends Component {
	componentWillMount() {
		this.props.getSummary()
	}
	render() {
		const {credit, debt} = this.props.summary

		return (
			<div>
			<ContentHeader 
				title='Dashboard' 
				subtitle='versão 1.0' 
			/>
				<Content>
					<Row>
						<ValueBox
							cols='12 4'	
							value={`R$ ${credit}`}
							text='Créditos'
							color='green'
							icon='bank' 
						/>
						<ValueBox
							cols='12 4'
							value={`R$ ${debt}`}
							text='Débitos'
							color='red'
							icon='credit-card'
						/>
						<ValueBox
							cols='12 4'
							value={`R$ ${credit - debt}`}
							text='Saldo'
							color='blue'
							icon='money'
						/>
					</Row>
				</Content>
			</div>			
		);
	}
}

const mapStateToProps = (state) => ({summary: state.dashboard.summary})
const mapDispatchToProps = (dispatch) => bindActionCreators({
	getSummary,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)