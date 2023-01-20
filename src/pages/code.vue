<template>
    <div class="code-editor">
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <NuxtLayout :name="layout">
                            <NuxtPage></NuxtPage>
                        </NuxtLayout>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script setup>
const num = ref(0)
const text = ref('')
function log() {
    return this.store
}
function getTodo() {
    return $store
}
computed(() => {
    console.log(getTodo())
})
const layout = 'editorLayout'


</script>
