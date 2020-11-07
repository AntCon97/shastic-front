import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './createpage.css';

class CreatePage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      num: '',
      data: {},
      count: 0,
      message: '',
    };
  }

  componentDidUpdate() {
    const { count, num, name } = this.state;
    if (count < num.length + name.length) {
      this.setState({ count: count + 1 });
      console.log(name);
      console.log(num);
      if (num !== '' && name !== '') {
        this.setState({
          data: {
            name: this.state.name,
            number: this.state.num,
            id: this.props.id,
          },
        });
      }
    }
  }

  handleBack = (e) => {
    window.location.reload();
  };

  handleChange1 = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChange2 = (e) => {
    this.setState({ num: e.target.value });
  };

  handleSubmit = (e) => {
    const { num, name } = this.state;

    if (num === '' && name === '') {
      alert('Please enter a name and number');
    } else if (num === '') {
      alert('Please enter a valid num');
    } else if (name === '') {
      alert('Please enter a valid name');
    } else {
      this.setState({ count: this.state.count + 1 });

      const postMethod = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.state.data),
      };

      fetch('http://localhost:5000/api/v1/contacts/', postMethod)
        .then((response) => response.json())

        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <div className='edits'>
        <h1>Create Contact </h1>

        <div>
          <Input
            className='search1'
            type='search'
            placeholder='New Name Here'
            onChange={this.handleChange1}
          />
          <Input
            className='search'
            type='search'
            placeholder='New Number Here'
            onChange={this.handleChange2}
          />
        </div>

        <div className='btnGrp'>
          <ButtonGroup
            aria-label='outlined primary button group'
            className='btnGroup'
          >
            <Link to='/' className='link'>
              {' '}
              <Button>Back</Button>{' '}
            </Link>
            <Button
              onClick={() => this.handleSubmit()}
              ref={(input) => (this.inputElement = input)}
              className='link'
            >
              Submit
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.mainpage.id.id,
  };
};

export default connect(mapStateToProps)(CreatePage);
