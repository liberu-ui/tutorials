import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./tutorials', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'tutorials',
    component: Router,
    meta: {
        breadcrumb: 'tutorials',
        route: 'system.tutorials.index',
    },
    children: routes,
};
