'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');

gulp.task('ts', ()=>{
	return gulp.src('front/src/*.ts')
		.pipe(ts({

		}))
		.pipe(gulp.dest('front/dist/'));
})

gulp.task('watch', ()=> {
	gulp.watch('front/src/*.ts', ['ts']);
})

gulp.task('default', ['ts','watch'])