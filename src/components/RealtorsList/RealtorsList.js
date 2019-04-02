import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

import './RealtorsList.scss';

class RealtorsList extends Component {
  state = {
    default: '',
  }

  handleChange = (e, {name, value}) => {
    this.setState({[name]: value});
    this.props.setRealtor(value);
    this.props.setUnreadMessages(this.props.realtors[value].unread_messages);
  }

  componentDidMount() {
    this.props.getRealtorsList();
  }

  render() {
    const getOptions = () => (
        Object.values(this.props.realtors).map(realtor => {
          return {
            key: realtor.id,
            text: realtor.name,
            value: realtor.id,
            image: { avatar: true, src: realtor.logo }
          };
        })
    );

    return(
      <Dropdown placeholder="Agences" name="default" options={getOptions()} direction="left" onChange={this.handleChange} />
    );
  }
}

export default RealtorsList;
