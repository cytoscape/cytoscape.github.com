// Simplified version of platform checker.

$(function() {
    var BASE_URL = 'https://raw.githubusercontent.com/cytoscape/cytoscape-scripts/master/system-checker/';

    var is64 = true;

    var parser = new UAParser();
    console.log(parser.getOS());
    console.log(parser.getCPU());
    console.log(window.navigator.platform);
    console.log(window.navigator.cpuClass);

    if (navigator.userAgent.indexOf("WOW64") === -1 ||
        navigator.userAgent.indexOf("Win64") === -1) {
        is64 = false;
    }

    var osName = parser.getOS().name;
    var cpu = parser.getCPU();
    var architecture = null;
    if (cpu !== undefined) {
        architecture = cpu.architecture;
    }

    var fileName = undefined;
    var platform = undefined;

    if (osName.indexOf('Mac OS') !== -1) {
        platform = 'mac';
        fileName = 'mac.sh';
    } else if (osName.indexOf('Windows') !== -1 || cpu === 'amd64') {
        platform = 'windows';
        fileName = 'windows.bat';
    } else if (osName.indexOf('Linux') !== -1 || osName.indexOf('Ubuntu') !== -1) {
        platform = 'linux';
        fileName = 'linux.sh';
    } else {
        fileName = undefined;
    }

    if (fileName === undefined) {
    } else {
        var downloadLink = BASE_URL + fileName;
        var iconLink = 'images/logo/' + platform + '.svg';

        $('#script-download').attr('href', downloadLink);
        $('.platform h1').append('Download for ' + platform.charAt(0).toUpperCase() + platform.slice(1));
        $('#platform-icon').attr('src', iconLink);
    }
});