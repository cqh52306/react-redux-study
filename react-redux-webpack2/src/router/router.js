import React from 'react';


//router
const rootRouter = {
    childRoutes: [{
        path: '/',
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../containers/InsideContainer'));
            })
        },
        childRoutes: [
            {//表单
                path: 'sign',
                getComponent(nextState, cb) {
                    require.ensure([], (require) => {
                        cb(null, require('../containers/SignContainer'));
                    })
                }
            }
        ]
    }]
};

export default rootRouter;