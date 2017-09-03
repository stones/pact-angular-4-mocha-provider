var gulp = require('gulp');
var connect = require('gulp-connect-php');

gulp.task('connect', function() {
    var options = {
        port: 2222,
        base: 'public',
        open: true,
    };
    connect.server(options);
});

gulp.task('default', ['connect']);
