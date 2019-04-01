import { connect } from 'react-redux';
import axios from 'axios';
import RealtorsList from '../components/RealtorsList/RealtorsList';
import { setRealtorsList } from '../actions';
import { setRealtor } from '../actions';

const mapStateToProps = state => {
  return state.realtors
};

const mapDispatchToProps = dispatch => ({
	setRealtor: id  => dispatch(setRealtor(id)),
	getRealtorsList: () => {
		axios.get(`http://localhost:8080/realtors`)
		    .then(res => {
		      const realtors = res.data;
		      dispatch(setRealtorsList(realtors));
		    });
	}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RealtorsList);