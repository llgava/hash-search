import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

// Style
import { IconButton, DropdownMenuList } from './styles';

function Dropdrown() {
  const Icon = 'https://cdn.discordapp.com/avatars/156188713603432459/16aa83538d1c1969bd7699e2d76d5991';

  return (
    <DropdownMenuList>
      <div>
        <img src={Icon} alt='Teste'/>
        <div>
          <p>Monster#0001</p>
          <span>See your bots</span>
        </div>
      </div>
    </DropdownMenuList>
  );
}

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
          <FaAngleDown className='teste' size='40' onClick={ShowOrHide} />
        </IconButton>

        { onDropdown
          ? <React.Fragment />
          : <Dropdrown />
        }
      </>
    );
  }
}
