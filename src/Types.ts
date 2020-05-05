export interface Page {
    waitForSelector: (arg0: string) => any;
    evaluate: (arg0: (el: { innerHTML: string; }) => string, arg1: any) => string | PromiseLike<string>;
    $: (arg0: string) => any;
}

