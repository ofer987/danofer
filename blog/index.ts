import { cwd, exit } from 'process';
import { readFile, readdir, writeFile } from 'fs/promises';
import { join } from 'path';
// import { titleCase } from 'title-case';
import { spawn } from 'node:child_process';
import { parse } from 'node-html-parser';
import { Converter } from 'hackmd-to-html-cli';

interface BlogPage {
	title: string;
	content: string;
}

const MARKDOWN_PAGES_DIRECTORY = `${process.cwd()}/markdown_pages`;
const HTML_PAGES_DIRECTORY = `${process.cwd()}/html_pages`;

const template = `{{main}}`;
const hardBreak = true;
const converter = new Converter(template, hardBreak);

async function saveHtmlFile(
	directory: string,
	markdownPath: string,
	htmlContent: string
): Promise<boolean> {
	const path = markdownPath.replace('.md', '.html');
	const htmlPath = join(directory, path);

	try {
		// console.log(htmlPath);
		await writeFile(htmlPath, htmlContent);

		return true;
	} catch (error) {
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
async function generateHtmlPage(path: string): Promise<string | null> {
	// console.log(MARKDOWN_PAGES_DIRECTORY);
	console.log(path);

	try {
		const markdownContent = await readFile(path, { encoding: 'utf-8' });
		const htmlContent = converter.convert(markdownContent);

		return htmlContent;

		// const htmlPath = path.replace('.md', '.html');
		// console.log(htmlPath);
		// await writeFile(htmlPath, htmlContent);
	} catch (error) {
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

function getMainSection(html: string): string {
	const selector = 'body > main';
	const content = parse(html);
	const main = content.querySelector(selector);

	if (!main) {
		throw `Could not find '${selector}'`;
	}

	return main.toString();
}

async function getBlogs(directory: string, htmlFile: string): Promise<BlogPage | null> {
	const path = join(directory, htmlFile);

	try {
		const content = await readFile(path, { encoding: 'utf-8' });
		const blogContent = getMainSection(content);
		const title = htmlFile;
		// const title = titleCase(htmlFile);

		return {
			title: title,
			content: blogContent
		};
	} catch (error) {
		console.error(`Failed to read ${path}`);
		console.error(error);
		console.error('Continuing to next file');

		return null;
	}
}

async function main(): Promise<boolean> {
	const htmlPages = await readdir(MARKDOWN_PAGES_DIRECTORY);

	console.log(0);
	htmlPages.forEach(async (path) => {
		console.log(`1: ${path}`);
		const pagePath = join(MARKDOWN_PAGES_DIRECTORY, path);
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
