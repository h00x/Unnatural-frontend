(function () {
    // Change these if you use something different in your hook.
    var storageKey = 'theme';
    var classNameDark = 'dark';
    var classNameLight = 'light';

    function setClassOnDocumentBody(mode) {
        document.documentElement.classList.add(mode === classNameDark ? classNameDark : classNameLight);
        document.documentElement.classList.remove(mode === classNameDark ? classNameLight : classNameDark);
    }

    var preferDarkQuery = '(prefers-color-scheme: dark)';
    var mql = window.matchMedia(preferDarkQuery);
    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
    var localStorageTheme = null;

    try {
        localStorageTheme = localStorage.getItem(storageKey);
    } catch (err) {}

    var localStorageExists = localStorageTheme !== null;

    // Determine the source of truth
    if (localStorageExists) {
        // source of truth from localStorage
        setClassOnDocumentBody(localStorageTheme);
    } else if (supportsColorSchemeQuery) {
        // source of truth from system
        setClassOnDocumentBody(mql.matches ? classNameDark : classNameLight);
        localStorage.setItem(storageKey, mql.matches ? classNameDark : classNameLight);
    } else {
        // source of truth from document.html
        var isDarkMode = document.documentElement.classList.contains(classNameDark);
        localStorage.setItem(storageKey, isDarkMode ? classNameDark : classNameLight);
    }
})();
