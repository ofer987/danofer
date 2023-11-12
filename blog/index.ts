import { cwd, exit } from 'process';
import { readFile, readdir, mkdir, writeFile, copyFile, lstat } from 'fs/promises';
import { join } from 'path';
// import { titleCase } from 'title-case';
import { spawn } from 'node:child_process';
import { parse } from 'node-html-parser';
import { Converter } from 'hackmd-to-html-cli';
import { kebabCase } from 'lodash';

interface Blog {
	title: string;
	fileName: string;
}

const MARKDOWN_PAGES_DIRECTORY = `${process.cwd()}/markdown_pages`;
const HTML_PAGES_DIRECTORY = `${process.cwd()}/html_pages`;
const BLOG_ENTRIES = `${process.cwd()}/blogs.json`;
const TEMPLATE_DIRECTORY = join(cwd(), 'svelte_template');

const template = `<section class="main-section">{{main}}</section>`;
const hardBreak = true;
const converter = new Converter(template, hardBreak);

async function copyTemplateDirectory(
	templateDirectory: string,
	targetDirectory: string
): Promise<boolean> {
	const blogEntryDirectory = join(cwd(), targetDirectory);

	try {
		await mkdir(blogEntryDirectory, { recursive: true });
	} catch (error) {
		console.error(`Failed to create blog directory at ${blogEntryDirectory}`);

		return false;
	}

	const templateFiles = await readdir(templateDirectory);
	templateFiles.forEach(async (templateFile) => {
		const templatePath = join(templateDirectory, templateFile);
		const stat = await lstat(templatePath);

		if (stat.isFile()) {
			const blogEntryPath = join(blogEntryDirectory, templateFile);

			try {
				await copyFile(templatePath, blogEntryPath);
			} catch (error) {
				console.error(`Failed to copy ${templatePath} to ${blogEntryPath}`);
				console.error('Continuing');
			}
		} else if (stat.isDirectory()) {
			await copyTemplateDirectory(
				join(templateDirectory, templateFile),
				join(targetDirectory, templateFile)
			);
		}
	});

	return true;
}

async function getBlogEntries(path: string): Promise<Blog[]> {
	try {
		const contents = await readFile(path, { encoding: 'utf-8' });

		console.log(contents);
		return JSON.parse(contents) as Blog[];
	} catch (error) {
		console.error(`Failed to read ${path}`);

		exit(1);
	}
}

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
async function generateHtmlPage(markdownPath: string): Promise<string | null> {
	// console.log(MARKDOWN_PAGES_DIRECTORY);
	console.log(markdownPath);

	try {
		const markdownContent = await readFile(markdownPath, { encoding: 'utf-8' });
		const htmlContent = converter.convert(markdownContent);

		return htmlContent;

		// const htmlPath = path.replace('.md', '.html');
		// console.log(htmlPath);
		// await writeFile(htmlPath, htmlContent);
	} catch (error) {
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

async function appendHTMLtoMainSection(html: string, sveltePath: string): Promise<string> {
	const selector = 'section.main-section';

	let svelteContent: string;
	svelteContent = await readFile(sveltePath, { encoding: 'utf-8' });

	const content = parse(svelteContent);
	const mainSection = content.querySelector(selector);

	if (!mainSection) {
		throw `Could not find '${selector}' in ${sveltePath}`;
	}

	const blogHTML = parse(html);
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

async function main(): Promise<boolean> {
	const blogEntries = await getBlogEntries(BLOG_ENTRIES);
	// const htmlPages = await readdir(MARKDOWN_PAGES_DIRECTORY);

	console.log(`Parsing blog entries from ${BLOG_ENTRIES}`);
	blogEntries.forEach(async (blog) => {
		// console.log(`1: ${path}`);
		const pagePath = join(MARKDOWN_PAGES_DIRECTORY, `${blog.fileName}.md`);
		console.log(pagePath);

		const html = await generateHtmlPage(pagePath);
		if (!html) {
			console.error(`Failed to generate HTML for ${pagePath}`);
			console.error('Moving to next blog entry');

			return;
		}

		const blogDirectory = join('results', kebabCase(blog.fileName));

		copyTemplateDirectory(TEMPLATE_DIRECTORY, blogDirectory);

		const sveltePath = join(blogDirectory, '+page.svelte');
		try {
			const svelteContent = await appendHTMLtoMainSection(html, sveltePath);
			await writeFile(sveltePath, svelteContent);
		} catch (error) {
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
