export function getImagePath (hash: string): string {
	return `http://img.dev.santehelect.com/gallery/${hash[0]}/${hash[0]}${hash[1]}/${hash}`;
}