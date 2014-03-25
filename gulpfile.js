var gulp = require('gulp')
  , sass = require('gulp-sass')
  , notify = require('gulp-notify')
  ;


// gulp-sass (node-sass)
gulp.task('sass', function () {
    gulp.src('assets/scss/uno.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({message: "Sass files changed and compiled."}))
        ;
});


gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('assets/**/*.scss', ['sass']);


});
