import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./tutorials', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'tutorials',
    component: Router,
    meta: {
        breadcrumb: 'tutorials',
        route: 'system.tutorials.index',
    },
    children: routes,
};
