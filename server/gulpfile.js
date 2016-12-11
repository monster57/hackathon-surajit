var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
 
gulp.task('watch', function (cb) {
        // gulp.src(['root.js','app/components/**/*.js']),
        // uglify(),
        // gulp.dest('build/build.js')
        return gulp.watch(['./app/root.js','./app/components/**/*.js'] , ['build'])
        
});


gulp.task('build', function (cb) {
        return gulp.src(['./app/root.js','app/components/**/*.js'])
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/'))
        
});