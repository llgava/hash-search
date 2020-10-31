import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

// Style
import { IconButton } from './styles';

export default class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = { onDropdown: false };
  }

  render() {
    const onDropdown = this.state.onDropdown;

    // Define if the the site will show or hide the Dropdown Menu
    const ShowOrHide = () => {
      if (onDropdown) this.setState({ onDropdown: false });
        else this.setState({ onDropdown: true })
    }

    return (
      <>
        <IconButton>
          <FaAngleDown className='teste' size='60' onClick={ShowOrHide} />
        </IconButton>

        { onDropdown
          ? <p>YES</p>
          : <React.Fragment />
        }
      </>
    );
  }
}
