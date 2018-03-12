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
    },
    getNotifications() {
        dispatcher.dispatch({
            type: actionTypes.GET_NOTIFICATIONS
        });
    },  
    changeValueNotificacion(name, value) {
        dispatcher.dispatch({
            type: actionTypes.CHANGE_VALUENOTIFICATION,
            name,
            value
        });
    }, 
    editNotificationData(value, id, name, email) {
        dispatcher.dispatch({
            type: actionTypes.EDIT_NOTIFICATIONDATA,
            value,
            id,
            name,
            email
        });
    },  
    saveChangesEditUser(id, name, email) {
        dispatcher.dispatch({
            type: actionTypes.SAVE_CHANGESEDITUSER,
            id,
            name,
            email
        });
    },  
    getParametersRange() {
        dispatcher.dispatch({
            type: actionTypes.GET_PARAMETERSRANGE
        });
    }  
};
export default Actions;
