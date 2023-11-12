"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const node_html_parser_1 = require("node-html-parser");
const hackmd_to_html_cli_1 = require("hackmd-to-html-cli");
const lodash_1 = require("lodash");
const MARKDOWN_PAGES_DIRECTORY = `${process.cwd()}/markdown_pages`;
const HTML_PAGES_DIRECTORY = `${process.cwd()}/html_pages`;
const BLOG_ENTRIES = `${process.cwd()}/blogs.json`;
const TEMPLATE_DIRECTORY = (0, path_1.join)((0, process_1.cwd)(), 'svelte_template');
const template = `<section class="main-section">{{main}}</section>`;
const hardBreak = true;
const converter = new hackmd_to_html_cli_1.Converter(template, hardBreak);
async function copyTemplateDirectory(templateDirectory, targetDirectory) {
    const blogEntryDirectory = (0, path_1.join)((0, process_1.cwd)(), targetDirectory);
    try {
        await (0, promises_1.mkdir)(blogEntryDirectory, { recursive: true });
    }
    catch (error) {
        console.error(`Failed to create blog directory at ${blogEntryDirectory}`);
        return false;
    }
    const templateFiles = await (0, promises_1.readdir)(templateDirectory);
    templateFiles.forEach(async (templateFile) => {
        const templatePath = (0, path_1.join)(templateDirectory, templateFile);
        const stat = await (0, promises_1.lstat)(templatePath);
        if (stat.isFile()) {
            const blogEntryPath = (0, path_1.join)(blogEntryDirectory, templateFile);
            try {
                await (0, promises_1.copyFile)(templatePath, blogEntryPath);
            }
            catch (error) {
                console.error(`Failed to copy ${templatePath} to ${blogEntryPath}`);
                console.error('Continuing');
            }
        }
        else if (stat.isDirectory()) {
            await copyTemplateDirectory((0, path_1.join)(templateDirectory, templateFile), (0, path_1.join)(targetDirectory, templateFile));
        }
    });
    return true;
}
async function getBlogEntries(path) {
    try {
        const contents = await (0, promises_1.readFile)(path, { encoding: 'utf-8' });
        console.log(contents);
        return JSON.parse(contents);
    }
    catch (error) {
        console.error(`Failed to read ${path}`);
        (0, process_1.exit)(1);
    }
}
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
async function generateHtmlPage(markdownPath) {
    // console.log(MARKDOWN_PAGES_DIRECTORY);
    console.log(markdownPath);
    try {
        const markdownContent = await (0, promises_1.readFile)(markdownPath, { encoding: 'utf-8' });
        const htmlContent = converter.convert(markdownContent);
        return htmlContent;
        // const htmlPath = path.replace('.md', '.html');
        // console.log(htmlPath);
        // await writeFile(htmlPath, htmlContent);
    }
    catch (error) {
        console.error(`Failed to convert Markdown ${markdownPath}`);
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
async function appendHTMLtoMainSection(html, sveltePath) {
    const selector = 'section.main-section';
    let svelteContent;
    svelteContent = await (0, promises_1.readFile)(sveltePath, { encoding: 'utf-8' });
    const content = (0, node_html_parser_1.parse)(svelteContent);
    const mainSection = content.querySelector(selector);
    if (!mainSection) {
        throw `Could not find '${selector}' in ${sveltePath}`;
    }
    const blogHTML = (0, node_html_parser_1.parse)(html);
    content.exchangeChild(mainSection, blogHTML);
    console.log(content.toString());
    return content.toString();
}
// async function getBlogs(directory: string, htmlFile: string): Promise<Blog | null> {
// 	const path = join(directory, htmlFile);
//
// 	try {
// 		const content = await readFile(path, { encoding: 'utf-8' });
// 		const blogContent = getMainSection(content);
// 		const title = htmlFile;
// 		// const title = titleCase(htmlFile);
//
// 		return {
// 			title: title,
//       fileName:
// 		};
// 	} catch (error) {
// 		console.error(`Failed to read ${path}`);
// 		console.error(error);
// 		console.error('Continuing to next file');
//
// 		return null;
// 	}
// }
async function main() {
    const blogEntries = await getBlogEntries(BLOG_ENTRIES);
    // const htmlPages = await readdir(MARKDOWN_PAGES_DIRECTORY);
    console.log(`Parsing blog entries from ${BLOG_ENTRIES}`);
    blogEntries.forEach(async (blog) => {
        // console.log(`1: ${path}`);
        const pagePath = (0, path_1.join)(MARKDOWN_PAGES_DIRECTORY, `${blog.fileName}.md`);
        console.log(pagePath);
        const html = await generateHtmlPage(pagePath);
        if (!html) {
            console.error(`Failed to generate HTML for ${pagePath}`);
            console.error('Moving to next blog entry');
            return;
        }
        const blogDirectory = (0, path_1.join)('results', (0, lodash_1.kebabCase)(blog.fileName));
        copyTemplateDirectory(TEMPLATE_DIRECTORY, blogDirectory);
        const sveltePath = (0, path_1.join)(blogDirectory, '+page.svelte');
        try {
            const svelteContent = await appendHTMLtoMainSection(html, sveltePath);
            await (0, promises_1.writeFile)(sveltePath, svelteContent);
        }
        catch (error) {
            console.error(`Error writing Svelte page at ${sveltePath}`);
            console.error('Continuing to next file');
        }
        // console.log(html);
        // await saveHtmlFile(HTML_PAGES_DIRECTORY, `${blog.fileName}.html`, html);
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
