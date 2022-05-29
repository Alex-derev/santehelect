export function getImagePath (hash: string): string {
	return `${process.env.IMAGE_HOST}/gallery/${hash[0]}/${hash[0]}${hash[1]}/${hash}`;
}