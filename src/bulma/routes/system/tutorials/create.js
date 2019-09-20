const TutorialCreate = () => import('../../../pages/tutorials/Create.vue');

export default {
    name: 'system.tutorials.create',
    path: 'create',
    component: TutorialCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Tutorial',
    },
};
