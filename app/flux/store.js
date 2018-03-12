import actionTypes from './actionTypes';
import dispatcher from './dispatcher';
import { EventEmitter } from 'events';
import assign from 'object-assign';
//import _ from 'underscore';

const CHANGE_EVENT = 'change';

let AppData = {
    data:{
        userInfo: null,
        menuOptions: null,
        sensorTypes: null,
        notification: null,
        editUser: {
            id: "",
            active: false,
            name: "",
            email: ""
        },
        myAccount: null,
        editAccount:{
            active: false,
            name: "",
            email: ""
        },
        parameters: null
    },
    getUserInfo(){
        $.getJSON('/app/data/login.js', function(info) {
            AppData.data.userInfo = info.infoLogin;
            $.getJSON('/app/data/menuTypes.js', function(info) {
                AppData.data.menuOptions = info.menuTypes[AppData.data.userInfo.type];
                AppStore.emitChange();
            }).fail(function(error) {
                console.error(error);
            });
        }).fail(function(error) {
            console.error(error);
        });
    },
    getSensorTypes(){
        $.getJSON('/app/data/sensorTypes.js', function(info){
            AppData.data.sensorTypes = info.sensorTypes;
            AppStore.emitChange();
        }).fail(function(error) {
            console.error(error);
        });
    },
    getNotifications(){
        $.getJSON('/app/data/notificationUsers.js', function(info){
            AppData.data.notification = info.NotificationUser; // comes from json 
            AppStore.emitChange();  
        }).fail(function(error) {
            console.error(error);
        });
    },
    changeValueNotificacion(action){
        AppData.data.notification.map((item,index)=>{
            if(action.name === item.name){
                AppData.data.notification[index].perday=!action.value;
                AppStore.emitChange();
            }
        });
    },
    editNotificationData(action){
        AppData.data.editUser.id=action.id;
        AppData.data.editUser.active=action.value;
        AppData.data.editUser.name=action.name;
        AppData.data.editUser.email=action.email;
        AppStore.emitChange();        
    },
    saveChangesEditUser(action){
        AppData.data.notification.map((item,index)=>{
            if(action.id === item.id){
                AppData.data.notification[index].name=action.name;
                AppData.data.notification[index].email=action.email;
                AppData.data.editUser.active=false;
                AppStore.emitChange();
            }
        });
    },
    getParametersRange(){
        $.getJSON('/app/data/parametersRange.js', function(info){
            AppData.data.parameters = info.parameterRange;
            console.log(info)
            AppStore.emitChange();  
        }).fail(function(error) {
            console.error(error);
        });
    },
/***********************************************************************************/    
    getMyAccount(){
        $.getJSON('/app/data/login.js', function(info){
            AppData.data.myAccount = info.infoLogin; // comes from json 
            AppStore.emitChange();  
        }).fail(function(error) {
            console.error(error);
        });
    },
    editMyAccountData(action){
        AppData.data.editAccount.active = action.value;
        AppData.data.editAccount.name=action.name;
        AppData.data.editAccount.email=action.email;
        AppStore.emitChange();        
    },
    saveChangesEditMyAccount(action){
        AppData.data.editAccount.active=false;
        AppData.data.myAccount.name=action.name;
        AppData.data.myAccount.email=action.email;
        AppStore.emitChange();
    }
}
/*************************************************** */

let AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});
/*************************************************** */

AppStore = assign({}, AppStore, {
    getData: () => {
        return AppData.data;
    }
});

dispatcher.register((action) => {
    switch (action.type) {
    case actionTypes.GET_USERINFO:
        AppData.getUserInfo();
        break;
    case actionTypes.GET_MENUTYPES:
        AppData.getMenuTypes();
        break;
    case actionTypes.GET_SENSORTYPES:
        AppData.getSensorTypes();
        break;
    case actionTypes.GET_NOTIFICATIONS:
        AppData.getNotifications();
        break;
    case actionTypes.CHANGE_VALUENOTIFICATION:
        AppData.changeValueNotificacion(action);
        break;
    case actionTypes.EDIT_NOTIFICATIONDATA:
        AppData.editNotificationData(action);
        break;
    case actionTypes.SAVE_CHANGESEDITUSER:
        AppData.saveChangesEditUser(action);
        break;
    case actionTypes.GET_MYACCOUNT:
        AppData.getMyAccount(action);
        break; 
    case actionTypes.EDIT_MYACCOUNTDATA:
        AppData.editMyAccountData(action);
        break; 
    case actionTypes.SAVE_CHANGESEDITMYACCOUNT:
        AppData.saveChangesEditMyAccount(action);
        break; 
    case actionTypes.GET_PARAMETERSRANGE:
        AppData.getParametersRange(action);
        break; 
    default:

		// no op
    }
});

module.exports = AppStore;