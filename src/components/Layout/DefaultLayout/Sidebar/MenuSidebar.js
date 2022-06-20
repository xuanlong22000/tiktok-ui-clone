import { faHome, faUserFriends, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MENU_SIDEBAR=[
    {
        icon : <FontAwesomeIcon icon={faHome}/>,
        title:'For you'
    },
    {
        icon:<FontAwesomeIcon icon={faUserFriends}/>,
        title:'Following'
    },
    {
        icon:<FontAwesomeIcon icon={faVideoCamera}/>,
        title:'Watch videos'
    }
]