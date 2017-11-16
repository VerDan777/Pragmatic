const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('Pages', ()=> {
    return gulp.src('./src/dist/**/*')
    .pipe(ghPages())
});