<template>
    <v-col cols="auto">
        <v-navigation-drawer permanent :elevation="2">
            <v-divider></v-divider>
            <v-list nav dense>
                <v-list-item>
                    <NuxtLink to="/editor">
                        <v-icon class="mr-3" color="accent" small>mdi-pencil-ruler</v-icon>
                        Editor
                    </NuxtLink>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-col>
</template>