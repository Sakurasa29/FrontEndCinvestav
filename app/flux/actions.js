import actionTypes from './actionTypes';
import dispatcher from './dispatcher';

const Actions = {
    getUserInfo() {
        dispatcher.dispatch({
            type: actionTypes.GET_USERINFO
        });
    },
    getMenuTypes() {
        dispatcher.dispatch({
            type: actionTypes.GET_MENUTYPES
        });
    },
    getSensorTypes() {
        dispatcher.dispatch({
            type: actionTypes.GET_SENSORTYPES
        });
    } 
};
export default Actions;
