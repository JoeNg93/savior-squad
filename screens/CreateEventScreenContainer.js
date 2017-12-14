import React, { Component } from 'react';
import CreateEventScreen from './CreateEventScreen';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CreateEventScreenContainer extends Component {
  static propTypes = {
    onClickCloseCreateEvent: PropTypes.func
  };

  static defaultProps = {
    onClickCloseCreateEvent: () => {}
  };

  render() {
    const { onClickCloseCreateEvent, allCases, selectedCaseId } = this.props;
    return (
      <CreateEventScreen
        onClickCloseCreateEvent={onClickCloseCreateEvent}
        caseInfo={allCases[selectedCaseId]}
      />
    );
  }
}

const mapStateToProps = state => ({
  allCases: state.cases.allCases,
  selectedCaseId: state.cases.selectedCaseId
});

export default connect(mapStateToProps, {})(CreateEventScreenContainer);
