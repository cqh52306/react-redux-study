import {List, Map} from 'immutable';

let initInside = Map({
    publicDataDic: {}
});

export default function inside(state = initInside, action = {}) {
    switch (action.type) {
        case 'RELOAD_PUBLIC_DATA_DIC' :
            return state.set("publicDataDic", action.publicDataDic);
        default :
            return state
    }
}