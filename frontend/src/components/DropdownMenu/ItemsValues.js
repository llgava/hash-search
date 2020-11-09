import { FaPlus, FaSignOutAlt, FaThList } from 'react-icons/fa';
import { logoutURL, myBotsURL } from '../../config.json';

import Colors from '../../assets/styles/Colors.json';

const IconsSize = 25;
export const ItemsValues = [
  {
    event: myBotsURL,
    icon: <FaThList size={IconsSize} color={Colors.dark_grey} />,
    label: {
      text: "My bots",
      color: Colors.dark_grey
    }
  },
  {
    event: undefined,
    icon: <FaPlus size={IconsSize} color={Colors.dark_grey} />,
    label: {
      text: "Add a bot",
      color: Colors.dark_grey
    }
  },
  {
    event: logoutURL,
    icon: <FaSignOutAlt size={IconsSize} color={Colors.red} />,
    label: {
      text: "Logout",
      color: Colors.red
    }
  }
]
