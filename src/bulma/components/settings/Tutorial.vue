<template>
    <div class="level is-mobile">
        <div class="level-left">
            <div class="level-item">
                {{ i18n('Tutorial') }}
            </div>
        </div>
        <div class="level-right">
            <div class="level-item">
                <core-tutorial>
                    <template #default="{ itemEvents }">
                        <a class="button is-naked"
                            v-on="itemEvents">
                            <span class="icon is-small">
                                <fa icon="question"/>
                            </span>
                        </a>
                    </template>
                </core-tutorial>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import CoreTutorial from '../../../core/components/settings/Tutorial.vue';

library.add(faQuestion);

export default {
    name: 'Tutorial',

    components: { CoreTutorial, Fa },

    inject: ['i18n'],
};
</script>

<style lang="scss">
    @import '~driver.ts/dist/driver.min.css';
</style>
