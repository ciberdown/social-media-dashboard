const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("src/styles/sass/index.scss")
    .pipe(sass())
    .pipe(dest("src/dist/css"));
}

function watchTask() {
  watch(["src/styles/sass/*"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
