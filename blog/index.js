"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const path_1 = require("path");
const node_html_parser_1 = require("node-html-parser");
const hackmd_to_html_cli_1 = require("hackmd-to-html-cli");
const MARKDOWN_PAGES_DIRECTORY = `${process.cwd()}/markdown_pages`;
const HTML_PAGES_DIRECTORY = `${process.cwd()}/html_pages`;
const template = `{{main}}`;
const hardBreak = true;
const converter = new hackmd_to_html_cli_1.Converter(template, hardBreak);
async function saveHtmlFile(directory, markdownPath, htmlContent) {
    const path = markdownPath.replace('.md', '.html');
    const htmlPath = (0, path_1.join)(directory, path);
    try {
        // console.log(htmlPath);
        await (0, promises_1.writeFile)(htmlPath, htmlContent);
        return true;
    }
    catch (error) {
        console.error(`Failed to save HTML file ${htmlPath}`);
        console.error(error);
        console.error('Continuing to next file');
        return false;
    }
    // const md2html = spawn('yarn', [
    // 	'run',
    // 	'hmd2html',
    // 	`--src '${MARKDOWN_PAGES_DIRECTORY}'`,
    // 	`--dest '${path}'`
    // ]);
    //
    // md2html.stdout.pipe(process.stdout);
    // md2html.on('exit', () => {
    // 	console.log('finished');
    // 	exit();
    // });
}
async function generateHtmlPage(path) {
    // console.log(MARKDOWN_PAGES_DIRECTORY);
    console.log(path);
    try {
        const markdownContent = await (0, promises_1.readFile)(path, { encoding: 'utf-8' });
        const htmlContent = converter.convert(markdownContent);
        return htmlContent;
        // const htmlPath = path.replace('.md', '.html');
        // console.log(htmlPath);
        // await writeFile(htmlPath, htmlContent);
    }
    catch (error) {
        console.error(`Failed to convert Markdown ${path}`);
        console.error(error);
        console.error('Continuing to next file');
        return null;
    }
    // const md2html = spawn('yarn', [
    // 	'run',
    // 	'hmd2html',
    // 	`--src '${MARKDOWN_PAGES_DIRECTORY}'`,
    // 	`--dest '${path}'`
    // ]);
    //
    // md2html.stdout.pipe(process.stdout);
    // md2html.on('exit', () => {
    // 	console.log('finished');
    // 	exit();
    // });
}
function getMainSection(html) {
    const selector = 'body > main';
    const content = (0, node_html_parser_1.parse)(html);
    const main = content.querySelector(selector);
    if (!main) {
        throw `Could not find '${selector}'`;
    }
    return main.toString();
}
async function getBlogs(directory, htmlFile) {
    const path = (0, path_1.join)(directory, htmlFile);
    try {
        const content = await (0, promises_1.readFile)(path, { encoding: 'utf-8' });
        const blogContent = getMainSection(content);
        const title = htmlFile;
        // const title = titleCase(htmlFile);
        return {
            title: title,
            content: blogContent
        };
    }
    catch (error) {
        console.error(`Failed to read ${path}`);
        console.error(error);
        console.error('Continuing to next file');
        return null;
    }
}
async function main() {
    const htmlPages = await (0, promises_1.readdir)(MARKDOWN_PAGES_DIRECTORY);
    console.log(0);
    htmlPages.forEach(async (path) => {
        console.log(`1: ${path}`);
        const pagePath = (0, path_1.join)(MARKDOWN_PAGES_DIRECTORY, path);
        console.log(pagePath);
        const html = await generateHtmlPage(`${pagePath}`);
        if (!html) {
            return;
        }
        console.log(html);
        await saveHtmlFile(HTML_PAGES_DIRECTORY, path, html);
    });
    // const htmlPages = await readdir(HTML_PAGES_DIRECTORY);
    //
    // htmlPages.forEach(async (page) => {
    // 	const section = await getBlogs(HTML_PAGES_DIRECTORY, page);
    //
    // 	console.log(section?.title.replace('.html', ''));
    // 	console.log(section?.content);
    // });
    return true;
}
(async function () {
    await main();
})();
