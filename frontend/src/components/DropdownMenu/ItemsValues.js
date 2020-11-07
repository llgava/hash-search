import { FaCrown, FaSignOutAlt, FaThList, FaUser } from 'react-icons/fa';
import { logoutURL, myBotsURL, accountSettingsURL } from '../../config.json';

import Colors from '../../assets/styles/Colors.json';

const IconsSize = 25;
export const ItemsValues = [
  {
    event: undefined,
    icon: <FaCrown size={IconsSize} color={Colors.dark_grey} />,
    label: {
      text: "Administrative panel",
      color: Colors.dark_grey
    }
  },
  {
    event: myBotsURL,
    icon: <FaThList size={IconsSize} color={Colors.dark_grey} />,
    label: {
      text: "My bots",
      color: Colors.dark_grey
    }
  },
  {
    event: accountSettingsURL,
    icon: <FaUser size={IconsSize} color={Colors.dark_grey} />,
    label: {
      text: "Account settings",
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
