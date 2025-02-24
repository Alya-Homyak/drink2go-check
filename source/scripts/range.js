import "../vendor/nouislider/nouislider"
let rangeSlider = document.getElementById('range');
const minValue = document.getElementById('min-price');
const maxValue = document.getElementById('max-price');
const inputs = [minValue, maxValue];


  noUiSlider.create(rangeSlider, {
    range: {
      'min': [0],
      'max': [1000]
    },
    start: [0, 900],
    step: 5,
    connect: true,
    cssPrefix: 'noui-'
  });

  function setHandlesSlider() {
    rangeSlider.noUiSlider.updateOptions({
      start: [inputs[0].value, inputs[1].value]
    });
  };

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
    inputs[handle].value = Math.round(values[handle]);
});

  maxValue.addEventListener("change", setHandlesSlider);
  minValue.addEventListener("change", setHandlesSlider)
