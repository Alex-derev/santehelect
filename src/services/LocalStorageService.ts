class LocalStorageService {
    public checkServicePages (value: any) {
        
    }

    public get (key: string) {
        return JSON.parse(localStorage.getItem(key) ?? '{}');
    }

}

export default new LocalStorageService();