<template>
    <div id="editor" ref="editorRef"></div>
</template>

<script lang="ts" setup>
import type { Monaco } from '@monaco-editor/loader'
import * as monacoCore from 'monaco-editor-core'
import * as monacoVolar from 'monaco-volar'
import * as onigasm from "onigasm";
import { editor } from "monaco-editor-core";
// import { loadGrammars, loadTheme } from "monaco-volar"
import { prepareVirtualFiles } from "monaco-volar";
// @ts-ignore
import onigasmWasm from "onigasm/lib/onigasm.wasm?url";
// @ts-ignore
import editorWorker from "monaco-editor-core/esm/vs/editor/editor.worker?worker";
// @ts-ignore
import vueWorker from "monaco-volar/vue.worker?worker";

// const theme = loadTheme()
const editorRef = ref()
const monaco = ref<Monaco>()
const code = ref("const foo = 'bar'")



function loadOnigasm() {
    return onigasm.loadWASM(onigasmWasm);
}
function loadMonacoEnv() {
    (self as any).MonacoEnvironment = {
        async getWorker(_: any, label: string) {
            if (label === "vue") {
                return new vueWorker();
            }
            return new editorWorker();
        },
    };
}

onMounted(async () => {
    const loader = await import('@monaco-editor/loader').then(m => m?.default)

    loadMonacoEnv()


    monaco.value = await loader.init()

    const editorInstance = monaco.value.editor.create(editorRef.value, {
        value: code.value,
        language: 'typescript',
        theme: 'vs-dark',
        wordWrap: 'on',
    })
    console.log(new editorWorker())
    // function loadMonacoEnv() {
    //     (self as any).MonacoEnvironment = {
    //         async getWorker(_: any, label: string) {
    //             if (label === "vue") {
    //                 return new vueWorker();
    //             }
    //             return new editorWorker();
    //         },
    //     };
    // }
    // loadOnigasm()
    // loadMonacoEnv()
    // prepareVirtualFiles();
    // const model = monaco.value.editor.createModel(code.value, 'vue');
    // console.log(model)

})
</script>

<style>
#editor {
    height: calc(100vh - 64px);
}
</style>