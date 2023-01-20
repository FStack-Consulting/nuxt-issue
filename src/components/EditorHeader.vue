<template>
    <v-app-bar class="editor-header" :elevation="2" color="primary">
        <div class="d-flex justify-space-around align-center fill-height">
            <v-btn size="large">
                <v-icon size="large">mdi-eye</v-icon>
            </v-btn>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex justify-space-around align-center fill-height">

            <v-btn size="large">
                <v-icon size="large">mdi-export-variant</v-icon>
            </v-btn>
            <v-btn size="large">
                <v-icon size="large">mdi-monitor-multiple</v-icon>
            </v-btn>
            <v-btn size="large">
                <v-icon size="large">mdi-import</v-icon>
            </v-btn>
            <v-btn size="large" color="accent">
                Publish
                <v-icon class="ml-3" size="large">mdi-publish</v-icon>
            </v-btn>
        </div>

        <!-- <v-spacer></v-spacer> -->
    </v-app-bar>
</template>

<script>

export default {
    name: 'EditorHeader'
}

</script>
