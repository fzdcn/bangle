// 单独处理 app.js 下的 debug 内容
fis.media('production').match('tools.js', {
    parser: fis.plugin('jdists', {
        remove: "debug"
    })
});
//发布的时候忽略以下目录或文件
fis.set('project.ignore', [
    'node_modules/**',
    'components/**',
    '.git/**',
    'package.json',
    'README.md',
    'script/**',
    'fis-conf.js'
]);