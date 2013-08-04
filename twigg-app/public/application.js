Twigg = {};
Twigg.Profile = (function() {
  var loadCommitsPerDay = function(selector, data) {
    var chart = nv.models.multiBarChart()
      .stacked(true)
      .showControls(false);
    chart.yAxis.tickFormat(d3.format(',d'));
    d3.select(selector)
      .datum([ { key: 'commits', values: data } ])
      .transition()
      .duration(500)
      .call(chart);
    nv.utils.windowResize(chart.update);
  };

  return {
    loadCommitsPerDay: loadCommitsPerDay
  };
})();

// for bootstrap:
$(document).initializeEach('[data-toggle=tooltip]', function() {
  $(this).tooltip();
});

$(document).initializeEach('[data-toggle=popover]', function() {
  $(this).popover({ html: true });
});
