<template>
    <div class="editor">
        <v-main>
            <v-container>
                <v-row>
                </v-row>
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
const layout = "editorlayout"
</script>