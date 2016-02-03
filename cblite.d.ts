interface CordovaCouchbaseLite {
    getUrl(callback: (err: Error, url: string) => void): void
}

interface Window {
    cblite?: CordovaCouchbaseLite
}
