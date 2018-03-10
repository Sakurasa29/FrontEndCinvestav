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
        sensorTypes: null
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
            console.log(info)
            AppStore.emitChange();
        }).fail(function(error) {
            console.error(error);
        });
    }
}

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
    default:
		// no op
    }
});

module.exports = AppStore;