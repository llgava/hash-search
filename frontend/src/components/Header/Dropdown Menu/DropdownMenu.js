import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

// Style
import { Container } from './styles';

const IconsSize = '32px';

export default class DropdownMenu extends React.Component {
  constructor() {
    super();
    this.state = { onDropdown: false };

  }

  render() {
    const onDropdown = this.state.onDropdown;

    const ShowOrHide = () => {
      if (onDropdown) this.setState({ onDropdown: false });
        else this.setState({ onDropdown: true })
    }

    return (
      <Container>
        <div> <FaAngleDown size={IconsSize} onClick={ShowOrHide} /> </div>

        { onDropdown
          ? <p>YES</p>
          : <React.Fragment />
        }
      </Container>
    );
  }
}
