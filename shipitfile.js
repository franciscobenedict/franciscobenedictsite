module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
    shipit.initConfig({
        default: {
            workspace: './deploy',
            deployTo: 'franciscobenedict.com/',
            repositoryUrl: 'https://github.com/franciscobenedict/franciscobenedictsite.git',
            ignores: [
                '.git', 
                'node_modules',
                '.gitignore',
                'README.md',
                'gulpfile.js',
                'karma.conf.js',
                'package.json',
                'sass',
                'tests'
            ],
            rsync: ['--del'],
            keepReleases: 2,
            deleteOnRollback: false,
            key: '/Users/franciscobenedict/.ssh/github_rsa.pub',
            shallowClone: true
        },
        staging: {
            servers: 'franciscobenedict@culpeper.dreamhost.com'
        }
    });
};