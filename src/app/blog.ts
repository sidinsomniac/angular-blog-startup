export interface IBlog {
	id: number,
	url: string,
	created: string,
	lastModified: string,
	tags: string[],
	author: string,
	category: string,
	views: number,
	title: string,
	description: string
}