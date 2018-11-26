/* eslint-disable prefer-destructuring */
import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import browserSync from 'browser-sync';
import del from 'del';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';
import sourceMaps from 'gulp-sourcemaps';

const sync = browserSync.create();
const reload = sync.reload;
const config = {
  paths: {
    src: {
      html: './src/**/*.html',
      img: './src/img/**.*',
      sass: ['./src/sass/app.scss'],
      js: [
        './src/js/app.js'
      ]
    },
    dist: {
      main: './dist',
      css: './dist/css',
      js: './dist/js',
      img: './dist/img'
    }
  }
};

gulp.task('sass', () => gulp.src(config.paths.src.sass)
  .pipe(sourceMaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 5 versions']
  }))
  .pipe(clean({ rebaseTo: './css/' }))
  .pipe(sourceMaps.write())
  .pipe(gulp.dest(config.paths.dist.css))
  .pipe(sync.stream()));

gulp.task('js', () => {
  gulp.src(config.paths.src.js)
    .pipe(babel({ presets: ['env'] }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dist.js));

  reload();
});

gulp.task('static', () => {
  gulp.src(config.paths.src.html)
    .pipe(gulp.dest(config.paths.dist.main));

  reload();
});

gulp.task('image', () => {
  gulp.src(config.paths.src.img)
    .pipe(changed(config.paths.dist.img))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
          { removeViewBox: false },
          { removeUselessStrokeAndFill: false },
          { removeEmptyAttrs: false }
        ]
      })
    ], { verbose: true }))
    .pipe(gulp.dest(config.paths.dist.img));

  reload();
});

gulp.task('clean', () => del([config.paths.dist.main]));

gulp.task('build', ['clean'], () => {
  gulp.start('sass', 'js', 'static', 'image');
});

gulp.task('server', () => {
  sync.init({
    injectChanges: true,
    server: config.paths.dist.main
  });
});

gulp.task('watch', ['default'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/img/**/*.*', ['image']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/*.html', ['static']);
  gulp.start('server');
});

gulp.task('default', ['build']);
