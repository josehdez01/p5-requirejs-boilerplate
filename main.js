require.config({
    paths: {
        json: 'js/require/json',
        text: 'js/require/text'
    }
});


define([
    "js/p5/p5.min",
    "js/sketch/main"
],
function (
    p5,
    {sketch}
) {
    const gameInstance = new p5(sketch, "canvas");
});
