let tasks = [
    './gulp/tasks/pug.js',
    './gulp/tasks/styles.js',
    './gulp/tasks/gh-pages.js',
    './gulp/tasks/copy.js',
    './gulp/tasks/clean.js',
    './gulp/tasks/images-min.js',
    './gulp/tasks/build.js',
    './gulp/tasks/watch.js'
]

for(var i=0; i<tasks.length; i++) {
    require(tasks[i]);
}