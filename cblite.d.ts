interface CordovaCouchbaseLite {
    getURL(callback: (err: Error, url: string) => void): void
}

interface Window {
    cblite?: CordovaCouchbaseLite
}
