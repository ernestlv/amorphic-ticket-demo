function _window() : any {
    // return the global native browser window object
    return window;
}

export class WindowService {
    get nativeWindow() : any {
        return _window();
    }
}