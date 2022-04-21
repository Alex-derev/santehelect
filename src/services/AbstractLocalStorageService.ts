interface LocalStorageServiceInterface {
    get:    (key: string) => object
    set:    (key: string, value: object) => void
    has:    (key: string) => void
    remove: (key: string) => void
    clear:  () => void
}

class AbstractLocalStorageService implements LocalStorageServiceInterface {
    public get(key: string): object {
        return JSON.parse(localStorage.getItem(key) ?? '{}');
    }

    public set(key: string, value: object): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public has(key: string): boolean {
        return !!localStorage.getItem(key);
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}

export default AbstractLocalStorageService;